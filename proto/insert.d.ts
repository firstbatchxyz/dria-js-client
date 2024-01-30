import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace insert_buffer. */
export namespace insert_buffer {

    /** Properties of a MetadataValue. */
    interface IMetadataValue {

        /** MetadataValue floatValue */
        floatValue?: (number|null);

        /** MetadataValue intValue */
        intValue?: (number|Long|null);

        /** MetadataValue stringValue */
        stringValue?: (string|null);

        /** MetadataValue boolValue */
        boolValue?: (boolean|null);
    }

    /** Represents a MetadataValue. */
    class MetadataValue implements IMetadataValue {

        /**
         * Constructs a new MetadataValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: insert_buffer.IMetadataValue);

        /** MetadataValue floatValue. */
        public floatValue?: (number|null);

        /** MetadataValue intValue. */
        public intValue?: (number|Long|null);

        /** MetadataValue stringValue. */
        public stringValue?: (string|null);

        /** MetadataValue boolValue. */
        public boolValue?: (boolean|null);

        /** MetadataValue valueType. */
        public valueType?: ("floatValue"|"intValue"|"stringValue"|"boolValue");

        /**
         * Creates a new MetadataValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MetadataValue instance
         */
        public static create(properties?: insert_buffer.IMetadataValue): insert_buffer.MetadataValue;

        /**
         * Encodes the specified MetadataValue message. Does not implicitly {@link insert_buffer.MetadataValue.verify|verify} messages.
         * @param message MetadataValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: insert_buffer.IMetadataValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MetadataValue message, length delimited. Does not implicitly {@link insert_buffer.MetadataValue.verify|verify} messages.
         * @param message MetadataValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: insert_buffer.IMetadataValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MetadataValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MetadataValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): insert_buffer.MetadataValue;

        /**
         * Decodes a MetadataValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MetadataValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): insert_buffer.MetadataValue;

        /**
         * Verifies a MetadataValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MetadataValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MetadataValue
         */
        public static fromObject(object: { [k: string]: any }): insert_buffer.MetadataValue;

        /**
         * Creates a plain object from a MetadataValue message. Also converts values to other types if specified.
         * @param message MetadataValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: insert_buffer.MetadataValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MetadataValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MetadataValue
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SingletonVec. */
    interface ISingletonVec {

        /** SingletonVec v */
        v?: (number[]|null);

        /** SingletonVec map */
        map?: ({ [k: string]: insert_buffer.IMetadataValue }|null);
    }

    /** Represents a SingletonVec. */
    class SingletonVec implements ISingletonVec {

        /**
         * Constructs a new SingletonVec.
         * @param [properties] Properties to set
         */
        constructor(properties?: insert_buffer.ISingletonVec);

        /** SingletonVec v. */
        public v: number[];

        /** SingletonVec map. */
        public map: { [k: string]: insert_buffer.IMetadataValue };

        /**
         * Creates a new SingletonVec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SingletonVec instance
         */
        public static create(properties?: insert_buffer.ISingletonVec): insert_buffer.SingletonVec;

        /**
         * Encodes the specified SingletonVec message. Does not implicitly {@link insert_buffer.SingletonVec.verify|verify} messages.
         * @param message SingletonVec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: insert_buffer.ISingletonVec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SingletonVec message, length delimited. Does not implicitly {@link insert_buffer.SingletonVec.verify|verify} messages.
         * @param message SingletonVec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: insert_buffer.ISingletonVec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SingletonVec message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SingletonVec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): insert_buffer.SingletonVec;

        /**
         * Decodes a SingletonVec message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SingletonVec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): insert_buffer.SingletonVec;

        /**
         * Verifies a SingletonVec message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SingletonVec message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SingletonVec
         */
        public static fromObject(object: { [k: string]: any }): insert_buffer.SingletonVec;

        /**
         * Creates a plain object from a SingletonVec message. Also converts values to other types if specified.
         * @param message SingletonVec
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: insert_buffer.SingletonVec, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SingletonVec to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SingletonVec
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BatchVec. */
    interface IBatchVec {

        /** BatchVec s */
        s?: (insert_buffer.ISingletonVec[]|null);
    }

    /** Represents a BatchVec. */
    class BatchVec implements IBatchVec {

        /**
         * Constructs a new BatchVec.
         * @param [properties] Properties to set
         */
        constructor(properties?: insert_buffer.IBatchVec);

