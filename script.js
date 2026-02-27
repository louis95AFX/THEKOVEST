document.addEventListener("DOMContentLoaded", () => {
    // 1. DYNAMIC HEADER (Scroll Effect)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // 2. HERO SLIDER
    // const slides = document.querySelectorAll(".slide");
    // let index = 0;
    // setInterval(() => {
    //     slides[index].classList.remove("active");
    //     index = (index + 1) % slides.length;
    //     slides[index].classList.add("active");
    // }, 5000);

    // 3. MOBILE MENU
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    menuBtn.addEventListener("click", () => {
        navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
        navLinks.classList.toggle("active");
    });

    // 4. SCROLL REVEAL (Using IntersectionObserver for performance)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // 5. STATS COUNTER
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(update, 10);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
});

// 6. MODAL CONTROL (Global scope for onclick attributes)
window.openModal = () => {
    document.getElementById("contactModal").style.display = "flex";
};

window.closeModal = () => {
    document.getElementById("contactModal").style.display = "none";
};