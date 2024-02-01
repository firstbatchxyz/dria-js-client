import { insert_buffer } from "../../proto/insert";
import { BatchTexts, BatchVectors } from "../schemas";
import { mapToMetadata, metadataToMap } from "./metadata";

export function encodeBatchVectors(items: BatchVectors): string {
  // batchVector expects an array of Singleton vectors at a field `s`.
  const batchVector: insert_buffer.IBatchVec = {
    s: items.map((item) => {
      if (item.vector.length === 0) throw "Cant encode empty vector.";
      return {
        v: item.vector,
        map: metadataToMap(item.metadata),
      };
    }),
  };

  const enc = insert_buffer.BatchVec.encode(batchVector).finish();
  return Buffer.from(enc).toString("base64");
}

export function encodeBatchTexts(items: BatchTexts): string {
  // batchText expects an array of Singleton vectors at a field `s`.
  const batchText: insert_buffer.IBatchStr = {
    s: items.map((item) => {
      if (item.text === "") throw "Cant encode empty text.";
      return {
        v: item.text,
        map: metadataToMap(item.metadata),
      };
    }),
  };

  const enc = insert_buffer.BatchStr.encode(batchText).finish();
  return Buffer.from(enc).toString("base64");
}

export function decodeBatchVectors(data: string): BatchVectors {
  const dec = Buffer.from(data, "base64");
  const batchVector = insert_buffer.BatchVec.decode(dec);

  return batchVector.s.map((s) => {
    if (!s.v) throw "Expected a vector from decoded BatchVectors.";
    if (!s.map) throw "Expected a metadata from decoded BatchVectors.";
    return {
      vector: s.v!,
      metadata: mapToMetadata(s.map!),
    };
  });
}

export function decodeBatchTexts(data: string): BatchTexts {
  const dec = Buffer.from(data, "base64");
  const batchTexts = insert_buffer.BatchStr.decode(dec);

  return batchTexts.s.map((s) => {
    if (!s.v) throw "Expected a text from decoded BatchVectors.";
    if (!s.map) throw "Expected a metadata from decoded BatchVectors.";
    return {
      text: s.v!,
      metadata: mapToMetadata(s.map!),
    };
  });
}
