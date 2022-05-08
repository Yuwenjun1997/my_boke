(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{439:function(s,a,t){"use strict";t.r(a);var n=t(34),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"编译第一个ts程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译第一个ts程序"}},[s._v("#")]),s._v(" 编译第一个ts程序")]),s._v(" "),t("h2",{attrs:{id:"安装typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装typescript"}},[s._v("#")]),s._v(" 安装TypeScript")]),s._v(" "),t("p",[s._v("使用 npm 全局安装 TypeScript，这样就可以在任何地方使用其编译器 TSC")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g typescript\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装完成后，新建目录 "),t("code",[s._v("ts_in_action")]),s._v("，用 npm 初始化")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ts_in_action\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ts_in_action\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -y 表示用 yes 回答初始化过程中的所有终端提问")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"用-tsc-编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用-tsc-编译"}},[s._v("#")]),s._v(" 用 TSC 编译")]),s._v(" "),t("p",[s._v("安装好后就可以在命令行中使用 TSC 编译器，查看编译器的相关配置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("tsc -h\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建配置文件 "),t("code",[s._v("tsconfig.json")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("tsc --init\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\nmessage TS6071: Successfully created a tsconfig.json file.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("创建文件结构如下")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("package.json\ntsconfig.json\nsrc/\n\t|-index.ts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("在index.ts 文件内编写一个段代码：")]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" hello"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello TypeScript"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后在终端对这个文件进行编译：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("tsc ./src/index.ts\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("编译完成后，发现 src 目录下新生成了一个文件 "),t("code",[s._v("index.js")]),s._v("，内容是：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" hello "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello TypeScript"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("tsc 把ES6新语法 let 编译为 var ， 并且去掉了 TypeScript 的类型注解"),t("code",[s._v(":string")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"配建构建工具-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配建构建工具-webpack"}},[s._v("#")]),s._v(" 配建构建工具 webpack")]),s._v(" "),t("p",[s._v("安装三个包")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i webpack webpack-cli webpack-dev-server -D\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("为了增加可维护性，我们可以把工程开发环境、生产环境、公共环境分开的配置分开书写，最后通过插件合并。在配置 webpack 时，我们也遵循这个思路。同时在 src 目录下添加一个模板目录 tpl，用于存放首页模板。得到构建目录如下：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("build/\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-webpack.config.js\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所有配置文件的入口")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-webpack.base.config.js\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公共环境的配置")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-webpack.dev.config.js\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开发环境的配置")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-webpack.pro.config.js\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生产环境的配置")]),s._v("\nsrc/\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-tpl/\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("-index.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("再安装 webpack 中用到的加载器和插件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装加载器和编译器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D typescript ts-loader \t\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装各环境所需插件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D html-webpack-plugin clean-webpack-plugin webpack-merge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[t("p",[t("code",[s._v("ts-loader")]),s._v("：用于加载 ts 文件。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("typescript")]),s._v("：用于把 ts 文件编译成 js 文件。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("html-webpack-plugin")]),s._v("：通过一个模板帮助生成网站首页，并自动把 webpack 的输出文件嵌入到首页中。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("CleanWebpackPlugin")]),s._v(" ：因为有的时候为了避免缓存，我们网站需要在文件后加入hash，这样在多次构建后会产生很多无用的文件。这个插件可以帮助我们在每次成功构建后清空dist目录。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("webpack-merge")]),s._v("：用于合并配置文件。")])])]),s._v(" "),t("p",[s._v("至此，webpack配置工作完成。")]),s._v(" "),t("h2",{attrs:{id:"修改npm的脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改npm的脚本"}},[s._v("#")]),s._v(" 修改npm的脚本")]),s._v(" "),t("ul",[t("li",[s._v("在 package.json 中修改入口文件")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./src/index.ts"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("添加开发环境启动脚本")])]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("webpack-dev-server")]),s._v("启动本地服务器，通过"),t("code",[s._v("--mode")]),s._v("传入环境参数，最后用"),t("code",[s._v("--config")]),s._v("指定配置文件。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack-dev-server --mode=development --config ./build/webpack.config.js"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("终端启动开发环境构建：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run start\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\ni ｢wds｣: Project is running at http://localhost:8080/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nBuilt at: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-02-11 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":28:33\n     Asset       Size  Chunks             Chunk Names\n    app.js    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("361")]),s._v(" KiB    main  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("emitted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  main\nindex.html  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("317")]),s._v(" bytes          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("emitted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nEntrypoint main "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" app.js\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ni ｢wdm｣: Compiled successfully.\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("可以看到"),t("code",[s._v("webpack-dev-server")]),s._v("为我们启动了一个跑在8080端口的本地服务器。再次修改 index.ts 文件，然它在页面中显示一段文本：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hello")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello TypeScript"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ndocument"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelectorAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("innerHTML "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("每次更新，server 都会自动帮助我们重构代码，并刷新页面。需要注意的是，webpack 的输出文件 app.js 和模板插件生成的 index.html 都存放在内存中，需要用浏览器才能查看。")]),s._v(" "),t("ul",[t("li",[s._v("添加生产环境脚本")])]),s._v(" "),t("p",[s._v("生产环境需要用到 webpack ，同样通过 "),t("code",[s._v("--mode")]),s._v(" 传入环境参数，并用 "),t("code",[s._v("--config")]),s._v(" 指定配置文件")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --mode=production --config ./build/webpack.config.js"')]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("终端启动生产环境构建")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nHash: 4ccf59b5b928f628cd4b\nVersion: webpack "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.41")]),s._v(".5\nTime: 5698ms\nBuilt at: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),s._v("-02-11 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":01:12\n     Asset        Size  Chunks             Chunk Names\n    app.js  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1010")]),s._v(" bytes       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("emitted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  main\nindex.html   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("317")]),s._v(" bytes          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("emitted"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nEntrypoint main "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" app.js\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ./src/index.ts "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("105")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("built"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nChild html-webpack-plugin "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.html"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" asset\n    Entrypoint undefined "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" index.html\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ./node_modules/html-webpack-plugin/lib/loader.js"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("./src/tpl/index.html "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("483")]),s._v(" bytes \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("built"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/buildin/global.js "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("472")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("built"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/buildin/module.js "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("497")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("built"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        + "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" hidden module\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("构建完成后，可以看到新生成了一个 dist 目录结构如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("dist/\n\t|-app.js\n\t|-index.html\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("app.js 是 webpack 压缩好的输出文件，并且已经自动嵌入到 index.html中。")])])}),[],!1,null,null,null);a.default=e.exports}}]);