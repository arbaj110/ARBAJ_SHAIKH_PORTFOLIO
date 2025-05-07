// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Scroll Animation
const header = document.querySelector("header");
const scrollElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("appear");
};

const hideScrollElement = (element) => {
    element.classList.remove("appear");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el);
        }
    });
};

// Header Scroll Effect
const headerScrollEffect = () => {
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Initialize
window.addEventListener("scroll", () => {
    handleScrollAnimation();
    headerScrollEffect();
});

// Initial check to display elements that are already in view when the page loads
handleScrollAnimation();


// emailJS send email

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var params = {
            name: document.getElementById("name-name").value,
            email: document.getElementById("email-email").value,
            message: document.getElementById("message-message").value,
        };

        const serviceID = "service_ct3uexj";
        const templateID = "template_v09zcn8";

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById("name-name").value = "";
                document.getElementById("email-email").value = "";
                document.getElementById("message-message").value = "";
                console.log(res);
                alert("Your message sent successfully!!");
            })
            .catch((err) => console.log(err));
    });

    contactForm.reset();
}


