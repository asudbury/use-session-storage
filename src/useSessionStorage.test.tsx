import { renderHook, act, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import useSessionStorage from "./useSessionStorage";

interface TestValue {
  name: string;
  age: number;
}

const key = "test-key";
const defaultValue: TestValue = { name: "John", age: 30 };

describe("useSessionStorage", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should initialize with default value if sessionStorage is empty", () => {
    const { result } = renderHook(() => useSessionStorage(key, defaultValue));
    expect(result.current[0]).toEqual(defaultValue);
  });

  it("should store and retrieve value correctly", async () => {
    const { result } = renderHook(() => useSessionStorage(key, defaultValue));

    const newValue: TestValue = { name: "Alice", age: 25 };

    await waitFor(() => {
      result.current[1](newValue);
      expect(result.current[0]).toEqual(newValue);
    });
  });

  it("should update value using function updater", async () => {
    const { result } = renderHook(() => useSessionStorage(key, defaultValue));

    await waitFor(() => {
      result.current[1]((prev) => ({ ...prev, age: prev.age + 1 }));
      expect(result.current[0]).toEqual({ name: "John", age: 31 });
    });
  });

  it("should remove value and reset to default", async () => {
    const { result } = renderHook(() => useSessionStorage(key, defaultValue));

    await waitFor(() => {
      result.current[1]({ name: "Bob", age: 50 });
      result.current[2].remove();
      expect(result.current[0]).toEqual(defaultValue);
      expect(sessionStorage.getItem(key)).toBeNull();
    });
  });

  it("should reset value to default", async () => {
    const { result } = renderHook(() => useSessionStorage(key, defaultValue));

    await waitFor(() => {
      result.current[1]({ name: "New", age: 99 });
      result.current[2].reset();
      expect(result.current[0]).toEqual(defaultValue);
    });
  });

  it("should handle validation", () => {
    const validator = (value: any) => {
      if (!value || typeof value.name !== "string") throw new Error("Invalid");
      return value as TestValue;
    };

    sessionStorage.setItem(key, JSON.stringify({ name: "Valid", age: 20 }));
    const { result } = renderHook(() =>
      useSessionStorage(key, defaultValue, { validator })
    );

    expect(result.current[0]).toEqual({ name: "Valid", age: 20 });
  });

  it("should catch validation error on write", async () => {
    const onError = vi.fn();
    const validator = (value: any) => {
      if (!value.name) throw new Error("Missing name");
      return value;
    };

    const { result } = renderHook(() =>
      useSessionStorage(key, defaultValue, { validator, onError })
    );

    await waitFor(() => {
      result.current[1]({ name: "", age: 20 }); // invalid
      expect(onError).toHaveBeenCalled();
      expect(result.current[2].error).not.toBeNull();
    });
  });
});
