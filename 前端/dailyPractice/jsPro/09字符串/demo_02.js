var str = 'abcde12345';

var str2 = ''
//字符串长度 字符数量
console.log(str.length);
console.log(str2.length);
//根据下标返回下标对应的字符
console.log(str.charAt(2))
//超出范围的下标值返回‘空白’
console.log(str2.charAt(100));
console.log(str.charAt(6)+0);

// chaCodeAt 根据下标 返回下标对应的字符的unicode编码
console.log(str.charCodeAt(0));

//indexOf() 根据字符查找下标（返回第一个对应的下标）
console.log(str.indexOf('e'));
console.log(str.indexOf('123'));//进行string查找
console.log(str.indexOf('125'));//不存在则返回-1
// !!!使用场景 indexOf()>来判断是否存在
// lastIndexOf() 从后向前检索字符串
console.log(str.lastIndexOf('1'));
//concat字符串拼接
var str_1 = 'abcde12345'
var str_2 = 'abcde12345'
var str_1 = str_1.concat(str_2)

console.log(str_1);
// slice返回字符串中指定的一部分 slice（a，b）左闭右开（左侧可以去的下标为a的元素，右侧娶不到下标为b的元素）
//左闭右开格式：【a，b）
var str_3 = 'abcde12345'
str_3 = str_3.slice(2,6);
console.log(str_3)
//substring 返回从指定位置截取字符串到结束值 同slice截取到指定位置也是左闭右开
var str_4 = 'abcde12345'
var str_4 = str_4.substring(3,5);
console.log(str_4);
//trim 删除字符串前后空格
var str_5 = '  abcde12345  '
str_5 = str_5.trim()
console.log(str_5);
//大小写转换分别是toUpperCase和toLowerCase
var str_6 = 'abcde12345'
str_6 = str_6.toUpperCase();
console.log(str_6)
