// 常用的正则规则
// eslint-disable-next-line
export const regExpConfig = {
  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  mobile: /^1([3|4|5|7|8|])\d{9}$/, // 手机号码
  telephone: /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/, // 固定电话
  num: /^[0-9]*$/, // 数字
  phoneNo: /(^1([3|4|5|7|8|])\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{3,14}$)/, // 电话或者手机
  policeNo: /^[0-9A-Za-z]{5,32}$/, // 账号5-32位数字或字母组成
  pwd: /^[0-9A-Za-z]{5,32}$/, // 密码由5-32位数字或者字母组成
  isNumAlpha: /^[0-9A-Za-z]*$/, // 字母或数字
  isAlpha: /^[a-zA-Z]*$/, // 是否字母
  isNumAlphaCn: /^[0-9a-zA-Z\u4E00-\uFA29]*$/, // 是否数字或字母或汉字
  isPostCode: /^[\d-]*$/i, // 是否邮编
  isNumAlphaUline: /^[0-9a-zA-Z_]*$/, // 是否数字、字母或下划线
  isNumAndThanZero: /^([1-9]\d*(\.\d+)?|0)$/, // 是否为整数且大于0/^[1-9]\d*(\.\d+)?$/
  isNormalEncode: /^(\w||[\u4e00-\u9fa5]){0,}$/, // 是否为非特殊字符（包括数字字母下划线中文）
  isTableName: /^[a-zA-Z][A-Za-z0-9#$_-]{0,29}$/, // 表名
  isInt: /^-?\d+$/, // 整数
  isTableOtherName: /^[\u4e00-\u9fa5]{0,20}$/, // 别名
  // isText_30: /^(\W|\w{1,2}){0,15}$/, // 正则
  // isText_20: /^(\W|\w{1,2}){0,10}$/, // 正则
  isText_30: /^(\W|\w{1}){0,30}$/, // 匹配30个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_50: /^(\W|\w{1}){0,50}$/, // 匹配50个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_20: /^(\W|\w{1}){2,20}$/, // 匹配20个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_100: /^(\W|\w{1}){0,100}$/, // 匹配100个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isText_250: /^(\W|\w{1}){0,250}$/, // 匹配250个字符，字符可以使字母、数字、下划线、非字母，一个汉字算1个字符
  isNotChina: /^[^\u4e00-\u9fa5]{0,}$/, // 不为中文  IDcard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/, // 身份证
  IDcardAndAdmin: /^(([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|(admin))$/, // 身份证或者是admin账号
  IDcardTrim: /^\s*(([1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3})|([1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X))|(admin))\s*$/, // 身份证
  num1: /^[1-9]*$/, // 数字
  companyNO: /^qqb_[0-9a-zA-Z_]{1,}$/, // 公司人员账号
  imgType: /image\/(png|jpg|jpeg|gif)$/, // 上传图片类型
  isChina: /^[\u4e00-\u9fa5]{2,8}$/,
  isNozeroNumber: /^\+?[1-9]\d*$/, // 大于零的正整数
  float: /^\d+(\.?|(\.\d+)?)$/, // 匹配正整数或者小数 或者0.这个特殊值
  ipv4: /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){3}((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])))$/,
  ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  isPort: /^6[0-5][0-5][0-3][0-5]$|^[1-5]\d{4}|^[1-9]\d{0,3}$/,
  ipv4_range: /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5])))$/,
  // eslint-disable-next-line max-len
  isURL: /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+[-_]+?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+[-_]+?)*[a-z\u00a1-\uffff0-9]+)*(?:\.?(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/,
  // isURL: /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/,
  isWepKey: /^(\w){5}$|^(\w){13}$/,
  isWpaKey: /^(\w){8,32}$/,
  isMAC: /^(([0-9a-fA-F]{2}-){5}|([0-9a-fA-F]{2}){5}|([0-9a-fA-F]{2}:){5})[0-9a-fA-F]{2}$/,
  isPIN: /^\d{4,8}$/,
  isPUK: /^\d{8}$/,
  isTel: /^[\d|*|#|\-|\s]{3,20}$/,
  // isText_48: /^(\W|\w{1}){2,48}$/,
  // eslint-disable-next-line no-control-regex
  isASCIIChar: /[^\x00-\xff]/ig,
  isMask: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
}

