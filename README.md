# demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vue项目最佳实践实现步骤
1. npm i svg-sprite-loader -D   安装 svg loader

2. npm i js-cookie -S

### 新知识点
1. 函数型组件，render里不能使用this，但是它会接收一个 context，通过context来访问 props

### 第7节课
1. 自定义指令
2. 问题 - 面包屑组件 和 菜单组件，router/index.js 路由配置不清晰，感觉很混乱，/about  redirect  到了 /about/index，在面包屑组件中，/about  和  /about/index 路由没有划分清楚
3. 跨域的问题其实是浏览器的问题，是浏览器在拦截