/**
 * Created by liangxiansong on 2017/3/4.
 */


function Range(from, to) {//构造函数
    this.from = from;
    this.to = to;
}

Range.prototype = {//添加方法

    include: function (x) {
        return this.from <= x && x <= this.to;
    } ,
    toString:function () {
        return "(" + this.from + this.to + ")"
    }
}

//补齐constructor
Range2.prototype = {
    constructor : Range2,
    include: function (x) {
        return this.from <= x && x <= this.to;
    } ,
    toString:function () {
        return "(" + this.from + this.to + ")"
    }
}

