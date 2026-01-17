// ========================================
// DATA - UPDATE THIS SECTION WITH YOUR TEAM INFO
// ========================================

const teamMembers = [
    {
        name: "Ankit SIngh Tomar",
        role: "Full Stack Developer",
        avatar: "AT",
        description: "Passionate about building scalable web applications and cloud solutions.",
        skills: ["React", "Node.js", "AWS", "Docker"],
        github: "https://github.com/TomHacker69",
        linkedin: "https://www.linkedin.com/in/-ankitomar/"
    },
    {
        name: "Avinash Verma",
        role: "ML Engineer",
        avatar: "AV",
        description: "Specializing in deep learning and computer vision applications.",
        skills: ["Python", "TensorFlow", "PyTorch", "NLP"],
        github: "https://github.com/aviverma02",
        linkedin: "https://www.linkedin.com/in/avinash-verma-5054a8381/ "
    },
    {
        name: "Anuj Kumar Kushwaha",
        role: "Backend Developer",
        avatar: "AK",
        description: "Expert in microservices architecture and database optimization.",
        skills: ["Java", "Spring", "PostgreSQL", "Kubernetes"],
        github: "https://github.com/marcusrodriguez",
        linkedin: "https://www.linkedin.com/in/anuj-kushwaha-5a39a6381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
    },
    {
        name: "Ashika Tiwari",
        role: "Frontend Developer",
        avatar: "AT",
        description: "Creating beautiful and intuitive user interfaces with modern frameworks.",
        skills: ["React", "TypeScript", "Tailwind", "Figma"],
        github: "https://github.com/Ashika1715 ",
        linkedin: "https://www.linkedin.com/in/ashika-tiwari-711405395 "
    },
    {
        name: "Anushree Singh",
        role: "Cloud Engineer",
        avatar: "AS",
        description: "Building robust cloud infrastructure and DevOps pipelines.",
        skills: ["AWS", "Terraform", "CI/CD", "Docker"],
        github: "https://github.com/anushreesingh0701-droid ",
        linkedin: "www.linkedin.com/in/ anushree-singh-969508387 "
    },
    {
        name: "Anvay Gupta",
        role: "UI/UX Designer",
        avatar: "AV",
        description: "Designing user-centered experiences that delight and engage.",
        skills: ["Figma", "Adobe XD", "Prototyping", "Research"],
        github: "https://github.com/Anvay-io ",
        linkedin: "https://www.linkedin.com/in/AnvayGupta100/"
    },
    {
    name: "Ayush Kumar",
    role: "Developer",
    avatar: "AK",
    description: "Enthusiastic developer and hackathon contributor, focused on building practical and innovative solutions.",
    skills: ["JavaScript", "Web Development", "Problem Solving"],
    github: "https://github.com/bugdevta",
    linkedin: "https://www.linkedin.com/in/ayushkumar67/	"
}

];

const achievements = [
   
    {
        title: "Dataversa 2.0",
        position: "Finalist",
        year: "2025",
        description: "Selected as one of 10 finalists among 500+ teams for our innovative healthcare solution."
    },
    {
        title: "More coming soon...",
        position: "1st positon",
        year: "2026",
        description: "Endless journey of challeges and struggles"
    },
];

const hackathons = {
    completed: [
       
        {
            name: "Teachackthon 6.0",
            theme: "Social Impact",
            date: "Nov 2025",
            project: "Parkhub"
        }
    ],
    upcoming: [
        {
            name: "ETHGlobal 2026",
            theme: "Web3 & Blockchain",
            date: "March 2026",
            project: "Not yet discussed"
        },
    ]
};

const projects = [
    {
        name: "vaidya_ji ",
        problem: "The problem is the lack of an efficient and intelligent system that can analyze patient health data to accurately predict diseases at an early stage, leading to delayed diagnosis and reduced treatment effectiveness",
        description: "The solution is an AI-powered system that analyzes patient health data to predict potential diseases early, helping doctors make faster and more accurate clinical decisions..",
        tech: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
        github: "https://github.com/TomHacker69/vaidya_ji.git"
    },
    {
        name: "PARKHUB",
        problem: "The problem is the lack of an efficient parking management system that leads to congestion, time wastage, and poor utilization of available parking spaces.",
        description: "The solution is a smart parking management system that monitors parking availability in real time and guides users to available spaces efficiently..",
        tech: ["React Native", "Node.js", "Blockchain", "MongoDB", "Firebase"],
        github: "https://github.com/TomHacker69/PARKHUB.git"
    },
    {
        name: "Pro_JECTHUB",
        problem: "The problem is the absence of a centralized and secure platform for hosting, managing, and discovering college IoT project materials, making collaboration, access, and evaluation inefficient.The problem is the absence of a centralized and secure platform for hosting, managing, and discovering college IoT project materials, making collaboration, access, and evaluation inefficient.",
        description: "The solution is a full-stack web platform built with Next.js and Supabase that allows users to browse, search, like, and securely upload college IoT project content, with an admin dashboard for monitoring and management.",
        tech: ["React", "WebRTC", "Socket.io", "Google Cloud", "Redis"],
        github: "https://github.com/TomHacker69/Pro_JECTHUB01-.git"
    },
    {
        name: "ShareX",
        problem: "The problem is the lack of a fast, flexible, and automated way to capture, edit, and share screen content efficiently.",
        description: "AThe solution is ShareX, a powerful screen capture and productivity tool that enables users to quickly capture, annotate, automate, and share screenshots or recordings with ease..",
        tech: ["Vue.js", "Python", "PyTorch", "FastAPI", "MySQL"],
        github: "https://github.com/TomHacker69/ShareX.git"
    },
    {
        name: "CloudGaurd",
        problem: "The problem is the lack of a simple and effective way to identify security misconfigurations and vulnerabilities in cloud environments, leading to increased risk of data breaches.",
        description: "The solution is CloudGuard, an automated cloud security scanner that analyzes cloud configurations to detect misconfigurations, assess risks, and improve overall cloud security posture.",
        tech: ["Vue.js", "Python", "PyTorch", "FastAPI", "MySQL"],
        github: "https://github.com/TomHacker69/CloudGaurd2.0.git"
    }
];

