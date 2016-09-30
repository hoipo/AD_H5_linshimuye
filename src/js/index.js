 var innerIndex = 0;
 new PageSlider({
     pages: $('.page-wrap .page'),
     onSwipeUp: function() {
         switch (this.index) {
             case 0:
                 var page = this.curPage;
                 if (innerIndex === 0) {
                     page.find('.text1').addClass("show");
                     innerIndex++;
                 } else if (innerIndex === 1) {
                     page.find('.text1').removeClass("show");
                     page.find('.text2').addClass("show");
                     innerIndex++;
                 } else if (innerIndex === 2) {
                     var _v = document.querySelector(".video");
                     page.find('.text2').removeClass("show");
                     page.find(".videoCon").show();
                     _v.currentTime = 0;
                     _v.play();
                     _v.webkitRequestFullscreen();
                     _v.play();
                     $(".replay-tips").show();
                     page.data('lock-next', false);
                     innerIndex++;
                 }
                 break;
             default:
                 break;
         }
         console.log(innerIndex)
     },
     onSwipeDown: function() {
         switch (this.index) {
             case 0:
                 var page = this.curPage;
                 if (innerIndex === 3) {
                     page.find('.text2').addClass("show");
                     page.find(".videoCon,.replay-tips").hide();
                      page.data('lock-next', true);
                     innerIndex--;
                 } else if (innerIndex === 2) {
                     page.find('.text1').addClass("show");
                     page.find('.text2').removeClass("show");
                     innerIndex--;
                 } else if (innerIndex === 1) {
                     page.find('.text1').removeClass("show");
                     innerIndex--;
                 }
                 break;
             default:
                 break;
         }
         console.log(innerIndex)
     },
     onchange: function() {
         innerIndex = 0;
         if (this.prevIndex === 0) {
             var page = this.curPage;
             page.find(".videoCon,.replay-tips").hide();
             page.data('lock-next', true);
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
         }
     })
 }