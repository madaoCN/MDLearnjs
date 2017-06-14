/**
 * Created by liangxiansong on 2017/3/25.
 */


window.onload = function () {

    for (var i = 0; i < document.images.length; i ++){
        var img = document.images[i];
        var rollover = $(img).attr("data-rollover");

        if (!rollover) return;

        (new Image()).src = rollover;

        $(img).attr('data-rollout', img.src);

        $(img).mouseover(function () {
            this.src = this.getAttribute('data-rollover');
        });

        $(img).mouseout(function () {
            this.src = this.getAttribute('data-rollout');
        });
    }
};