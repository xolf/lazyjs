var LazyUrl;

bla = {"animation": true};

LazyJs(bla);

function LazyJs(arg){

    $( document ).ready( function() {

        var css = ".windows8{position:relative;width:28px;height:28px;margin:auto}.windows8 .wBall{position:absolute;width:27px;height:27px;opacity:0;transform:rotate(225deg);-o-transform:rotate(225deg);-ms-transform:rotate(225deg);-webkit-transform:rotate(225deg);-moz-transform:rotate(225deg);animation:orbit 3.6325s infinite;-o-animation:orbit 3.6325s infinite;-ms-animation:orbit 3.6325s infinite;-webkit-animation:orbit 3.6325s infinite;-moz-animation:orbit 3.6325s infinite}.windows8 .wBall .wInnerBall{position:absolute;width:3px;height:3px;background:#000;left:0;top:0;border-radius:3px}.windows8 #wBall_1{animation-delay:796ms;-o-animation-delay:796ms;-ms-animation-delay:796ms;-webkit-animation-delay:796ms;-moz-animation-delay:796ms}.windows8 #wBall_2{animation-delay:153ms;-o-animation-delay:153ms;-ms-animation-delay:153ms;-webkit-animation-delay:153ms;-moz-animation-delay:153ms}.windows8 #wBall_3{animation-delay:.3165s;-o-animation-delay:.3165s;-ms-animation-delay:.3165s;-webkit-animation-delay:.3165s;-moz-animation-delay:.3165s}.windows8 #wBall_4{animation-delay:.4695s;-o-animation-delay:.4695s;-ms-animation-delay:.4695s;-webkit-animation-delay:.4695s;-moz-animation-delay:.4695s}.windows8 #wBall_5{animation-delay:633ms;-o-animation-delay:633ms;-ms-animation-delay:633ms;-webkit-animation-delay:633ms;-moz-animation-delay:633ms}@keyframes orbit{0%{opacity:1;z-index:99;transform:rotate(180deg);animation-timing-function:ease-out}7%{opacity:1;transform:rotate(300deg);animation-timing-function:linear;origin:0}30%{opacity:1;transform:rotate(410deg);animation-timing-function:ease-in-out;origin:7%}39%{opacity:1;transform:rotate(645deg);animation-timing-function:linear;origin:30%}70%{opacity:1;transform:rotate(770deg);animation-timing-function:ease-out;origin:39%}75%{opacity:1;transform:rotate(900deg);animation-timing-function:ease-out;origin:70%}100%,76%{opacity:0;transform:rotate(900deg)}}@-o-keyframes orbit{0%{opacity:1;z-index:99;-o-transform:rotate(180deg);-o-animation-timing-function:ease-out}7%{opacity:1;-o-transform:rotate(300deg);-o-animation-timing-function:linear;-o-origin:0}30%{opacity:1;-o-transform:rotate(410deg);-o-animation-timing-function:ease-in-out;-o-origin:7%}39%{opacity:1;-o-transform:rotate(645deg);-o-animation-timing-function:linear;-o-origin:30%}70%{opacity:1;-o-transform:rotate(770deg);-o-animation-timing-function:ease-out;-o-origin:39%}75%{opacity:1;-o-transform:rotate(900deg);-o-animation-timing-function:ease-out;-o-origin:70%}100%,76%{opacity:0;-o-transform:rotate(900deg)}}@-ms-keyframes orbit{39%,7%{-ms-animation-timing-function:linear}0%,70%,75%{opacity:1;-ms-animation-timing-function:ease-out}100%,75%,76%{-ms-transform:rotate(900deg)}0%{z-index:99;-ms-transform:rotate(180deg)}7%{opacity:1;-ms-transform:rotate(300deg);-ms-origin:0}30%{opacity:1;-ms-transform:rotate(410deg);-ms-animation-timing-function:ease-in-out;-ms-origin:7%}39%{opacity:1;-ms-transform:rotate(645deg);-ms-origin:30%}70%{-ms-transform:rotate(770deg);-ms-origin:39%}75%{-ms-origin:70%}100%,76%{opacity:0}}@-webkit-keyframes orbit{0%{opacity:1;z-index:99;-webkit-transform:rotate(180deg);-webkit-animation-timing-function:ease-out}7%{opacity:1;-webkit-transform:rotate(300deg);-webkit-animation-timing-function:linear;-webkit-origin:0}30%{opacity:1;-webkit-transform:rotate(410deg);-webkit-animation-timing-function:ease-in-out;-webkit-origin:7%}39%{opacity:1;-webkit-transform:rotate(645deg);-webkit-animation-timing-function:linear;-webkit-origin:30%}70%{opacity:1;-webkit-transform:rotate(770deg);-webkit-animation-timing-function:ease-out;-webkit-origin:39%}75%{opacity:1;-webkit-transform:rotate(900deg);-webkit-animation-timing-function:ease-out;-webkit-origin:70%}100%,76%{opacity:0;-webkit-transform:rotate(900deg)}}@-moz-keyframes orbit{0%{opacity:1;z-index:99;-moz-transform:rotate(180deg);-moz-animation-timing-function:ease-out}7%{opacity:1;-moz-transform:rotate(300deg);-moz-animation-timing-function:linear;-moz-origin:0}30%{opacity:1;-moz-transform:rotate(410deg);-moz-animation-timing-function:ease-in-out;-moz-origin:7%}39%{opacity:1;-moz-transform:rotate(645deg);-moz-animation-timing-function:linear;-moz-origin:30%}70%{opacity:1;-moz-transform:rotate(770deg);-moz-animation-timing-function:ease-out;-moz-origin:39%}75%{opacity:1;-moz-transform:rotate(900deg);-moz-animation-timing-function:ease-out;-moz-origin:70%}100%,76%{opacity:0;-moz-transform:rotate(900deg)}}",
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);


        $('.lazyjs').each( function() {
            var element = $( this );
            if(arg.animation) $( element ).html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');
            LazyUrl = $( this ).attr( 'data-origin');
            $.ajax({url: LazyUrl, success: function(result){
                $( element ).html(result);
            }});

        });
    });
}