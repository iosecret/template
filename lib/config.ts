/** 模板列表 */
export const templateList = [
  { name: 'lerna', text: 'lerna 模板' },
  { name: 'react', text: 'react js 模板' },
  { name: 'react-rule', text: 'react js 模板（带lint规则）' },
  { name: 'react-ts', text: 'react ts 模板' },
  { name: 'react-ts-rule', text: 'react ts 模板（带lint规则）' },
];

/** 模板基本配置 */
export const templateConfig = {
  dependencies: {
    vscode: '.vscode',
    husky: '.husky',
    rule: 'rule',
  },
  packages: {
    lerna: {
      path: 'lerna',
      dependencies: ['.vscode', '.husky', 'commitlint', 'eslint', 'prettier'],
    },
    react: { path: 'react', dependencies: ['iosecret'] },
    'react-ts': { path: 'react-ts', dependencies: ['iosecret'] },
    'react-rule': {
      path: 'react-rule',
      dependencies: ['.vscode', '.husky', 'iosecret', 'commitlint', 'eslint', 'prettier'],
    },
    'react-ts-rule': {
      path: 'react-ts-rule',
      dependencies: ['.vscode', '.husky', 'iosecret', 'commitlint', 'eslint', 'prettier'],
    },
  },
};

/** eslint/commitlint 规则配置 */
export const ruleConfig = {
  /** eslint 相关配置依赖 */
  eslint: {
    dependencies: ['eslint-config-iosecret-react'],
    files: ['eslint/.eslintignore', 'eslint/.eslintrc.js', '.husky/pre-commit'],
  },
  /** commitlint 相关配置依赖 */
  commitlint: {
    dependencies: ['@commitlint/cli', '@commitlint/config-conventional'],
    files: ['commitlint/commitlint.config.js', '.husky/commit-msg'],
  },
  /** 格式化相关配置依赖 */
  prettier: {
    dependencies: [] as string[],
    files: ['prettier/.prettierrc', 'prettier/.prettierignore', '.vscode'],
  },
};
