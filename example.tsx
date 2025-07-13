import React from 'react';
import useSessionStorage from './src/useSessionStorage';

// Example component to demonstrate the hook
const ExampleComponent: React.FC = () => {
  const [name, setName, { loading, error, remove, reset }] = useSessionStorage('example-name', 'World');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>useSessionStorage Example</h2>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="name-input">Name: </label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          style={{ padding: '5px', marginLeft: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={remove} style={{ marginRight: '10px' }}>
          Remove
        </button>
        <button onClick={reset}>Reset to Default</button>
      </div>
      <div>
        <strong>Hello, {name}!</strong>
      </div>
      {loading && <div style={{ color: 'blue' }}>Loading...</div>}
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
    </div>
  );
};

export default ExampleComponent;
