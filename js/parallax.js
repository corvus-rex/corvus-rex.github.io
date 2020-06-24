$(document).ready(function() {
    function parallax(){
            $('#cityscape-parallax').css({backgroundPosition:'0px 0px'}).animate(
                {'background-position-x': '-100000%'},9000000, 'linear', parallax
            )
    }
    parallax();
});