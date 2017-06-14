/**
 * Created by liangxiansong on 2017/3/2.
 */


function array(a, n) {
    return Array.prototype.slice.call(a, n || 0);
}

function partialLeft(f) {
    var args = arguments;
    console.log(arguments)
    return function () {
        console.log(arguments)
        var a = array(args, 1);//获取第一个arg
        console.log(a)
        a.concat(array(arguments));
        console.log(a)
        return f.apply(this, a);
    }
}

function partialRight(f) {
    var args = arguments;
    return function () {
        var a = array(arguments);
        a.concat(array(args, 1));
        return f.apply(this, a);
    }
}

var f = function (x, y, z) {
    return x + y + z;
}

console.log(partialLeft(f, 1)(2, 3))