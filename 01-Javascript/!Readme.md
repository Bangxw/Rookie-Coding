# Javascript 基础总结

## Javascript数据类型

> 5种基本数据类型： undefined、null、string、object、boolean

### undefined

- 使用var声明变量
- 区分空对象指针与尚未定义的变量
- 对未初始化的变量及未声明的变量使用typeof运算符均会返回undefined

### null

- 逻辑上null表示一个空对象的指针
- 使用typeof检测时会返回object

*** undefined与null的关系 ***

- undefined派生于null,因此使用'=='比较时，会返回true
- 没有必要将变量值显示声明为undefined
- 声明空对象时应将其赋值为null

### boolean

> 两个值：true和false, 使用Boolean()进行转换，[空字符串、0、null、undefined、NaN]转化为false

### String

> 使用.length属性访问字符串长度，转义序列表示一个字符，无法精确返回双字节字符长度

#### 转义序列

- \n 换行
- \t 制表符
- \b 空格
- \r 回车符
- \f 分页符

#### 类型转换

- toString()
- String()
- eval()

### number

#### 数值转换

- Number()
- parseInt()
- parseFloat()

#### 数值范围

- 最小值: Number.Min_VALUE [1.7976931348623157e+308]
- 最大值: Number.MAX_VALUE [5e-324]
- 正无穷: Infinity
- 负无穷: -Infinity
- 检测办法: isFinite()