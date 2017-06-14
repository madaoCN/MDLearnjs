/**
 * Created by liangxiansong on 2017/3/22.
 */

// var $ = require('jquery')

// img = $("<img/>", {
//     src:'http://www.baiduc.com',
//     css:{borderWidth:5},
//     click:function () {
//         console.log('click')
//     }
// })

require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
    var $ = require("jquery")(window);
    $("body").append("<div>TEST</div>");
    console.log($("body").html());
});

// console.log(img)