import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import useSessionStorage from '../useSessionStorage';
import { getButtonStyle, storyStyles } from './shared/storyStyles';

const meta: Meta = {
  title: 'Boolean Storage',
  parameters: {
    docs: {
      description: {
        component: 'Basic boolean storage example using useSessionStorage.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BooleanStorageExample = () => {
  const [isActive, setIsActive, { loading, error, remove, reset }] = useSessionStorage(
    'user-active',
    true
  );

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>Boolean Storage</h1>
        <div style={{ fontSize: '1.1rem', color: '#fff', marginTop: 4 }}>
          Basic boolean storage example using useSessionStorage.
        </div>
      </div>
      <div style={{ marginBottom: '10px', marginTop: '20px' }}>
        <label>Active: </label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={handleToggle}
          disabled={loading}
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={remove} style={{ ...getButtonStyle('secondary'), marginRight: '10px' }}>Remove</button>
        <button onClick={reset} style={getButtonStyle('secondary')}>Reset to Default</button>
      </div>
      <div>
        <strong>Current State:</strong> {isActive ? 'Active' : 'Inactive'}
      </div>
      {loading && <div style={{ color: 'blue' }}>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
    </div>
  );
};

export const BooleanStorage: Story = {
  render: () => <BooleanStorageExample />, 
};
