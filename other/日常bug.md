# 日常bug

1. jQuery会把`\r`(0x0d)转换为`\n`(0x0a)
2. 浏览器会把`\n`转化为`%0a`
3. 用js实时获取transfrom变化之后的值