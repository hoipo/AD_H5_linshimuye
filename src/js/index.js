var innerIndex = 0;
var _t = null;
var p3Islider1, p3Islider2 = null;
new PageSlider({
    pages: $('.page-wrap .page'),
    dev: 2,
    onSwipeUp: function() {
        switch (this.index) {
            case 0:
                var page = this.curPage;
                if (innerIndex == 0) {
                    page.find('.text1').addClass("show");
                    innerIndex++;
                } else if (innerIndex == 1) {
                    page.find('.text1').removeClass("show");
                    page.find('.text2').addClass("show");
                    innerIndex++;
                } else if (innerIndex == 2) {
                    innerIndex++;
                    page.data('lock-next', false);
                    var _v = document.querySelector(".video");
                    page.find('.text2').removeClass("show");
                    page.find(".videoCon").show();
                    $(".btn-play").show()
                    _v.currentTime = 0;
                    _v.play();
                    _v.webkitRequestFullscreen();
                    _v.play();
                }
                break;
            case 2:
                var page = this.curPage;
                if (innerIndex == 0) {
                    page.find('.product1').addClass("hide");
                    page.find('.product2').removeClass("hide");
                    innerIndex++;
                } else {
                    page.data('lock-next', false);
                    this.next()
                }
                break;
            default:
                break;
        }
    },
    onSwipeDown: function() {
        console.log(this.index)
        switch (this.index) {
            case 0:
                var page = this.pages.eq(this.index);
                if (innerIndex == 3) {
                    page.find('.text2').addClass("show");
                    page.find(".videoCon,.replay-tips").hide();
                    page.data('lock-next', true);
                    innerIndex--;
                } else if (innerIndex == 2) {
                    page.find('.text1').addClass("show");
                    page.find('.text2').removeClass("show");
                    innerIndex--;
                } else if (innerIndex == 1) {
                    page.find('.text1').removeClass("show");
                    innerIndex--;
                }
                break;
            case 2:
                var page = this.curPage;
                if (innerIndex != 0) {
                    page.find('.product1').removeClass("hide");
                    page.find('.product2').addClass("hide");
                    innerIndex = 0;
                } else {
                    page.data('lock-prev', false);
                    this.prev()
                }
                break;
            default:
                break;
        }
    },
    onchange: function() {
        innerIndex = 0;
        var page = this.pages.eq(this.index);
        switch (this.index) {
            case 0:
                page.data('lock-next', true);
                $(".snow-box").remove();
                clearInterval(_t);
                page.find(".videoCon,.replay-tips").hide();
                break;
            case 1:
                page.data('lock-next', false);
                snowFlow({
                    num: 8,
                    url: "../img/p2-feather1.png"
                });
                break;
            case 2:
                page.data('lock-next', true);
                page.data('lock-prev', true);
                page.find('.product2').addClass("hide");
                page.find('.product1').removeClass("hide");
                $(".snow-box").remove();
                clearInterval(_t);
                if (!p3Islider1) {
                    var data1 = [{
                        content: "../img/p3-pic1.png"
                    }, {
                        content: "../img/p3-pic2.png"
                    }];
                    p3Islider1 = new iSlider({
                        dom: document.querySelector("#page3 .islider1"),
                        dotColor: { main: "#eb5b36", others: "#fff" },
                        data: data1,
                        animateType: "default",
                        isAutoplay: false,
                        duration: 2000,
                        useTime: 600,
                        timingFn: "ease",
                        isDebug: false,
                        isLooping: true,
                        isVertical: false,
                        isOverspread: false
                    })
                }
                if (!p3Islider2) {
                    var data2 = [{
                        content: "../img/p3-pic3.png"
                    }, {
                        content: "../img/p3-pic4.png"
                    }];
                    p3Islider2 = new iSlider({
                        dom: document.querySelector("#page3 .islider2"),
                        dotColor: { main: "#eb5b36", others: "#fff" },
                        data: data2,
                        animateType: "default",
                        isAutoplay: false,
                        duration: 2000,
                        useTime: 600,
                        timingFn: "ease",
                        isDebug: false,
                        isLooping: true,
                        isVertical: false,
                        isOverspread: false
                    })
                }
                break;
            case 3:
                page.data('lock-next', false);
                snowFlow({
                    num: 8,
                    url: "../img/p4-petal.png"
                });
                break;
            case 5:
                page.data('lock-next', false);
                snowFlow({
                    num: 8,
                    url: "../img/p6-star.png"
                });
                break;
            default:
                page.data('lock-next', false);
                $(".snow-box").remove();
                clearInterval(_t);
                break;
        }
    }
});

