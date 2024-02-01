import type { insert_buffer } from "../../proto/insert";
import type { BatchTexts, BatchVectors } from "../schemas";
import Long from "long";

type AppLevelMetadata = BatchVectors[number]["metadata"] | BatchTexts[number]["metadata"];
type ProtoLevelMetadata = insert_buffer.SingletonVec["map"] | insert_buffer.SingletonStr["map"];

/** Converts the app-level metadata to proto-level metadata, referred to as `map`. */
export function metadataToMap(metadata: AppLevelMetadata): ProtoLevelMetadata {
  const map: ProtoLevelMetadata = {};

  for (const key in metadata) {
    const value = metadata[key];
    map[key] = {};
    switch (typeof value) {
      case "undefined":
        // ignore undefined
        break;
      case "number": {
        if (Number.isInteger(value)) {
          map[key].intValue = Long.fromNumber(value);
        } else {
          map[key].floatValue = value;
        }
        break;
      }
      case "boolean":
        map[key].boolValue = value;
        break;
      case "string":
        map[key].stringValue = value;
        break;
      default:
        throw "Unexpected metadata value type.";
    }
  }

  return map;
}

/** Converts the proto-level metadata to app-level metadata, referred to as `map`. */
export function mapToMetadata(map: ProtoLevelMetadata): AppLevelMetadata {
  const metadata: AppLevelMetadata = {};
  for (const key in map) {
    const value = map[key];
    if (value.intValue) {
      metadata[key] = Long.fromValue(value.intValue).toNumber();
    } else if (value.floatValue) {
      metadata[key] = value.floatValue;
    } else if (typeof value.boolValue === "boolean") {
      metadata[key] = value.boolValue;
    } else if (value.stringValue) {
      metadata[key] = value.stringValue;
    } else {
      metadata[key] = undefined;
    }
  }
  return metadata;
}
