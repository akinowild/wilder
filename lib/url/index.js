// 解析URL
function getURLParameters(url = window.location.search) {
    // 如果不指定url，则解析返回当前地址的
    let searchParams;
    if (url) {
        searchParams = new URLSearchParams(url.split('?')[1]);
    } else {
        searchParams = new URLSearchParams(window.location.search)
    }
    const params = {}
    searchParams.forEach(function (value, key) {
        params[key] = value
    })
    return params;
}

export { getURLParameters }