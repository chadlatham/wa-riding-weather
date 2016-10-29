module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es6',
    'ryansobol/jquery',
    'ryansobol/materialize'
  ],
  rules: {
    // enable additional rules
    // "indent": ["error", 4],
    // "linebreak-style": ["error", "unix"],
    // "quotes": ["error", "double"],
    // "semi": ["error", "always"],

    // override default options for rules from base configurations
    // "comma-dangle": ["error", "always"],
    // "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "max-lines": "off"
  },
  globals: {
    google: true
  }
};
