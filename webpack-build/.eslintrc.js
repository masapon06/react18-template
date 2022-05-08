module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目をLintから除外する設定
    'prettier', // prettierのextendsは他のextendsより後に記述する ref: https://github.com/prettier/eslint-config-prettier
  ],
  plugins: ['@typescript-eslint'], // ref: https://typescript-eslint.io/
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off', // vscodeで見た時このwarningが出るのでoffを明示
  },
}
