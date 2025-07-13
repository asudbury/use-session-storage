# Development Guide

## Getting Started

### Prerequisites
- Node.js >= 14.0.0
- npm or yarn

### Installation
```bash
npm install
```

### Development Scripts
```bash
# Start development with Storybook
npm run storybook

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Build the library
npm run build

# Build in watch mode
npm run build:watch

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Analyze bundle size
npm run analyze
```

## Project Structure

```
src/
├── index.ts                    # Main export
├── useSessionStorage.ts        # Hook implementation
├── useSessionStorage.test.ts   # Unit tests
├── stories/                    # Storybook stories
│   ├── Introduction.stories.tsx
│   ├── BasicUsage.stories.tsx
│   ├── Advanced.stories.tsx
│   ├── TypeScript.stories.tsx
│   ├── Validation.stories.tsx
│   ├── Performance.stories.tsx
│   ├── ErrorHandling.stories.tsx
│   └── Integration.stories.tsx
└── test/
    └── setup.ts               # Test setup
```

## Development Guidelines

### Code Style
- Use TypeScript for all source files
- Follow ESLint configuration
- Use Prettier for code formatting
- Write comprehensive JSDoc comments
- Maintain 100% test coverage

### Testing
- Write unit tests for all functionality
- Use React Testing Library for component tests
- Test edge cases and error scenarios
- Mock sessionStorage for testing

### Documentation
- Update README.md for new features
- Add Storybook stories for new functionality
- Update CHANGELOG.md following semantic versioning
- Include TypeScript examples in documentation

### Performance Considerations
- Use debouncing for frequent updates
- Implement proper cleanup in useEffect
- Avoid unnecessary re-renders
- Consider memory usage for large objects

## Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Build the library: `npm run build`
4. Run full test suite: `npm run test:coverage`
5. Build Storybook: `npm run build-storybook`
6. Create Git tag and push
7. Publish to npm: `npm publish`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Update documentation
7. Submit a pull request

## Architecture

### Hook Design
The useSessionStorage hook is designed with the following principles:
- **Separation of Concerns**: Storage logic, serialization, and validation are separate
- **Error Handling**: Comprehensive error handling with proper error types
- **Performance**: Debounced updates and efficient state management
- **Type Safety**: Full TypeScript support with proper generics

### Storage Strategy
- Uses native sessionStorage API
- Automatic JSON serialization/deserialization
- Fallback to default values on errors
- Cross-tab synchronization using storage events

### State Management
- Internal state for current value
- Loading states for async operations
- Error states for failed operations
- Cleanup on component unmount
