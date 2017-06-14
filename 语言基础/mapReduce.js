/**
 * Created by liangxiansong on 2017/3/1.
 */
//es3实现map函数
var map = Array.prototype.map ? function (a, f) {return a.map(f)} : function (a, f) {
        var resutls = [];
        for (var i = 0; i < a.length; i ++){
            if (i in a){
                resutls[i] = f.call(null, a[i], i, a);
            }        }
        return resutls;
    };


///es3 实现reduce函数
var reduce = (Array.prototype.reduce) ? function (a, f, intial) {
        if (arguments.length > 2){//若参数在两个以上
            return a.reduce(f, intial);
        }else
        {
            return a.reduce(f);
        }
    } : function (a, f, intial) {
        var i = 0, len = a.length, accumulator;//计数器
        if (arguments.length > 2){
            accumulator = intial;
        }else//找到数组中第一个已经定义的索引（寻找初值）
        {
            if (len == 0) throw TypeError();
            while (i < len){
                if (i in len){
                    accumulator = a[i++]
                    break;
                }
                else i++;
            }
            if (i == len) throw  TypeError;
        }
        //对剩余的元素依次调用f()
        while (i < len){
            if (i in a){
                accumulator = f.call(undefined, accumulator, a[i], i , a)
                i ++;
            }
        }
        return accumulator;
    };