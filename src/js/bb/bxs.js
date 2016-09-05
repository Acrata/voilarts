import classie from '../bower_components/classie';
document.getElementById("trigger").addEventListener("click", function( event) {
    // display the current click count inside the clicked div
        var wrapper = document.getElementById('wrapper');
            event.preventDefault();
        classie.toggleClass(document.getElementById('wrapper'),'is-open');
            console.log(classie);
  }, false);
