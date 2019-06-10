(function() {
    var hamburger = document.querySelector('.master-header .hamburger');
    var nav = document.querySelector('.master-header nav');

    function setNavState(open) {
        if (open) {
            nav.setAttribute('open', '');
        } else {
            nav.removeAttribute('open');
        }
    }

    hamburger.addEventListener('click', function() {
        setNavState(!nav.hasAttribute('open'));
    });

    nav.addEventListener('click', function() {
        setNavState(false);
    });

    window.addEventListener('resize', function() {
        setNavState(false);
    });
})();

function gotoSmooth(target) {
    document.getElementById(target).scrollIntoView({
        behavior: 'smooth'
    });
}
