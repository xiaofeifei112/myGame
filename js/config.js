var config = {};
(function (config) {

    // 处理浏览器默认行为
    $(document).ready(function () {
        function stopScrolling(touchEvent) {
            // touchEvent.stopPropagation()
            touchEvent.preventDefault();
        }
        document.addEventListener('touchstart', stopScrolling, false);
        document.addEventListener('touchmove', stopScrolling, false);
    });
    // 调用加载动画  true打开加载动画  否则关闭动画
    config.load = function (num) {
        // $('#preloadPage')
        if (num) {
            $('#preloadPage').show().removeClass('leftClose')
        } else {
            $('#preloadPage').addClass('leftClose');
            setTimeout(function () {
                $('#preloadPage').hide();
            }, 600)
        }
    }


    // 分数
    config.score = {
        // 站着
        stand: -50,
        // 躺着
        lie: -50,
        //金币
        gold: 10,
        //金砖
        gold_brick: 50
    }

    // 时间 30s
    config.time = 30;

    // 保留小数点后x位
    Number.prototype.part = function (x) {
        let num = this + '';
        let length = num.split('.');
        if (length.length == 1) {
            num += '.'
            for (let i = 0; i < x; i++) {
                num = num + '0'
            }

            return num;
        }
        for (let i = 0; i < x - length[1].length + 1; i++) {
            length[1] = length[1] + '0'
        }
        num = length[0]+'.'+length[1].substr(0, x)
        // console.log(length[1],length[1].substr(0, x))
        return num;
    }
})(config);