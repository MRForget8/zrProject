
//无参构造 当前系统时间的标准日期时间格式对象
var date  = new Date()
console.log(date)

// 有参构造 参数为 从1970年1月1日00:00:00开始计算的毫秒数
var date_2 = new Date(1145141919810)
console.log(date_2)

var date_3 = new Date('2023-01-11 11:45:14')
console.log(date_3)

//静态方法
var date_4 =Date.now()
console.log(date_4)

var date_5 =Date.parse('2023-01-11 11:45:14')
console.log(date_5)