# wilder
自已常用的一些函数方法的集合
《除夜》
> 扫除茅舍涤尘嚣，一炷清香拜九霄。
> 万物迎春送残腊，一年结局在今宵。
> 生盆火烈轰鸣竹，守岁筵开听颂椒。
> 野客预知农事好，三冬瑞雪未全消。

野客：村野之人，多借指隐逸者。
所以偏了个词 wild+er=wilder

# 安装
```
pnpm add wilder
```
如果报TS的错误，则在src下面新建一个index.d.ts文件，在里面输入
```
declare module 'wilder';
```
# 引用文件

```
import wilder from 'wilder';
```
---------------------------------
下面的每一个方法的使用都是wilder.function名称
---------------------------------

# 时间
## 生成两个日期这间的日期数组
```javascript
generateDateRange(startTimestamp,endTimestamp)
// 返回的是['2023-12-12','2023-12-13']
```
## 把组件的数组时间拆分两个字段
传入要提交的数据

rangeTime：传入的时间字段

startTime:起始时间

endTime: 结结束时间
```javascript
splitTime(obj)
```
## 获取当前时间与之前N天数之间的间隔时间戳 输入间隔天数，默认7天
```javascript
getBetween(10)
// 返回对象{currentDay,beforeDay}
```

## 是否为工作日
```
wilder.isWeekday(date)
```


## 两日期之间相差的天数
```
wilder.dateDiffInDays(date1, date2)
```


## 检查日期是否有效
```
wilder.isDateValid(val)
```


## 查找日期位于一年中的第几天
```
wilder.dayOfYear(date)
```

---------------------------------

# 数组

## 上传图片为，转化fileList用的格式[{name:'',url:''}]
```javascript
arrayTransformFileList(arr)
```
## 上传的数组拼接前缀域名
```javascript
convertUrlsToString(urls, prefix)
```

## 上传图片的处理
- 上传图片转换，转化fileList用的格式'url,url',
- 真TM复杂，是不是初次上传，是组件的结构
- 修改的时候，回显拼接前辍
- 不修改保存的时候去前辍
- 修改了，则又要用初次上传的方法改结构
```javascript
arrayTransformFileListToString(arr,prefix)
```
## 上面图片的处理方法，只是最后输入为 ['url','url']
```javascript
arrayTransformFileListToArray(arr,prefix)
```

## 数组中找到最大值，和最小值，并返回序号
```
wilder.findValueAndIndex(arr, option)  
```
参数是min和max

arr是指定的数组

option:min,max

返回值：

值：wilder.array.findValueAndIndex(arr, option).value

序号：wilder.array.findValueAndIndex(arr, option).index

## 计算数组平均值
```
wilder.calculateAverage(arr)  
```
arr指定的数组

## 数组去掉域名转换字符串  wilder.convertUrlsToString()
```
const urls = [  
 { url: 'http://example.com/images/xcloud3-pump/image1.jpg' }, { url: 'http://example.com/images/xcloud3-pump/image2.jpg' },];  
const prefix = 'xcloud3-pump';  
const result = wilder.convertUrlsToString(urls, prefix);  
  
// 第一个参数，需要转换的图片数组，第二个参数，需要转换的分割符号  
输出结果：  
result = xcloud3-pump/image1.jpg,xcloud3-pump/image2.jpg  
```
## 数组去重
```javascript
uniqueArray(arr);
```

## 判断数组是否为空
```javascript
isNotEmpty(array)
```

## 合并数组
```javascript
merge(a, b)
```


---------------------------------

# 对象

## 是否是对象
```javascript
wilder.isObject
```

---------------------------------

# 字符串
图片上传的字符串转为数组
```javascript
strTransformUrlToArray(str,domain)
```

---------------------------------

# 文件
## 文档下载
输入文件流的api，调用方法自动下载保存
```javascript
downloadFileFromStream(api)
```

---------------------------------

# 链接URL
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

