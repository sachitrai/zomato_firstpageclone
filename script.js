// Add animation to input focus
const searchInput = document.querySelector("input");

searchInput.addEventListener("focus", () => {
    searchInput.style.boxShadow = "0 0 12px #ff4c4c";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
});

// Fade-in animation on load
window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("main").style.opacity = "0";
    setTimeout(() => {
        document.querySelector("main").style.transition = "opacity 1.2s ease-in";
        document.querySelector("main").style.opacity = "1";
    }, 100);
});

// Optional: Add scroll reveal animation
window.addEventListener("scroll", () => {
    const main = document.querySelector("main");
    if (window.scrollY > 50) {
        main.style.transform = "translateY(-10px)";
    } else {
        main.style.transform = "translateY(0)";
    }
});
