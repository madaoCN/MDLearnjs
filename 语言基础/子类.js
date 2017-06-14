/**
 * Created by liangxiansong on 2017/3/12.
 */


//创建一个继承父类原型的新对象
function inherit(p) {
    if (p == null) throw  TypeError;
    if (Object.create)
        return Object.create(p);
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError;
    function f() {

    };
    f.prototype = p;
    return new f();
}

//简单的函数创建子类
function  defineSubClass(superclass,
                        contructor,
                        methods,
                        statics) {

    contructor.prototype = inherit(superclass.prototype);
    contructor.prototype.constructor = contructor;
    if (methods) contructor.extend(methods);
    if (statics) contructor.extend(statics);

    //返回这个类
    return contructor;
}

//手动实现子类
function Singleton(member) {//定义构造函数
    this.member = member;
}

Singleton.prototype = inherit(Set.prototype)//创建一个原型对象，这个原型集成自set的原型

extend(Singleton, {
    constructor:Singleton,
    add:function () {

    }
})


