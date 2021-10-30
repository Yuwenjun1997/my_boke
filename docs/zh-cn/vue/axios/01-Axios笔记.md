# Axios 笔记

## 使用方法

Axios 是一个基于 promise 的 HTTP 库

本质是 XMLHttpRequests 请求即 ajax 请求

### 特性

- 从浏览器中创建 XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求数据和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF

### axios API

可以通过向 `axios` 传递相关配置来创建请求

- axios(config)

```js
// 发送 POST 请求
axios({
	method: 'post',
	url: '/user/12345',
	data: {
		firstName: 'Fred',
		lastName: 'Flintstone',
	},
})
// 获取远端图片
axios({
	method: 'get',
	url: 'http://bit.ly/2mTM3nY',
	responseType: 'stream',
}).then(function(response) {
	response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
})
```

- axios(url[, config])

```js
// 发送 GET 请求（默认的方法）
axios('/user/12345')
```

### 请求方法的别名

为方便起见，为所有支持的请求方法提供了别名

- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.options(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])
- axios.patch(url[, data[, config]])

注意：在使用别名方法时， `url`、`method`、`data` 这些属性都不必在配置中指定。

### 并发

处理并发请求的助手函数

- axios.all(iterable)
- axios.spread(callback)

### 创建实例

可以使用自定义配置新建一个 axios 实例

- axios.create([config])

```
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### 实例方法

以下是可用的实例方法。指定的配置将与实例的配置合并。

- axios#request(config)
- axios#get(url[, config])
- axios#delete(url[, config])
- axios#head(url[, config])
- axios#options(url[, config])
- axios#post(url[, data[, config]])
- axios#put(url[, data[, config]])
- axios#patch(url[, data[, config]])

### 请求配置

这些是创建请求时可以用的配置选项。只有 `url` 是必需的。如果没有指定 `method`，请求将默认使用 `get` 方法。

```js
{
   // `url` 是用于请求的服务器 URL
  url: '/user',

  // `method` 是创建请求时使用的方法
  method: 'get', // default

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'https://some-domain.com/api/',

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data, headers) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

   // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

   // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  adapter: function (config) {
    /* ... */
  },

 // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

   // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

   // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

   // `onUploadProgress` 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

   // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  cancelToken: new CancelToken(function (cancel) {
  })
}
```

### 响应结构

某个请求的响应包含以下信息

```js
{
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

   // `config` 是为请求提供的配置信息
  config: {},
 // 'request'
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance the browser
  request: {}
}
```

使用 `then` 时，你将接收下面这样的响应 :

```js
axios.get('/user/12345').then(function(response) {
	console.log(response.data)
	console.log(response.status)
	console.log(response.statusText)
	console.log(response.headers)
	console.log(response.config)
})
```

在使用 `catch` 时，或传递 rejection callback 作为 `then` 的第二个参数时，响应可以通过 `error` 对象可被使用

### 配置默认值

你可以指定将被用在各个请求的配置默认值

### 全局的 axios 默认值

```js
axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
```

### 自定义实例默认值

```js
// Set config defaults when creating the instance
const instance = axios.create({
	baseURL: 'https://api.example.com',
})

