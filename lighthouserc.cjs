module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:5173/', 'http://localhost:5173/about', 'http://localhost:5173/contact'],
            // 添加你想测试的所有页面 URL
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};