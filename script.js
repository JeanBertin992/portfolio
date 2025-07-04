// Menu burger pour mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.querySelector('i').classList.toggle('fa-times');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.querySelector('i').classList.remove('fa-times');
    });
});

// Animation de la navbar au défilement
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.padding = '0.8rem 5%';
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'white';
        navbar.style.padding = '1rem 5%';
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    }
});

// Ajout dynamique des compétences'TypeScript','REST API''Node.js','UI/UX', 'VS Code','Responsive Design'
const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'Angular', 
    'Laravel', 'PHP', 'Git/GitHub',
    'SQL', 'MySQL','MVC Architecture', 'Postman', 
];

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill');
    skillElement.textContent = skill;
    skillsContainer.appendChild(skillElement);
});

// Ajout dynamique des projets
const projects = [
    {
        title: "Application de Gestion avec Angular",
        description: "Application web complète de gestion d'inventaire développée avec Angular pour le frontend et Laravel pour le backend, avec système d'authentification sécurisé.",
        image: "assets/images/project1.jpg",
        link: "#",
        technologies: ['Angular', 'Laravel', 'MySQL', 'REST API']
    },
    {
        title: "Application d'Archivage des diplômes",
        description: "Application web avec catalogue spécialité, gestion de carte et système d'authentification des diplômes intégré. Développé avec PHP.",
        image: "assets/images/project2.jpg",
        link: "#",
        technologies: ['Laravel', 'JavaScript', 'Bootstrap', 'MySQL']
    },
    {
        title: "Dashboard Admin",
        description: "Tableau de bord administratif avec visualisation de données en temps réel et génération de rapports.",
        image: "assets/images/project3.jpg",
        link: "#",
        technologies: ['Angular', 'Chart.js', 'REST API', 'TypeScript']
    }
    // {
    //     title: "Portfolio Personnel",
    //     description: "Ce portfolio que vous consultez actuellement, développé avec HTML5, CSS3 et JavaScript vanilla pour une performance optimale.",
    //     image: "assets/images/project4.jpg",
    //     link: "#",
    //     technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    // }
];

const projectsGrid = document.getElementById('projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="cta-button">Voir le projet</a>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
});

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupération des valeurs du formulaire
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Ici vous pourriez ajouter une requête fetch vers un backend
    console.log('Message envoyé:', data);
    
    // Feedback visuel
    const submitButton = contactForm.querySelector('button');
    submitButton.textContent = 'Message envoyé !';
    submitButton.style.backgroundColor = '#4CAF50';
    
    setTimeout(() => {
        submitButton.textContent = 'Envoyer';
        submitButton.style.backgroundColor = 'var(--primary-color)';
        contactForm.reset();
    }, 3000);
});

// Initialisation des particules
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 80, 
                    density: { 
                        enable: true, 
                        value_area: 800 
                    } 
                },
                color: { 
                    value: "#ffffff" 
                },
                shape: { 
                    type: "circle" 
                },
                opacity: { 
                    value: 0.5, 
                    random: true 
                },
                size: { 
                    value: 3, 
                    random: true 
                },
                line_linked: { 
                    enable: true, 
                    distance: 150, 
                    color: "#ffffff", 
                    opacity: 0.4, 
                    width: 1 
                },
                move: { 
                    enable: true, 
                    speed: 2, 
                    direction: "none", 
                    random: true, 
                    straight: false, 
                    out_mode: "out" 
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { 
                        enable: true, 
                        mode: "repulse" 
                    },
                    onclick: { 
                        enable: true, 
                        mode: "push" 
                    }
                }
            }
        });
    }

    // Animation des éléments au défilement
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.hero-content, .about-content, .projects-grid, .contact, .timeline-item, .skill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };

    animateOnScroll();
});

// Smooth scrolling pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});