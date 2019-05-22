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
      //强制每行的最大属性数
      "vue/max-attributes-per-line" :["error", {
        "singleline": 4, //单行的时候，最多三个属性
        "multiline": { //多行的时候，最多一个属性
          "max": 1,
          "allowFirstLine": true  //多行时，属性对齐
        }
      }],
      "vue/html-indent": "off",
      "vue/html-self-closing": "off",
      "vue/singleline-html-element-content-newline": "off"
    }
  }
