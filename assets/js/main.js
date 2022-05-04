var userimage = document.querySelector("#userimage");
var overlay = document.querySelector(".overlay");
var cross = document.querySelector(".overlay .fa-close");

userimage.addEventListener('click', function() {
    overlay.classList.remove('d-none');
});


cross.addEventListener('click', function() {
    overlay.classList.add('d-none');
});