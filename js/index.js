(function () {
    $('.unPublish').hide();
    // $('.body').hide();

    window.onload = function () {
        // 背景石头移动
        !function shitou(w) {
            w.openGameFl = false;
            // 打开游戏
            w.openGame = function () {
                // 调用时间
                call()

                // 调用石头动画
                stoneFun();

                // 调用小狗
                dogMovement(gameDogImg);

                // 生成情侣和金币
                lovers();

                // 显示游戏
                $('.game').show();
                dogTop = $('.gameDog').css('top').split('px')[0] * 1;
                this.console.log(dogTop)
            }

            var windwoWidth = document.body.clientWidth;
            // console.log(windwoWidth)
            // $('#stoneGame .stoneImg').children('li').eq(0).addClass('animer')
            // 调用石头动画
            // stoneFun()
            function stoneFun(element) {
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
                        }, 3000)
                    }, 20)
                }

                // 一上来创建石头
                fun_animer();
                // 循环调用石头
                let time = setInterval(function () {
                    if (w.openGameFl) clearInterval(time)
                    fun_animer()
                }, 1000)
            }


            // 小狗动画
            var gameDogImg = $('.gameDog img')
            // dogMovement(gameDogImg)
            function dogMovement(dom) {


                dom.time = setInterval(function () {
                    if (w.openGameFl) clearInterval(dom.time)
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
                    $('.gameDog').attr('data-top', 1)
                    $('.gameDog').animate({
                        top: '14.8%'
                    }, 500, function () {
                        $('.gameDog').animate({
                            top: '21%'
                        }, 500, function () {
                            $('.gameDog').attr('data-top', 0)
                            $('.gameDog img').attr('src', './img/dog_right.png')
                            clearInterval(gameDogImg.time)
                            dogMovement(gameDogImg)
                        })
                    })
                    // 向左运动
                } else if (num == 2) {
                    if ($('.gameDog').attr('data-index') == 1) return;
                    var index = ($('.gameDog').attr('data-index') - 2) * 18 + 32;
                    $('.gameDog').animate({
                        left: index + '%'
                    }, 300)
                    $('.gameDog').attr('data-index', $('.gameDog').attr('data-index') - 1)
                    // 向右运动
                } else {
                    if ($('.gameDog').attr('data-index') == 3) return;
                    var index = $('.gameDog').attr('data-index') * 18 + 32;
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
                    motion(1)
                }
            })
            // 获取小狗高度
            var dogTop = $('.gameDog').css('top').split('px')[0] * 1;

            // 生成东西
            // lovers();
            function lovers() {
                var top_user = $('.top_user').eq(0).clone();
                var left_user = $('.left_user').eq(0).clone();

                // 生成事物
                var cloneUser = {
                    // 生成三条线的人物 0第一排，1第二排，2第三排 回调返回第几排
                    num: function (num, fun) {
                        num = parseInt(num);
                        num = num > 3 ? 2 : num;
                        var top_user = $('.top_user').eq(0).clone();
                        top_user.addClass('num' + num)
                        $('.user').append(top_user)
                        setTimeout(() => {
                            top_user.addClass('animer');
                            fun(num);
                        }, 30)
                        var time = setInterval(() => {
                            if (w.openGameFl) clearInterval(time)
                            var index_top = top_user.css('top').split('px')[0] * 1;
                            // console.log(index_top, dogTop)
                            if (dogTop < index_top + 20 && dogTop > index_top - 20) {
                                carsh(1, top_user, num)
                                if (time) clearInterval(time)
                            }
                        }, 160)
                        setTimeout(() => {
                            if (time) clearInterval(time)
                            if (top_user) top_user.remove();
                        }, 3600)
                    },
                    // 生成躺着的人
                    left_user: function (fun) {
                        var left_user = $('.left_user').eq(0).clone();
                        $('.user').append(left_user);
                        setTimeout(() => {
                            left_user.addClass('animer');
                            fun()
                        }, 30)
                        var time = setInterval(() => {
                            if (w.openGameFl) clearInterval(time)
                            var index_top = left_user.css('top').split('px')[0] * 1;
                            // console.log(index_top, dogTop)
                            if (dogTop < index_top - 40 && dogTop > index_top - 100) {
                                carsh(2, left_user);
                                if (time) clearInterval(time)
                            }
                        }, 160)
                        setTimeout(() => {
                            if (time) clearInterval(time)
                            if (left_user) left_user.remove();
                        }, 3600)
                    },
                    // 生成金币 1第一排
                    gold: function (num, fun) {
                        num = parseInt(num);
                        num = num > 4 ? 3 : num;
                        var gold = $('.gold').eq(0).clone();
                        gold.addClass('num' + num);
                        $('.user').append(gold)
                        setTimeout(() => {
                            gold.addClass('animer');
                        }, 30);
                        var time = setInterval(() => {
                            if (w.openGameFl) clearInterval(time)
                            var index_top = gold.css('top').split('px')[0] * 1;
                            // console.log(index_top, dogTop)
                            if (dogTop < index_top - 40 && dogTop > index_top - 100) {
                                carsh(3, gold, num)
                                if (time) clearInterval(time)
                            }
                        }, 160)
                        setTimeout(() => {
                            if (time) clearInterval(time)
                            if (gold) gold.remove();
                        }, 4000)
                    },
                    // 生成金砖
                    gold_brick: function (num, fun) {
                        num = parseInt(num);
                        num = num > 4 ? 3 : num;
                        var gold = $('.gold_brick').eq(0).clone();
                        gold.addClass('num' + num);
                        $('.user').append(gold)
                        setTimeout(() => {
                            gold.addClass('animer');
                        }, 30)
                        var time = setInterval(() => {
                            if (w.openGameFl) clearInterval(time)
                            var index_top = gold.css('top').split('px')[0] * 1;
                            // console.log(index_top, dogTop)
                            if (dogTop < index_top - 40 && dogTop > index_top - 100) {
                                carsh(4, gold, num)
                                if (time) clearInterval(time)
                            }
                        }, 160)
                        setTimeout(() => {
                            if (time) clearInterval(time)
                            if (gold) gold.remove();
                        }, 4000)
                    }
                }
                // 创建随机人物
                function random(probability = { user1: 20, user2: 20, gold: 20, gold_brick: 20 }) {

                    // 创建站在的人
                    var index = parseInt(Math.random() * 100);
                    var index_user1 = parseInt(Math.random() * (100 - probability.user1))
                    // index_user1 += probability.user1;
                    if (index > index_user1 && index < index_user1 + probability.user1) {
                        let index = parseInt(Math.random() * 3)
                        cloneUser.num(index, num => {

                        })
                        return
                    }
                    // 创建躺着的人
                    var index = parseInt(Math.random() * 100);
                    var index_user2 = parseInt(Math.random() * (100 - probability.user2))
                    // index_user1 += probability.user1;
                    if (index > index_user2 && index < index_user2 + probability.user2) {
                        cloneUser.left_user(() => {

                        })
                        return
                    }

                    // 创建随机奖励
                    var index = parseInt(Math.random() * 100);
                    var index_gold = parseInt(Math.random() * (100 - probability.gold))
                    // index_user1 += probability.user1;
                    if (index > index_gold && index < index_gold + probability.gold) {
                        let index = parseInt(Math.random() * 4) || 1
                        cloneUser.gold(index)
                        return
                    }
                    var index = parseInt(Math.random() * 100);
                    var index_gold2 = parseInt(Math.random() * (100 - probability.gold_brick))
                    // index_user1 += probability.user1;
                    if (index > index_gold2 && index < index_gold2 + probability.gold_brick) {
                        let index = parseInt(Math.random() * 4) || 1
                        cloneUser.gold_brick(index)
                        return
                    }

                }
                let time = setInterval(() => {
                    if (w.openGameFl) clearInterval(time)
                    random();
                }, 800)
            }

            // 判断碰撞  num  1 站着的情侣  2躺着的情侣  3金币 4金砖  dom 碰撞的元素  row 排 站这的 0 1 2 躺着的 123
            function carsh(num, dom, row) {
                // 获取小狗现在的状态 1 左边 2 中间 3右边
                var index = $('.gameDog').attr('data-index');
                // 小狗跳起 1 跳起 否则 不跳起
                var index_img = $('.gameDog').attr('data-top');
                // 当前的分数
                var score = $('#grade').html() * 1;
                // config.score

                // 判断站着的人是否触碰
                if (num == 1 && index == row + 1) {
                    // 计算分数
                    score += config.score.stand;
                    dom.remove();
                    textAnimer(config.score.stand, 0)
                }
                // 判断躺着的人
                if (num == 2 && index_img != 1) {
                    // 计算分数
                    score += config.score.lie;
                    dom.remove();
                    textAnimer(config.score.lie, 0)
                }

                // 判断金币
                if (num == 3 && index == row) {
                    // 计算分数
                    score += config.score.gold;
                    dom.remove();
                    textAnimer(config.score.gold, 1)
                }
                // 判断金砖
                if (num == 4 && index == row) {
                    // 计算分数
                    score += config.score.gold_brick;
                    dom.remove();
                    textAnimer(config.score.gold_brick, 1)
                }
                // console.log(score)
                $('#grade').html(score)
            }


            // 控制文字  text 文字  num 1 加分  0 扣分
            function textAnimer(text, num) {
                var text_dom = $('.dogHint').eq(0).clone();
                if (!num) {
                    text_dom.css('color', 'rgb(255, 217, 0)')
                    text_dom.html(text)
                    $('.gameDog').append(text_dom)
                    text_dom.animate({
                        bottom: '140%',
                        left: '-80%',
                        opacity: 0
                    }, 1600, function () {
                        text_dom.remove();
                    })
                } else {
                    text_dom.css('color', 'rgb(0, 255, 0)')
                    text_dom.html('+' + text)
                    $('.gameDog').append(text_dom)
                    text_dom.animate({
                        bottom: '140%',
                        left: '-80%',
                        opacity: 0
                    }, 1600, function () {
                        text_dom.remove();
                    })
                }

            }

            // 定时间
            function call() {
                let time_element = $('.time');
                let timeSTime = setInterval(() => {
                    timeS(time_element, function () {
                        clearInterval(timeSTime)
                    })
                }, 200)
            }

            function timeS(element, fun) {

                if (!element.time) element.time = new Date();
                let time = new Date() - element.time;
                time /= 1000;
                // time
                let texgt_time = (config.time - time).part(3)
                element.text(texgt_time)
                if (time >= config.time) {
                    element.text(0);
                    // 游戏结束
                    gameOver()
                    return fun();
                }

            }

        }(window);


        // 游戏结束
        // gameOver()
        function gameOver() {
            // 展示显示的分数
            let grade = $('#grade').text();
            $('.youraward .resuleArg').text(grade);
            openGameFl = true
            // 显示挑战成功
            $('.resuleBox').show();
        }

        // 打开排行榜

        // 打开胶囊
        let showRule = function (fl) {
            if (fl) $('#poupInfoBox').addClass('enlarge')
            else $('#poupInfoBox').removeClass('enlarge')
        }
        // 点击时间胶囊
        $('#ruleImg').on('click', function () {
            showRule(1);
        })
        // 关闭时间胶囊
        $('.poupClose').on('click', function () {
            showRule();
        })
        // 点击打开游戏
        $('#startBtnImg').on('click', function () {
            $('.body').hide();
            // 打开游戏
            openGame();
        })

        

        // openGameFl = true

    }


})();