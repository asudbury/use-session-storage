import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import useSessionStorage from '../useSessionStorage';
import { getButtonStyle, storyStyles } from './shared/storyStyles';

const meta: Meta = {
  title: 'Number Validation',
  parameters: {
    docs: {
      description: {
        component:
          'Number validation with range constraints. Demonstrates type checking and range validation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const NumberValidationExample = () => {
  const validator = (value: any) => {
    if (typeof value !== 'number') {
      throw new Error('Value must be a number');
    }
    if (value < 0) {
      throw new Error('Value must be positive');
    }
    if (value > 100) {
      throw new Error('Value must be 100 or less');
    }
    return value;
  };

  const [score, setScore, { loading, error, remove, reset }] = useSessionStorage('game-score', 50, {
    validator,
  });

  const [inputValue, setInputValue] = useState(score.toString());

  const handleSubmit = () => {
    const numValue = parseInt(inputValue);
    setScore(numValue);
  };

  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>Number Validation</h1>
        <div style={{ fontSize: '1.1rem', color: '#fff', marginTop: 4 }}>
          Number validation with range constraints. Demonstrates type checking and range validation.
        </div>
      </div>
      <div style={{ marginBottom: '10px', marginTop: '20px' }}>
        <label>Score (0-100): </label>
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
        <strong>Current Score:</strong> {score}
      </div>
      {loading && <div style={{ color: 'blue' }}>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
    </div>
  );
};

export const NumberValidation: Story = {
  render: () => <NumberValidationExample />,
};
