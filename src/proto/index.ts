import { insert_buffer } from "../../proto/insert";
import { BatchTexts, BatchVectors } from "../schemas";

export function encodeBatchVectors(items: BatchVectors): string {
  return ""; // TODO: !
}

export function encodeBatchTexts(items: BatchTexts): string {
  return ""; // TODO: !
}

export function decodeBatchVectors(data: string): BatchVectors {
  return []; // TODO: !
}

export function decodeBatchTexts(data: string): BatchTexts {
  return []; // TODO: !
}

export function encodeBatchStr(items: insert_buffer.IBatchStr): string {
  const enc = insert_buffer.BatchStr.encode(items).finish();
  return Buffer.from(enc).toString("base64");
}
export function decodeBatchStr(data: string): insert_buffer.IBatchStr {
  const dec = Buffer.from(data, "base64");
  return insert_buffer.BatchStr.decode(dec);
}

export function encodeBatchVec(items: insert_buffer.IBatchVec): string {
  const enc = insert_buffer.BatchVec.encode(items).finish();
  return Buffer.from(enc).toString("base64");
}
export function decodeBatchVec(data: string): insert_buffer.IBatchVec {
  const dec = Buffer.from(data, "base64");
  return insert_buffer.BatchVec.decode(dec);
}

export function encodeSingletonStr(item: insert_buffer.ISingletonStr): string {
  const enc = insert_buffer.SingletonStr.encode(item).finish();
  return Buffer.from(enc).toString("base64");
}
export function decodeSingletonStr(data: string): insert_buffer.ISingletonStr {
  const dec = Buffer.from(data, "base64");
  return insert_buffer.SingletonStr.decode(dec);
}

export function encodeSingletonVec(item: insert_buffer.ISingletonVec): string {
  const enc = insert_buffer.SingletonVec.encode(item).finish();
  return Buffer.from(enc).toString("base64");
}
export function decodeSingletonVec(data: string): insert_buffer.ISingletonVec {
  const dec = Buffer.from(data, "base64");
  return insert_buffer.SingletonVec.decode(dec);
}

export function encodeMetadataValue(item: insert_buffer.IMetadataValue): string {
  const enc = insert_buffer.MetadataValue.encode(item).finish();
  return Buffer.from(enc).toString("base64");
}
export function decodeMetadataValue(data: string): insert_buffer.IMetadataValue {
  const dec = Buffer.from(data, "base64");
  return insert_buffer.MetadataValue.decode(dec);
}
