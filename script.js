
document.getElementById("burger").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});
document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("hidden");
});
