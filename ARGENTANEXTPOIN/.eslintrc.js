module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable some strict rules for initial setup
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