function loaderCompleted() {
    $(".panel").one("webkitAnimationEnd animationEnd", function() {
        $(".panel-wrapper").tap(function() {
            $(this).addClass("hide");
        })
    });
    $(".btn-play").on("touchend", function() {
        var _v = document.querySelector(".video");
        $(".replay-tips,.btn-play").hide()
        _v.currentTime = 0;
        _v.play();
        _v.webkitRequestFullscreen();
        _v.play();
    });
    $(".video").on("webkitfullscreenchange", function() {
        if (document.webkitFullscreenElement == null) {
            var _v = document.querySelector(".video");
            _v.currentTime = 0;
            _v.pause();
            $(".replay-tips,.btn-play").show()
        }
    })
}

function snowFlow(snow) {
    $(".snow-box").remove();
    var screenW = window.innerWidth,
        screenH = window.innerHeight,
        snowBox = document.createElement("div"),
        snowBoxHtml = "",
        snowCss = "",
        snowAttr = {
            "opacity": [],
            "size": [],
            "x": [],
            "y": [],
            "img": [],
            "rotate": []
        },
        offsetX = 0,
        offsetY = 0,
        rotate = 0;
    snowBox.classList.add('snow-box');
    for (var i = 0; i < parseInt(snow.num || 18); i += 1) {
        snowCss = "";
        snowAttr["opacity"][i] = 0.5 + 0.5 * Math.random();
        snowAttr["size"][i] = 20 + 30 * Math.random();
        snowAttr["x"][i] = parseInt(screenW * Math.random());
        snowAttr["y"][i] = -i * 80;
        snowAttr["rotate"][i] = Math.floor(Math.random() * 360)
        snowAttr["img"][i] = snow.url;
        snowCss = "position:absolute;top:0;";
        snowCss += "opacity:" + snowAttr["opacity"][i] + ";";
        snowCss += "width:" + snowAttr["size"][i] + "px;";
        snowCss += "-webkit-transform:" + "translate3d(" + snowAttr["x"][i] + "px," + snowAttr["y"][i] + "px, 0)" + ";";
        snowCss += "transform:" + "translate3d(" + snowAttr["x"][i] + "px," + snowAttr["y"][i] + "px, 0)" + ";";
        snowBoxHtml += "<img src=" + snowAttr["img"][i] + " class='snow' style='" + snowCss + "' />";
    }

    snowBox.innerHTML = snowBoxHtml;

    $("#view").append(snowBox);

    var $snow = $(".snow");
    _t = setInterval(function() {
        $snow.each(function(index, item) {
            if (snowAttr["y"][index] > screenH || snowAttr["x"][index] < -50 || snowAttr["x"][index] > screenW + 50) {
                snowAttr["y"][index] = -100;
                snowAttr["x"][index] = parseInt(screenW * Math.random());
            }
            offsetX = index % 2 ? -0.2 : 0.2;
            offsetY = index % 2 ? 0.7 : 0.9;
            rotate = index % 2 ? 0.2 : -0.4;
            snowAttr["x"][index] += offsetX;
            snowAttr["y"][index] += offsetY;
            snowAttr["rotate"][index] += rotate;
            $(item).css({
                "-webkit-transform": "translate3d(" + snowAttr["x"][index] + "px," + snowAttr["y"][index] + "px, 0) rotate(" + snowAttr["rotate"][index] + "deg)",
                "transform": "translate3d(" + snowAttr["x"][index] + "px," + snowAttr["y"][index] + "px, 0) rotate(" + snowAttr["rotate"][index] + "deg)"
            })
        })
    }, 1000 / 60);
}