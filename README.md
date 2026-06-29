<img src="./public/hero-image.png">

# useSessionStorage

A powerful, production-ready React hook for SessionStorage management with comprehensive serialization support, type safety, and event handling.

## 📚 DeepWiki Project Knowledge Base

> **Explore the full documentation, architecture, and deep technical notes for this project on DeepWiki:**
>
> [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/asudbury/use-session-storage)

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

```bash
npm i @asudbury/use-session-storage
```

## 🚀 Quick Start

```tsx
import useSessionStorage from '@asudbury/use-session-storage';

function MyComponent() {
  const [value, setValue, { loading, error, remove }] = useSessionStorage(
    'my-key',
    'default-value'
  );

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} disabled={loading} />
      <button onClick={remove}>Clear</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
```

## 🔧 Advanced Usage

### With TypeScript

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useSessionStorage<User>('user', {
    id: 0,
    name: '',
    email: '',
  });

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

### With Validation

```tsx
const [count, setCount] = useSessionStorage('count', 0, {
  validator: (value) => {
    if (typeof value !== 'number') throw new Error('Must be a number');
    if (value < 0) throw new Error('Must be positive');
    return value;
  },
});
```

### With Debouncing

```tsx
const [text, setText] = useSessionStorage('text', '', {
  debounceMs: 500, // Wait 500ms before writing to storage
});
```

## ⚙️ Configuration Options

```tsx
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
```

## 🔄 Event Handling

Listen to storage changes across tabs and windows:

```tsx
const [theme, setTheme] = useSessionStorage('theme', 'light');

// Automatically syncs when changed in other tabs
useEffect(() => {
  console.log('Theme changed to:', theme);
}, [theme]);
```

## 🛡️ Error Handling

The hook provides comprehensive error handling for:

- JSON parsing errors
- Storage quota exceeded
- Invalid values
- Validation failures

## 📖 API Reference

### Return Value

```tsx
const [value, setValue, actions] = useSessionStorage(key, defaultValue, options);
```

- `value`: Current value from sessionStorage
- `setValue`: Function to update the value
- `actions`: Object with additional actions and states
  - `loading`: Boolean indicating if operation is in progress
  - `error`: Error object if operation failed
  - `remove`: Function to remove the item from storage
  - `reset`: Function to reset to default value

## 🔧 TypeScript Support

Full TypeScript support with proper type inference and IntelliSense for complete type safety.

## 📄 License

MIT © Adrian Sudbury

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/asudbury/use-session-storage/pulls).

- [Open a Pull Request](https://github.com/asudbury/use-session-storage/pulls)
- [View All Issues](https://github.com/asudbury/use-session-storage/issues)
- [Create a New Issue](https://github.com/asudbury/use-session-storage/issues/new)

## 📞 Support

If you have any questions or need help, please [Open an issue](https://github.com/asudbury/use-session-storage/issues) or use the links above.

Made with ❤️ for the React community


## ❤️ Support My Work

<a href="https://www.buymeacoffee.com/asudbury">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
       alt="Buy Me A Coffee"
       height="60">
</a>
