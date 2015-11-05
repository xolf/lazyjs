var LazyUrl;

bla = {"animation": true};

LazyJs(bla);
/*
Enables Lazy Js
Send us some Arguments!
 */
function LazyJs(arg){

    $( document ).ready( function() {

        //Searches for some LazyJS container
        $('.lazyjs').each( function() {

            //Stores them
            var element = $( this );

            //Displays the loading animation
            if(arg.animation) $( element ).html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');

            //Collects the URL from the LazyJS element
            LazyUrl = $( this ).attr( 'data-origin' );
            $.ajax({url: LazyUrl,async: true, success: function( result ){
                $( element ).html( result );
            }});

        });
    });
}