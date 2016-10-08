"use strict";var iSlider=function(t){if(!t.dom)throw new Error("dom element can not be empty!");if(!t.data||!t.data.length)throw new Error("data must be an array and must have more than one element!");this._opts=t,this._setting(),this._renderHTML(),this._bindHandler()};iSlider.prototype._setting=function(){var t=this._opts;this.wrap=t.dom,this.dotColor=t.dotColor,this.data=t.data,this.type=t.type||"pic",this.isVertical=t.isVertical||!1,this.isOverspread=t.isOverspread||!1,this.duration=t.duration||2e3,this.slideIndex=this.slideIndex||0,this.dotOutside=t.dotOutside||0,this.axis=this.isVertical?"Y":"X",this.width=this.wrap.clientWidth,this.height=this.wrap.clientHeight,this.ratio=this.height/this.width,this.scale=t.isVertical?this.height:this.width,this.useTime=t.useTime,this.onslide=t.onslide,this.onslidestart=t.onslidestart,this.onslideend=t.onslideend,this.onslidechange=t.onslidechange,this.dotChange=null,this.data.length<2?(this.isLooping=!1,this.isAutoPlay=!1):(this.isLooping=t.isLooping||!1,this.isAutoplay=t.isAutoplay||!1),"card"===t.animateType&&this.isVertical&&(this.isOverspread=!0),this.dotColor&&this.addDot("color"),this.isAutoplay&&this.play(),this.log=t.isDebug?function(t){window.console.log(t)}:function(){},this._setUpDamping(),this._setPlayWhenFocus(),this._animateFunc=t.animateType in this._animateFuncs?this._animateFuncs[t.animateType]:this._animateFuncs["default"]},iSlider.prototype._setPlayWhenFocus=function(){var t=this;window.addEventListener("focus",function(){t.isAutoplay&&t.play()},!1),window.addEventListener("blur",function(){t.pause()},!1)},iSlider.prototype._animateFuncs={"default":function(t,e,i,s,a){t.style.webkitTransform="translateZ(0) translate"+e+"("+(a+i*(s-1))+"px)"},rotate:function(t,e,i,s,a){var n="X"===e?"Y":"X",o=Math.abs(a),r=window.getComputedStyle(this.wrap.parentNode,null).backgroundColor;this.isVertical&&(a=-a),this.wrap.style.webkitPerspective=4*i,1===s?t.style.zIndex=i-o:t.style.zIndex=a>0?(1-s)*o:(s-1)*o,t.style.cssText+="-webkit-backface-visibility:hidden; -webkit-transform-style:preserve-3d; background-color:"+r+"; position:absolute;",t.style.webkitTransform="rotate"+n+"("+90*(a/i+s-1)+"deg) translateZ("+.888*i/2+"px) scale(0.888)"},flip:function(t,e,i,s,a){var n="X"===e?"Y":"X",o=window.getComputedStyle(this.wrap.parentNode,null).backgroundColor;this.isVertical&&(a=-a),this.wrap.style.webkitPerspective=4*i,a>0?t.style.visibility=s>1?"hidden":"visible":t.style.visibility=s<1?"hidden":"visible",t.style.cssText+="position:absolute; -webkit-backface-visibility:hidden; background-color:"+o+";",t.style.webkitTransform="translateZ("+i/2+"px) rotate"+n+"("+180*(a/i+s-1)+"deg) scale(0.875)"},depth:function(t,e,i,s,a){var n=.18*(4-Math.abs(s-1));this.wrap.style.webkitPerspective=4*i,t.style.zIndex=1===s?100:a>0?1-s:s-1,t.style.webkitTransform="scale("+n+", "+n+") translateZ(0) translate"+e+"("+(a+1.3*i*(s-1))+"px)"},flow:function(t,e,i,s,a){var n=Math.abs(a),o="X"===e?"Y":"X",r="X"===e?1:-1,d=Math.abs(a/i);this.wrap.style.webkitPerspective=4*i,1===s?t.style.zIndex=i-n:t.style.zIndex=a>0?(1-s)*n:(s-1)*n,t.style.webkitTransform="scale(0.7, 0.7) translateZ("+(150*d-150)*Math.abs(s-1)+"px)translate"+e+"("+(a+i*(s-1))+"px)rotate"+o+"("+r*(30-30*d)*(1-s)+"deg)"},card:function(t,e,i,s,a){var n=Math.abs(a);1===s?(t.style.zIndex=i-n,t.cur=1):t.style.zIndex=a>0?(1-s)*n*1e3:(s-1)*n*1e3,t.cur&&t.cur!==s&&setTimeout(function(){t.cur=null},300);var o=t.cur?1-.2*Math.abs(s-1)-Math.abs(.2*a/i).toFixed(6):1;t.style.webkitTransform="scale("+o+", "+o+") translateZ(0) translate"+e+"("+((1+.2*Math.abs(s-1))*a+i*(s-1))+"px)"},self:function(t,e,i,s,a){var n=s%2===0?n=Math.abs(a/i):1-Math.abs(a/i);t.style.webkitTransform="translateZ(0) translate"+e+"("+(a+i*(s-1))+"px) scale("+n+")"}},iSlider.prototype._setUpDamping=function(){var t=this.scale>>1,e=t>>1,i=e>>2;this._damping=function(s){var a,n=Math.abs(s);return a=n<t?n>>1:n<t+e?e+(n-t>>2):e+i+(n-t-e>>3),s>0?a:-a}},iSlider.prototype._renderItem=function(t,e){var i,s,a=this.data.length;return i=this.isLooping?e<0?this.data[a+e]:e>a-1?this.data[e-a]:this.data[e]:this.data[e]||{empty:!0},i.empty?(t.innerHTML="",void(t.style.background="")):("pic"===this.type?("undefined"==typeof i.width&&(i.width=this.width),"undefined"==typeof i.height&&(i.height=this.height),this.isOverspread?t.style.background="url("+i.content+") 50% 50% / cover no-repeat":s=i.height/i.width>this.ratio?'<img height="'+this.height+'" src="'+i.content+'">':'<img width="'+this.width+'" src="'+i.content+'">'):"dom"===this.type&&(s=i.content),void(s&&(t.innerHTML=s)))},iSlider.prototype._renderHTML=function(){var t=this;this.outer&&(this.outer.innerHTML=""),console.log(t.dotOutside);var e=this.outer||document.createElement("ul");e.style.cssText="height:"+(this.height-t.dotOutside)+"px;width:"+this.width+"px;",this.els=[];for(var i=0;i<3;i++){var s=document.createElement("li");s.style.cssText="height:"+(this.height-t.dotOutside)+"px;width:"+this.width+"px;",this.els.push(s),this._animateFunc(s,this.axis,this.scale,i,0),!this.isVertical||"rotate"!==this._opts.animateType&&"flip"!==this._opts.animateType?this._renderItem(s,i-1+this.slideIndex):this._renderItem(s,1-i+this.slideIndex),e.appendChild(s)}this.outer||(this.outer=e,this.wrap.appendChild(e))},iSlider.prototype.slideTo=function(t){var e=this.data,i=this.els,s=t,a=t-this.slideIndex,n=this;if(Math.abs(a)>1){var o=a>0?this.els[2]:this.els[0];this._renderItem(o,s)}e[s]?this.slideIndex=s:this.isLooping?this.slideIndex=a>0?0:e.length-1:(this.slideIndex=this.slideIndex,a=0),this.log("pic idx:"+this.slideIndex);var r;!this.isVertical||"rotate"!==this._opts.animateType&&"flip"!==this._opts.animateType?a>0?(r=i.shift(),i.push(r)):a<0&&(r=i.pop(),i.unshift(r)):a>0?(r=i.pop(),i.unshift(r)):a<0&&(r=i.shift(),i.push(r)),0!==a&&(Math.abs(a)>1?(this._renderItem(i[0],s-1),this._renderItem(i[2],s+1)):1===Math.abs(a)&&this._renderItem(r,s+a),r.style.webkitTransition="none",r.style.visibility="hidden",setTimeout(function(){r.style.visibility="visible"},200),this.onslidechange&&this.onslidechange(this.slideIndex),n.dotChange&&n.dotChange());for(var d=0;d<3;d++)i[d]!==r&&(i[d].style.webkitTransition="all "+this.useTime+"ms ease"),this._animateFunc(i[d],this.axis,this.scale,d,0);this.isAutoplay&&!this.isLooping&&this.slideIndex===e.length-1&&this.pause()},iSlider.prototype._bindHandler=function(){var t=this,e=!1,i=t.outer,s=!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),a=s?"touchstart":"mousedown",n=s?"touchmove":"mousemove",o=s?"touchend":"mouseup",r=function(i){e=!0,t.pause(),t.onslidestart&&t.onslidestart(),t.log("Event: beforeslide"),t.startTime=(new Date).getTime(),t.startX=s?i.targetTouches[0].pageX:i.pageX,t.startY=s?i.targetTouches[0].pageY:i.pageY},d=function(i){if(e){t.nowX=s?i.targetTouches[0].pageX:i.pageX,t.nowY=s?i.targetTouches[0].pageY:i.pageY,t.deltaX=t.nowX-t.startX,t.deltaY=t.nowY-t.startY,t.isVertical?Math.abs(t.deltaY)-Math.abs(t.deltaX)>0&&i.preventDefault():Math.abs(t.deltaY)-Math.abs(t.deltaX)<0&&i.preventDefault();var a=t.data.length,n=t.axis,o=s?i.targetTouches[0]["page"+n]:i["page"+n],r=o-t["start"+n];t.onslide&&t.onslide(r),t.log("Event: onslide"),t.isLooping||(r>0&&0===t.slideIndex||r<0&&t.slideIndex===a-1)&&(r=t._damping(r));for(var d=0;d<3;d++){var h=t.els[d];h.style.webkitTransition="all 0s",t._animateFunc(h,n,t.scale,d,r)}t.offset=r}},h=function(i){e=!1;var s=t.offset,a=t.scale/2,n=(new Date).getTime();a=n-t.startTime>300?a:14,s>=a?t.slideTo(t.slideIndex-1):s<-a?t.slideTo(t.slideIndex+1):t.slideTo(t.slideIndex),t.offset=0,t.isAutoplay&&t.play(),t.onslideend&&t.onslideend(t.slideIndex),t.log("Event: afterslide"),t.dotChange&&t.dotChange()},l=function(e){setTimeout(function(){t.reset(),t.log("Event: orientationchange")},100)};i.addEventListener(a,r),i.addEventListener(n,d),i.addEventListener(o,h),window.addEventListener("orientationchange",l)},iSlider.prototype.reset=function(){this.pause(),this._setting(),this._renderHTML(),this.isAutoplay&&this.play()},iSlider.prototype.play=function(){var t=this,e=this.duration;clearInterval(this.autoPlayTimer),this.autoPlayTimer=setInterval(function(){t.slideTo(t.slideIndex+1)},e)},iSlider.prototype.pause=function(){clearInterval(this.autoPlayTimer)},iSlider.prototype.addDot=function(t){if(!this.isVertical){var e=this,i=this.data,s=[],a=document.createElement("div");a.className="islider-dot-wrap addDot"+this.wrap.getAttribute("data-num");for(var n=document.createDocumentFragment(),o=0;o<i.length;o++)s[o]=document.createElement("span"),s[o].className=t+"-dot",s[o].setAttribute("index",o),s[o].style.backgroundColor=this.dotColor.others,n.appendChild(s[o]),0===o&&(s[0].classList.add("active"),s[o].style.backgroundColor=this.dotColor.main);a.appendChild(n),this.wrap.appendChild(a)}this.dotChange=function(){for(var t=0;t<s.length;t+=1)s[t].classList.remove("active"),s[t].style.backgroundColor=this.dotColor.others;s[e.slideIndex].classList.add("active"),s[e.slideIndex].style.backgroundColor=this.dotColor.main}},iSlider.prototype.extend=function(t,e){e||(e=iSlider.prototype),Object.keys(t).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})};