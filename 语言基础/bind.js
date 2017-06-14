/**
 * Created by liangxiansong on 2017/3/1.
 */

function foo(y) {
    return this.x + y;
}

var o = {x:1}
var g = foo.bind(o)
console.log(g(7))


///科里化
var sum = function (x, y) {
    return x + y;
}
var succ = sum.bind(null, 1)
console.log(succ(2))

function f(x, y ,  z) {
    return x + y + z;
}
var succ = f.bind(undefined, 1, 2)
console.log(succ(3))

//ec3实现bind方法
if (!Function.prototype.bind){//若没有bind属性
    Function.prototype.bind = function (o /*, args */) {
        var self = this, boundArgs = arguments;//暂存self指针和函数参数arguments
        return function () {
            var args = [], i;
            for (var i = 0; i < boundArgs.length; i ++){
                args.push(boundArgs[i])
            }
            for (var i = 0; i < arguments.length; i ++){
                args.push(arguments[i])
            }
            return self.apply(o, args);
        }

    }

}