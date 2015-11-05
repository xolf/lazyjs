$( document ).ready( function() {
    $('.lazyjs').each( function() {
        console.log($( this)[0].attributes);
    });
});