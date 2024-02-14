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


## 数组转换字符串  wilder.convertUrlsToString()
```
const urls = [
    { url: 'http://example.com/images/xcloud3-pump/image1.jpg' },
    { url: 'http://example.com/images/xcloud3-pump/image2.jpg' },
];
const prefix = 'xcloud3-pump';
const result = wilder.convertUrlsToString(urls, prefix);

// 第一个参数，需要转换的图片数组，第二个参数，需要转换的分割符号
输出结果：
result = xcloud3-pump/image1.jpg,xcloud3-pump/image2.jpg
```


## 获取天气
wilder.weather()

城市编码查询地址：
http://xzqh.mca.gov.cn/map
```
const weather = await weather('110000','5566078add3802ac7d7251c5342d7e28')

// 第一个参数城市编码，第二个参数高德的key
输出结果：
{
  "province": "江苏",
  "city": "盱眙县",
  "adcode": "320830",
  "icon":'base64的图片信息'
  "weather": "晴",
  "temperature": "24",
  "winddirection": "西北",
  "windpower": "4",
  "humidity": "86",
  "reporttime": "2023-06-20 08:35:31",
  "temperature_float": "24.0",
  "humidity_float": "86.0"
}
```

## 解析url参数
wilder.getURLParameters(url)返回{}

## 数组中找到最大值，和最小值，并返回序号
```
wilder.findValueAndIndex(arr, option)
```
参数是min和max
arr是指定的数组

option:min,max

返回值：

值：wilder.findValueAndIndex(arr, option).value

序号：wilder.findValueAndIndex(arr, option).index


## 计算数组平均值
```
wilder.calculateAverage(arr)
```
arr指定的数组


## 上传图片为，转化fileList用的格式[{name:'',url:''}]
transformFileList(arr)

## 文件下载
downloadFileFromStream(apiUrl)

