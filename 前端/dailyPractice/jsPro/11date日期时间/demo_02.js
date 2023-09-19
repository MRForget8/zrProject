var date_1 = new Date();
console.log(date_1.getDate());//日
console.log(date_1.getDay())//星期几 
console.log(date_1.getHours())//时
console.log(date_1.getMinutes())
console.log(date_1.getSeconds())
console.log(date_1.getMilliseconds())
console.log(date_1.getTimezoneOffset())
console.log(date_1.getUTCDate())

// 所有能使用get获取的值,可以使用set进行修改设置
date_1.setDate(20)
console.log(date_1.getDate())

console.log(date_1.toString()+'abc')
console.log(date_1.toLocaleDateString())//常用年月日
console.log(date_1.toLocaleTimeString())//常用时分秒
console.log(date_1.toLocaleString())//常用年月日时分秒

function showDate(){
var date_now = new Date();
date_now = date_now.toLocaleString();
var div01 = document.getElementById('id_div_01');
div01.value=date_now;
}
window.setInterval(showDate,1000)