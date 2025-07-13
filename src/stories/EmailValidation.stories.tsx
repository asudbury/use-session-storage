import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import useSessionStorage from "../useSessionStorage";
import { getButtonStyle, storyStyles } from "./shared/storyStyles";

const meta: Meta = {
  title: "Email Validation",
  parameters: {
    docs: {
      description: {
        component:
          "Email validation example using useSessionStorage with a custom validator.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const EmailValidationExample = () => {
  const validator = (value: any) => {
    if (typeof value !== "string" || !value.includes("@")) {
      throw new Error("Value must be a valid email address");
    }
    return value;
  };

  const [email, setEmail, { loading, error, remove, reset }] =
    useSessionStorage("user-email", "john@example.com", { validator });
  const [inputValue, setInputValue] = useState(email);

  const handleSubmit = () => {
    setEmail(inputValue);
  };

  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>Email Validation</h1>
        <div style={{ fontSize: "1.1rem", color: "#fff", marginTop: 4 }}>
          Email validation example using useSessionStorage with a custom
          validator.
        </div>
      </div>
      <div style={{ marginBottom: "10px", marginTop: "20px" }}>
        <label>Email: </label>
        <input
          type="email"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          disabled={loading}
          style={{ padding: "5px", marginLeft: "10px" }}
        />
        <button
          onClick={handleSubmit}
          style={{ ...getButtonStyle("primary"), marginLeft: "10px" }}
        >
          Update
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
        <strong>Current Email:</strong> {email}
      </div>
      {loading && <div style={{ color: "blue" }}>Loading...</div>}
      {error && <div style={{ color: "red" }}>Error: {error.message}</div>}
    </div>
  );
};

export const EmailValidation: Story = {
  render: () => <EmailValidationExample />,
};
