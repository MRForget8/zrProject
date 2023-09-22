

        // 创建普通正则表达式 验证字符串
        var reg = new RegExp('a')//有a为ture无a为fales
        var result = reg.test('bcde')
        console.log(result)


        // 创建正则的简写方式
        var reg_2 = /ab/  //ab连在一起时则为ture
        var result_2 = reg_2.test('acbdefg')
        console.log(result_2)

