const makeSidebar = require('./utils/makeSidebar')

module.exports = {
	title: '前端开发笔记',
	description: '记录前端使用的技术',
	head: [['link', { rel: 'icon', href: '/logo_42x42.png' }]],
	// markdown 配置
	markdown: {
		lineNumbers: true,
	},
	// 主题配置
	themeConfig: {
		logo: '/logo_42x42.png',
		sidebarDepth: 2,
		displayAllHeaders: true,
		lastUpdated: '最后更新',
		smoothScroll: true,
		nav: [
			{ text: 'JavaScript', link: '/notes/javascript/01-工具函数' },
			{ text: 'TypeScript', link: '/notes/typescript/01-编译第一个ts程序' },
			{ text: 'Vue.js', link: '/notes/vuejs/' },
			{
				text: '其它笔记',
				items: [
					{
						text: 'html相关',
						link: '/notes/others/html/',
					},
					{
						text: 'css相关',
						link: '/notes/others/css/01-常用样式',
					},
				],
			},
		],
		sidebar: makeSidebar(),
	},
	// 插件
	plugins: ['@vuepress/back-to-top'],
}
