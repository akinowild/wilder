## getUrl 传入对应的url解析出这个url的对象
```other
getUrl(window.location.href)  
// 返回对象
```

对象里面相应的属性

- **hash** (`#section1`):
    - 表示 URL 中的片段标识符，指定文档中的特定部分。
- **host** (`www.example.com:8080`):
    - 包含主机名和端口号的完整主机部分。
- **hostname** (`www.example.com`):
    - 主机名，不包含端口号。
- **href** (`https://www.example.com:8080/path/to/resource?id=123&name=example#section1`):
    - 完整的 URL 字符串，包括协议、主机、路径、查询参数和片段。
- **origin** (`https://www.example.com:8080`):
    - URL 的源，由协议、主机和端口组成。
- **password** (`""`):
    - URL 中的密码部分，通常为空。
- **pathname** (`/path/to/resource`):
    - URL 的路径部分，指定请求的资源在服务器上的位置。
- **port** (`8080`):
    - URL 中指定的端口号。
- **protocol** (`https:`):
    - URL 使用的通信协议。
- **search** (`?id=123&name=example`):
    - URL 中的查询参数部分，以 `?` 开始，多个参数用 `&` 分隔。
- **searchParams** (`URLSearchParams {size: 2}`):
    - URLSearchParams 对象，用于处理查询参数。
- **username** (`""`):
    - URL 中的用户名部分，通常为空。

## 编码和解码对应的URL


```other
const originalUrl = 'http://example.com?search=query string';  
const encodedUrl = encodeURIComponent(originalUrl);  
console.log("编码后的 URL:", encodedUrl);  
const decodedUrl = decodeURIComponent(encodedUrl);  
console.log("解码后的 URL:", decodedUrl);```
```


## 判断URL是否合法isValid


```objectivec
isValid(validUrl)
// 返回 true,false
```


## 解析URL地址


如果不传入参数，则解析当前页面地址

```objectivec
getURLParameters(url)
// 返回对象
```

