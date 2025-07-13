/**
 * Configuration options for the useSessionStorage hook
 * @template T - The type of the value stored in session storage
 */
export interface UseSessionStorageOptions<T> {
    /**
     * Custom serializer for converting values to/from strings
     * @default { parse: JSON.parse, stringify: JSON.stringify }
     */
    serializer?: {
        /** Function to parse a string value from session storage */
        parse: (value: string) => T;
        /** Function to stringify a value for session storage */
        stringify: (value: T) => string;
    };
    /**
     * Optional validator function to validate parsed values
     * @param value - The parsed value to validate
     * @returns The validated value
     */
    validator?: (value: any) => T;
    /**
     * Debounce delay in milliseconds for write operations
     * @default 0
     */
    debounceMs?: number;
    /**
     * Whether to sync changes across multiple instances/tabs
     * @default true
     */
    syncAcrossInstances?: boolean;
    /**
     * Error handler callback
     * @param error - The error that occurred
     */
    onError?: (error: Error) => void;
}
/**
 * Actions and state information returned by the useSessionStorage hook
 */
export interface UseSessionStorageActions {
    /** Whether a storage operation is currently in progress */
    loading: boolean;
    /** The last error that occurred, if any */
    error: Error | null;
    /** Function to remove the value from session storage */
    remove: () => void;
    /** Function to reset the value to the default value */
    reset: () => void;
}
/**
 * Return type for the useSessionStorage hook
 * @template T - The type of the value stored in session storage
 */
export type UseSessionStorageReturn<T> = [
    /** The current value from session storage */
    T,
    /** Function to update the value in session storage */
    (value: T | ((prevValue: T) => T)) => void,
    /** Actions and state information */
    UseSessionStorageActions
];
/**
 * A powerful React hook for managing session storage with TypeScript support,
 * serialization, validation, debouncing, and comprehensive event handling.
 *
 * @template T - The type of the value stored in session storage
 * @param key - The session storage key
 * @param defaultValue - The default value to use if the key doesn't exist
 * @param options - Configuration options for the hook
 * @returns A tuple containing [value, setValue, actions]
 *
 * @example
 * ```typescript
 * const [user, setUser, { loading, error, remove, reset }] = useSessionStorage('user', null, {
 *   validator: (value) => value as User,
 *   debounceMs: 300,
 *   onError: (error) => console.error('Session storage error:', error)
 * });
 * ```
 */
export declare function useSessionStorage<T>(key: string, defaultValue: T, options?: UseSessionStorageOptions<T>): UseSessionStorageReturn<T>;
export default useSessionStorage;
