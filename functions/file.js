// 文件下载
export async function downloadFileFromStream(apiUrl) {
    const { data } = await apiUrl()
    const blob = new Blob([data], { type: 'application/vnd.ms-excel' })

    // 创建一个blob URL
    const url = window.URL.createObjectURL(blob)

    // 创建一个隐藏的<a>元素，用于触发下载
    const a = document.createElement('a')
    a.href = url
    a.download = '数据模板.xlsx'

    // 触发点击事件，开始下载
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()

    // 清理和释放资源
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
}
