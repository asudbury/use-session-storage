import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import useSessionStorage from '../useSessionStorage';
import { getButtonStyle, storyStyles } from './shared/storyStyles';

const meta: Meta = {
  title: 'Number Storage', // Top-level story, no parent
  parameters: {
    docs: {
      description: {
        component: 'Basic number storage example using useSessionStorage.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const NumberStorageExample = () => {
  const [age, setAge, { loading, error, remove, reset }] = useSessionStorage('user-age', 30);
  const [inputValue, setInputValue] = useState(age.toString());

  const handleSubmit = () => {
    const numValue = parseInt(inputValue);
    setAge(numValue);
  };

  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>Number Storage</h1>
        <div style={{ fontSize: '1.1rem', color: '#fff', marginTop: 4 }}>
          Basic number storage example using useSessionStorage.
        </div>
      </div>
      <div style={{ marginBottom: '10px', marginTop: '20px' }}>
        <label>Age: </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          disabled={loading}
          style={{ padding: '5px', marginLeft: '10px' }}
        />
        <button onClick={handleSubmit} style={{ ...getButtonStyle('primary'), marginLeft: '10px' }}>
          Update
        </button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={remove} style={{ ...getButtonStyle('secondary'), marginRight: '10px' }}>
          Remove
        </button>
        <button onClick={reset} style={getButtonStyle('secondary')}>
          Reset to Default
        </button>
      </div>
      <div>
        <strong>Current Age:</strong> {age}
      </div>
      {loading && <div style={{ color: 'blue' }}>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
    </div>
  );
};

export const NumberStorage: Story = {
  render: () => <NumberStorageExample />,
};
