// Inisialisasi AOS
AOS.init({ duration: 800, once: true, offset: 60 });

// ==================== DATA ====================
const skillsRow1 = [
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" }
];

const skillsRow2 = [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain text-white" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-original colored" },
    { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" }
];

const skillsRow3 = [
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Laravel", icon: "devicon-laravel-original colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" }
];

const skillsRow4 = [
    { name: "Figma", icon: "devicon-figma-plain colored" },
    { name: "REST API", icon: "fa-solid fa-plug text-teal-300" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain colored" },
    { name: "Vite", icon: "devicon-vitejs-plain colored" }
];

const projectsData = [
    {
        title: "Nauli Dental Care",
        subtitle: "Clinic Management System",
        cover: "assets/img/klinik.png",
        desc: "Clinic website for booking appointments between patients and doctors, also for service information. Focus on UX and clean backend.",
        tags: ["Laravel", "MySQL", "Tailwind", "Bootstrap"],
        github: "https://github.com/Septianhutasoit/projectsep",
        demo: ""
    },
    {
        title: "Delshoop E-Commerce",
        subtitle: "Online Store Platform",
        cover: "assets/img/Delshop Home.png",
        desc: "E-commerce platform with product management, real-time cart, and payment gateway integration.",
        tags: ["Laravel", "MySQL", "Tailwind", "JavaScript"],
        github: "https://github.com/Septianhutasoit/Aplikasi",
        demo: ""
    },
    {
        title: "Aksara Batak",
        subtitle: "Educational Platform",
        cover: "assets/img/Home.png",
        desc: "Educational website for learning Batak script with multi-language features, learning flow, visualization, and quizzes.",
        tags: ["Laravel", "PHP", "MySQL"],
        github: "https://github.com/bryansiagian/BoanAksara",
        demo: ""
    },
    {
        title: "Evedina Tuktuk",
        subtitle: "Mobile App Design",
        cover: "assets/img/2ain.png",
        desc: "Ticket booking app for ferry schedules, routes, and pricing information.",
        tags: ["Figma", "UI/UX"],
        github: "https://github.com/Septianhutasoit/Evedina-Tuktuk",
        demo: ""
    },
    {
        title: "E-Commerce System",
        subtitle: "Fullstack Application",
        cover: "assets/img/codealpha.png",
        desc: "Online shopping web application with complete features.",
        tags: ["Node.js", "React", "PostgreSQL", "Tailwind"],
        github: "https://github.com/Septianhutasoit/CodeAlpha",
        demo: ""
    },
    {
        title: "ChatBot AI Clinic",
        subtitle: "AI Integration",
        cover: "assets/img/chatbot.png",
        desc: "AI-powered chatbot for dental clinic assistance using RAG and Langchain.",
        tags: ["Python", "FastAPI", "RAG", "Langchain", "Next.js"],
        github: "",
        demo: ""
    }
];

const certsData = [
    { title: "Huawei Cloud Computing", issuer: "Huawei Academy", img: "assets/img/Huawei.png" },
    { title: "Huawei Data Analytics", issuer: "Huawei Academy", img: "assets/img/Huaweidata.png" },
    { title: "AI Fundamentals", issuer: "AI Track", img: "assets/img/Dasar%20AI.png" },
    { title: "Data Science Essentials", issuer: "Data Track", img: "assets/img/Data%20Science.png" },
    { title: "Frontend Development", issuer: "Web Engineering", img: "assets/img/frontend.png" },
    { title: "Backend Engineering", issuer: "Web Engineering", img: "assets/img/backend.png" },
    { title: "Cloud & Deployment", issuer: "Infrastructure", img: "assets/img/Cloud.png" },
    { title: "Applied AI Project", issuer: "Project Portfolio", img: "assets/img/AI.png" }
];

// ==================== ICONS ====================
const getIconClass = (tag) => {
    const key = tag.toLowerCase();
    if (key.includes("laravel")) return "fa-brands fa-laravel text-red-400";
    if (key.includes("mysql")) return "fa-solid fa-database text-sky-300";
    if (key.includes("react")) return "fa-brands fa-react text-cyan-300";
    if (key.includes("node")) return "fa-brands fa-node-js text-green-400";
    if (key.includes("tailwind")) return "fa-solid fa-wand-magic-sparkles text-sky-300";
    if (key.includes("bootstrap")) return "fa-brands fa-bootstrap text-violet-300";
    if (key.includes("javascript")) return "fa-brands fa-js text-yellow-400";
    if (key.includes("python")) return "fa-brands fa-python text-blue-400";
    if (key.includes("fastapi")) return "fa-solid fa-bolt text-emerald-400";
    if (key.includes("figma")) return "fa-brands fa-figma text-purple-400";
    if (key.includes("next")) return "fa-brands fa-react text-slate-200";
    if (key.includes("langchain")) return "fa-solid fa-link text-cyan-400";
    if (key.includes("rag")) return "fa-solid fa-layer-group text-indigo-400";
    return "fa-solid fa-code text-slate-300";
};

// ==================== RENDER SKILLS ====================
function renderSkills() {
    const rows = [
        { id: "row1", data: skillsRow1 },
        { id: "row2", data: skillsRow2 },
        { id: "row3", data: skillsRow3 },
        { id: "row4", data: skillsRow4 }
    ];

    rows.forEach(row => {
        const container = document.getElementById(row.id);
        if (container) {
            const html = row.data.map(s => `
                <div class="flex flex-col items-center justify-center min-w-[80px]">
                    <div class="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10">
                        <i class="${s.icon} text-2xl"></i>
                    </div>
                    <span class="text-[10px] text-slate-400 mt-2">${s.name}</span>
                </div>
            `).join("");
            container.innerHTML = html + html + html;
        }
    });
}

// ==================== RENDER PROJECTS (2 KOLOM) ====================
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projectsData.map((p, i) => {
        const tagIcons = (p.tags || []).slice(0, 2).map(t => {
            const iconClass = getIconClass(t);
            return `<span class="inline-flex items-center gap-1 text-[10px] text-slate-400 bg-white/5 px-2 py-1 rounded-full">
                <i class="${iconClass} text-[10px]"></i>${t}
            </span>`;
        }).join("");

        return `
            <div class="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-primary/30" onclick="openProjectModal(${i})">
                <div class="relative h-40 overflow-hidden">
                    <img src="${p.cover}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${p.title}">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                </div>
                <div class="p-4">
                    <h3 class="text-lg font-bold text-white mb-1 group-hover:text-primary transition">${p.title}</h3>
                    <p class="text-slate-400 text-xs mb-2">${p.subtitle}</p>
                    <p class="text-slate-300 text-sm line-clamp-2">${p.desc}</p>
                    <div class="flex flex-wrap gap-2 mt-3">${tagIcons}</div>
                </div>
            </div>
        `;
    }).join("");
}

