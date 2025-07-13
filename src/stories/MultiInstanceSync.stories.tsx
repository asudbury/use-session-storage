import type { Meta, StoryObj } from "@storybook/react";
import useSessionStorage from "../useSessionStorage";
import { getButtonStyle, storyStyles } from "./shared/storyStyles";

const meta: Meta = {
  title: "Multi-Instance Sync",
  parameters: {
    docs: {
      description: {
        component:
          "Demonstrates automatic synchronization between multiple instances of the same hook across different components.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const MultiInstanceExample = () => {
  const [sharedCount1, setSharedCount1, { loading: loading1, error: error1 }] =
    useSessionStorage("shared-counter", 0);
  const [sharedCount2, setSharedCount2, { loading: loading2, error: error2 }] =
    useSessionStorage("shared-counter", 0);

  if (loading1 || loading2) return <div>Loading...</div>;
  if (error1 || error2) return <div>Error: {(error1 || error2)?.message}</div>;

  return (
    <div style={storyStyles.container}>
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>
          Multi-Instance Synchronization
        </h1>
      </div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            flex: 1,
            borderRadius: "4px",
          }}
        >
          <h4>Instance 1</h4>
          <div style={{ marginBottom: "10px" }}>
            <strong>Count:</strong> {sharedCount1}
          </div>
          <button
            onClick={() => {
              setSharedCount1(sharedCount1 + 1);
            }}
            style={{ ...getButtonStyle("primary") }}
          >
            Increment
          </button>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            flex: 1,
            borderRadius: "4px",
          }}
        >
          <h4>Instance 2</h4>
          <div style={{ marginBottom: "10px" }}>
            <strong>Count:</strong> {sharedCount2}
          </div>
          <button
            onClick={() => {
              setSharedCount2(sharedCount2 + 1);
            }}
            style={{ ...getButtonStyle("primary") }}
          >
            Increment
          </button>
        </div>
      </div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
        }}
      >
        <strong>Note:</strong> Both instances automatically stay synchronized.
        Incrementing one will update the other in real-time.
      </div>
    </div>
  );
};

export const MultiInstanceSync: Story = {
  render: () => <MultiInstanceExample />,
};
