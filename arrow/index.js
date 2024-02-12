// 数组中找到最大值，和最小值，并返回序号
function findValueAndIndex(arr, option) {
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
function calculateAverage(arr) {
    const sum = arr.reduce((acc, val) => acc*1 + val*1, 0)
    const average = sum / arr.length
    return average.toFixed(2)
}

export { findValueAndIndex, calculateAverage }