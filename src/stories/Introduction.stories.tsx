import type { Meta, StoryObj } from '@storybook/react';
import { storyStyles } from './shared/storyStyles';

/**
 * Introduction to useSessionStorage hook - A comprehensive React hook for SessionStorage management.
 *
 * This introduction provides an overview of the hook's capabilities, installation instructions,
 * and guides you through the various features and usage patterns available in the documentation.
 *
 * Features:
 * - Comprehensive hook overview
 * - Installation instructions
 * - Quick start examples
 * - Feature highlights
 * - Navigation to different story sections
 * - Interactive code examples
 * - Configuration options
 * - Error handling patterns
 *
 * @returns Introduction component showcasing the hook's capabilities
 */
const meta: Meta = {
  title: ' Introduction',
  parameters: {
    docs: {
      description: {
        component: `
# 🚀 useSessionStorage

A powerful, production-ready React hook for SessionStorage management with comprehensive serialization support, type safety, and event handling.

## 🎯 Key Features

- **🔄 Automatic Serialization**: JSON serialization/deserialization with error handling
- **🛡️ Type Safe**: Full TypeScript support with generic types
- **⚡ Performance Optimized**: Efficient state management and memory leak prevention
- **🎛️ Event Handling**: Listen to storage changes across tabs/windows
- **📦 Default Values**: Support for default values and fallbacks
- **🔍 Validation**: Optional value validation with custom validators
- **🚫 SSR Safe**: Server-side rendering compatible
- **🔄 Synchronization**: Automatic sync across multiple hook instances
- **⏱️ Debounced Updates**: Optional debounced writes for performance
- **📊 State Management**: Comprehensive loading and error states

## 📦 Installation

\`\`\`bash
npm install use-session-storage
\`\`\`

## 🚀 Quick Start

\`\`\`tsx
import useSessionStorage from 'use-session-storage';

function MyComponent() {
  const [value, setValue, { loading, error, remove }] = useSessionStorage('my-key', 'default-value');

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
      />
      <button onClick={remove}>Clear</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
\`\`\`

## 🔧 Advanced Usage

### With TypeScript

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useSessionStorage<User>('user', {
    id: 0,
    name: '',
    email: ''
  });

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\`

### With Validation

\`\`\`tsx
const [count, setCount] = useSessionStorage('count', 0, {
  validator: (value) => {
    if (typeof value !== 'number') throw new Error('Must be a number');
    if (value < 0) throw new Error('Must be positive');
    return value;
  }
});
\`\`\`

### With Debouncing

\`\`\`tsx
const [text, setText] = useSessionStorage('text', '', {
  debounceMs: 500 // Wait 500ms before writing to storage
});
\`\`\`

## ⚙️ Configuration Options

\`\`\`tsx
interface UseSessionStorageOptions<T> {
  serializer?: {
    parse: (value: string) => T;
    stringify: (value: T) => string;
  };
  validator?: (value: any) => T;
  debounceMs?: number;
  syncAcrossInstances?: boolean;
  onError?: (error: Error) => void;
}
\`\`\`

## 🔄 Event Handling

Listen to storage changes across tabs and windows:

\`\`\`tsx
const [theme, setTheme] = useSessionStorage('theme', 'light');

// Automatically syncs when changed in other tabs
useEffect(() => {
  console.log('Theme changed to:', theme);
}, [theme]);
\`\`\`

## 🛡️ Error Handling

The hook provides comprehensive error handling for:
- JSON parsing errors
- Storage quota exceeded
- Invalid values
- Validation failures

## 🔧 TypeScript Support

Full TypeScript support with proper type inference and IntelliSense for complete type safety.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Introduction component
const IntroductionComponent = () => {
  return (
    <div style={storyStyles.container}>
      {/* Header Section */}
      <div style={storyStyles.gradientHeader}>
        <h1 style={storyStyles.gradientHeaderTitle}>useSessionStorage</h1>
        <p style={storyStyles.gradientHeaderSubtitle}>
          A powerful React hook for SessionStorage management with comprehensive serialization
          support and type safety
        </p>
      </div>
      {/* Installation Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          textAlign: 'left',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#667eea',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>Installation</h2>
        </div>
        <div style={{ position: 'relative', display: 'block', width: '70%' }}>
          <pre
            style={{
              backgroundColor: '#f8f9fa',
              color: '#333',
              padding: '20px 50px 20px 40px',
              borderRadius: '8px',
              fontSize: '16px',
              fontFamily: 'monospace',
              margin: '0',
              border: '1px solid #e9ecef',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ marginRight: '10px', color: '#666' }}>$</span>
            npm install use-session-storage
          </pre>
          <button
            onClick={() => {
              navigator.clipboard.writeText('npm install use-session-storage');
              // Show a brief success feedback
              const btn = document.activeElement as HTMLButtonElement;
              const originalHTML = btn.innerHTML;
              btn.innerHTML =
                '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>';
              btn.style.color = '#4ade80';
              setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.color = '#9ca3af';
              }, 1000);
            }}
            style={{
              position: 'absolute',
              top: '50%',
              right: '20px',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.color = '#666';
              (e.target as HTMLButtonElement).style.backgroundColor = '#f0f0f0';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.color = '#9ca3af';
              (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
            }}
            title="Copy to clipboard"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Key Features Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#f093fb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(240, 147, 251, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>Key Features</h2>
        </div>
        <ul
          style={{
            paddingLeft: '0',
            lineHeight: '1.8',
            fontSize: '16px',
            listStyle: 'none',
          }}
        >
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#48bb78',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            <span>
              <strong>Automatic Serialization</strong>: JSON serialization/deserialization with
              error handling
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span>
              <strong>Type Safe</strong>: Full TypeScript support with generic types
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#f093fb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
              </svg>
            </div>
            <span>
              <strong>Performance Optimized</strong>: Efficient state management and memory leak
              prevention
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#48bb78',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <span>
              <strong>Event Handling</strong>: Listen to storage changes across tabs/windows
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <span>
              <strong>Default Values</strong>: Support for default values and fallbacks
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#f093fb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <span>
              <strong>Validation</strong>: Optional value validation with custom validators
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#48bb78',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </div>
            <span>
              <strong>SSR Safe</strong>: Server-side rendering compatible
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M3 3v5h5" />
                <path d="M3 8l9-9 9 9-9 9-9-9" />
              </svg>
            </div>
            <span>
              <strong>Synchronization</strong>: Automatic sync across multiple hook instances
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#f093fb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <span>
              <strong>Debounced Updates</strong>: Optional debounced writes for performance
            </span>
          </li>
          <li
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <div
              style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#48bb78',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                flexShrink: 0,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M3 3v5h5" />
                <path d="M3 8l9-9 9 9-9 9-9-9" />
              </svg>
            </div>
            <span>
              <strong>State Management</strong>: Comprehensive loading and error states
            </span>
          </li>
        </ul>
      </div>

      {/* Feature Highlights */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <div
          style={{
            padding: '25px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3
              style={{
                margin: 0,
                color: '#2d3748',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              Type Safe
            </h3>
          </div>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6' }}>
            Full TypeScript support with generic types for complete type safety and IntelliSense.
          </p>
        </div>

        <div
          style={{
            padding: '25px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#f093fb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                boxShadow: '0 4px 12px rgba(240, 147, 251, 0.3)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
              </svg>
            </div>
            <h3
              style={{
                margin: 0,
                color: '#2d3748',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              Performance
            </h3>
          </div>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6' }}>
            Optimized for performance with built-in memory leak prevention and efficient state
            management.
          </p>
        </div>

        <div
          style={{
            padding: '25px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #e9ecef',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '15px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#48bb78',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
                boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M3 3v5h5" />
                <path d="M3 8l9-9 9 9-9 9-9-9" />
              </svg>
            </div>
            <h3
              style={{
                margin: 0,
                color: '#2d3748',
                fontSize: '20px',
                fontWeight: '600',
              }}
            >
              Synchronized
            </h3>
          </div>
          <p style={{ margin: 0, color: '#4a5568', lineHeight: '1.6' }}>
            Automatic synchronization across multiple hook instances and tabs for seamless state
            management.
          </p>
        </div>
      </div>

      {/* Quick Start Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#48bb78',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>Quick Start</h2>
        </div>
        <pre
          style={{
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
            margin: '0',
            border: '1px solid #e9ecef',
            overflow: 'auto',
          }}
        >
          {`import useSessionStorage from 'use-session-storage';

function MyComponent() {
  const [value, setValue, { loading, error, remove }] = useSessionStorage('my-key', 'default-value');

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={loading}
      />
      <button onClick={remove}>Clear</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}`}
        </pre>
      </div>

      {/* TypeScript Usage Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#667eea',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14,2 14,8 20,8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10,9 9,9 8,9" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>TypeScript Usage</h2>
        </div>
        <pre
          style={{
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
            margin: '0',
            border: '1px solid #e9ecef',
            overflow: 'auto',
          }}
        >
          {`interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useSessionStorage<User>('user', {
    id: 0,
    name: '',
    email: ''
  });

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`}
        </pre>
      </div>

      {/* Validation Example Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#f093fb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(240, 147, 251, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>With Validation</h2>
        </div>
        <pre
          style={{
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
            margin: '0',
            border: '1px solid #e9ecef',
            overflow: 'auto',
          }}
        >
          {`const [count, setCount] = useSessionStorage('count', 0, {
  validator: (value) => {
    if (typeof value !== 'number') throw new Error('Must be a number');
    if (value < 0) throw new Error('Must be positive');
    return value;
  }
});`}
        </pre>
      </div>

      {/* Configuration Options Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#48bb78',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>Configuration Options</h2>
        </div>
        <pre
          style={{
            backgroundColor: '#f8f9fa',
            color: '#333',
            padding: '20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace',
            margin: '0',
            border: '1px solid #e9ecef',
            overflow: 'auto',
          }}
        >
          {`interface UseSessionStorageOptions<T> {
  serializer?: {
    parse: (value: string) => T;
    stringify: (value: T) => string;
  };
  validator?: (value: any) => T;
  debounceMs?: number;
  syncAcrossInstances?: boolean;
  onError?: (error: Error) => void;
}`}
        </pre>
      </div>

      {/* Error Handling Section */}
      <div
        style={{
          marginBottom: '30px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e9ecef',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#f093fb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              boxShadow: '0 4px 12px rgba(240, 147, 251, 0.3)',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 style={{ margin: 0, fontSize: '28px', color: '#333' }}>Error Handling</h2>
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
          The hook provides comprehensive error handling for:
        </p>
        <ul
          style={{
            paddingLeft: '20px',
            lineHeight: '1.8',
            fontSize: '16px',
            color: '#666',
          }}
        >
          <li>JSON parsing errors</li>
          <li>Storage quota exceeded</li>
          <li>Invalid values</li>
          <li>Validation failures</li>
        </ul>
      </div>
    </div>
  );
};

/**
 * Introduction Story
 *
 * Welcome to useSessionStorage! This comprehensive introduction showcases
 * the hook's capabilities and guides you through the documentation.
 */
export const Introduction = {
  render: () => <IntroductionComponent />,
};
