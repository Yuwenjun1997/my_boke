const FileScanner = require('./common/FileScanner')
const fileScanner = new FileScanner('../../zh-cn', 'zh-cn')

module.exports = {
	base: '/my_boke_vuepress/',
	title: '前端开发',
	description: '记录前端使用的技术',
	head: [['link', { rel: 'icon', href: '/logo_42x42.png' }]],
	markdown: {},
	themeConfig: {
		activeHeaderLinks: true,
		displayAllHeaders: true,
		smoothScroll: true,
		search: false,
		searchMaxSuggestions: 10,
		sidebarDepth: 2,
		logo: '/logo_42x42.png',
		nav: [
			{
				text: '笔记',
				items: [
					{ text: '随记', link: '/zh-cn/nodes/other/01-其它笔记' },
					{ text: 'JS相关', link: '/zh-cn/nodes/js/01-日常开发工具函数' },
					{ text: 'CSS相关', link: '/zh-cn/nodes/css/01-日常开发CSS样式类' },
					{ text: 'nodejs相关', link: '/zh-cn/nodes/node/' },
				],
			},
			{
				text: 'Vue全家桶',
				items: [
					{ text: 'vue2.x', link: '/zh-cn/vue/vue2/' },
					{ text: 'vue-router', link: '/zh-cn/vue/router/' },
					{ text: 'vuex', link: '/zh-cn/vue/vuex/' },
					{ text: 'axios', link: '/zh-cn/vue/axios/' },
				],
			},
			{
				text: 'Webpack',
				link: '/zh-cn/webpack',
			},
			{
				text: '文章分享',
				link: '/zh-cn/article/',
			},
		],
		sidebar: fileScanner.makeSlidebar(),
	},

	plugins: [
		'@vuepress/back-to-top',
		[
			'vuepress-plugin-zooming',
			{
				selector: '.theme-default-content img',
				delay: 1000,
				options: {
					bgColor: 'black',
					zIndex: 10000,
				},
			},
		],
	],
}
