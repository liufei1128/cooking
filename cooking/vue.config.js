module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7777',
                changeOrigin: true
            },
            '/topic': {
                target: 'http://m.you.163.com',
                changeOrigin: true
            }
        }
    }
}