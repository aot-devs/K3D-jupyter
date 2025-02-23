module.exports = {
    extends: ["airbnb-base"],
    "env": {
        "browser": true
    },
    rules: {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "max-len": ["error", 120],
        "import/no-webpack-loader-syntax": 0,
        "import/no-unresolved": 0,
        "func-names": 0,
        "no-underscore-dangle": 0,
        "global-require": 0,
        "no-param-reassign": 0,
        "prefer-rest-params": 0,
        "prefer-spread": 0,
        "no-plusplus": 0,
        "no-bitwise": 0,
        "no-continue": 0,
        "prefer-destructuring": 0,
        "no-prototype-builtins": 0,
        "no-restricted-properties": 0,
        "no-use-before-define": 0,
        "no-loop-func": 0
    }
};