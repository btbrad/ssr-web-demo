module.exports = {
    "env": {
        "es2021": true,
        "browser": true,
        "commonjs": true, // ADD, 支持对commonjs全局变量的识别
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "ecmaFeatures": {
            "jsx": true,
          },
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-var-requires": "off", 
    }
}
