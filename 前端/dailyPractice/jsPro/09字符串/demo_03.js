var str = 'abcde12345'
//split(x) 使用x作为分隔符 将字符串分割为字符串数组
var arr = str.split('c')

console.log(arr);// 字符c 转化为分隔符号 用来分隔字符串
console.log(str);

var arr_1 = str.split("")
console.log(arr_1);//使用空串来分割 每个字符为一个元素
var arr_1 = str.split('0')
console.log(arr_1);//使用不存在的元素为分隔符 依然转换为数组 数组中只有原字符串1个元素

// 使用案例
//假设有字符串内部是城市数据，提取城市名称
var str_citys = ' 北京, 上海, 广州 ,深圳 ';
// 将该字符串转化为城市名数组，使用‘，’分割
var arr_citys = str_citys.split(',');
for (var city of arr_citys) {
    console.log(city.trim());
}

