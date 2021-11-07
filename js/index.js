const transparent = document.querySelector("#transparent")

//$(document).ready(function() {//
//$('#transparent').click(function(){//
    //alert('Button clicked!');//
//});//
//});//

$(document).ready(function() {
    $('ul li').mouseenter(function() {
        $(this).css('text-decoration', 'underline');
    }
    );
    $('ul li').mouseleave(function() {
        $(this).css('text-decoration', 'none');
    }
    );
}
);

console.log("The JS code is linked correctly!");