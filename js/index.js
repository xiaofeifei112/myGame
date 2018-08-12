(function () {
    $('.unPublish').hide();
    $('.body').hide();

    window.onload = function () {
        // 背景石头移动
        !function shitou() {
            var windwoWidth = document.body.clientWidth;
            console.log(windwoWidth)
            // $('#stoneGame .stoneImg').children('li').eq(0).addClass('animer')
            // 调用石头动画
            stoneFun()
            function stoneFun() {

                // 创建左右二边的石头
                function fun_animer() {
                    var stoneLi = $('#stoneGame .stoneImg').children('li').eq(0).clone();
                    stoneLi.addClass('left');
                    $('#stoneGame .stoneImg').append(stoneLi)
                    var stoneLi_right = $('#stoneGame .stoneImg').children('li').eq(0).clone();
                    stoneLi_right.addClass('right');
                    $('#stoneGame .stoneImg').append(stoneLi_right)
                    setTimeout(() => {
                        stoneLi.addClass('animer_left');
                        stoneLi_right.addClass('animer_right')
                        setTimeout(() => {
                            stoneLi.remove();
                            stoneLi_right.remove();
                        }, 3500)
                    }, 20)
                }

                // 一上来创建石头
                fun_animer();
                // 循环调用石头
                var time = setInterval(function () {
                    fun_animer()
                }, 1000)
            }


            // 小狗动画
            var gameDogImg = $('.gameDog img')
            dogMovement(gameDogImg)
            function dogMovement(dom) {
                dom.time = setInterval(function () {
                    var index = $('.gameDog img').attr('data-index');
                    if (index == 1) {
                        $('.gameDog img').attr('data-index', 0);
                        $('.gameDog img').attr('src', './img/dog_right.png')
                    } else {
                        $('.gameDog img').attr('data-index', 1);
                        $('.gameDog img').attr('src', './img/dog_left.png')
                    }
                }, 200)
            }

            // 上左右运动
            function motion(num) {

                // 向上运动
                if (num == 1) {
                    clearInterval(gameDogImg.time)
                    $('.gameDog img').attr('src', './img/dogtop.png');
                    $('.gameDog').animate({
                        top: '14.8%'
                    }, 500, function () {
                        $('.gameDog').animate({
                            top: '21%'
                        }, 500, function () {
                            $('.gameDog img').attr('src', './img/dog_right.png')
                            clearInterval(gameDogImg.time)
                            dogMovement(gameDogImg)
                        })
                    })
                    // 向左运动
                } else if (num == 2) {
                    if ($('.gameDog').attr('data-index') == 1) return;
                    var index = ($('.gameDog').attr('data-index') - 2) * 22 + 28;
                    $('.gameDog').animate({
                        left: index + '%'
                    }, 300)
                    $('.gameDog').attr('data-index', $('.gameDog').attr('data-index') - 1)
                    // 向右运动
                } else {
                    if ($('.gameDog').attr('data-index') == 3) return;
                    var index = $('.gameDog').attr('data-index') * 22 + 28;
                    $('.gameDog').animate({
                        left: index + '%'
                    }, 300)
                    $('.gameDog').attr('data-index', $('.gameDog').attr('data-index') * 1 + 1)
                }
            }

            // 用户滑动事件
            // 

            $('.gameLayerBox').swipe({
                // 左滑
                swipeLeft: function (e) {
                    motion(2);

                },
                // 右滑
                swipeRight: function (e) {
                    motion(3)
                },
                // 上滑
                swipeUp: function (e) {
                    console.log(e)
                    motion(1)
                }
            })


            // 生成情侣
            lovers();
            function lovers() {
                var top_user = $('.top_user').eq(0).clone();
                var left_user = $('.left_user').eq(0).clone();
                // 生成人物
                var cloneUser = {
                    num: function (num) {
                        var top_user = $('.top_user').eq(0).clone();
                        top_user.addClass('num' + num)
                        $('.user').append(top_user)
                        setTimeout(() => {
                            top_user.addClass('animer')
                        }, 30)
                        setTimeout(() => {
                            top_user.remove();
                        }, 4800)
                    }
                }


            }
        }();
    }


})();