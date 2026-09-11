const heroImages = [
    'images\hero1.jpg','images/hero2.jpg','images/hero3.jpg'
]

let currentHeroIndex = 0;
const heroImageElement = document.getElementById('hero-img');

if (heroImageElement) {

    setInterval(() => {
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
        heroImageElement.src = heroImageElement[currentHeroIndex];
    },5000)
}







const aboutSection = document.getElementById('about');
const sliders = document.querySelectorAll('.slider');
let isAnimated = false;

window.addEventListener('scroll', () => {
    if (!aboutSection || isAnimated) return;

    const sectionPos = aboutSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        sliders.forEach(slider => {
            const targetValue = parseInt(slider.getAttribute('data-target'));
            let currentValue = 0;
            
            const speed = 15;
            const interval = setInterval(() => {
                if (currentValue >= targetValue) {
                    clearInterval(interval);
                } else {
                    currentValue++;
                    slider.value = currentValue;
                  
                    slider.style.background = `linear-gradient(to right, #ff8c00 ${currentValue}%, #ffffff ${currentValue}%)`;
                }
            }, speed);
        });

        isAnimated = true;
    }
});










const filterButtons = document.querySelectorAll('.projects-btns .filter-btn');
const projectCards = document.querySelectorAll('.projects-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedCategory = button.getAttribute('data-category');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});




const testimonialsData = [
    {
    text:"jjjjjjjjjjjjjjjj",
    img:"images/",
    name:"hkj",
    role:"jgkjg"
    },

    {
    text:"hjkkjkkk",
    img:"images/",
    name:"hkjhjkkj",
    role:"hnjkhkh"
    },

     {
    text:"jkhkjlhl",
    img:"images/",
    name:"jlkhlh",
    role:"jklkhk"
    },

     {
    text:"lkhkhk",
    img:"images/",
    name:"jk;jh;lk",
    role:"nj,nb"
    },

     
];

const testimonialTextElement = document.getElementById('testimonial-text');
const testimonialImgElement = document.getElementById('testimonial-img');
const testimonialNameElement = document.getElementById('testimonial-name');
const testimonialRoleElement = document.getElementById('testimonial-role');
const testimonialDots = document.querySelectorAll('.dots .dot');

testimonialDots.forEach(dot => {
    dot.addEventListener('click', () => {
        testimonialDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        const slideIndex = dot.getAttribute('data-index');

        testimonialTextElement.textContent = testimonialsData[slideIndex].text;
        testimonialImgElement.src = testimonialsData[slideIndex].img;
        testimonialNameElement.textContent = testimonialsData[slideIndex].name;
        testimonialRoleElement.textContent = testimonialsData[slideIndex].role;
    });
});









const contactForm = document.querySelector('.contact-form');
const contactModal = document.getElementById('contact-modal');
const closeModalBtn = document.querySelector('.close-modal');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        website: document.getElementById('website').value,
        message: document.getElementById('message').value
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            contactModal.classList.add('show');
            contactForm.reset();
        }
    })
    .catch(error => {
        console.error('Error sending request:', error);
    });
});

closeModalBtn.addEventListener('click', () => {
    contactModal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove('show');
    }
});