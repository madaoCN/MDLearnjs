/**
 * Created by liangxiansong on 2017/3/4.
 */

//创建一个继承父类原型的新对象
function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create)
        return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {

    };
    f.prototype = p;
    return new f();
}

function range(from, to) {
    console.log(range.methods)
    var r = inherit(range.methods);
    r.from = from;
    r.to = to;
    console.log(r)
}

range.methods = {
    include: function (x) {
        return this.from <= x && x <= this.to;
    } ,
    toString:function () {
        return "(" + this.from + this.to + ")"
    }
}

range()