// ========================================
// NAVIGATION FUNCTIONALITY
// ========================================

// Handle navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Toggle icon between menu and X
    const icon = menuToggle.querySelector('i');
    const currentIcon = icon.getAttribute('data-lucide');
    if (currentIcon === 'menu') {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Smooth scroll for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// RENDER TEAM MEMBERS
// ========================================
function renderTeamMembers() {
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <div class="team-avatar">${member.avatar}</div>
            <h3 class="team-name">${member.name}</h3>
            <p class="team-role">${member.role}</p>
            <p class="team-description">${member.description}</p>
            <div class="team-skills">
                ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
            <div class="team-social">
                ${member.github ? `
                    <a href="${member.github}" target="_blank" rel="noopener noreferrer" class="social-icon">
                        <i data-lucide="github"></i>
                    </a>
                ` : ''}
                ${member.linkedin ? `
                    <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon">
                        <i data-lucide="linkedin"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

// ========================================
// RENDER ACHIEVEMENTS
// ========================================
function renderAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = achievements.map(achievement => `
        <div class="achievement-card">
            <div class="achievement-icon">
                <i data-lucide="award"></i>
            </div>
            <div class="achievement-content">
                <h3>${achievement.title}</h3>
                <p class="achievement-meta">${achievement.position} • ${achievement.year}</p>
                <p class="achievement-description">${achievement.description}</p>
            </div>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

// ========================================
// RENDER HACKATHONS
// ========================================
function renderHackathons() {
    // Render completed hackathons
    const completedGrid = document.getElementById('completedHackathons');
    completedGrid.innerHTML = hackathons.completed.map(hack => `
        <div class="hackathon-card completed">
            <div class="hackathon-header">
                <h3 class="hackathon-name">${hack.name}</h3>
                <span class="hackathon-badge completed">Completed</span>
            </div>
            <p class="hackathon-theme">${hack.theme}</p>
            <p class="hackathon-date">
                <i data-lucide="calendar"></i>
                ${hack.date}
            </p>
            ${hack.project ? `<p class="hackathon-project">Project: ${hack.project}</p>` : ''}
        </div>
    `).join('');

    // Render upcoming hackathons
    const upcomingGrid = document.getElementById('upcomingHackathons');
    upcomingGrid.innerHTML = hackathons.upcoming.map(hack => `
        <div class="hackathon-card upcoming">
            <div class="hackathon-header">
                <h3 class="hackathon-name">${hack.name}</h3>
                <span class="hackathon-badge upcoming">Upcoming</span>
            </div>
            <p class="hackathon-theme">${hack.theme}</p>
            <p class="hackathon-date">
                <i data-lucide="calendar"></i>
                ${hack.date}
            </p>
            ${hack.project ? `<p class="hackathon-project">Project: ${hack.project}</p>` : ''}
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

// ========================================
// RENDER PROJECTS
// ========================================
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <i data-lucide="code" style="width: 64px; height: 64px;"></i>
            </div>
            <div class="project-content">
                <h3 class="project-name">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div>
                    <p class="project-problem-label">Problem Statement:</p>
                    <p class="project-problem">${project.problem}</p>
                </div>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                ${project.github ? `
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <i data-lucide="github"></i>
                        View on GitHub
                        <i data-lucide="external-link"></i>
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Reinitialize Lucide icons
    lucide.createIcons();
}

// ========================================
// CONTACT FORM HANDLER
// ========================================
function handleContactSubmit() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Here you would normally send the form data to a backend
    // For now, we'll just show a success message
    alert('Message sent! We\'ll get back to you soon.');
    
    // Clear the form
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactMessage').value = '';
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderTeamMembers();
    renderAchievements();
    renderHackathons();
    renderProjects();
    
    // Initialize Lucide icons after rendering all content
    lucide.createIcons();
});

// ========================================
// ADD SCROLL ANIMATIONS (OPTIONAL)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation on scroll
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.team-card, .achievement-card, .hackathon-card, .project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});