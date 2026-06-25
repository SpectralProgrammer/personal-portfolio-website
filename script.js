
const text = "Shravan Devraj";
const typingElement = document.getElementById("typing-name");

typingElement.style.fontSize = "6.4rem";

let index = 0;
let typingInProgress = false;

/* Typing animation */
function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    } else {
        typingInProgress = false;
    }
}

/* Restart typing */
function startTypingAnimation() {
    // Prevent overlapping animations
    if (typingInProgress) return;

    typingInProgress = true;
    index = 0;
    typingElement.textContent = "";

    typeEffect();
}

/* Initial page load */
window.onload = () => {
    setTimeout(startTypingAnimation, 500);
    setTimeout(startRoleSequence, 700);
};

/* =========================
   ROLE SEQUENCE ANIMATION
========================= */

const roleElement = document.getElementById("role-sequence");

const roleStages = [
    "gamer",
    "gamer | developer",
    "gamer | developer | mentor"
];

let roleTimeouts = [];

/* Start sequence */
function startRoleSequence() {

    // clear existing timeouts
    roleTimeouts.forEach(timeout => clearTimeout(timeout));

    roleElement.textContent = "";

    roleStages.forEach((text, index) => {

        const timeout = setTimeout(() => {
            roleElement.textContent = text;
        }, index * 800);

        roleTimeouts.push(timeout);

    });
}

/* Smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = this.getAttribute("href");

        document.querySelector(target).scrollIntoView({
            behavior: "smooth"
        });

        // Restart typing when Home is clicked
        if (target === "#home") {
            setTimeout(startTypingAnimation, 500);
            setTimeout(startRoleSequence, 700);
        }
    });
});

/* =========================
   DARK/LIGHT MODE TOGGLE
========================= */

const toggleButton = document.getElementById("theme-toggle");
const toggleIcon = document.getElementById("toggle-icon");

toggleButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // Change icon
    if (document.body.classList.contains("light-mode")) {
        toggleIcon.textContent = "☀️";
    } else {
        toggleIcon.textContent = "🌙";
    }

});

let pic_caption = "Capturing quiet moments and interesting perspectives."

const galleryImages = [

    {
        src: "Assets/AboutMe_1.png",
        caption: pic_caption
    },

    {
        src: "Assets/AboutMe_2.png",
        caption: pic_caption
    },

    {
        src: "Assets/AboutMe_3.png",
        caption: pic_caption
    },

    {
        src: "Assets/AboutMe_4.png",
        caption: pic_caption
    },

    {
        src: "Assets/AboutMe_5.png",
        caption: pic_caption
    },

    {
        src: "Assets/AboutMe_6.png",
        caption: pic_caption
    }
];

let currentImage = 0;

const image = document.getElementById("gallery-image");

const caption = document.getElementById("gallery-caption");

function updateGallery() {

    image.classList.add("fade");

    setTimeout(() => {

        image.src = galleryImages[currentImage].src;

        caption.textContent =
            galleryImages[currentImage].caption;

        image.classList.remove("fade");

    }, 200);

}

document.querySelector(".next")
.addEventListener("click", () => {

    currentImage++;

    if(currentImage >= galleryImages.length)
        currentImage = 0;

    updateGallery();

});

document.querySelector(".prev")
.addEventListener("click", () => {

    currentImage--;

    if(currentImage < 0)
        currentImage = galleryImages.length - 1;

    updateGallery();

});