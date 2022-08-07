module.exports = {
    css: {
        // 公用样式配置，会在每个文件里面添加一行
        loaderOptions: {
            scss: {
                // additionalData: `@import "~@/variables.scss";`  看版本配置
                prependData: '@import "~@/styles/variables.scss";'
            }
        }
    }
    /* ,
        devServer: {
            proxy: {
                '/': {
                    target: 'http://127.0.0.1:8090/', // 后端接口
                    changeOrigin: true, // 是否跨域
                }
            }
        } */
}