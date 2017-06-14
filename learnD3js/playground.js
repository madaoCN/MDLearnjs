/**
 * Created by liangxiansong on 2017/3/27.
 */
//绑定数据
var data = [10, 15, 20, 30, 8, 10,40, 30]
function render(data) {
    d3.select("body")
        .selectAll("div.h-bar")
        .data(data)
        .enter()
        .attr("class", 'h-bar')
        .append("span");

    d3.select("body")
        .selectAll("div.h-bar")
        .data(data)
        .enter()
        .attr("width", function (d) {
            return (d*3) + 'px'
        })
        .select("span")
        .text(function (d) {
            return d;
        });

    d3.select("body")
        .selectAll("div.h-bar")
        .data(data)
        .exit();
}

setInterval(function () {
    data.shift();
    data.push(Math.round(Math.random() * 100));
    render(data)
}, 1500)