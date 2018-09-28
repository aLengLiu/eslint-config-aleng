/**
 * eslint config by aleng.liu
 */
const rules = require('./rules');

module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'node': true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: rules
};