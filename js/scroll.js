$(document).ready(function(){

$(window).scroll(function(){
  scroll = $(window).scrollTop();
  if (scroll > 100) {
    $ (".menu").css({"position":"fixed"});
    $ (".menu").css({"width":"100%"});
    $ (".menu").css({"top":"0"});
    $ (".menu").css({"background":"white"});
    $ (".menu a").css({"color":"black"});
    $ (".menu").css({"box-shadow":"rgba(0, 0, 0, 0.22) 3px 6px 8px"});
    $ (".menu").css({"z-index":"100"});
  } else {
    $ (".menu").css({"position":"relative"});
    $ (".menu").css({"background":"transparent"});
    $ (".menu").css({"box-shadow":"0 0 0" });
  }
})




})
