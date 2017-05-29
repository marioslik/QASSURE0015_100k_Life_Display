// JavaScript Document
var container;
var content;
var dcLogo;
var bgExit;
var tl;
var preload;

$(document).ready(function () {

    var i = [
        "base-image-01.jpg",
        "logo-partner.svg",
        "logo-qantas.svg",
        "shape-blue.svg",
        "shape-mask.svg",
        "shape-red.svg",
        "shape-white.svg",
    ];

    preloadimages(i).done(function (images) {
        console.log("loaded");
        imagesLoaded = true;
        initCSS();
        startAnimation()
    });
});

function initCSS() {

    //SET STARTING POSITIONS FOR ELEMENTS
    TweenLite.set($("#blue-shape"), {alpha: 1, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#blue-shape-small"), {alpha: 1, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});
    TweenLite.set($("#red-gradient"), {rotation:0, x:-20, y: 50, scale:1});
    TweenLite.set($("#partnership-white-shape-small"), {x:-5, y:24});

    TweenLite.set($("#logos-container"), {x:17, y:11});
    TweenLite.set($(".qantas-logo"), {scale:1.2});


    TweenLite.set(".bg-wrapper", {perspective:800});
    TweenLite.set(".back", {rotationY:180 });
    //TweenLite.set(".bg-image-02", {rotationY:180 });
    TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden", transformStyle:"preserve-3d"});
    TweenLite.set(".back", {rotationY:0});
    TweenLite.set("#messaging-frame-02 p", {rotationY:0, zIndex:1000});
    TweenLite.set(".bg-image-01", {alpha:0});
    TweenLite.set("#bonus", {display:'inline-block'});

    $( ".banner" ).hover(
        function() {
            $("#cta-button").addClass('hover');
        }, function() {
            $("#cta-button").removeClass('hover');
        }
    );

    if($('.terms-txt').text().length > 0)
    {
        $('.terms').click(function(){
          console.log('extended terms');
          $('.overlay').fadeIn();
          $('.terms').fadeOut();
      });

        $('.overlay-close').click(function(){
          $('.overlay').fadeOut();
          $('.terms').fadeIn();
      });
    }else{
        $('.terms').click(function(){
          console.log('clicktag invoked');
          window.open(window.clickTag);
      });
    }

    $('.clicktag').click(function(){
        console.log('clicktag invoked');
        window.open(window.clickTag);
    });

}

//------------------------------- MAIN ANIMATION -------------------------------

var percentFill = 80, /* in %, ie. this is 10% */
    duration    = 1.5;

function startAnimation() {

    console.log("startAnimation");

    $(".container").show();
    $(".loader").hide();

    bannerWidth = $(".container").width();
    bannerHeight = $(".container").height();

    // split text
    var mySplitText = new SplitText("#bonus", {type:"words,chars"});
    var mySplitText2 = new SplitText("#qantasassure", {type:"words,chars"});
    var mySplitText3 = new SplitText("#tax", {type:"words,chars"});
    var mySplitText4 = new SplitText("#eofy", {type:"words,chars"});

    var bonus = mySplitText.chars;
    var qantasassure = mySplitText2.chars;
    var tax = mySplitText3.chars;
    var eofy = mySplitText4.chars;

    tl = new TimelineLite();

        //FRAME 01/INTRO ------------------------------------------------
        tl.from("#messaging-frame-01", 2, {alpha: 0, y: -10, ease: Power1.easeOut}, "1");
        tl.staggerFrom(eofy, 0.5, {alpha:0, x:-10, rotationY:360, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.05, "1.1");
        //Base Gradient
        tl.to("#red-grad-values", 3, {attr:{cx:150, cy:500, r:463}, ease:Power2.easeInOut}, "0");
        tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, "0");
        tl.to("#base-grad-stop-02", 1.5, {stopOpacity:0, ease:Power2.easeInOut}, ".2");
        tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".2");
        tl.to("#red-gradient", 3, {rotation:-90, autoAlpha:0, x:-140, y:-500, scale:1, ease: Power2.easeInOut}, "0");



        //Shape Reveal Intro
        tl.to(".shapes", 2, {alpha:1, rotation: -20, transformOrigin: "50% 50%"}, "0");
        tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1.1, scaleY: 1.1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0");
        tl.to("#blue-shape-small", 1, {autoAlpha:0, rotation: 90, scaleX:0.2, scaleY: 0.2, x: 200, y: 15, ease: Sine.easeInOut}, ".3");
        tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1.2, scaleY: 1.2, x: 5, y: 130, ease: Sine.easeInOut}, ".3");
        tl.to("#mask-shape", 0.6, {rotation: 0, scaleX: 3.8, scaleY: 3.8, x: -1760, y: -1355, ease: Power2.easeIn}, "1.1");
        tl.to("#blue-shape", 0.5, {rotation: -180, autoAlpha:0, scaleX: 1.3, scaleY: 1.3, x: -170, y: 415, ease: Power2.easeIn}, "1.2");


        tl.from(".logo-qantas", 1.7, {alpha:0, y:-20, ease: Power1.easeOut}, "1.6");
        //tl.call(countDown, [900, 999, 000, ".points-copy .hundreds-countdown"], this, "3.5");
        tl.from(".terms", 1.2, {alpha: 0, ease: Power1.easeOut}, "4.6");

        tl.from("#partnership-white-shape-small", 2.5, {autoAlpha:0.4, rotation:90, x:55, scaleY:1.2, ease: Power1.easeOut}, ".2");
        tl.to("#white-grad-small-stop-01", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1.3");
        tl.to("#white-grad-small-stop-02", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1.3");
        tl.to("#white-grad-small-stop-03", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1.3");

        tl.to("#red-gradient", 3.5, {autoAlpha:1, rotation:-30, x:-130, y: 20, scale:1, ease: Power1.easeInOut}, "0");

        //FRAME 02  ------------------------------------------------
        tl.add("frame02", 4);
        tl.to("#messaging-frame-01", 1.2, {alpha: 0, y: '+=20', ease: Power1.easeInOut}, "frame02");
        tl.from("#messaging-frame-02", 1.2, {alpha: 0, y: -20, ease: Power1.easeInOut}, "frame02+=.5");


        //FRAME 03  ------------------------------------------------
        tl.add("frame03", 7);
        tl.to("#messaging-frame-02", 1.2, {alpha: 0, y: '+=20', ease: Power1.easeInOut}, "frame03+=.3");
        tl.from("#messaging-frame-03", 2, {alpha: 0, y: -20, ease: Power1.easeInOut}, "frame03+=.5");
        tl.staggerFrom(tax, 0.5, {alpha:0, x:-10, rotationY:360, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.05, "frame03+=.9");

        //FRAME 04  ------------------------------------------------
        tl.add("frame04", 10);
        tl.to("#messaging-frame-03", 1.2, {alpha: 0, y: '+=20', ease: Power1.easeInOut}, "frame04+=.3");
        tl.from("#messaging-frame-04", 2, {alpha: 0, y: -20, ease: Power1.easeInOut}, "frame04+=.5");



        //END FRAME  ------------------------------------------------
        tl.add("endframe", 11.85);

        tl.to("#messaging-frame-04", 1.2, {alpha: 0, y: "+=20", ease: Power1.easeInOut}, "endframe");
        tl.from("#messaging-endframe", 2, {alpha: 0, y: 20, ease: Power1.easeInOut}, "endframe+=.6");

        tl.call(countDown2, [900, 999, 000, ".points-copy2 .hundreds-countdown"], this, "endframe+=.6");
        tl.from("#cta-button", 2, {alpha: 0, ease: Power2.easeInOut}, "endframe+=1.5");
        tl.to("#partnership-white-shape-small", 2, {autoAlpha:1, x:-300, y:10, scaleX:2.2, ease: Power1.easeIn}, "endframe");

        tl.fromTo("#partnership-white-shape", 3, {x:40, y:75, rotation:20,}, {x:40, y:60, rotation:0, ease: Power2.easeInOut}, "endframe+=.3");

        tl.to("#white-grad-stop-01", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=.5");
        tl.to("#white-grad-stop-02", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=1");
        tl.to("#white-grad-stop-03", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=1.7");
        tl.to("#white-grad-small-stop-02", 1, {stopOpacity:0, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=2");



        tl.to("#red-gradient", 3, {rotation:90, x:-130, y:-62, scale:0.8, ease: Power1.easeInOut}, "endFrame-=2");

        tl.to("#logos-container", 1.7, {scale:1, x:15, y: -11, ease: Power1.easeInOut}, "endframe+=0.8");
        tl.from(".logo-divider-line", 1.5, {alpha: 0, scaleY:0, transformOrigin: "50% 100%", ease: Power1.easeInOut}, "endframe+=0.8");

        tl.from(".logo-partner", 1.5, {alpha:0, y:10, ease: Power1.easeInOut}, "endframe+=0.8");
        tl.to(".logo-qantas", 2, {scale:1, y:8, ease: Power1.easeInOut}, "endframe+=0.8");



    }

    function countDown(startingPoint, limit, target, element) {

        var i = startingPoint;
        var limit = parseInt(limit);
        var target = parseInt(target);
        var value;


        var si = setInterval(function(){
            if(i < limit) {
                i++;
                value = i;
            }
            if (i === limit) {
                i = 0;
                value = i;
            }
            if(i === target) {

                $(".points-copy .hundreds-countdown").html("000")
                $(".points-copy .thousands-countdown").html("100")

                clearInterval(si)

            }
            if (i < 10) {

                value = i;
                value = "00" + i;
            }
            $(element).html(value)

        }, 18)
    }

    function countDown2(startingPoint, limit, target, element) {

        var i = startingPoint;
        var limit = parseInt(limit);
        var target = parseInt(target);
        var value;


        var si = setInterval(function(){
            if(i < limit) {
                i++;
                value = i;
            }
            if (i === limit) {
                i = 0;
                value = i;
            }
            if(i === target) {

                $(".points-copy2 .hundreds-countdown").html("000")
                $(".points-copy2 .thousands-countdown").html("100")

                clearInterval(si)

            }
            if (i < 10) {

                value = i;
                value = "00" + i;
            }
            $(element).html(value)

        }, 18)
    }

function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0;
    var postaction = function () {};
        arr = (typeof arr != "object") ? [arr] : arr;

    function imageloadpost() {
        loadedimages++;
        if (loadedimages == arr.length) {
            postaction(newimages); //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = arr[i];
        newimages[i].onload = function () {
            imageloadpost();
        };
        newimages[i].onerror = function () {
            imageloadpost();
        };
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction; //remember user defined callback functions to be called when images load
        }
    };
}
