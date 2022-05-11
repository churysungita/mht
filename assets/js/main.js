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
const scrollTop = document.getElementById('scrolltop')
window.onscroll = () => {
    if (window.scrollY > 0) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = 1;
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = 0;
    }
};

//scroll down
// Get this script ready when the page loads
$(document).ready(function() {
    //   Create a function
    $("#scrollDown").click(function(event) {
        //       Select the body of the page and scroll down by 650 pixels worth
        $("html, body").animate({ scrollTop: "+=650px" }, 800);
    });
});