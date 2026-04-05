window.addEventListener('scroll', () => {
const scrollProgress = document.querySelector('.scroll-progress');
const scrollPx = document.documentElement.scrollTop;
const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
scrollProgress.style.width = scrolled;

const navbar = document.getElementById('navbar');
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

const typedTextSpan = document.querySelector(".typing-text");
const textArray = ["Web Platforms", "AI Solutions", "Database Systems", "Secure Software"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
if (charIndex < textArray[textArrayIndex].length) {
typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
charIndex++;
setTimeout(type, typingDelay);
} else {
setTimeout(erase, newTextDelay);
}
}

function erase() {
if (charIndex > 0) {
typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
charIndex--;
setTimeout(erase, erasingDelay);
} else {
textArrayIndex++;
if (textArrayIndex >= textArray.length) textArrayIndex = 0;
setTimeout(type, typingDelay + 1100);
}
}

document.addEventListener("DOMContentLoaded", function() {
if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
filterBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const filterValue = btn.getAttribute('data-filter');
portfolioItems.forEach(item => {
if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
item.style.display = 'block';
setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
} else {
item.style.opacity = '0';
item.style.transform = 'scale(0.8)';
setTimeout(() => { item.style.display = 'none'; }, 300);
}
});
});
});

const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
for (let i = 0; i < reveals.length; i++) {
const windowHeight = window.innerHeight;
const elementTop = reveals[i].getBoundingClientRect().top;
const elementVisible = 100;
if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add("active");
}
}
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
if (pageYOffset >= sectionTop - 200) {
current = section.getAttribute('id');
}
});
navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href').substring(1) === current) {
link.classList.add('active');
}
});
});