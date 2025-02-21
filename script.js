// Typing Effect
const typingSpan = document.querySelector('.typing-text span');
const words = ["Web Developer", "Cloud & DevOps Engineer", "Web Designer", "Python Developer", "Linux Administrator"];
let wordIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typingSpan.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
    }
}
type();

// Theme Switcher
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.textContent = 'Switch Theme';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

animatedElements.forEach(element => observer.observe(element));

// Form Validation
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name && email.includes('@') && message) {
            alert('Message sent successfully!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields correctly.');
        }
    });
}

// Skills Progress Bar
const skillBars = document.querySelectorAll('.skill-progress');

window.addEventListener('scroll', () => {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        if (barTop < window.innerHeight) {
            bar.style.width = bar.dataset.progress;
        }
    });
});

// Back-to-Top Button
const backToTop = document.createElement('button');
backToTop.classList.add('back-to-top');
backToTop.innerHTML = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navigation Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Portfolio Filter (for future project section)
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        projectItems.forEach(item => {
            item.style.display = item.classList.contains(category) || category === 'all' ? 'block' : 'none';
        });
    });
});

console.log('JavaScript features loaded successfully!');
