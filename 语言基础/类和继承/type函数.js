/**
 * Created by liangxiansong on 2017/3/4.
 */

function type(obj) {

    var t,c,n;// type , class, name
    if (obj == null) return "null";

    if (obj != obj) return "nan";

    //如果不是对象类型，则直接使用值
    if ((t = typeof obj) != "Object") return t;

    if ((c = classof(obj)) != "Object") return c;

    if (obj.constructor && typeof obj.constructor === "function" &&
        (n = obj.constructor.getName())) return n;

    return "Object";
}

//返回对象的类
function classof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

//返回函数的名字
Function.prototype.getName = function () {
    if ('name' in this) return this.name;
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
}