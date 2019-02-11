module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                changeOrigin: true
            },
            '/topic': {
                target: 'http://m.you.163.com',
                changeOrigin: true
            }
        }
    }
}