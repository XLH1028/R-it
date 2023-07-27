module.exports = {
    base:'/Radar-it/',
    title:'Radar-it',
    description:"IT 服务",
    head: [
        ['link', { rel: 'icon', href:'logo.png'}],

        // ['link', { rel: 'apple-touch-icon', href: '/photo.jpg' }]
        ['meta', { name: 'keywords', content:'jieshao'}]
    ],

    serviceWorker: true ,// 是否开启 PWA
    themeConfig: {

        logo: '/assets/img/it.png',
        nav: [
            { text: 'IT服务', link: '/component/giud' },
            { text: 'IT工具', link: '/demo/'},
            // {
            //     text: 'Typescript 学习笔记',
            //     items:[
            //         {text:'笔记', link: '/guide/ts/'},// 以 ‘/’结束，默认读取 README.md
            //         {text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
            //     ]
            // }
        ],
        sidebar:{
            '/component/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        {title: '介绍', path: '/component/giud'},
                        {title: '安装', path: '/component/install'},
                        {title: '快速开始', path: '/component/start'}
                    ]
                }
            ]
        },

    }
}
