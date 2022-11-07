module.exports = {
    title: 'Learn Note',
    lang: 'en-US',
    description: 'Now',
    outDir: '../build',
    base: '/build/',
    themeConfig: {
        nav: [
            {
                text: '基础', link: '../base/b-html'
            },
            {
                text: '进阶',
                items: [
                    { text: 'JavaScript', link: '../js/index' },
                    { text: 'TypeScript', link: '../ts/index' },
                    { text: 'Item C', link: '/item-3' }
                ]
            },
            { text: '微信小程序', link: '../weixin/index' },
            {
                text: 'Vue',
                items: [
                    { text: 'Vue 基础', link: '/vue/index' },
                    { text: 'VueRouter', link: '/vue/VueRouter' },
                    { text: 'Vuex', link: '../vue/3-ts.md' },
                    { text: 'Vue3+Ts+setup', link: '../vue/3-ts.md' }
                ]
            },
            {
                text: 'NodeJs',
                items: [
                    { text: 'Node', link: '../node/index' },
                    { text: 'Koa', link: '/vue/VueRouter' },
                    { text: 'Nest', link: '../vue/3-ts.md' },
                ]
            },
            { text: '跨端跨平台', link: '/react-native/index' },
        ],
        sidebar: {
            '/base/': [
                {
                    text: '目录',
                    items: [
                        { text: 'HTML', link: '../base/b-html' },
                        { text: 'CSS', link: '../base/b-css' },
                        { text: 'JS', link: '../base/b-js' },
                        { text: 'HTTP', link: '../base/b-http' },
                        { text: '性能优化', link: '../base/b-performance' },
                        { text: '浏览器', link: '../base/b-browser' },
                        { text: 'Git', link: '../base/b-git' },
                    ]
                }
            ]
        }
    }
}