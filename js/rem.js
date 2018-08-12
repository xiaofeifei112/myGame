(function () {
    var element = new Image();
    var hdGameHost = '';
    Object.defineProperty(element, 'id', { get: function () { window.location.href = "https://hd.faisco.cn/empty.jsp?aid=16586011&gameId=4&openId=oosnVwgNoKbIF5yrlf-y2VKUD7uc" } });
    console.log('%c' + g_rem, element);
})();

var fromCanal = '-1';
if (false) {
    parent = top = window;
}

var g_serverTime = 1533872372873;
var g_timeDeviation = g_serverTime - new Date().getTime(); //服务器时间与系统时间偏差
var g_rem = 20;
(function (win) {
    var orientationX = false; //是否横屏进来
    if (win.orientation == 90 || win.orientation == -90) {
        orientationX = true;
    }
    var docEl = win.document.documentElement, tid;
    function refreshRem1() {
        g_rem = docEl.getBoundingClientRect().width / 16;
        !g_rem && (g_rem = 20);
        docEl.style.fontSize = g_rem + 'px';
    }
    function refreshRem2() {
        g_rem = docEl.getBoundingClientRect().width / 16;
        if (!g_rem) {
            return refreshRem1();
        }
        var width = docEl.getBoundingClientRect().width;
        var d = win.document.createElement('div');
        d.style.width = '1rem';
        d.style.display = "none";
        docEl.firstElementChild.appendChild(d);
        var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
        docEl.firstElementChild.removeChild(d);
        docEl.style.fontSize = (g_rem / defaultFontSize) * 100 + '%';
    }
    var refreshRem = /HUAWEI TIT-TL00/i.test(navigator.userAgent) ? refreshRem2 : refreshRem1;
    try {
        win.addEventListener("orientationchange", function () {//触发手机横屏竖屏事件
            if (orientationX) {
                location.reload();
            }
        }, false);
    } catch (e) { }
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 100);
        }
    }, false);
    refreshRem();
})(window);
function loadGamePreAssets() { }