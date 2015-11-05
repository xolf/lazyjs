var LazyUrl;

bla = {"animation": true};

LazyJs(bla);

function LazyJs(arg){

    $( document ).ready( function() {
        $('.lazyjs').each( function() {
            var element = $( this );
            if(arg.animation) $( element ).html('<p class="lazyjsLoading">Loading <span>.</span><span>.</span><span>.</span></p>');
            LazyUrl = $( this ).attr( 'data-origin');
            $.ajax({url: LazyUrl, success: function(result){
                $( element ).html(result);
            }});

        });
    });
}