// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-px2rem": {remUnit: 100},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: [
        'last 2 version',                                 //- 主流浏览器的最新两个版本
        'ios 7',                                          //- IOS7版本
        'android 2.3',                                    //- android 2.3版本
        'last 2 Explorer versions'],                      //- IE的最新两个版本 'last 2 Explorer versions'
      cascade: true,                                    //- 是否美化属性值 默认：true 
      remove:true                                       //- 是否去掉不必要的前缀 默认：true 
    }
  }
}
