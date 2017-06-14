/**
 * Created by liangxiansong on 2017/3/4.
 */

//创建类第一步 先定义一个构造函数，初始化新对象实例属性
//第二步 构造函数prototype对象定义实例方法
//第三部 构造函数定义类字段和类属性

function extend(o, p) {//把p中可枚举对象属性复制到o中
    for(prop in p){
        o[prop] = p[prop];
    }
    return o;
}

//--------- method1
function defineClass(constructor,
                    methods,
                    statics) {
    if (mthods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics);
    return constructor;
}

// var SimpleRange = defineClass(function (from, to) {
//     this.from = from;
//     this.to = to;
// },
//     {
//         //instance methods
//     },
//     {
//         //static methods
//     }
// )