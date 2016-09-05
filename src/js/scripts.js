(function( root, $, undefined, classie.toggleClass ) {
	"use strict";
	$(function () {
		// DOM ready, take it away
         console.log("heyt");
         $(".wrapper").click(function(){
             console.log(classie);
        classie.toggleClass(document.getElementById('wrapper'),'is-open');
         });

	});

} ( this, jQuery ));

