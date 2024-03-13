import config from '@antfu/eslint-config'

export default config({
  typescript: true,
  vue: true,
  jsonc: false,
  yaml: false,
  rules: {
    'ts/no-require-imports': 'off',
    'ts/no-var-requires': 'off',
    'unused-imports/no-unused-imports': 'off',
    'import/order': 'off',
    'curly': ['error', 'all'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/valid-v-for': 'off',
    'vue/require-v-for-key': 'off',
  },
})
