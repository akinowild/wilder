// 数组中找到最大值，和最小值，并返回序号
export function findValueAndIndex(arr, option) {
    let minValue = Infinity
    let minIndex = -1
    let maxValue = -Infinity
    let maxIndex = -1

    for (let i = 0; i < arr.length; i++) {
        const value = parseFloat(arr[i])

        if (value < minValue) {
            minValue = value
            minIndex = i
        }

        if (value > maxValue) {
            maxValue = value
            maxIndex = i
        }
    }

    if (option === 'min') {
        return { value: minValue, index: minIndex }
    }
    if (option === 'max') {
        return { value: maxValue, index: maxIndex }
    }
    return null
}

// 计算数组平均值
export function calculateAverage(arr) {
    const sum = arr.reduce((acc, val) => acc*1 + val*1, 0)
    const average = sum / arr.length
    return average.toFixed(2)
}

// 数组去重
export const uniqueArray = arr => [...new Set(arr)];

//判断数组是否为空
export const isNotEmpty = array => Array.isArray(array) && array.length > 0

// 合并数组
export const merge = (a, b) => [...a, ...b]

// 上传图片为，转化fileList用的格式[{name:'',url:''}]
export function arrayTransformFileList(arr) {
    return arr.map((item) => ({
        name: item?.name,
        url: item?.response?.data
    }))
}

// 数组拼接前缀
export function convertUrlsToString(urls, prefix) {
    return urls.map(obj => obj.url.replace(new RegExp(`.*${prefix}`), prefix)).join(',');
}

// 上传图片转换，转化fileList用的格式'url,url',
// 真TM复杂，是不是初次上传，是组件的结构
// 修改的时候，回显拼接前辍
// 不修改保存的时候去前辍
// 修改了，则又要用初次上传的方法改结构
export function arrayTransformFileListToString(arr,prefix) {
    if (Array.isArray(arr)) {
        const dataArr = arr
            .map((item) => {
                if (item?.response?.data) {
                    return item.response.data
                }
                if (item?.url) {
                    // 去掉 http://res.dev.xmem.tech:8180/ 这个前缀
                    if (item.url.startsWith(prefix)) {
                        return item.url.slice(prefix.length)
                    }
                    return item.url
                }
                return null
            })
            .filter((item) => item !== null)

        return dataArr.join(',')
    }
    return arr
}

// 同样的方法，不过是输出为['url','url']
export function arrayTransformFileListToArray(arr,prefix) {
    if (Array.isArray(arr)) {
        return arr
            .map((item) => {
                if (item?.response?.data) {
                    return item.response.data
                }
                if (item?.url) {
                    if (item.url.startsWith(prefix)) {
                        return item.url.slice(prefix.length)
                    }
                    return item.url
                }
                return null
            })
            .filter((item) => item !== null)
    }
    return arr
}