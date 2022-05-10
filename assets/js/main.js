var userimage = document.querySelector("#userimage");
var overlay = document.querySelector(".overlay");
var cross = document.querySelector(".overlay .fa-close");

userimage.addEventListener('click', function() {
    overlay.classList.remove('d-none');
});


cross.addEventListener('click', function() {
    overlay.classList.add('d-none');
});

//  Get this script ready when the page loads
$(document).ready(function() {
    //   Create a function
    $(".arrow").click(function(event) {
        //       Select the body of the page and scroll down by 650 pixels worth
        $("html, body").animate({ scrollTop: "+=650px" }, 800);
    });
});