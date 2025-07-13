import { useCallback, useEffect, useState, useRef } from "react";

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
 * Default serializer using JSON.parse and JSON.stringify
 */
const defaultSerializer = {
  parse: JSON.parse,
  stringify: JSON.stringify,
};

/**
 * Sets a value in session storage with error handling and dispatches a custom event for cross-instance sync.
 *
 * @template T - The type of the value to store
 * @param {string} key - The session storage key
 * @param {T} value - The value to store
 * @param {{ stringify: (value: T) => string }} serializer - The serializer to use for stringifying
 * @throws {Error} If the value cannot be serialized or stored
 * @returns {void}
 */
const getStorageValue = <T>(
  key: string,
  defaultValue: T,
  serializer: typeof defaultSerializer,
  validator?: (value: any) => T
): T => {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  try {
    const item = window.sessionStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }

    const parsed = serializer.parse(item);
    return typeof validator === "function" ? validator(parsed) : parsed;
  } catch (error) {
    console.warn(`Error reading sessionStorage key "${key}":`, error);
    return defaultValue;
  }
};

/**
 * Sets a value in session storage with error handling
 * @template T - The type of the value to store
 * @param key - The session storage key
 * @param value - The value to store
 * @param serializer - The serializer to use for stringifying
 * @throws {Error} If the value cannot be serialized or stored
 */
const setStorageValue = <T>(
  key: string,
  value: T,
  serializer: typeof defaultSerializer
): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const serializedValue = serializer.stringify(value);
    window.sessionStorage.setItem(key, serializedValue);
    window.dispatchEvent(
      new CustomEvent("sessionStorageChange", {
        detail: { key, value },
      })
    );
  } catch (error) {
    console.error(`Error setting sessionStorage key "${key}":`, error);
    throw error;
  }
};

/**
 * Removes a value from session storage with error handling and dispatches a custom event for cross-instance sync.
 *
 * @param {string} key - The session storage key to remove
 * @throws {Error} If the key cannot be removed
 * @returns {void}
 */
const removeStorageValue = (key: string): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.removeItem(key);
    window.dispatchEvent(
      new CustomEvent("sessionStorageChange", {
        detail: { key, value: null },
      })
    );
  } catch (error) {
    console.error(`Error removing sessionStorage key "${key}":`, error);
    throw error;
  }
};

/**
 * Custom hook for debouncing function calls
 * @template T - The type of the function to debounce
 * @param callback - The function to debounce
 * @param delay - The debounce delay in milliseconds
 * @returns The debounced function
 */
const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    ((...args: Parameters<T>) => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    }) as T,
    [callback, delay]
  );
};

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
export function useSessionStorage<T>(
  key: string,
  defaultValue: T,
  options: UseSessionStorageOptions<T> = {}
): UseSessionStorageReturn<T> {
  const {
    serializer = defaultSerializer,
    validator,
    debounceMs = 0,
    syncAcrossInstances = true,
    onError,
  } = options;

  // Initialize state with value from session storage
  const [storedValue, setStoredValue] = useState<T>(() =>
    getStorageValue(key, defaultValue, serializer, validator)
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const isInitialMount = useRef(true);
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  /**
   * Handles errors by setting error state and calling onError callback
   */
  const handleError = useCallback((err: Error) => {
    setError(err);
    if (onErrorRef.current !== null && onErrorRef.current !== undefined) {
      onErrorRef.current(err);
    }
  }, []);

  /**
   * Internal function to set value in session storage
   */
  const setValueInternal = useCallback(
    (value: T) => {
      try {
        setLoading(true);
        setError(null);
        setStorageValue(key, value, serializer);
        setStoredValue(value);
      } catch (err) {
        handleError(err as Error);
      } finally {
        setLoading(false);
      }
    },
    [key, serializer, handleError]
  );

  /**
   * Debounced version of setValueInternal
   */
  const debouncedSetValue = useDebounce(setValueInternal, debounceMs);

  /**
   * Public function to set a new value in session storage
   * Supports both direct values and updater functions
   */
  const setValue = useCallback(
    (value: T | ((prevValue: T) => T)) => {
      const newValue =
        typeof value === "function"
          ? (value as (prevValue: T) => T)(storedValue)
          : value;

      if (validator !== null && validator !== undefined) {
        try {
          const validatedValue = validator(newValue);
          if (debounceMs > 0) {
            debouncedSetValue(validatedValue);
          } else {
            setValueInternal(validatedValue);
          }
        } catch (err) {
          handleError(err as Error);
        }
      } else {
        if (debounceMs > 0) {
          debouncedSetValue(newValue);
        } else {
          setValueInternal(newValue);
        }
      }
    },
    [
      storedValue,
      validator,
      debounceMs,
      debouncedSetValue,
      setValueInternal,
      handleError,
    ]
  );

  /**
   * Removes the value from session storage and resets to default
   */
  const remove = useCallback(() => {
    try {
      setLoading(true);
      setError(null);
      removeStorageValue(key);
      setStoredValue(defaultValue);
    } catch (err) {
      handleError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [key, defaultValue, handleError]);

  /**
   * Resets the value to the default value
   */
  const reset = useCallback(() => {
    setValue(defaultValue);
  }, [setValue, defaultValue]);

  // Effect to handle cross-instance synchronization
  useEffect(() => {
    if (!syncAcrossInstances) return;

    const handleStorageChange = (e: CustomEvent): void => {
      const { key: changedKey, value } = e.detail;
      if (changedKey === key) {
        if (value === null) {
          setStoredValue(defaultValue);
        } else {
          try {
            const validatedValue =
              validator !== null && validator !== undefined
                ? validator(value)
                : value;
            setStoredValue(validatedValue as T);
          } catch (err) {
            handleError(err as Error);
          }
        }
      }
    };

    window.addEventListener(
      "sessionStorageChange",
      handleStorageChange as EventListener
    );
    return () => {
      window.removeEventListener(
        "sessionStorageChange",
        handleStorageChange as EventListener
      );
    };
  }, [key, defaultValue, validator, syncAcrossInstances, handleError]);

  // Effect to sync with external changes to session storage
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const currentValue = getStorageValue(
      key,
      defaultValue,
      serializer,
      validator
    );
    if (currentValue !== storedValue) {
      setStoredValue(currentValue);
    }
  }, [key, defaultValue, serializer, validator, storedValue]);

  return [
    storedValue,
    setValue,
    {
      loading,
      error,
      remove,
      reset,
    },
  ];
}

export default useSessionStorage;
