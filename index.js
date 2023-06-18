
function convertUrlsToString(urls, prefix) {
    return urls.map(obj => obj.url.replace(new RegExp(`.*${prefix}/`), '')).join(',');
}
export default{
    convertUrlsToString
}
