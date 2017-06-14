/**
 * Created by liangxiansong on 2017/2/27.
 */


// console.log(Object.prototype.toString())
// console.log(JSON.stringify({}))

// var arr = [1, 3, 4, 6]
//
// arr.forEach(function (v, i , a) {
//
//     console.log(v)
//     console.log(i)
//     console.log(a)
// });

// function inner(a, b) {
//     console.log(a, b)
// }
//
// function outter(args) {
//     inner(args.a, args.b);
// }
//
// outter({a:1, b:2})


function block() {
    var funcs= []
    for(var i = 0; i<5; i++){
        funcs[i] = function () {
            var x = i
            return x;
        }
    }
    return funcs
}

console.log(block()[1]())