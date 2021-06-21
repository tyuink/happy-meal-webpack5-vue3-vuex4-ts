# Happy Meal (欢乐儿童餐)


本项目是由一系列极简的前端构建模板组成。可以根据自己需要，快速建立前端原型，尽快进入业务逻辑的编写状态。


## 套餐【A】：Webpack 5 + Vue 3 + Vuex 4 + TypeScript
- 项目名称：appy-meal-webpack5-vue3-vuex4-ts
- 项目地址：https://github.com/tyuink/happy-meal-webpack5-vue3-vuex4-ts.git


## 套餐【B】：Webpack 5 + React + Redux + TypeScript
- 暂未发布，敬请期待


## 参考互联网部份文章
- https://juejin.cn/post/6924180659829211143


## 在 webpack 5 下，无法安装下列插件，后续有时间慢慢更新：
- optimize-css-assets-webpack-plugin
- friendly-errors-webpack-plugin
- speed-measure-webpack-plugin


## Vue 3 的 Composition API vs Vue 2 的 Option API


```js
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true, // true 为 Option API，false 为 Composition API
      __VUE_PROD_DEVTOOLS__: false,
    })
```


- https://www.jianshu.com/p/5ebec903712c