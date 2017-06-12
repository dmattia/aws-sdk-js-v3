export type SourceData = string|ArrayBuffer|ArrayBufferView;

/**
 * An object that provides a hash of data provided in chunks to `update`. The
 * hash may be performed incrementally as chunks are received or all at once
 * when the hash is finalized, depending on the underlying implementation.
 */
export interface Hash {
    /**
     * Adds a chunk of data to the hash. If a buffer is provided, the `encoding`
     * argument will be ignored. If a string is provided without a specified
     * encoding, implementations must assume UTF-8 encoding.
     *
     * Not all encodings are supported on all platforms, though all must support
     * UTF-8.
     */
    update(toHash: SourceData, encoding?: 'utf8'|'ascii'|'latin1'): void;

    /**
     * Finalizes the hash and provides a promise that will be fulfilled with the
     * raw bytes of the calculated hash.
     */
    digest(): Promise<Uint8Array>;
}

/**
 * A constructor for a hash that may be used to calculate an HMAC. Implementing
 * classes should not directly hold the provided key in memory beyond the
 * lexical scope of the constructor.
 */
export interface HashConstructor {
    new (secret?: SourceData): Hash;
}