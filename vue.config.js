module.exports = {
    publicPath:'/',//默认路径
    outputDir:'dist',//默认输出路径
    assetsDir:'',//放置静态资源文件
    indexPath:"index.html",//指定生成index.html的输出路径
    filenameHashing:true,//控制文件名哈希
    //设置为true或warning时，eslint-loader在每次保存时lint代码 , 开发环境和生产环境都会生效
    //以下配置在生产环境构建时禁用eslint-loader
    lintOnSave:process.env.NODE_ENV !== 'production',
    runtimeCompiler:false,//是否使用包含运行时编译器的Vue构建版本，设置为true后可以在Vue组件中使用template 选项， 会使应用额外多10kb
    transpileDependencies:[],
    productionSourceMap:true,//是否需要生产环境的 source map
    //第三方插件
    pluginOptions:{

    },
    //修复热更新失效
    chainWebpack: config => {
        config.resolve.symlinks(true);
    }

}