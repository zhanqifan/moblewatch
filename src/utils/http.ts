/* eslint-disable */
const baseURL = 'http://git.yukexx.com:2281/'
const httpInterceptor = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {
        // 1. 非 http 开头需拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        // 2. 请求超时
        options.timeout = 10000
        // 3. 添加小程序端请求头标识
        options.header = {
            'Content-Type': 'application/json',
            ...options.header,//如有自定义请求头可覆盖
        }
        // 4. 添加 token 请求头标识
        // const memberStore = useMemberStore()
        // const token = memberStore.profile?.token
        // if (token) {
        //     options.header.Authorization = token
        // }
    },
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
// uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
    type: number,//响应状态码
    msg: string,//响应成功
    dataList: T//接口的这一项返回类型不确定 所以用泛型定义
}
// 响应拦截器
export const request = <T>(option: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...option,
            // 请求成功
            success(result) {
                if (result.statusCode >= 200 && result.statusCode < 300) {
                    resolve(result.data as Data<T>)
                } else if (result.statusCode === 401) {//401无token
                    // const Member = useMemberStore()
                    // Member.clearProfile()
                    // uni.navigateTo({
                    //     url: '/pages/login/login'
                    // })
                    reject(result)
                    uni.showToast({
                        title: '请求错误',
                        icon: 'none',
                        mask: true
                    })
                }
                else {
                    uni.showToast({
                        title: (result.data as Data<T>).msg || '请求错误',
                        icon: 'none',
                        mask: true
                    })
                    reject(result)
                }
            },
            fail(err) {
                uni.showToast({
                    title: '网络错误',
                    icon: 'none',
                    mask: true
                })
                reject(err)
            }
        })
    })
}
