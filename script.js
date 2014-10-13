$(document).ready(function() {
 
    $(".switch").click(function(event) {
        $(".switcher").toggleClass("on");
        $(".light").toggleClass("on");
        // if($(".light").hasClass("on")) $(".light").html('<i class="fa fa-sun-o"></i>');
        // else $(".light").html('<i class="fa fa-moon-o"></i>');
    });
 
});