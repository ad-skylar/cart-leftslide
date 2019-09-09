$(function () {
    //左滑右滑效果
    var moveDiv = "";
    for (var i = 0; i < $(".scroll-left").length; i++) {
        moveDiv = $(".scroll-left")[i];
        var startX;
        moveDiv.addEventListener('touchstart', function (ev) {
            ev.preventDefault();
            startX = ev.touches[0].pageX;
            startY = ev.touches[0].pageY;
        }, false);
        moveDiv.addEventListener('touchend', function (ev) {
            ev.preventDefault();
            var endX, endY;
            endX = ev.changedTouches[0].pageX;
            endY = ev.changedTouches[0].pageY;
            var direction = GetSlideDirection(startX, startY, endX, endY);
            switch (direction) {
                case 1:

                    $(this).next().animate({ right: "0" });
                    $(this).animate({ left: "-8em" });
                    break;
                case 2:
                    $(this).next().animate({ right: "-11rem" });
                    $(this).animate({ left: "0" });
                    break;
                default:
            }
        }, false);
    } 
  
})
function GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
}

//根据起点和终点返回方向 1：向左，2：向右,
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;

    //如果滑动距离太短  
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result;
    }
    var angle = GetSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 1;
    }

    return result;
}