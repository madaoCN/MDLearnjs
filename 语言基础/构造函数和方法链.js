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


//在子类中调用父类的构造函数和方法
function NoNullSet() { //构造函数
    Set.apply(this, arguments);
}

NoNullSet.prototype = inherit(Set);//继承原型
NoNullSet.prototype.constructor = NoNullSet;

NoNullSet.prototype.add = function () {
    for (var i = 0; i < arguments.length; i++){
        if (arguments[i] == null){
            throw new Error("Cant add null or undefined value to a noNULL set");
        }
    }
    return Set.prototype.add.apply(self, arguments);
};


//类工厂
function filteredSetSubclass(superclass, filter) {
    var constructor = function () {
        superclass.apply(this, arguments);//调用父类的构造方法
    }
    constructor.prototype = superclass.prototype;
    var proto = constructor.prototype;
    proto.constructor = constructor;

    proto.add = function () {
        for (var i = 0; i < arguments.length; i++){
            var value = arguments[i];
            if (!filter(value)){
                throw new Error("reject");
            }
        }
    }

    return constructor;
}


//包装函数
var NoNullSet = (function () {
   var superClass = Set;
    return superClass.extend(function () {
            superClass.apply(self, arguments);
    },
        {
            add: function () {
                for (var i = 0; i < arguments.length; i++){
                    if (arguments[i] == null){
                        throw new Error("Cant add null or undefined value to a noNULL set");
                    }
                }
                return superClass.prototype.add.apply(self, arguments);
            }
        })
}());
