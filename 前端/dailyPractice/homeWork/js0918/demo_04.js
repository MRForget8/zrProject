// 4.有数组arr[7,3,6,8,9]数组brr[33,7,2,1,15,9,25,3]
// 找到在arr数组中，但是不在brr中的元素
//等同于 求数组arr对数组brr的差集

//取arr的每一个元素,判断其在brr中是否有相同元素
//一个值,判断其在brr中是否有相同的值

var arr_a = [7,3,6,8,9];
var arr_b = [33,7,2,1,15,9,25,3]
for(var i = 0; i <= arr_a.length-1; i++){
// var num = arr_a[i] ;
var flag = false;//声明一个布尔值类型的变量(认为规定false代表的时num不在brr中)
for(var j= 0;j<=arr_b.length-1;j++){

    if(arr_a[i] == arr_b[j]){

        // 如果有相等元素则证明在brr中,改变flag的值
        flag=true;
        break;

    }

    if(flag){
        console.log(arr_a[i]+'在')
    }else{
        console.log(arr_a[i]+'不在')
    }
}

}