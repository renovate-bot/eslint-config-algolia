module.exports = {
  "parser": "espree",
  "ecmaFeatures": {
    // https://github.com/eslint/eslint/issues/2785#issuecomment-113254153
    // we do not use ES6 right now, once we use it, we can
    // remove this whole configuration part and use airbnb default
    "modules": false
  },
  "rules": {
    "quote-props": [2, "as-needed"],
    "array-bracket-spacing": [2, "never"],
    "vars-on-top": 0,
    "no-param-reassign": 0,
    "max-len": [
      1,
      110,
      2
    ],
    "comma-dangle": [2, "never"],
    "no-use-before-define": [2, "nofunc"],
    "no-lonely-if": 2,
    "handle-callback-err": 2,
    "no-extra-parens": 2,
    "no-path-concat": 1,
    "func-style": [
      1,
      "declaration"
    ],
    "space-unary-ops": 2,
    "no-mixed-requires": [
      2,
      true
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "no-var": 0,
    "prefer-const": 0,
    "strict": [2, "global"],
    "object-curly-spacing": [2, "never"],
    "computed-property-spacing": [2, "never"],
    "func-names": 0
  }
}