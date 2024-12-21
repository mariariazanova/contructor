import stylelintConfigStandard from 'stylelint-config-standard';
import stylelintScss from 'stylelint-scss';

/** @type {import('stylelint').Config} */
const config = {
  extends: [stylelintConfigStandard, stylelintScss],
  rules: {
    'at-rule-no-unknown': null,
    'import-notation':  ['string', { ignore: ['url'] }]
  },
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/vendor/**'],
};

export default config;
