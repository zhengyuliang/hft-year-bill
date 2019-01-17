module.exports = {

    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    },
    devServer: {
        proxy: {
            '/caoyu': {
                target: 'https://a95oyxv7s6.execute-api.cn-northwest-1.amazonaws.com.cn',
                pathRewrite: {'^/caoyu' : ''}
            },
        }
    }
}