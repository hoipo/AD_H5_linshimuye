 new PageSlider({
     pages: $('.page-wrap .page')
 });

 function loaderCompleted() {
     $("#page1 .panel").one("webkitAnimationEnd animationEnd", function () {
        $("#page1 .panel-wrapper").tap(function() {
            $(this).addClass("hide");
        })
     })
 }