// ==================== MODAL PROYEK (MELEBAR) ====================
function openProjectModal(index) {
    const p = projectsData[index];
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('modalContent');

    document.getElementById('modalTitle').innerText = p.title;
    document.getElementById('modalSubtitle').innerText = p.subtitle;
    document.getElementById('modalDesc').innerText = p.desc;
    document.getElementById('modalImage').src = p.cover;

    // Render tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = p.tags.map(t => {
        const iconClass = getIconClass(t);
        return `<span class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-slate-300">
            <i class="${iconClass}"></i>${t}
        </span>`;
    }).join('');

    // Set links
    const githubLink = document.getElementById('modalGithub');
    const demoLink = document.getElementById('modalDemo');

    githubLink.href = p.github || "#";
    demoLink.href = p.demo || "#";

    if (!p.github) githubLink.style.opacity = "0.5";
    if (!p.demo) demoLink.style.opacity = "0.5";

    modal.classList.remove('hidden');
    setTimeout(() => {
        content.classList.remove('scale-95', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('modalContent');
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = 'auto';
}

// ==================== RENDER CERTIFICATES ====================
let currentCertPage = 1;
const certsPerPage = 4;

function renderCertificates() {
    const grid = document.getElementById('certGrid');
    if (!grid) return;

    const totalPages = Math.ceil(certsData.length / certsPerPage);
    const startIndex = (currentCertPage - 1) * certsPerPage;
    const paginatedCerts = certsData.slice(startIndex, startIndex + certsPerPage);

    grid.innerHTML = paginatedCerts.map((c, i) => `
        <div class="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:border-primary/30">
            <div class="relative aspect-[4/3] overflow-hidden">
                <img src="${c.img}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" alt="${c.title}">
            </div>
            <div class="p-3">
                <h4 class="text-white font-semibold text-sm">${c.title}</h4>
                <p class="text-slate-500 text-xs mt-1">${c.issuer}</p>
            </div>
        </div>
    `).join('');

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const container = document.getElementById('certPagination');
    if (!container) return;

    let html = `
        <button onclick="changeCertPage(${currentCertPage - 1})" class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-xs ${currentCertPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10'}" ${currentCertPage === 1 ? 'disabled' : ''}>
            « Prev
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="changeCertPage(${i})" class="w-8 h-8 rounded-lg text-xs font-medium transition-all ${i === currentCertPage ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10'}">${i}</button>`;
    }

    html += `<button onclick="changeCertPage(${currentCertPage + 1})" class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white text-xs ${currentCertPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10'}" ${currentCertPage === totalPages ? 'disabled' : ''}>
        Next »
    </button>`;
    container.innerHTML = html;
}

function changeCertPage(page) {
    const totalPages = Math.ceil(certsData.length / certsPerPage);
    if (page < 1 || page > totalPages) return;
    currentCertPage = page;
    renderCertificates();
}

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// ==================== MOBILE MENU ====================
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('translate-x-full');
}

document.getElementById('menuBtn')?.addEventListener('click', toggleMenu);
window.toggleMenu = toggleMenu;

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderCertificates();

    // Close modal on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.changeCertPage = changeCertPage;