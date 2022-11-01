module.exports = {
    title: 'Learn Note',
    description: 'Now',
    themeConfig: {
        nav: [
            {
                text: '基础', link: '/base/b-html'
            },
            { text: 'javascript', link: '/js/index' },
            { text: '微信小程序', link: '/weixin/index' },
            {
                text: 'Vue',
                items: [
                    { text: 'Vue 基础', link: '/vue/index' },
                    { text: 'VueRouter', link: '/vue/VueRouter' },
                    { text: 'Item C', link: '/item-3' }
                ]
            },
            {
                text: '进阶',
                items: [
                    { text: 'Webpack', link: '../webpack/index' },
                    { text: 'VueRouter', link: '/vue/VueRouter' },
                    { text: 'Item C', link: '/item-3' }
                ]
            },
            { text: 'Http', link: '/http/index' },
            { text: '面试', link: '/interview/index' },
            { text: 'rn', link: '/react-native/index' },
            { text: 'TypeScript', link: '/ts/index' },
        ],
        sidebar: {
            '/js/': [
                {
                    text: '目录',
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: '基础', link: '/js/' }, // /guide/index.md
                        { text: '进阶', link: '/js/advance' }, // /guide/one.md
                    ]
                },

            ],
            '/base/': [
                {
                    text: '基础',
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