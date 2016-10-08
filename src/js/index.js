var innerIndex = 0;
var _t = null;
var p3Islider1, p3Islider2, p5Islider2,p7Islider1,p7Islider2 = null;
new PageSlider({
    pages: $('.page-wrap .page'),
    dev: false,
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
            case 4:
                var page = this.curPage;
                if (innerIndex == 0) {
                    page.find('.product1').addClass("hide");
                    page.find('.product2').removeClass("hide");
                    if(p5Islider2) p5Islider2.play();
                    innerIndex++;
                } else {
                    page.data('lock-next', false);
                    this.next()
                }
                break;
                case 6:
                var page = this.curPage;
                if (innerIndex == 0) {
                    page.find('.product1').addClass("hide");
                    page.find('.product2').removeClass("hide");
                    p7Islider2.play();
                    innerIndex++;
                } else {
                    $("#page7 .sharePage").addClass('show');
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
            case 4:
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
                 case 6:
                var page = this.curPage;
                if (innerIndex != 0) {
                    page.find('.product1').removeClass("hide");
                    page.find('.product2').addClass("hide");
                    p7Islider1.play();
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
        $(".btn").removeClass("show");
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
            case 4:
                page.data('lock-next', true);
                page.data('lock-prev', true);
                page.find('.product2').addClass("hide");
                page.find('.product1').removeClass("hide");
                $(".snow-box").remove();
                clearInterval(_t);
                if (!p5Islider2) {
                    var data2 = [{
                        content: "../img/p5-pic2.png"
                    }, {
                        content: "../img/p5-pic3.png"
                    }];
                    p5Islider2 = new iSlider({
                        dom: document.querySelector("#page5 .islider2"),
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
                    p5Islider2.play();
                }
                break;
            case 5:
                page.data('lock-next', false);
                snowFlow({
                    num: 8,
                    url: "../img/p6-star.png"
                });
                break;
                 case 6:
                page.data('lock-next', true);
                page.data('lock-prev', true);
                page.find('.product2').addClass("hide");
                page.find('.product1').removeClass("hide");
                $(".snow-box").remove();
                clearInterval(_t);
                if (!p7Islider1) {
                     var data1 = [{
                        content: "../img/p7-pic1.jpg"
                    }, {
                        content: "../img/p7-pic2.jpg"
                    }];
                   
                    p7Islider1 = new iSlider({
                        dom: document.querySelector("#page7 .islider1"),
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
                    p7Islider1.play();
                }
                if (!p7Islider2) {
                    var data2 = [{
                        content: "../img/p7-pic3.jpg"
                    }, {
                        content: "../img/p7-pic4.jpg"
                    }, {
                        content: "../img/p7-pic5.jpg"
                    }, {
                        content: "../img/p7-pic6.jpg"
                    }];
                    p7Islider2 = new iSlider({
                        dom: document.querySelector("#page7 .islider2"),
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
                    p7Islider2.play();
                }
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
            $(".replay-tips,.btn-play").show();
        }
    });
    $(".islider").on("touchend", function(e) {
        e.stopPropagation();
    });
    $(".bg").on("webkitTransitionEnd transitionEnd", function() {
        $(this).parent().find(".btn").addClass("show");
    });
    $(".showPic").tap(function() {
        showPic($(this).data("src"));
    });
    $(".btnCart").tap(function() {
        showLink($(this).data("src"), $(this).data("link"), $(this).data("item"));
    });
    $("#page5 .btnM1").tap(function() {
        showSlider({
            pics:[
                "../img/p5-detail3-1.png",
                "../img/p5-detail3-2.jpg"
            ],
            width:"14.025rem",
            height:"13.175rem",
            animateType:"fade"
        })
    });
    $("#page5 .btnM2").tap(function() {
        showSlider({
            pics:[
                "../img/p5-detail1-2.jpg",
                "../img/p5-detail1-1.jpg"
            ],
            width:"14.025rem",
            height:"17.925rem",
            animateType:"fade"
        })
    })
       $("#page5 .btnM3").tap(function() {
        showSlider({
            bg:"../img/p5-detail2-w.png",
            pics:[
                "../img/p5-detail2-1.jpg",
                "../img/p5-detail2-2.jpg",
                "../img/p5-detail2-3.jpg"
            ],
            width:"13.3rem",
            height:"8.45rem",
            top:"0.3625rem",
            left:"0.3625rem",
            animateType:"default",
            dot:true
        })
    })
         $("#page7 .btnM1").on("touchstart",function() {
        showSlider({
            pics:[
                "../img/p7-detail1.jpg",
                "../img/p7-detail2.jpg"
            ],
            width:"14.025rem",
            height:"10.35rem",
            animateType:"default",
            dot:true,
            dotBottom:"1.4rem"
        })
    })
         $("#page7 .sharePage").on("touchend",function (e) {
            e.stopPropagation();
             $(this).removeClass('show');
         }).on("swipeDown", function(e) {
            e.stopPropagation();
             $(this).removeClass('show');
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

function showPic(url) {
    var _img = new Image();
    var showDiv = $("#showDiv");
    var showImg = $("#showDiv>.showImg");
    _img.onload = function() {
        var w = this.width / 40,
            h = this.height / 40;
        showImg.css({
            "background-image": 'url(' + url + ')',
            "background-size": w + 'rem ' + h + "rem",
            "width": w + "rem",
            "height": h + "rem"
        });
        showDiv.addClass("show");
    }
    _img.src = url;
}
$("#showDiv").tap(function() {
    $(this).removeClass('show');
});

function showLink(url, link, itemName) {
    var _img = new Image();
    var showDiv = $("#showLink");
    var showImg = $("#showLink>.showImg");
    _img.onload = function() {
        var w = this.width / 40,
            h = this.height / 40;
        showImg.css({
            "background-image": 'url(' + url + ')',
            "background-size": w + 'rem ' + h + "rem",
            "width": w + "rem",
            "height": h + "rem"
        });
        showImg.children("img").attr('src', url);
        showDiv.addClass("show");
        $("#btnBuy").tap(function() {
            _czc.push(["_trackEvent", itemName+"点击购买按钮",1]);
            setTimeout(function () {
                window.location.href = link;
            },100)
        })
    }
    _img.src = url;
}
iSlider.prototype._animateFuncs.fade = (function() {
    function fade(dom, axis, scale, i, offset, direct) {
        dom.style.zIndex = i === 1 ? 1 : 0;
        offset = Math.abs(offset);
        if (i === 1) {
            dom.style.opacity = 1 - (offset / scale);
        } else {
            dom.style.opacity = offset / scale;
        }
    }

    fade.effect = 'opacity';
    return fade;
})();
$("#showLink #close").tap(function() {
    $("#showLink").removeClass('show');
});
var innerSlider;

function showSlider(cfg) {
    var _img = new Image();
    document.querySelector(".inner-islider").innerHTML = "";
    var showDiv = $("#showSlider");
    var showImg = $("#showSlider>.showImg");
    _img.onload = function() {
        var w = this.width / 40,
            h = this.height / 40;
        showImg.css({
            "background-image": 'url(' + cfg.bg + ')',
            "background-size": w + 'rem ' + h + "rem",
            "width": w + "rem",
            "height": h + "rem"
        });

        $(".inner-islider").css({
            "width": cfg.width,
            "height": cfg.height,
            "left": cfg.left,
            "top": cfg.top
        });
        var option = {
            dom: document.querySelector(".inner-islider"),
            dotColor: cfg.dot ? { main: "#eb5b36", others: "#fff" } : null,
            data: cfg.pics.map(function(element, index) {
                return { content: element };
            }),
            animateType: cfg.animateType,
            isAutoplay: !cfg.dot,
            duration: 2000,
            useTime: 600,
            timingFn: "ease",
            isDebug: false,
            isLooping: true,
            isVertical: false,
            isOverspread: false
        };
        innerSlider = new iSlider(option)
        showDiv.addClass("show");
        innerSlider.play();
    }
    if (cfg.bg) {
        _img.src = cfg.bg;
    } else {
        showImg.css({
            "background-image": 'url(' + cfg.bg + ')',
            "background-size": cfg.width + ' ' + cfg.height,
            "width": cfg.width,
            "height": cfg.height
        });
        $(".inner-islider").css({
            "width": cfg.width,
            "height": cfg.height,
            "left": cfg.left,
            "top": cfg.top
        });
        var option = {
            dom: document.querySelector(".inner-islider"),
            dotColor: cfg.dot ? { main: "#eb5b36", others: "#fff" } : null,
            data: cfg.pics.map(function(element, index) {
                return { content: element };
            }),
            animateType: cfg.animateType,
            isAutoplay: !cfg.dot,
            duration: 2000,
            useTime: 600,
            timingFn: "ease",
            isDebug: false,
            isLooping: true,
            isVertical: false,
            isOverspread: false
        };
        innerSlider = new iSlider(option)
        showDiv.addClass("show");
        innerSlider.play();
        if (cfg.dotBottom) {
            $(".inner-islider>.islider-dot-wrap").css("bottom",cfg.dotBottom);
        }
    }
}
$("#showSlider").tap(function() {
    $("#showSlider").removeClass('show');
});
