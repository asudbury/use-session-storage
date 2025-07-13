import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import useSessionStorage from "../useSessionStorage";
import { getButtonStyle, storyStyles } from "./shared/storyStyles";

const meta: Meta = {
  title: "Array Storage",
  parameters: {
    docs: {
      description: {
        component: "Basic array storage example using useSessionStorage.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ArrayStorageExample = () => {
  const [items, setItems, { loading, error, remove, reset }] =
    useSessionStorage("user-items", ["Apple", "Banana"]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>Array Storage</h1>
        <div style={{ fontSize: "1.1rem", color: "#fff", marginTop: 4 }}>
          Basic array storage example using useSessionStorage.
        </div>
      </div>
      <div style={{ marginBottom: "10px", marginTop: "20px" }}>
        <label>New Item: </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          disabled={loading}
          style={{ padding: "5px", marginLeft: "10px", marginRight: "10px" }}
        />
        <button onClick={handleAdd} style={getButtonStyle("primary")}>
          Add
        </button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <button
          onClick={remove}
          style={{ ...getButtonStyle("secondary"), marginRight: "10px" }}
        >
          Remove
        </button>
        <button onClick={reset} style={getButtonStyle("secondary")}>
          Reset to Default
        </button>
      </div>
      <div>
        <strong>Current Items:</strong> {items.join(", ")}
      </div>
      {loading && <div style={{ color: "blue" }}>Loading...</div>}
      {error && <div style={{ color: "red" }}>Error: {error.message}</div>}
    </div>
  );
};

export const ArrayStorage: Story = {
  render: () => <ArrayStorageExample />,
};
