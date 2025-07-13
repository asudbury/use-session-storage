// Shared styling system for consistent story layouts

export const storyStyles = {
  // Main container - standardized padding and margins
  container: {
    padding: '24px', // Consistent padding on all sides
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '1200px',
    margin: '0 auto', // Centered with no top/bottom margin
    border: 'none' // Explicit no border
  },

  // Page title
  pageTitle: {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#1a1a1a',
    borderBottom: '2px solid #e9ecef',
    paddingBottom: '12px',
    textAlign: 'left' as const
  },

  // Gradient header (like Introduction) - standardized margins, padding, borders
  gradientHeader: {
    margin: '0 0 2rem 0', // Consistent bottom margin
    padding: '40px 32px', // Consistent horizontal padding
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none', // Explicit no border
    borderRadius: '12px',
    textAlign: 'left' as const,
    color: 'white',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
  },

  gradientHeaderTitle: {
    margin: '0 0 16px 0', // Consistent bottom margin
    padding: '0', // Explicit no padding
    fontWeight: '700',
    letterSpacing: '-1px',
    border: 'none', // Explicit no border
    textAlign: 'left' as const
  },

  gradientHeaderSubtitle: {
    fontSize: '1.1em',
    margin: '0', // Explicit no margin
    padding: '0', // Explicit no padding
    border: 'none', // Explicit no border
    opacity: 0.95,
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: '1.5',
    textAlign: 'left' as const
  },

  // Page description
  pageDescription: {
    fontSize: '16px',
    color: '#6c757d',
    marginBottom: '32px',
    lineHeight: '1.5'
  },

  // Card containers - standardized margins, padding, borders
  card: {
    margin: '0 0 24px 0', // Consistent bottom margin only
    padding: '24px', // Consistent padding on all sides
    border: '1px solid #dee2e6', // Consistent border
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  },

  // Card headers
  cardHeader: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '16px',
    color: '#495057',
    textAlign: 'left' as const,
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },

  // Form elements
  formGroup: {
    marginBottom: '20px'
  },

  label: {
    display: 'block' as const,
    marginBottom: '8px',
    fontWeight: '500',
    color: '#495057',
    fontSize: '14px'
  },

  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    fontSize: '14px',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    backgroundColor: '#ffffff'
  },

  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    fontSize: '14px',
    resize: 'vertical' as const,
    fontFamily: 'inherit',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
  },

  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ced4da',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
  },

  // Buttons
  button: {
    padding: '12px 24px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.15s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  },

  buttonPrimary: {
    backgroundColor: '#007bff',
    color: '#ffffff'
  },

  buttonSecondary: {
    backgroundColor: '#6c757d',
    color: '#ffffff'
  },

  buttonDanger: {
    backgroundColor: '#dc3545',
    color: '#ffffff'
  },

  buttonSuccess: {
    backgroundColor: '#28a745',
    color: '#ffffff'
  },

  buttonDisabled: {
    backgroundColor: '#e9ecef',
    color: '#6c757d',
    cursor: 'not-allowed'
  },

  // Status displays
  successBox: {
    padding: '16px',
    backgroundColor: '#d4edda',
    borderRadius: '6px',
    color: '#155724',
    border: '1px solid #c3e6cb',
    marginBottom: '16px'
  },

  errorBox: {
    padding: '16px',
    backgroundColor: '#f8d7da',
    borderRadius: '6px',
    color: '#721c24',
    border: '1px solid #f5c6cb',
    marginBottom: '16px'
  },

  warningBox: {
    padding: '16px',
    backgroundColor: '#fff3cd',
    borderRadius: '6px',
    color: '#856404',
    border: '1px solid #ffeaa7',
    marginBottom: '16px'
  },

  infoBox: {
    padding: '16px',
    backgroundColor: '#d1ecf1',
    borderRadius: '6px',
    color: '#0c5460',
    border: '1px solid #bee5eb',
    marginBottom: '16px'
  },

  // Code display
  codeBlock: {
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: '6px',
    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
    fontSize: '13px',
    overflowX: 'auto' as const,
    border: '1px solid #e9ecef',
    lineHeight: '1.4'
  },

  // Logs container
  logsContainer: {
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: '6px',
    maxHeight: '300px',
    overflowY: 'auto' as const,
    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
    fontSize: '13px',
    border: '1px solid #e9ecef',
    lineHeight: '1.4'
  },

  // History/list items
  listItem: {
    padding: '12px',
    margin: '8px 0',
    borderRadius: '6px',
    fontSize: '14px',
    border: '1px solid #e9ecef'
  },

  listItemSuccess: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb'
  },

  listItemError: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb'
  },

  // Utility classes
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },

  textMuted: {
    color: '#6c757d'
  },

  textBold: {
    fontWeight: '600'
  },

  mb16: {
    marginBottom: '16px'
  },

  mb24: {
    marginBottom: '24px'
  },

  mt16: {
    marginTop: '16px'
  }
}

// Helper functions for combining styles
export const combineStyles = (...styles: Array<Record<string, unknown>>): Record<string, unknown> => {
  return Object.assign({}, ...styles)
}

export const getButtonStyle = (
  variant: 'primary' | 'secondary' | 'danger' | 'success',
  disabled: boolean = false
): Record<string, unknown> => {
  const baseStyle = storyStyles.button
  let variantStyle

  if (disabled) {
    variantStyle = storyStyles.buttonDisabled
  } else {
    switch (variant) {
      case 'primary':
        variantStyle = storyStyles.buttonPrimary
        break
      case 'secondary':
        variantStyle = storyStyles.buttonSecondary
        break
      case 'danger':
        variantStyle = storyStyles.buttonDanger
        break
      case 'success':
        variantStyle = storyStyles.buttonSuccess
        break
      default:
        variantStyle = storyStyles.buttonPrimary
    }
  }

  return combineStyles(baseStyle, variantStyle)
}
