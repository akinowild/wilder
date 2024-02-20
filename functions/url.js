
export function getUrl(url){
    return new URL(url)
}

// 是否合理
export function  isValidUrl(validUrl){
    return /^(https?|ftp):\/\/[^\s/$.?#].\S*$/.test(validUrl);
}

// 解析URL
export function etURLParameters(url = window.location.search) {
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
