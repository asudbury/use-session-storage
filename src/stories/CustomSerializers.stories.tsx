import type { Meta, StoryObj } from '@storybook/react';
import useSessionStorage from '../useSessionStorage';
import { getButtonStyle, storyStyles } from './shared/storyStyles';

const meta: Meta = {
  title: 'Custom Serializers',
  parameters: {
    docs: {
      description: {
        component: 'Shows custom serialization for Date objects and other special data types that require custom handling.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const CustomSerializerExample = () => {
  const dateSerializer = {
    parse: (value: string) => new Date(value),
    stringify: (value: Date) => value.toISOString(),
  };

  const [lastLogin, setLastLogin, { loading, error, remove, reset }] = useSessionStorage(
    'last-login',
    new Date(),
    { serializer: dateSerializer }
  );

  const updateLoginTime = () => {
    setLastLogin(new Date());
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={storyStyles.container}>
        <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>Custom Date Serializer</h1>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <strong>Last Login:</strong> {lastLogin.toLocaleString()}
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={updateLoginTime} style={getButtonStyle('primary')}>
          Update Login Time
        </button>
      </div>
      <div>
        <button onClick={remove} style={{ ...getButtonStyle('secondary'), marginRight: '10px' }}>
          Remove
        </button>
        <button onClick={reset} style={getButtonStyle('secondary')}>
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export const CustomSerializers: Story = {
  render: () => <CustomSerializerExample />,
};
