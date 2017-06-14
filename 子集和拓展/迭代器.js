/**
 * Created by liangxiansong on 2017/3/13.
 */


///////// 迭代器
function rangeIter(start, end) {
    var nextValue = Math.ceil(start);
    return {
        next:function () {
            if (nextValue > end) throw StopIteration;
            return nextValue++;
        }
    }
}

var r = rangeIter(1, 5);


///// 可迭代对象
function range(min, max) {
    return {
        get min(){return min},
        get max(){return max},

        includes: function (x) {
            return min <= x && x <= max;
        },
        toString: function () {
            return "[" + min + "," + max + "]";
        },

        __iterator__: function () {
            var val = Math.ceil(min);
            return {
                next:function () {
                    if (val > max)
                        throw StopIteration;
                    return val++;
                }
            }
        }
    };
}

for (var i in range(1, 10)){
    console.log(i)
}

o = {x:1, y:2};
// o.a = 0;
console.log(o.prototype)
Object.prototype.z = 3;
for(p in o) console.log(p);
// for(p in Iterator(o, true)) console.log(p);