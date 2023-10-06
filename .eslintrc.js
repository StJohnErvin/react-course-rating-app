module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'settings': {
    'react': {
      'version': 'detect' 
    },
  },
  'rules': {
    'indent': ['error', 2], // Use 2 spaces for indentation
    'semi': ['error', 'always'], // Enforce the use of semicolons
    'quotes': ['error', 'single'], // Enforce single quotes for strings
  }
};
