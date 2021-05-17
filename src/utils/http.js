import Axios from 'axios'
const $http = Axios.create()
$http.defaults.baseURL = ''
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV) {
    $http.defaults.baseURL = process.env.VUE_APP_HOST
}
// 添加请求拦截器
$http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const url = config.url
    if (url.indexOf('getTokenByAccount') > -1) {
        localStorage.setItem('token', '')
        config.headers['X-xxx-Token'] = '' // 改headers
        // config.headers.token = ''
    } else if (url.indexOf('shareqrcodeimage') > -1) { // 上传图片的处理了
        config.responseType = 'blob'
        if (localStorage.getItem('token')) {
            config.headers['X-lgsfu-Token'] = localStorage.getItem('token')
        }
    } else {
        // config.headers.token = ''
        if (localStorage.getItem('token')) {
            config.headers['X-lgsfu-Token'] = localStorage.getItem('token')
        }
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
$http.interceptors.response.use(function (response) {
// 对响应数据做点什么
    if (response.data) {
        // dothing
    }
    return response
}, function (error) {
// 对响应错误做点什么
    if (error && error.response) {
        switch (error.response.status) {
        case 400:
            error.message = '错误请求'
            break
        case 500:
            error.message = '服务端出错'
            break
        default:
            error.message = `连接错误${error.response.status}`
        }
    } else {
        error.message = '网络出现问题，请稍后再试'
    }
    return Promise.resolve(error)
})
// export default $http
export function httpPost (url, data = {}) { // 普通的post
    return new Promise((resolve, reject) => {
        $http.post(url, data).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}
export function httpGet (url, data = {}) { // get
    return new Promise((resolve, reject) => {
        if (data.url) {
            url = url + data.url
            data = {}
        }
        $http.get(url, {
            params: data
        }).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}
export function httpBlobGet (url, data = {}) { // buffer上传图片
    return new Promise((resolve, reject) => {
        if (data.url) {
            url = url + data.url
            data = {}
        }
        $http.get(url, {
            params: data,
            responseType: 'arraybuffer'
        }).then(response => {
            resolve('data:image/png;base64,' + btoa(
                new Uint8Array(response.data)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            ))
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}
export function httpGetCode (url, data = {}) { // 获取验证图片
    return new Promise((resolve, reject) => {
        const dataNew = {
            url: data.dataUrl,
            params: data.params
        }
        $http.get(url, {
            params: dataNew
        }).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}
export function httpFileBlod (url, data = {}) {
    return new Promise((resolve, reject) => {
        $http.get(url, {
            params: data,
            responseType: 'blob'
        }).then(response => {
            resolve(response.data)
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}
