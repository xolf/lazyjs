$( document ).ready( function() {

    /*
    Calls a specific URL
    */
    function callTo(url, element) {
        $.get(url, function( result ){
            $( element ).html( result );
        });
    }

    /*
    Enables Lazy Js
    Send us some Arguments!
     */
    function LazyJs(arg){
        var LazyUrl;

        //Searches for some LazyJS container
        $('.lazyjs').each( function() {

            //Stores them
            var element = $( this );

            //Displays the loading animation
            if(arg.animation) $( element ).html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');

            //Collects the URL from the LazyJS element
            LazyUrl = $( this ).attr( 'data-origin' );
            callTo(LazyUrl, element);

        });
    }

    bla = {"animation": true};

    LazyJs(bla);

});