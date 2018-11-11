module.exports = {
    "env": {
      "browser": true,
      "node": true
    },
    "extends": [
      "plugin:vue/recommended",
      "airbnb-base",
      "prettier"
    ],
    "plugins": ["prettier", "import", "vue"],
    "parserOptions": {
      "parser": "babel-eslint",
      "sourceType": "module",
      "allowImportExportEverywhere": true,
      "codeFrame": false
    },
    "rules": {
      // 使用单引号
      "quotes": [
        "error",
        "single"
      ],
      // 禁止检查模块路径
      "import/no-unresolved": 0,
      // 不允许对 function 的参数进行重新赋值
      "no-param-reassign": 0,
      // 禁止出现未使用过的变量
      "no-unused-vars": ["error", {
        "args": "none"
      }],
      "prettier/prettier": ["error", {
        "singleQuote": true
      }],
      "vue/max-attributes-per-line" :"off",
      "vue/html-indent": "off",
      "vue/html-self-closing": "off"
    }
  }
