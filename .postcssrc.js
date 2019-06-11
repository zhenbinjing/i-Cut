// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    "autoprefixer":{},
    "postcss-import": {},
    "postcss-pxtorem": {
      rootValue: 100,            //- px/100转rem值，如果有不想转换的类在值后面改大写PX
      propList:['*'],            //- 需要转换的属性
      // selectorBlackList: []      //- 不需要转换的属性
    }  
  }
}