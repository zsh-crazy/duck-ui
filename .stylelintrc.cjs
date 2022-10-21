module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    'at-rule-no-unknown': null,
    'selector-class-pattern': [
      // 命名标准 -
      '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be kebab_case',
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'scss/dollar-variable-pattern': /^([a-z][a-z0-9]*)(_[a-z0-9]+)*/,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
