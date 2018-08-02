var burgerState = false;
function burgerToggle() {
    document.getElementById("header-menu-alt").style.display = (burgerState ? "none" : "grid");
    burgerState = !burgerState;
}

function learnMore() {
    document.getElementById("learn-more").scrollIntoView({
        behavior: "smooth"
    });
}

function scrollUp() {
    document.getElementById("header").scrollIntoView({
        behavior: "smooth"
    });
}