// Alter defaults after instance has been created
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN
```

### 配置的优先顺序

配置会以一个优先顺序进行合并。这个顺序是：在 `lib/defaults.js` 找到的库的默认值，然后是实例的 `defaults` 属性，最后是请求的 `config` 参数。后者将优先于前者。这里是一个例子：

```js
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create()

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
	timeout: 5000,
})
```

### 拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

```js
// 添加请求拦截器
axios.interceptors.request.use(
	function(config) {
		// 在发送请求之前做些什么
		return config
	},
	function(error) {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
axios.interceptors.response.use(
	function(response) {
		// 对响应数据做点什么
		return response
	},
	function(error) {
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)
```

如果你想在稍后移除拦截器，可以这样：

```js
const myInterceptor = axios.interceptors.request.use(function() {
	/*...*/
})
axios.interceptors.request.eject(myInterceptor)
```

可以为自定义 axios 实例添加拦截器

```js
const instance = axios.create()
instance.interceptors.request.use(function() {
	/*...*/
})
```

### 错误处理

```js
axios.get('/user/12345').catch(function(error) {
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		console.log(error.response.data)
		console.log(error.response.status)
		console.log(error.response.headers)
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.log(error.request)
	} else {
		// Something happened in setting up the request that triggered an Error
		console.log('Error', error.message)
	}
	console.log(error.config)
})
```

Y 可以使用 `validateStatus` 配置选项定义一个自定义 HTTP 状态码的错误范围。

```js
axios.get('/user/12345', {
	validateStatus: function(status) {
		return status < 500 // Reject only if the status code is greater than or equal to 500
	},
})
```

### 取消请求

使用 _cancel token_ 取消请求

> Axios 的 cancel token API 基于[cancelable promises proposal](https://github.com/tc39/proposal-cancelable-promises)，它还处于第一阶段。

可以使用 `CancelToken.source` 工厂方法创建 cancel token，像这样：

```js
const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios
	.get('/user/12345', {
		cancelToken: source.token,
	})
	.catch(function(thrown) {
		if (axios.isCancel(thrown)) {
			console.log('Request canceled', thrown.message)
		} else {
			// 处理错误
		}
	})

axios.post(
	'/user/12345',
	{
		name: 'new name',
	},
	{
		cancelToken: source.token,
	}
)

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.')
```

还可以通过传递一个 executor 函数到 `CancelToken` 的构造函数来创建 cancel token：

```js
const CancelToken = axios.CancelToken
let cancel

axios.get('/user/12345', {
	cancelToken: new CancelToken(function executor(c) {
		// executor 函数接收一个 cancel 函数作为参数
		cancel = c
	}),
})

// cancel the request
cancel()
```

## 在 vue 中使用 axios

### 封装 axios

request.js 文件

```js
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
export const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	timeout: 5000, // request timeout
})

// 请求拦截器
service.interceptors.request.use(
	config => {
		// 在发送请求之前做某些事情，例如向请求头添加token
		if (store.getters.token) {
			// let each request carry token
			// ['X-Token'] is a custom headers key
			// please modify it according to the actual situation
			config.headers['X-Token'] = getToken()
		}
		return config
	},
	error => {
		// do something with request error
		console.log(error) // for debug
		return Promise.reject(error)
	}
)

// 响应拦截器，对服务器返回的数据进行处理后再返回给调用者
service.interceptors.response.use(
	/**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

	/**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
	response => {
		const res = response.data

		// if the custom code is not 20000, it is judged as an error.
		if (res.code !== 20000) {
			Message({
				message: res.message || 'Error',
				type: 'error',
				duration: 5 * 1000,
			})

			// 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
			if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
				// to re-login
				MessageBox.confirm(
					'You have been logged out, you can cancel to stay on this page, or log in again',
					'Confirm logout',
					{
						confirmButtonText: 'Re-Login',
						cancelButtonText: 'Cancel',
						type: 'warning',
					}
				).then(() => {
					store.dispatch('user/resetToken').then(() => {
						location.reload()
					})
				})
			}
			return Promise.reject(new Error(res.message || 'Error'))
		} else {
			return res
		}
	},
	error => {
		console.log('err' + error) // for debug
		Message({
			message: error.message,
			type: 'error',
			duration: 5 * 1000,
		})
		return Promise.reject(error)
	}
)

const install = (Vue, options) => {
	Vue.prototype.$http = service
}

export default {
	install,
}
```

### 封装请求接口

http.api.js 文件，对接口统一进行管理

```js
const install = (Vue, vm)=>{
    const getUserInfo => params => vm.$http.get('/user/userInfo', { params })
    const login => data => vm.$http.post('/user/login', data)
    // ...

    Vue.prototype.$http.api = {
        getUserInfo,
        login
        // ...
    }
}

exprot default {
	install
}
```

### 挂载请求接口

入口文件 main.js

```js
import Vue from 'vue'
import Request from 'request.js'
import HttpApi from 'http.api.js'
// 全局挂载axios实例 在应用中通过this.$http访问
Vue.use(Request)

const app = new Vue({
	// ...
})
// 全局挂载api请求方法 在应用中通过this.$http.api.name访问
Vue.use(HttpApi, app)

app.$mount('#app')
```

### 使用

```vue
<script>
export default {
	data() {
		userInfo: null // 用户信息
	},
	created() {
		this.getUserInfo()
	},
	methods: {
		// 获取用户信息
		getUserInfo() {
			this.$http.api.getUserInfo().then(res => {
				this.userInfo = res.data
			})
		},
	},
}
</script>
```
