// 构建处理
export class EnumHelper {
    private readonly enumObj: any

    constructor(enumObj: any) {
        this.enumObj = enumObj
    }

    // 转换输出下拉框数据
    toArray() {
        return Object.keys(this.enumObj).map((key: string) => this.enumObj[key])
    }

    getLabelByValue(value: string) {
        const entry: any = Object.entries(this.enumObj).find((item: any) => item[1].value === value)
        return entry ? entry[1].label : undefined
    }

    getValueByLabel(label: string) {
        return Object.entries(this.enumObj).find((entry: any) => entry[1].label === label)
    }
}