
        var arr = [1,2,3,4,5,6,7,8,9];

        //删除功能 splice（从指定下标元素开始，连续删除介个元素）
        // arr.splice(2,3);

        //元素更改功能splice（从指定下标元素开始，连续几个元素，变更的目标元素）
        // arr.splice(2,3,'a','b');
        
        //增加功能 splice（从指定下标元素开始，0，添加的目标元素）
        arr.splice(2,0,'a','b');
        console.log(arr);
