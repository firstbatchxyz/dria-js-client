/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.insert_buffer = (function() {

    /**
     * Namespace insert_buffer.
     * @exports insert_buffer
     * @namespace
     */
    var insert_buffer = {};

    insert_buffer.MetadataValue = (function() {

        /**
         * Properties of a MetadataValue.
         * @memberof insert_buffer
         * @interface IMetadataValue
         * @property {number|null} [floatValue] MetadataValue floatValue
         * @property {number|Long|null} [intValue] MetadataValue intValue
         * @property {string|null} [stringValue] MetadataValue stringValue
         * @property {boolean|null} [boolValue] MetadataValue boolValue
         */

        /**
         * Constructs a new MetadataValue.
         * @memberof insert_buffer
         * @classdesc Represents a MetadataValue.
         * @implements IMetadataValue
         * @constructor
         * @param {insert_buffer.IMetadataValue=} [properties] Properties to set
         */
        function MetadataValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MetadataValue floatValue.
         * @member {number|null|undefined} floatValue
         * @memberof insert_buffer.MetadataValue
         * @instance
         */
        MetadataValue.prototype.floatValue = null;

        /**
         * MetadataValue intValue.
         * @member {number|Long|null|undefined} intValue
         * @memberof insert_buffer.MetadataValue
         * @instance
         */
        MetadataValue.prototype.intValue = null;

        /**
         * MetadataValue stringValue.
         * @member {string|null|undefined} stringValue
         * @memberof insert_buffer.MetadataValue
         * @instance
         */
        MetadataValue.prototype.stringValue = null;

        /**
         * MetadataValue boolValue.
         * @member {boolean|null|undefined} boolValue
         * @memberof insert_buffer.MetadataValue
         * @instance
         */
        MetadataValue.prototype.boolValue = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * MetadataValue valueType.
         * @member {"floatValue"|"intValue"|"stringValue"|"boolValue"|undefined} valueType
         * @memberof insert_buffer.MetadataValue
         * @instance
         */
        Object.defineProperty(MetadataValue.prototype, "valueType", {
            get: $util.oneOfGetter($oneOfFields = ["floatValue", "intValue", "stringValue", "boolValue"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MetadataValue instance using the specified properties.
         * @function create
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {insert_buffer.IMetadataValue=} [properties] Properties to set
         * @returns {insert_buffer.MetadataValue} MetadataValue instance
         */
        MetadataValue.create = function create(properties) {
            return new MetadataValue(properties);
        };

        /**
         * Encodes the specified MetadataValue message. Does not implicitly {@link insert_buffer.MetadataValue.verify|verify} messages.
         * @function encode
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {insert_buffer.IMetadataValue} message MetadataValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MetadataValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.floatValue != null && Object.hasOwnProperty.call(message, "floatValue"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.floatValue);
            if (message.intValue != null && Object.hasOwnProperty.call(message, "intValue"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.intValue);
            if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
            if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
            return writer;
        };

        /**
         * Encodes the specified MetadataValue message, length delimited. Does not implicitly {@link insert_buffer.MetadataValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {insert_buffer.IMetadataValue} message MetadataValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MetadataValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MetadataValue message from the specified reader or buffer.
         * @function decode
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {insert_buffer.MetadataValue} MetadataValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MetadataValue.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.insert_buffer.MetadataValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.floatValue = reader.float();
                        break;
                    }
                case 2: {
                        message.intValue = reader.int64();
                        break;
                    }
                case 3: {
                        message.stringValue = reader.string();
                        break;
                    }
                case 4: {
                        message.boolValue = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MetadataValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {insert_buffer.MetadataValue} MetadataValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MetadataValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MetadataValue message.
         * @function verify
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MetadataValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                properties.valueType = 1;
                if (typeof message.floatValue !== "number")
                    return "floatValue: number expected";
            }
            if (message.intValue != null && message.hasOwnProperty("intValue")) {
                if (properties.valueType === 1)
                    return "valueType: multiple values";
                properties.valueType = 1;
                if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                    return "intValue: integer|Long expected";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                if (properties.valueType === 1)
                    return "valueType: multiple values";
                properties.valueType = 1;
                if (!$util.isString(message.stringValue))
                    return "stringValue: string expected";
            }
            if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                if (properties.valueType === 1)
                    return "valueType: multiple values";
                properties.valueType = 1;
                if (typeof message.boolValue !== "boolean")
                    return "boolValue: boolean expected";
            }
            return null;
        };

        /**
         * Creates a MetadataValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {insert_buffer.MetadataValue} MetadataValue
         */
        MetadataValue.fromObject = function fromObject(object) {
            if (object instanceof $root.insert_buffer.MetadataValue)
                return object;
            var message = new $root.insert_buffer.MetadataValue();
            if (object.floatValue != null)
                message.floatValue = Number(object.floatValue);
            if (object.intValue != null)
                if ($util.Long)
                    (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
                else if (typeof object.intValue === "string")
                    message.intValue = parseInt(object.intValue, 10);
                else if (typeof object.intValue === "number")
                    message.intValue = object.intValue;
                else if (typeof object.intValue === "object")
                    message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
            if (object.stringValue != null)
                message.stringValue = String(object.stringValue);
            if (object.boolValue != null)
                message.boolValue = Boolean(object.boolValue);
            return message;
        };

        /**
         * Creates a plain object from a MetadataValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {insert_buffer.MetadataValue} message MetadataValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MetadataValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                object.floatValue = options.json && !isFinite(message.floatValue) ? String(message.floatValue) : message.floatValue;
                if (options.oneofs)
                    object.valueType = "floatValue";
            }
            if (message.intValue != null && message.hasOwnProperty("intValue")) {
                if (typeof message.intValue === "number")
                    object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
                else
                    object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
                if (options.oneofs)
                    object.valueType = "intValue";
            }
            if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                object.stringValue = message.stringValue;
                if (options.oneofs)
                    object.valueType = "stringValue";
            }
            if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                object.boolValue = message.boolValue;
                if (options.oneofs)
                    object.valueType = "boolValue";
            }
            return object;
        };

        /**
         * Converts this MetadataValue to JSON.
         * @function toJSON
         * @memberof insert_buffer.MetadataValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MetadataValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MetadataValue
         * @function getTypeUrl
         * @memberof insert_buffer.MetadataValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MetadataValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/insert_buffer.MetadataValue";
        };

        return MetadataValue;
    })();

    insert_buffer.SingletonVec = (function() {

        /**
         * Properties of a SingletonVec.
         * @memberof insert_buffer
         * @interface ISingletonVec
         * @property {Array.<number>|null} [v] SingletonVec v
         * @property {Object.<string,insert_buffer.IMetadataValue>|null} [map] SingletonVec map
         */

        /**
         * Constructs a new SingletonVec.
         * @memberof insert_buffer
         * @classdesc Represents a SingletonVec.
         * @implements ISingletonVec
         * @constructor
         * @param {insert_buffer.ISingletonVec=} [properties] Properties to set
         */
        function SingletonVec(properties) {
            this.v = [];
            this.map = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SingletonVec v.
         * @member {Array.<number>} v
         * @memberof insert_buffer.SingletonVec
         * @instance
         */
        SingletonVec.prototype.v = $util.emptyArray;

        /**
         * SingletonVec map.
         * @member {Object.<string,insert_buffer.IMetadataValue>} map
         * @memberof insert_buffer.SingletonVec
         * @instance
         */
        SingletonVec.prototype.map = $util.emptyObject;

        /**
         * Creates a new SingletonVec instance using the specified properties.
         * @function create
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {insert_buffer.ISingletonVec=} [properties] Properties to set
         * @returns {insert_buffer.SingletonVec} SingletonVec instance
         */
        SingletonVec.create = function create(properties) {
            return new SingletonVec(properties);
        };

        /**
         * Encodes the specified SingletonVec message. Does not implicitly {@link insert_buffer.SingletonVec.verify|verify} messages.
         * @function encode
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {insert_buffer.ISingletonVec} message SingletonVec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingletonVec.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.v != null && message.v.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.v.length; ++i)
                    writer.float(message.v[i]);
                writer.ldelim();
            }
            if (message.map != null && Object.hasOwnProperty.call(message, "map"))
                for (var keys = Object.keys(message.map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.insert_buffer.MetadataValue.encode(message.map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified SingletonVec message, length delimited. Does not implicitly {@link insert_buffer.SingletonVec.verify|verify} messages.
         * @function encodeDelimited
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {insert_buffer.ISingletonVec} message SingletonVec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingletonVec.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SingletonVec message from the specified reader or buffer.
         * @function decode
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {insert_buffer.SingletonVec} SingletonVec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingletonVec.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.insert_buffer.SingletonVec(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.v && message.v.length))
                            message.v = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.v.push(reader.float());
                        } else
                            message.v.push(reader.float());
                        break;
                    }
                case 2: {
                        if (message.map === $util.emptyObject)
                            message.map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.insert_buffer.MetadataValue.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.map[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SingletonVec message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {insert_buffer.SingletonVec} SingletonVec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingletonVec.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SingletonVec message.
         * @function verify
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SingletonVec.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.v != null && message.hasOwnProperty("v")) {
                if (!Array.isArray(message.v))
                    return "v: array expected";
                for (var i = 0; i < message.v.length; ++i)
                    if (typeof message.v[i] !== "number")
                        return "v: number[] expected";
            }
            if (message.map != null && message.hasOwnProperty("map")) {
                if (!$util.isObject(message.map))
                    return "map: object expected";
                var key = Object.keys(message.map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.insert_buffer.MetadataValue.verify(message.map[key[i]]);
                    if (error)
                        return "map." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SingletonVec message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {insert_buffer.SingletonVec} SingletonVec
         */
        SingletonVec.fromObject = function fromObject(object) {
            if (object instanceof $root.insert_buffer.SingletonVec)
                return object;
            var message = new $root.insert_buffer.SingletonVec();
            if (object.v) {
                if (!Array.isArray(object.v))
                    throw TypeError(".insert_buffer.SingletonVec.v: array expected");
                message.v = [];
                for (var i = 0; i < object.v.length; ++i)
                    message.v[i] = Number(object.v[i]);
            }
            if (object.map) {
                if (typeof object.map !== "object")
                    throw TypeError(".insert_buffer.SingletonVec.map: object expected");
                message.map = {};
                for (var keys = Object.keys(object.map), i = 0; i < keys.length; ++i) {
                    if (typeof object.map[keys[i]] !== "object")
                        throw TypeError(".insert_buffer.SingletonVec.map: object expected");
                    message.map[keys[i]] = $root.insert_buffer.MetadataValue.fromObject(object.map[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SingletonVec message. Also converts values to other types if specified.
         * @function toObject
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {insert_buffer.SingletonVec} message SingletonVec
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SingletonVec.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.v = [];
            if (options.objects || options.defaults)
                object.map = {};
            if (message.v && message.v.length) {
                object.v = [];
                for (var j = 0; j < message.v.length; ++j)
                    object.v[j] = options.json && !isFinite(message.v[j]) ? String(message.v[j]) : message.v[j];
            }
            var keys2;
            if (message.map && (keys2 = Object.keys(message.map)).length) {
                object.map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.map[keys2[j]] = $root.insert_buffer.MetadataValue.toObject(message.map[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this SingletonVec to JSON.
         * @function toJSON
         * @memberof insert_buffer.SingletonVec
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SingletonVec.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SingletonVec
         * @function getTypeUrl
         * @memberof insert_buffer.SingletonVec
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SingletonVec.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/insert_buffer.SingletonVec";
        };

        return SingletonVec;
    })();

    insert_buffer.BatchVec = (function() {

        /**
         * Properties of a BatchVec.
         * @memberof insert_buffer
         * @interface IBatchVec
         * @property {Array.<insert_buffer.ISingletonVec>|null} [s] BatchVec s
         */

        /**
         * Constructs a new BatchVec.
         * @memberof insert_buffer
         * @classdesc Represents a BatchVec.
         * @implements IBatchVec
         * @constructor
         * @param {insert_buffer.IBatchVec=} [properties] Properties to set
         */
        function BatchVec(properties) {
            this.s = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BatchVec s.
         * @member {Array.<insert_buffer.ISingletonVec>} s
         * @memberof insert_buffer.BatchVec
         * @instance
         */
        BatchVec.prototype.s = $util.emptyArray;

        /**
         * Creates a new BatchVec instance using the specified properties.
         * @function create
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {insert_buffer.IBatchVec=} [properties] Properties to set
         * @returns {insert_buffer.BatchVec} BatchVec instance
         */
        BatchVec.create = function create(properties) {
            return new BatchVec(properties);
        };

        /**
         * Encodes the specified BatchVec message. Does not implicitly {@link insert_buffer.BatchVec.verify|verify} messages.
         * @function encode
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {insert_buffer.IBatchVec} message BatchVec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchVec.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.s != null && message.s.length)
                for (var i = 0; i < message.s.length; ++i)
                    $root.insert_buffer.SingletonVec.encode(message.s[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BatchVec message, length delimited. Does not implicitly {@link insert_buffer.BatchVec.verify|verify} messages.
         * @function encodeDelimited
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {insert_buffer.IBatchVec} message BatchVec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchVec.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BatchVec message from the specified reader or buffer.
         * @function decode
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {insert_buffer.BatchVec} BatchVec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchVec.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.insert_buffer.BatchVec();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.s && message.s.length))
                            message.s = [];
                        message.s.push($root.insert_buffer.SingletonVec.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BatchVec message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {insert_buffer.BatchVec} BatchVec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchVec.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BatchVec message.
         * @function verify
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BatchVec.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.s != null && message.hasOwnProperty("s")) {
                if (!Array.isArray(message.s))
                    return "s: array expected";
                for (var i = 0; i < message.s.length; ++i) {
                    var error = $root.insert_buffer.SingletonVec.verify(message.s[i]);
                    if (error)
                        return "s." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BatchVec message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {insert_buffer.BatchVec} BatchVec
         */
        BatchVec.fromObject = function fromObject(object) {
            if (object instanceof $root.insert_buffer.BatchVec)
                return object;
            var message = new $root.insert_buffer.BatchVec();
            if (object.s) {
                if (!Array.isArray(object.s))
                    throw TypeError(".insert_buffer.BatchVec.s: array expected");
                message.s = [];
                for (var i = 0; i < object.s.length; ++i) {
                    if (typeof object.s[i] !== "object")
                        throw TypeError(".insert_buffer.BatchVec.s: object expected");
                    message.s[i] = $root.insert_buffer.SingletonVec.fromObject(object.s[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BatchVec message. Also converts values to other types if specified.
         * @function toObject
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {insert_buffer.BatchVec} message BatchVec
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BatchVec.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.s = [];
            if (message.s && message.s.length) {
                object.s = [];
                for (var j = 0; j < message.s.length; ++j)
                    object.s[j] = $root.insert_buffer.SingletonVec.toObject(message.s[j], options);
            }
            return object;
        };

        /**
         * Converts this BatchVec to JSON.
         * @function toJSON
         * @memberof insert_buffer.BatchVec
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BatchVec.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BatchVec
         * @function getTypeUrl
         * @memberof insert_buffer.BatchVec
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BatchVec.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/insert_buffer.BatchVec";
        };

        return BatchVec;
    })();

    insert_buffer.SingletonStr = (function() {

        /**
         * Properties of a SingletonStr.
         * @memberof insert_buffer
         * @interface ISingletonStr
         * @property {string|null} [v] SingletonStr v
         * @property {Object.<string,insert_buffer.IMetadataValue>|null} [map] SingletonStr map
         */

        /**
         * Constructs a new SingletonStr.
         * @memberof insert_buffer
         * @classdesc Represents a SingletonStr.
         * @implements ISingletonStr
         * @constructor
         * @param {insert_buffer.ISingletonStr=} [properties] Properties to set
         */
        function SingletonStr(properties) {
            this.map = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SingletonStr v.
         * @member {string} v
         * @memberof insert_buffer.SingletonStr
         * @instance
         */
        SingletonStr.prototype.v = "";

        /**
         * SingletonStr map.
         * @member {Object.<string,insert_buffer.IMetadataValue>} map
         * @memberof insert_buffer.SingletonStr
         * @instance
         */
        SingletonStr.prototype.map = $util.emptyObject;

        /**
         * Creates a new SingletonStr instance using the specified properties.
         * @function create
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {insert_buffer.ISingletonStr=} [properties] Properties to set
         * @returns {insert_buffer.SingletonStr} SingletonStr instance
         */
        SingletonStr.create = function create(properties) {
            return new SingletonStr(properties);
        };

        /**
         * Encodes the specified SingletonStr message. Does not implicitly {@link insert_buffer.SingletonStr.verify|verify} messages.
         * @function encode
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {insert_buffer.ISingletonStr} message SingletonStr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingletonStr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.v != null && Object.hasOwnProperty.call(message, "v"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.v);
            if (message.map != null && Object.hasOwnProperty.call(message, "map"))
                for (var keys = Object.keys(message.map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.insert_buffer.MetadataValue.encode(message.map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified SingletonStr message, length delimited. Does not implicitly {@link insert_buffer.SingletonStr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {insert_buffer.ISingletonStr} message SingletonStr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SingletonStr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SingletonStr message from the specified reader or buffer.
         * @function decode
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {insert_buffer.SingletonStr} SingletonStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingletonStr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.insert_buffer.SingletonStr(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.v = reader.string();
                        break;
                    }
                case 2: {
                        if (message.map === $util.emptyObject)
                            message.map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.insert_buffer.MetadataValue.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.map[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SingletonStr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {insert_buffer.SingletonStr} SingletonStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SingletonStr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SingletonStr message.
         * @function verify
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SingletonStr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.v != null && message.hasOwnProperty("v"))
                if (!$util.isString(message.v))
                    return "v: string expected";
            if (message.map != null && message.hasOwnProperty("map")) {
                if (!$util.isObject(message.map))
                    return "map: object expected";
                var key = Object.keys(message.map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.insert_buffer.MetadataValue.verify(message.map[key[i]]);
                    if (error)
                        return "map." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SingletonStr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {insert_buffer.SingletonStr} SingletonStr
         */
        SingletonStr.fromObject = function fromObject(object) {
            if (object instanceof $root.insert_buffer.SingletonStr)
                return object;
            var message = new $root.insert_buffer.SingletonStr();
            if (object.v != null)
                message.v = String(object.v);
            if (object.map) {
                if (typeof object.map !== "object")
                    throw TypeError(".insert_buffer.SingletonStr.map: object expected");
                message.map = {};
                for (var keys = Object.keys(object.map), i = 0; i < keys.length; ++i) {
                    if (typeof object.map[keys[i]] !== "object")
                        throw TypeError(".insert_buffer.SingletonStr.map: object expected");
                    message.map[keys[i]] = $root.insert_buffer.MetadataValue.fromObject(object.map[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SingletonStr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {insert_buffer.SingletonStr} message SingletonStr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SingletonStr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.map = {};
            if (options.defaults)
                object.v = "";
            if (message.v != null && message.hasOwnProperty("v"))
                object.v = message.v;
            var keys2;
            if (message.map && (keys2 = Object.keys(message.map)).length) {
                object.map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.map[keys2[j]] = $root.insert_buffer.MetadataValue.toObject(message.map[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this SingletonStr to JSON.
         * @function toJSON
         * @memberof insert_buffer.SingletonStr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SingletonStr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SingletonStr
         * @function getTypeUrl
         * @memberof insert_buffer.SingletonStr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SingletonStr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/insert_buffer.SingletonStr";
        };

        return SingletonStr;
    })();

    insert_buffer.BatchStr = (function() {

        /**
         * Properties of a BatchStr.
         * @memberof insert_buffer
         * @interface IBatchStr
         * @property {Array.<insert_buffer.ISingletonStr>|null} [s] BatchStr s
         */

        /**
         * Constructs a new BatchStr.
         * @memberof insert_buffer
         * @classdesc Represents a BatchStr.
         * @implements IBatchStr
         * @constructor
         * @param {insert_buffer.IBatchStr=} [properties] Properties to set
         */
        function BatchStr(properties) {
            this.s = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BatchStr s.
         * @member {Array.<insert_buffer.ISingletonStr>} s
         * @memberof insert_buffer.BatchStr
         * @instance
         */
        BatchStr.prototype.s = $util.emptyArray;

        /**
         * Creates a new BatchStr instance using the specified properties.
         * @function create
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {insert_buffer.IBatchStr=} [properties] Properties to set
         * @returns {insert_buffer.BatchStr} BatchStr instance
         */
        BatchStr.create = function create(properties) {
            return new BatchStr(properties);
        };

        /**
         * Encodes the specified BatchStr message. Does not implicitly {@link insert_buffer.BatchStr.verify|verify} messages.
         * @function encode
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {insert_buffer.IBatchStr} message BatchStr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchStr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.s != null && message.s.length)
                for (var i = 0; i < message.s.length; ++i)
                    $root.insert_buffer.SingletonStr.encode(message.s[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BatchStr message, length delimited. Does not implicitly {@link insert_buffer.BatchStr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {insert_buffer.IBatchStr} message BatchStr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchStr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BatchStr message from the specified reader or buffer.
         * @function decode
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {insert_buffer.BatchStr} BatchStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchStr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.insert_buffer.BatchStr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.s && message.s.length))
                            message.s = [];
                        message.s.push($root.insert_buffer.SingletonStr.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BatchStr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {insert_buffer.BatchStr} BatchStr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchStr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BatchStr message.
         * @function verify
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BatchStr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.s != null && message.hasOwnProperty("s")) {
                if (!Array.isArray(message.s))
                    return "s: array expected";
                for (var i = 0; i < message.s.length; ++i) {
                    var error = $root.insert_buffer.SingletonStr.verify(message.s[i]);
                    if (error)
                        return "s." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BatchStr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {insert_buffer.BatchStr} BatchStr
         */
        BatchStr.fromObject = function fromObject(object) {
            if (object instanceof $root.insert_buffer.BatchStr)
                return object;
            var message = new $root.insert_buffer.BatchStr();
            if (object.s) {
                if (!Array.isArray(object.s))
                    throw TypeError(".insert_buffer.BatchStr.s: array expected");
                message.s = [];
                for (var i = 0; i < object.s.length; ++i) {
                    if (typeof object.s[i] !== "object")
                        throw TypeError(".insert_buffer.BatchStr.s: object expected");
                    message.s[i] = $root.insert_buffer.SingletonStr.fromObject(object.s[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BatchStr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {insert_buffer.BatchStr} message BatchStr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BatchStr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.s = [];
            if (message.s && message.s.length) {
                object.s = [];
                for (var j = 0; j < message.s.length; ++j)
                    object.s[j] = $root.insert_buffer.SingletonStr.toObject(message.s[j], options);
            }
            return object;
        };

        /**
         * Converts this BatchStr to JSON.
         * @function toJSON
         * @memberof insert_buffer.BatchStr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BatchStr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BatchStr
         * @function getTypeUrl
         * @memberof insert_buffer.BatchStr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BatchStr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/insert_buffer.BatchStr";
        };

        return BatchStr;
    })();

    return insert_buffer;
})();

module.exports = $root;
