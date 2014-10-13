$(document).ready(function() {
 
 	// Add .light-switch
    $(".switch").click(function(event) {
        $(".switcher").toggleClass("on");
        $(".light").toggleClass("on");

        // Write here the action of the switch button
        // ...
    });
});