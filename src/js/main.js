
/*
var path = window.location.pathname;
var branch = path.match(/doc\/([^\/]+)\/?/)[1];
console.log("Current branch: ", branch);
var branch = function() {
    return window.location.hash;
}

if (branch() == "") {
    window.location.hash = "master";
}

$(document).ready(function() {
    $('.ui.dropdown').dropdown({
        on: 'hover',
        action: 'nothing',
    });

    $("a branch modify item").modify = function(branch) {
        var href = $(this).attr('href');
        href.replace(current, branch);
    };

    $("a.branch.link.item").click(function(event) {
        event.preventDefault();

        $("a.branch.link.item").removeClass("active");
        $(this).addClass("active");

        console.log("clicked");
        console.log($("#text", $(this)).firstChild.data);
        //console.log($(this));

        //$('branch modify item').modify(branch);
        //branch = "test";
        window.location.hash = $(this).innerText;
    });
});
*/
