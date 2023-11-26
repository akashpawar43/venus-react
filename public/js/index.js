let cont = document.getElementById('navbarSupportedContent');
let item = cont.getElementsByClassName("nav-item");

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
