var config = {};
(function (config) {
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

})(config);