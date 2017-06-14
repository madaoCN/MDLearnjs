/**
 * Created by liangxiansong on 2017/3/13.
 */


// console.log("JAVAScript".search(/java/i))
// console.log("JAVAScript".match(/java/i))
//
// var pattern = /java/i
// console.log(pattern.exec("JAVAScript"))
// console.log(pattern.test("JAVAScript"))

var arr = [3, 2, 1];
// for (var item in arr){
//     console.log(item)
// }

// for each (var item in arr){
//
// }
console.log(arr.every(function(a, b, arr){
    console.log(a);
    console.log(b);
    console.log(arr);
}));

console.log(arr.forEach(function(value, idx, arr){
    console.log(value);
    console.log(idx);
    console.log(arr);
}));