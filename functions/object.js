// 判断是否是对象
export function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
