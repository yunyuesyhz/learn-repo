module.exports = {
    title: 'TypeScript4 文档',
    description: 'TypeScript4 最新官方文档翻译',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '冴羽的 JavaScript 博客',
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/vue',
                collapsable: false, // 不折叠
                children: [
                    { title: "条件类型", path: "/handbook/vue" },
                    { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    },
    theme:'reco',
    base: '/learn-repo/',
}