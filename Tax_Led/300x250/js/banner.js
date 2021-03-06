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
        "logo-qantas.svg",
        "logo-partner.svg",
        "shape-blue.svg",
        "shape-mask.svg",
        "shape-red.svg",
        "shape-white.svg"
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
    TweenLite.set($("#red-gradient"), {autoAlpha:0, rotation:70, x:-210, y: 60, scale:0.8});
    TweenLite.set($("#partnership-white-shape-small"), {y:-9})
    TweenLite.set($("#logos-container"), {y:-4, scale:1.05});
    TweenLite.set("#messaging-frame-01b", {alpha:0});


    $( ".banner" ).hover(
        function() {
            $("#cta-button").addClass('hover');
        }, function() {
            $("#cta-button").removeClass('hover');
        }
    );

    if($('.overlay').length) {
        $('.terms').click(function(){
          console.log('extended terms');
          $('.overlay').fadeIn();
          $('.terms').fadeOut();
      });

        $('.overlay-close').click(function(){
          $('.overlay').fadeOut();
          $('.terms').fadeIn();
      });
    } else {
        $('.terms').click(function(){
          console.log('clicktag invoked');
          window.open(clickTag);
      });
    }

    $('.clicktag').click(function(){
        console.log('clicktag invoked');
        window.open(clickTag);
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

    var mySplitText = new SplitText("#bonus", {type:"words,chars"});
    var mySplitText2 = new SplitText("#june", {type:"words,chars"});
    var mySplitText3 = new SplitText("#tax", {type:"words,chars"});

    var bonus = mySplitText.chars;
    var june = mySplitText2.chars;
    var tax = mySplitText3.chars;

    tl = new TimelineLite();

    //FRAME 01/INTRO ------------------------------------------------
    // tl.from(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, "0");
    // tl.to(".bg-image", 1, {alpha:0, ease:Power1.easeInOut}, "3.5");

    tl.from("#messaging-frame-00", 2, {alpha: 0, y: -10, ease: Power1.easeOut}, "1");
    tl.fromTo(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, {alpha: 0, ease: Power1.easeOut}, "2");
    tl.from(".qantas-logo-colour", 1.8, {alpha:0, y:-10, ease: Power1.easeInOut}, "1");
    tl.from(".logo-qantas", 2, {alpha:0, ease: Power1.easeInOut}, "1");
    tl.from(".terms", 1.2, {alpha: 0, ease: Power1.easeOut}, "4.6");

    tl.from("#partnership-white-shape-small", 2.5, {autoAlpha:0.4, rotation:90, x:55, scaleY:1.2, ease: Power1.easeOut}, "0.2");
    tl.to("#white-grad-small-stop-01", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1.3");
    tl.to("#white-grad-small-stop-02", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1.3");
    tl.to("#white-grad-small-stop-03", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1");

    //Base Gradient
    tl.to("#red-grad-values", 2.5, {attr:{cx:0, cy:295, r:450}, ease:Power2.easeInOut}, "0");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, ".2");
    tl.to("#base-grad-stop-02", 2, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#red-gradient", 3, {rotation:-30, autoAlpha:0, x:0, y:-290, scale:1, ease: Power2.easeInOut}, "0");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -9, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1, scaleY: 1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {alpha:1, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 221, y: 35, ease: Sine.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1, scaleY: 1, x: 5, y: 130, ease: Sine.easeInOut}, ".3");
    tl.to("#mask-shape", 0.5, {rotation: 0, scaleX: 2.2, scaleY: 2.2, x: -1950, y: -1315, ease: Power2.easeIn}, "1.1");
    tl.to("#blue-shape", 0.4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -100, y: 240, ease: Power2.easeIn}, "1.3");
    tl.to("#blue-shape-small", 0.4, {rotation: 150, scaleX: 0.7, scaleY: 0.7, x: 330, y: -95, ease: Power2.easeIn}, "1.3");

    tl.to("#red-gradient", 3.5, {autoAlpha:1, rotation:34, x:-160, y: -225, scale:0.8, ease: Power1.easeInOut}, "0"); //rotation:70,


    //IMAGE FRAME  ------------------------------------------------
    tl.add("imageFrame", 3.5);
    //tl.to("#messaging-frame-00", 1.5, {alpha: 0, y: '+=0', ease: Power1.easeInOut}, "imageFrame");
    tl.to('#red-gradient', 0.8, {alpha:0, ease:Power1.easeOut}, 'imageFrame+=.3')
    tl.to('#solid-red-base2', 4, {x:660, ease:Power1.easeOut}, 'imageFrame+=.3')
    tl.to("#messaging-frame-00", 1, {alpha: 0, y: '+=0', ease: Power1.easeIn}, "imageFrame+=0.5");
    tl.fromTo(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, {alpha: 0.5, ease: Power1.easeOut}, "imageFrame");

    //IMAGE FRAME02  ------------------------------------------------
    tl.add("imageFrame2", 4);
    // tl.to("#messaging-frame-00", 1, {alpha: 0, y: '+=0', ease: Power1.easeIn}, "imageFrame2+=0.5");
    tl.to(".bg-image-01", 1, {alpha: 1, ease: Power1.easeInOut}, "imageFrame2+=0.5");

    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 6);
    tl.to(".bg-image-01", 1, {alpha:0, ease:Power1.easeIn}, "frame02");
    tl.to('#red-gradient', 1, {alpha:1, ease:Power1.easeInOut}, 'frame02+=.3')
    tl.from("#messaging-frame-01", 1.2, {alpha: 0, y: 20, ease: Power1.easeIn}, "frame02");
    tl.call(countDown, [900, 999, 000, ".points-copy .hundreds-countdown"], this, "frame02+=.3");


    //FRAME 02b  ------------------------------------------------
    tl.add("frame02b", 8);
    tl.to("#messaging-frame-01", 1.2, {y: '-=00', ease: Power1.easeInOut}, "frame02b");
    //tl.from("#messaging-frame-01b", 1.2, {alpha: 0, y: 0, ease: Power1.easeInOut}, "frame02b+=.2");
    //tl.staggerFrom(bonus, 0.5, {alpha:0, x:-10, rotationY:360, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.05, "frame02b+=0.7");

    //FRAME 03  ------------------------------------------------
    tl.add("frame03", 9);
    tl.to("#messaging-frame-01", 1.2, {alpha: 0, y: '+=20', ease: Power1.easeInOut}, "frame03+=.3");
    tl.to("#messaging-frame-01b", 1.2, {alpha: 0, y: '+=20', ease: Power1.easeInOut}, "frame03+=.3");
    tl.from("#messaging-frame-03", 2, {alpha: 0, y: -20, ease: Power1.easeInOut}, "frame03+=.5");
    //tl.staggerFrom(june, 0.5, {alpha:0, x:-10, rotationY:360, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.05, "frame03+=0.9");
    tl.staggerFrom(tax, 0.5, {alpha:0, x:-10, rotationY:360, transformOrigin:"50% 50%", ease:Sine.easeOut}, 0.05, "frame03+=1.3");


    //END FRAME  ------------------------------------------------
    tl.add("endframe", 13);

    tl.to("#messaging-frame-03", 1.2, {alpha: 0, y: "+=20", ease: Power1.easeInOut}, "endframe");
    tl.from("#messaging-endframe", 2, {alpha: 0, y: 20, ease: Power1.easeInOut}, "endframe+=.6");
    tl.call(countDown2, [900, 999, 000, ".points-copy2 .hundreds-countdown"], this, "endframe+=.6");
    tl.from("#cta-button", 2, {alpha: 0, ease: Power2.easeInOut}, "endframe+=1.5");
    tl.to("#red-gradient", 3.5, {rotation:-156, x:-440, y: -240, scale:0.8, ease: Power1.easeInOut}, "endframe+=.5");

    tl.from(".logo-divider-line", 2, {alpha: 0, scaleY:0, transformOrigin: "50% 100%", ease: Power1.easeInOut}, "endframe+=.7");
    tl.from(".logo-partner", 1.3, {alpha:0, y:10, ease: Power1.easeInOut}, "endframe+=1.2");
    tl.to(".logo-qantas", 2, {y:-6, ease: Power1.easeInOut}, "endframe+=.5");

    tl.from("#partnership-white-shape", 2, {x:40, y:35, rotation:20, ease: Power2.easeInOut}, "endframe+=.3");
    tl.to("#white-grad-stop-01", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=.5");
    tl.to("#white-grad-stop-02", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=.7");
    tl.to("#white-grad-stop-03", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=.9");
    tl.to("#white-grad-small-stop-02", 1, {stopOpacity:0, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endframe+=1");

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