        /** BatchVec s. */
        public s: insert_buffer.ISingletonVec[];

        /**
         * Creates a new BatchVec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BatchVec instance
         */
        public static create(properties?: insert_buffer.IBatchVec): insert_buffer.BatchVec;

        /**
         * Encodes the specified BatchVec message. Does not implicitly {@link insert_buffer.BatchVec.verify|verify} messages.
         * @param message BatchVec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: insert_buffer.IBatchVec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BatchVec message, length delimited. Does not implicitly {@link insert_buffer.BatchVec.verify|verify} messages.
         * @param message BatchVec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: insert_buffer.IBatchVec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchVec message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BatchVec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): insert_buffer.BatchVec;

        /**
         * Decodes a BatchVec message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BatchVec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): insert_buffer.BatchVec;

        /**
         * Verifies a BatchVec message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BatchVec message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BatchVec
         */
        public static fromObject(object: { [k: string]: any }): insert_buffer.BatchVec;

        /**
         * Creates a plain object from a BatchVec message. Also converts values to other types if specified.
         * @param message BatchVec
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: insert_buffer.BatchVec, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BatchVec to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BatchVec
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SingletonStr. */
    interface ISingletonStr {

        /** SingletonStr v */
        v?: (string|null);

        /** SingletonStr map */
        map?: ({ [k: string]: insert_buffer.IMetadataValue }|null);
    }

    /** Represents a SingletonStr. */
    class SingletonStr implements ISingletonStr {

        /**
         * Constructs a new SingletonStr.
         * @param [properties] Properties to set
         */
        constructor(properties?: insert_buffer.ISingletonStr);

        /** SingletonStr v. */
        public v: string;

        /** SingletonStr map. */
        public map: { [k: string]: insert_buffer.IMetadataValue };

        /**
         * Creates a new SingletonStr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SingletonStr instance
         */
        public static create(properties?: insert_buffer.ISingletonStr): insert_buffer.SingletonStr;

        /**
         * Encodes the specified SingletonStr message. Does not implicitly {@link insert_buffer.SingletonStr.verify|verify} messages.
         * @param message SingletonStr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: insert_buffer.ISingletonStr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SingletonStr message, length delimited. Does not implicitly {@link insert_buffer.SingletonStr.verify|verify} messages.
         * @param message SingletonStr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: insert_buffer.ISingletonStr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SingletonStr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SingletonStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): insert_buffer.SingletonStr;

        /**
         * Decodes a SingletonStr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SingletonStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): insert_buffer.SingletonStr;

        /**
         * Verifies a SingletonStr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SingletonStr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SingletonStr
         */
        public static fromObject(object: { [k: string]: any }): insert_buffer.SingletonStr;

        /**
         * Creates a plain object from a SingletonStr message. Also converts values to other types if specified.
         * @param message SingletonStr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: insert_buffer.SingletonStr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SingletonStr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SingletonStr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BatchStr. */
    interface IBatchStr {

        /** BatchStr s */
        s?: (insert_buffer.ISingletonStr[]|null);
    }

    /** Represents a BatchStr. */
    class BatchStr implements IBatchStr {

        /**
         * Constructs a new BatchStr.
         * @param [properties] Properties to set
         */
        constructor(properties?: insert_buffer.IBatchStr);

        /** BatchStr s. */
        public s: insert_buffer.ISingletonStr[];

        /**
         * Creates a new BatchStr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BatchStr instance
         */
        public static create(properties?: insert_buffer.IBatchStr): insert_buffer.BatchStr;

        /**
         * Encodes the specified BatchStr message. Does not implicitly {@link insert_buffer.BatchStr.verify|verify} messages.
         * @param message BatchStr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: insert_buffer.IBatchStr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BatchStr message, length delimited. Does not implicitly {@link insert_buffer.BatchStr.verify|verify} messages.
         * @param message BatchStr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: insert_buffer.IBatchStr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BatchStr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BatchStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): insert_buffer.BatchStr;

        /**
         * Decodes a BatchStr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BatchStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): insert_buffer.BatchStr;

        /**
         * Verifies a BatchStr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BatchStr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BatchStr
         */
        public static fromObject(object: { [k: string]: any }): insert_buffer.BatchStr;

        /**
         * Creates a plain object from a BatchStr message. Also converts values to other types if specified.
         * @param message BatchStr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: insert_buffer.BatchStr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BatchStr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BatchStr
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
