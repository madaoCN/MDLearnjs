/**
 * Created by liangxiansong on 2017/3/12.
 */

function abstractmethod() {
    throw new Error("abstract method");
}//抽象方法

function AbstractSet() {
    throw new Error("abstract classes");
}

AbstractSet.prototype.contains = abstractmethod;//将抽象方法加入抽象类

var NotSet = AbstractSet.extend(
    function (set) {
        this.set = set;
    },
    {
        contains: function (x) {
            return !this.set.contains(x);
        },
        toString: function (x) {
            return "~" = this.set.toString();
        }
        equals: function (that) {
            return tha istanceof NotSet && this.set.equals(that.set);
        }
    }
)