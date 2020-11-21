var cursor = document.querySelector(".cursor");
var navItems = document.querySelectorAll(".nav-item");

document.addEventListener('mousemove', function(e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
})

navItems.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove("link-animation");
        link.classList.remove("hover-effect");
    });
    link.addEventListener('mouseover', () => {
        cursor.classList.add("link-animation");
        link.classList.add("hover-effect");
    });
});