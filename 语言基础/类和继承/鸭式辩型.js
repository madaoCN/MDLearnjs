/**
 * Created by liangxiansong on 2017/3/4.
 */


function quacks(obj) {

    for (var i = 1; i < arguments.length; i ++){
        var arg = arguments[i];

        switch (typeof arg){
            case 'string':
                if (typeof obj[arg] !== "function") return false;
                continue;
            case 'function'://如果实参数函数，则使用它的原型
                arg = arg.prototype;
            case "object":
                //遍历对象每个属性
                for (var m in arg){
                    if (typeof arg[m] !== "function") continue;//跳过不是方法的属性
                    if (typeof obj[m] !== "function") return false;
                }
        }
    }
    return true;
}