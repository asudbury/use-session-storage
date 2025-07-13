import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import useSessionStorage from '../useSessionStorage';
import { getButtonStyle, storyStyles } from './shared/storyStyles';

const meta: Meta = {
  title: 'String Storage',
  parameters: {
    docs: {
      description: {
        component: 'Basic string storage example using useSessionStorage.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const StringStorageExample = () => {
  const [name, setName, { loading, error, remove, reset }] = useSessionStorage(
    'user-name',
    'John Doe'
  );
  const [inputValue, setInputValue] = useState(name);

  const handleSubmit = () => {
    setName(inputValue);
  };

  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>String Storage</h1>
        <div style={{ fontSize: '1.1rem', color: '#fff', marginTop: 4 }}>
          Basic string storage example using useSessionStorage.
        </div>
      </div>
      <div style={{ marginBottom: '10px', marginTop: '20px' }}>
        <label>Name: </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={loading}
          style={{ padding: '5px', marginLeft: '10px', marginRight: '10px' }}
        />
        <button onClick={handleSubmit} style={getButtonStyle('primary')}>Update</button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={remove} style={{ ...getButtonStyle('secondary'), marginRight: '10px' }}>Remove</button>
        <button onClick={reset} style={getButtonStyle('secondary')}>Reset to Default</button>
      </div>
      <div>
        <strong>Current Name:</strong> {name}
      </div>
      {loading && <div style={{ color: 'blue' }}>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
    </div>
  );
};


export const StringStorage: Story = {
  render: () => <StringStorageExample />,
};
