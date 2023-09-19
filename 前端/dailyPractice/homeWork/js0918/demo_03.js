// 1.建立空数组,将原有数组每一个元素同原数组所有元素依次进行比较，将得到每一个元素的出现次数，将该次数添加至空数组
//【22233334445522】=》【55544443332255】
// 2.找出新数组里面的最大值【55544443332255】
// 3.根据新数组中最大值的下标值，得到原数组中相同位置上的元素

var arr = [2,2,2,3,3,3,3,4,4,4,5,5,2,2]

var arr01 = [];

for(var i = 0 ; i < arr.length; i++){
    //每一个元素都是arr【i】

    var count = 0;
    for(var j = 0;j<arr.length;j++){

        if(arr[i]==arr[j]){//如果外层和里层相同，计数器+1（出现次数）
            count++;
        }

    }

    arr01.push(count)

    console.log(arr01)

    var max = arr[0];

    var max_index=0
    for(var i = 0 ; i<arr01.length;i++){

        if(max<arr01[i]){
            max=arr01[i]
        }

    }

    console.log(arr[max_index])
    console.log(max)
}