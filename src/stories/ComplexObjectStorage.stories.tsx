import type { Meta, StoryObj } from '@storybook/react';
import useSessionStorage from '../useSessionStorage';
import { getButtonStyle, storyStyles } from './shared/storyStyles';

const meta: Meta = {
  title: 'Complex Object Storage',
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates complex object storage with nested properties, type safety, and structured data management.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ObjectExample = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    preferences: {
      theme: string;
      notifications: boolean;
    };
  }

  const defaultUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    preferences: {
      theme: 'light',
      notifications: true,
    },
  };

  const [user, setUser, { loading, error, remove, reset }] = useSessionStorage<User>('user-profile', defaultUser);

  const updateName = (name: string) => {
    setUser({ ...user, name });
  };

  const updateEmail = (email: string) => {
    setUser({ ...user, email });
  };

  const updateTheme = (theme: string) => {
    setUser({ ...user, preferences: { ...user.preferences, theme } });
  };

  const toggleNotifications = () => {
    setUser({ ...user, preferences: { ...user.preferences, notifications: !user.preferences.notifications } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>Complex Object Storage</h1>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="user-name">Name: </label>
        <input
          id="user-name"
          type="text"
          value={user.name}
          onChange={(e) => updateName(e.target.value)}
          style={{ padding: '5px', marginLeft: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="user-email">Email: </label>
        <input
          id="user-email"
          type="email"
          value={user.email}
          onChange={(e) => updateEmail(e.target.value)}
          style={{ padding: '5px', marginLeft: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="user-theme">Theme: </label>
        <select
          id="user-theme"
          value={user.preferences.theme}
          onChange={(e) => updateTheme(e.target.value)}
          style={{ padding: '5px', marginLeft: '5px' }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="user-notifications">
          <input
            id="user-notifications"
            type="checkbox"
            checked={user.preferences.notifications}
            onChange={toggleNotifications}
            style={{ marginRight: '5px' }}
          />
          Enable Notifications
        </label>
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
        <strong>Current User:</strong>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', marginTop: '10px', borderRadius: '4px' }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export const ComplexObjectStorage: Story = {
  render: () => <ObjectExample />,
};
