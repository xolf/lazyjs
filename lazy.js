/*
 Calls a specific URL
 */
function callTo(url, element, arg) {
    if(arg.debugging) console.log('LAZYJS | Started request: ' + url);
    $.get(url, function (result) {
        $(element).html(result);
        if(arg.debugging) console.log('LAZYJS | Finished request: ' + url);
    });
}

/*
 Enables Lazy Js
 Send us some Arguments!
 */
function LazyJs(arg) {
    var LazyUrl, styleCss='';
    if (arg.debugging) console.log('lazyjs loaded');
    if (arg.animationcolor && arg.animation && arg.animation != 'thecube') styleCss = ' style="background: ' + arg.animationcolor + '"';

    //Searches for some LazyJS container
    $('.lazyjs').each(function () {

        //Stores them
        var element = $(this);

        //Displays the loading animation
        if (arg.animation == 'windows8') $(element).html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"' + styleCss + '></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"' + styleCss + '></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"' + styleCss + '></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"' + styleCss + '></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"' + styleCss + '></div></div></div>');
        if (arg.animation == 'blockroll') $(element).html('<div class="blockRoll"><div id="block1" class="block"' + styleCss + '></div><div id="block2" class="block"' + styleCss + '></div><div id="block3" class="block"' + styleCss + '></div><div id="block4" class="block"' + styleCss + '></div><div id="block5" class="block"' + styleCss + '></div><div id="block6" class="block"' + styleCss + '></div><div id="block7" class="block"' + styleCss + '></div><div id="block8" class="block"' + styleCss + '></div><div id="block9" class="block"' + styleCss + '></div></div>');
        if (arg.animation == 'thecube') $(element).html('<div class="cssload-thecube"> <div class="cssload-cube cssload-c1"' + styleCss + '></div> <div class="cssload-cube cssload-c2"' + styleCss + '></div> <div class="cssload-cube cssload-c4"' + styleCss + '></div> <div class="cssload-cube cssload-c3"' + styleCss + '></div> </div>');

        //Collects the URL from the LazyJS element
        LazyUrl = $(this).attr('data-origin');
        callTo(LazyUrl, element, arg);
    });

    //TheCube animation needs some special styles for changing the color
    if(arg.animationcolor && arg.animation == 'thecube') $('head').append('<style>.cssload-thecube .cssload-cube:before{background-color: ' + arg.animationcolor + '}</style>');
    if(arg.debugging) console.log('LAZYJS | All tasks are forgiven');
}