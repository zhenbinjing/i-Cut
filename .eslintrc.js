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
      // 禁用 console
      "no-console": 0,
      // 不允许对 function 的参数进行重新赋值
      "no-param-reassign": 0,
      // 禁用指定的通过 require 加载的模块
      "no-return-assign": 0,
      // 要求 return 语句要么总是指定返回的值，要么不指定
      "consistent-return": 0,
      // 禁止标识符中有悬空下划线_bar
      "no-underscore-dangle": 0,
      // 强制数组方法的回调函数中有 return 语句
      "array-callback-return": 0,
      // 禁止出现未使用过的变量
      "no-unused-vars": ["error", {
        "args": "none"
      }],
      "prettier/prettier": ["error", {
        "singleQuote": true
      }]
    }
  }