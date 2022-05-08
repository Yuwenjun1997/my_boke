const path = require('path')
const fs = require('fs')

const rootDirPath = path.join(__dirname, '../', '../')
let baseDir = 'notes'

function scanFiles(prev, next) {
	const scanPath = path.join(prev, next)
	const stat = fs.statSync(scanPath)

	if (stat.isDirectory()) {
		// 文件夹
		return fs.readdirSync(scanPath).map((dir) => scanFiles(scanPath, dir))
	} else {
		// 文件
		return scanPath
	}
}

function recurseToArray(recurseArr = []) {
	const arr = []
	function recurse(list) {
		list.forEach((item) => {
			if (item instanceof Array) {
				recurse(item)
			} else {
				arr.push(item)
			}
		})
	}
	recurse(recurseArr)
	return arr
}

function makeSidebar(fileList = []) {
	const slideBar = {}
	const prefixDirPath = path.join(rootDirPath, baseDir)
	fs.readdirSync(prefixDirPath).forEach((dir) => {
		const key = `/${baseDir}/${dir}/`
		const dirPath = path.join(prefixDirPath, dir)
		slideBar[key] = fileList
			.filter((item) => item.indexOf(dirPath) > -1)
			.map((item) =>
				item
					.slice(dirPath.length + 1)
					.replace(/\\/g, '/')
					.replace('README.md', '')
			)
	})
	return slideBar
}

const fileList = recurseToArray(scanFiles(rootDirPath, baseDir))

module.exports = function (baseDirName) {
	baseDir = baseDirName || 'notes'
	return makeSidebar(fileList)
}
