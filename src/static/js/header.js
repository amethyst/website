var burgerState = false;
function burgerToggle() {
    document.getElementById("header-menu-alt").style.display = (burgerState ? "none" : "grid");
    burgerState = !burgerState;
}

function goto(target) {
    document.getElementById(target).scrollIntoView();
}

function gotoSmooth(target) {
    document.getElementById(target).scrollIntoView({
        behavior: "smooth"
    });
}