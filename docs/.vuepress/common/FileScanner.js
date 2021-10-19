const path = require('path')
const fs = require('fs')

class FileScanner {
	constructor(dir, baseDir) {
		this.baseDir = baseDir
		this.dirList = []
		this.slideBar = {}
		this.travel(dir)
	}
	// 获取目录
	travel(dir) {
		const searchPath = path.join(__dirname, dir)
		const stat = fs.statSync(searchPath)
		if (!stat.isDirectory()) return
		const files = fs.readdirSync(searchPath)
		files.forEach((item) => {
			const stat = fs.statSync(path.join(__dirname, dir, item))
			if (stat.isDirectory()) {
				this.dirList.push(this.travel(dir + '/' + item))
			}
		})
		return dir
	}
	// 处理key
	formatKey(dir) {
		let d = dir.substring(dir.indexOf(this.baseDir)) + '/'
		if (d.indexOf('/') !== 0) {
			d = '/' + d
		}
		return d
	}
	// 读取dirList下的文件生成slidebar对象
	makeSlidebar() {
		let target = null
		this.dirList.forEach((item) => {
			const key = this.formatKey(item)
			target = this.slideBar[key] = []
			const files = fs.readdirSync(path.join(__dirname, item))
			files.forEach((file) => {
				const stat = fs.statSync(path.join(__dirname, item, file))
				if (stat.isFile() && file.indexOf('README') === -1) {
					const filename = file.slice(0, file.lastIndexOf('.'))
					target.push([filename, filename.split('-')[1]])
				}
			})
		})
		return this.slideBar
	}
}

module.exports = FileScanner
