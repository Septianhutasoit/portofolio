// Inisialisasi AOS
AOS.init({ duration: 1000, once: true, offset: 80 });

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
        cardTitle: "Nauli Dental Care",
        title: "Nauli Dental Care Website",
        subtitle: "Clinic Management System",
        cover: "assets/img/klinik.png",
        images: ["assets/img/galery.png", "assets/img/layanan.png", "assets/img/map.png", "assets/img/staff.png"],
        desc: "Clinic website for booking appointments between patients and doctors, also for service information. Focus on UX and clean backend.",
        tags: ["Laravel", "MySQL", "Tailwind", "Bootstrap"],
        github: "https://github.com/Septianhutasoit/projectsep",
        demo: ""
    },
    {
        cardTitle: "Delshoop E-Commerce",
        title: "Delshoop E-Commerce Platform",
        subtitle: "Online Store",
        cover: "assets/img/Delshop Home.png",
        images: ["assets/img/Produk2.png", "assets/img/Tersedia.png", "assets/img/cart.png", "assets/img/Barcode.png"],
        desc: "E-commerce platform with product management, real-time cart, and payment gateway integration.",
        tags: ["Laravel", "MySQL", "Tailwind", "JavaScript"],
        github: "https://github.com/Septianhutasoit/Aplikasi",
        demo: ""
    },
    {
        cardTitle: "Aksara Batak",
        title: "Aksara Batak Learning Website",
        subtitle: "Educational Platform",
        cover: "assets/img/Home.png",
        images: ["assets/img/Fitur.png", "assets/img/bahasa.png", "assets/img/Tentang.png", "assets/img/kuis.png"],
        desc: "Educational website for learning Batak script with multi-language features, learning flow, visualization, and quizzes.",
        tags: ["Laravel", "PHP", "MySQL"],
        github: "https://github.com/bryansiagian/BoanAksara",
        demo: ""
    },
    {
        cardTitle: "Evedina Tuktuk",
        title: "Evedina Tuktuk Ferry Booking",
        subtitle: "Mobile App Design",
        cover: "assets/img/2ain.png",
        images: ["assets/img/Tampilan.png", "assets/img/HomeEvedina.png", "assets/img/awaldetail.png", "assets/img/prototype.png"],
        desc: "Ticket booking app for ferry schedules, routes, and pricing information.",
        tags: ["Figma", "UI/UX"],
        github: "https://github.com/Septianhutasoit/Evedina-Tuktuk",
        demo: ""
    },
    {
        cardTitle: "E-Commerce System",
        title: "E-Commerce Web App",
        subtitle: "Fullstack Application",
        cover: "assets/img/codealpha.png",
        images: ["assets/img/codealpa2.png", "assets/img/codealpa3.png", "assets/img/codealpa4.png", "assets/img/codealpa5.png"],
        desc: "Online shopping web application with complete features.",
        tags: ["Node.js", "React", "PostgreSQL", "Tailwind"],
        github: "https://github.com/Septianhutasoit/CodeAlpha",
        demo: ""
    },
    {
        cardTitle: "ChatBot AI Clinic",
        title: "AI Chatbot for Clinic",
        subtitle: "AI Integration",
        cover: "assets/img/chatbot.png",
        images: ["assets/img/kodinganchatbot.png", "assets/img/tanya1.png", "assets/img/lanjut1.png", "assets/img/informasi.png"],
        desc: "AI-powered chatbot for dental clinic assistance using RAG and Langchain.",
        tags: ["Python", "FastAPI", "RAG", "Langchain", "Next.js"],
        github: "",
        demo: ""
    }
];

const certsData = [
    { title: "Huawei Cloud Computing", subtitle: "Huawei Academy", img: "assets/img/Huawei.png", desc: "Cloud computing foundations: core services, deployment, and scalable architecture." },
    { title: "Huawei Data Analytics", subtitle: "Huawei Academy", img: "assets/img/Huaweidata.png", desc: "End-to-end data analytics from ingestion to business insights." },
    { title: "AI Fundamentals", subtitle: "AI Track", img: "assets/img/Dasar%20AI.png", desc: "Basic AI concepts, model evaluation, and proper thinking framework." },
    { title: "Data Science Essentials", subtitle: "Data Track", img: "assets/img/Data%20Science.png", desc: "Statistics, data cleaning, feature engineering, and insights." },
    { title: "Frontend Development", subtitle: "Web Engineering", img: "assets/img/frontend.png", desc: "Responsive UI, UX details, and web performance." },
    { title: "Backend Engineering", subtitle: "Web Engineering", img: "assets/img/backend.png", desc: "API design, authentication, and structured databases." },
    { title: "Cloud & Deployment", subtitle: "Infrastructure", img: "assets/img/Cloud.png", desc: "Hosting, environment, and deployment workflow." },
    { title: "Applied AI Project", subtitle: "Project Portfolio", img: "assets/img/AI.png", desc: "Real-world AI implementation, not just gimmicks." }
];

// ==================== ICONS ====================
const ICONS = {
    laravel: { cls: "fa-brands fa-laravel", color: "text-red-400" },
    php: { cls: "fa-brands fa-php", color: "text-indigo-300" },
    mysql: { cls: "fa-solid fa-database", color: "text-sky-300" },
    postgresql: { cls: "fa-solid fa-database", color: "text-sky-300" },
    react: { cls: "fa-brands fa-react", color: "text-cyan-300" },
    nodejs: { cls: "fa-brands fa-node-js", color: "text-green-400" },
    tailwind: { cls: "fa-solid fa-wand-magic-sparkles", color: "text-sky-300" },
    bootstrap: { cls: "fa-brands fa-bootstrap", color: "text-violet-300" },
    javascript: { cls: "fa-brands fa-js", color: "text-yellow-400" },
    python: { cls: "fa-brands fa-python", color: "text-blue-400" },
    fastapi: { cls: "fa-solid fa-bolt", color: "text-emerald-400" },
    figma: { cls: "fa-brands fa-figma", color: "text-purple-400" },
    nextjs: { cls: "fa-brands fa-react", color: "text-slate-200" },
    langchain: { cls: "fa-solid fa-link", color: "text-cyan-400" },
    rag: { cls: "fa-solid fa-layer-group", color: "text-indigo-400" }
};

function getIcon(tag) {
    const key = tag.toLowerCase().replace(/\s+/g, "");
    if (key.includes("laravel")) return ICONS.laravel;
    if (key.includes("mysql")) return ICONS.mysql;
    if (key.includes("postgres")) return ICONS.postgresql;
    if (key.includes("react")) return ICONS.react;
    if (key.includes("node")) return ICONS.nodejs;
    if (key.includes("tailwind")) return ICONS.tailwind;
    if (key.includes("bootstrap")) return ICONS.bootstrap;
    if (key.includes("javascript") || key.includes("js")) return ICONS.javascript;
    if (key.includes("python")) return ICONS.python;
    if (key.includes("fastapi")) return ICONS.fastapi;
    if (key.includes("figma")) return ICONS.figma;
    if (key.includes("next")) return ICONS.nextjs;
    if (key.includes("langchain")) return ICONS.langchain;
    if (key.includes("rag")) return ICONS.rag;
    return { cls: "fa-solid fa-code", color: "text-slate-300" };
}

// ==================== RENDER FUNCTIONS ====================
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
                <div class="flex flex-col items-center justify-center min-w-[90px] group">
                    <div class="w-14 h-14 mb-3 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-primary/50 group-hover:-translate-y-1">
                        <i class="${s.icon} text-3xl"></i>
                    </div>
                    <span class="text-[11px] font-semibold text-slate-400 group-hover:text-white transition-colors duration-300 uppercase tracking-wider">${s.name}</span>
                </div>
            `).join("");
            // Duplicate for seamless scroll
            container.innerHTML = html + html + html;
        }
    });
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projectsData.map((p, i) => {
        const tagIcons = (p.tags || []).slice(0, 3).map(t => {
            const ic = getIcon(t);
            return `<span class="inline-flex items-center gap-2 text-[11px] text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <i class="${ic.cls} ${ic.color} text-xs"></i><span>${t}</span>
            </span>`;
        }).join("");

        return `
            <div class="group bg-black/90 border border-primary/15 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10" onclick="openModal('project', ${i})" data-aos="fade-up" data-aos-delay="${i * 80}">
                <div class="relative h-48 overflow-hidden">
                    <img src="${p.cover}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${p.cardTitle}">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-3 left-3">
                        <p class="text-[10px] text-primary uppercase tracking-wide">${p.subtitle}</p>
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">${p.cardTitle}</h3>
                    <p class="text-slate-400 text-sm line-clamp-2">${p.desc}</p>
                    <div class="flex flex-wrap gap-2 mt-4">${tagIcons}</div>
                </div>
            </div>
        `;
    }).join("");
}

let currentCertPage = 1;
const certsPerPage = 4;

function renderCertificates() {
    const grid = document.getElementById('certGrid');
    if (!grid) return;

    const totalPages = Math.ceil(certsData.length / certsPerPage);
    const startIndex = (currentCertPage - 1) * certsPerPage;
    const paginatedCerts = certsData.slice(startIndex, startIndex + certsPerPage);

    grid.innerHTML = paginatedCerts.map((c, i) => `
        <div class="group bg-black/90 border border-primary/15 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary/50" onclick="openModal('cert', ${startIndex + i})" data-aos="zoom-in" data-aos-delay="${i * 50}">
            <div class="relative aspect-[4/3] overflow-hidden">
                <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <i class="fas fa-expand text-white text-2xl"></i>
                </div>
                <img src="${c.img}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${c.title}">
            </div>
            <div class="p-4">
                <h4 class="text-white font-semibold text-sm group-hover:text-primary transition-colors">${c.title}</h4>
                <p class="text-slate-500 text-xs mt-1">${c.subtitle}</p>
            </div>
        </div>
    `).join('');

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const container = document.getElementById('certPagination');
    if (!container) return;

    let html = `
        <button onclick="changeCertPage(${currentCertPage - 1})" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-primary hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed" ${currentCertPage === 1 ? 'disabled' : ''}>
            « Prev
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button onclick="changeCertPage(${i})" class="w-9 h-9 rounded-xl text-xs font-bold transition-all ${i === currentCertPage ? 'bg-primary text-black shadow-lg shadow-primary/30' : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'}">${i}</button>`;
    }

    html += `<button onclick="changeCertPage(${currentCertPage + 1})" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-primary hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed" ${currentCertPage === totalPages ? 'disabled' : ''}>
        Next »
    </button>`;
    container.innerHTML = html;
}

function changeCertPage(page) {
    const totalPages = Math.ceil(certsData.length / certsPerPage);
    if (page < 1 || page > totalPages) return;
    currentCertPage = page;
    renderCertificates();
    document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
}

// ==================== MODAL ====================
let currentImages = [];
let currentImgIndex = 0;

function openModal(type, index) {
    const modal = document.getElementById('universalModal');
    const backdrop = document.getElementById('modalBackdrop');
    const content = document.getElementById('modalContent');
    const mImage = document.getElementById('mImage');
    const mTitle = document.getElementById('mTitle');
    const mSubtitle = document.getElementById('mSubtitle');
    const mDesc = document.getElementById('mDesc');
    const mTagsGroup = document.getElementById('mTagsGroup');
    const mTags = document.getElementById('mTags');
    const mActions = document.getElementById('mActions');
    const mCertText = document.getElementById('mCertText');
    const imgPrev = document.getElementById('imgPrev');
    const imgNext = document.getElementById('imgNext');
    const imgDots = document.getElementById('imgDots');
    const mDemo = document.getElementById('mDemo');
    const mCode = document.getElementById('mCode');

    let data;

    // Reset UI
    mTagsGroup.classList.add('hidden');
    mActions.classList.add('hidden');
    mCertText.classList.add('hidden');
    imgPrev.classList.add('hidden');
    imgNext.classList.add('hidden');
    imgDots.classList.add('hidden');

    if (type === 'project') {
        data = projectsData[index];
        mTagsGroup.classList.remove('hidden');
        mTags.innerHTML = '';

        (data.tags || []).forEach(tag => {
            const ic = getIcon(tag);
            const span = document.createElement('span');
            span.className = "px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[11px] text-slate-200 flex items-center gap-2";
            span.innerHTML = `<i class="${ic.cls} ${ic.color}"></i><span>${tag}</span>`;
            mTags.appendChild(span);
        });

        mActions.classList.remove('hidden');
        mCode.href = data.github || "#";
        if (data.demo && data.demo.trim()) {
            mDemo.href = data.demo;
            mDemo.classList.remove("hidden");
        } else {
            mDemo.classList.add("hidden");
        }

        currentImages = (data.images && data.images.length) ? data.images : [data.cover];
        if (currentImages.length > 1) {
            imgPrev.classList.remove('hidden');
            imgNext.classList.remove('hidden');
            imgDots.classList.remove('hidden');
            renderDots();
        }
    } else if (type === 'cert') {
        data = certsData[index];
        mCertText.classList.remove('hidden');
        currentImages = [data.img];
    }

    mTitle.innerText = data.title;
    mSubtitle.innerText = data.subtitle;
    mDesc.innerText = data.desc;
    mImage.src = currentImages[0];
    currentImgIndex = 0;

    modal.classList.remove('hidden');
    setTimeout(() => {
        backdrop.classList.replace('opacity-0', 'opacity-100');
        content.classList.remove('opacity-0', 'scale-90');
        content.classList.add('opacity-100', 'scale-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function renderDots() {
    const imgDots = document.getElementById('imgDots');
    if (!imgDots) return;
    imgDots.innerHTML = "";
    currentImages.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "w-2 h-2 rounded-full transition-all " + (i === currentImgIndex ? "bg-white" : "bg-white/30");
        dot.addEventListener("click", (e) => {
            e.stopPropagation();
            setModalImage(i);
        });
        imgDots.appendChild(dot);
    });
}

function setModalImage(i) {
    const mImage = document.getElementById('mImage');
    if (!currentImages.length || !mImage) return;
    currentImgIndex = (i + currentImages.length) % currentImages.length;
    mImage.src = encodeURI(currentImages[currentImgIndex]);

    const imgDots = document.getElementById('imgDots');
    if (imgDots) {
        [...imgDots.children].forEach((dot, idx) => {
            dot.className = "w-2 h-2 rounded-full transition-all " + (idx === currentImgIndex ? "bg-white" : "bg-white/30");
        });
    }
}

// Modal navigation
document.getElementById('imgPrev')?.addEventListener("click", (e) => {
    e.stopPropagation();
    setModalImage(currentImgIndex - 1);
});
document.getElementById('imgNext')?.addEventListener("click", (e) => {
    e.stopPropagation();
    setModalImage(currentImgIndex + 1);
});

function closeModal() {
    const modal = document.getElementById('universalModal');
    const backdrop = document.getElementById('modalBackdrop');
    const content = document.getElementById('modalContent');

    backdrop.classList.add('opacity-0');
    content.classList.remove('scale-100');
    content.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 250);
    document.body.style.overflow = 'auto';
}

// ==================== NAVBAR SCROLL ====================
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

// ==================== SPOTIFY TOGGLE ====================
document.getElementById('spotifyToggle')?.addEventListener('click', () => {
    const spotifyWrap = document.getElementById('spotifyWrap');
    const btn = document.getElementById('spotifyToggle');
    spotifyWrap.classList.toggle('hidden');
    btn.textContent = spotifyWrap.classList.contains('hidden') ? 'Buka' : 'Tutup';
});

// ==================== CANVAS BACKGROUND ====================
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function initCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5
            });
        }
    }

    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(34, 197, 94, 0.3)';

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', initCanvas);
    initCanvas();
    draw();
}

// ==================== ANIMASI TYPING ROLE ====================
const roleElement = document.getElementById('changing-role');
const roleOptions = ['Software Engineer', 'Fullstack Developer', 'AI/ML Enthusiast', 'Backend Developer'];

if (roleElement) {
    let roleIndex = 0, roleCharIndex = 0, isRoleDeleting = false;

    function roleTypeEffect() {
        const currentRole = roleOptions[roleIndex];

        if (isRoleDeleting) {
            roleElement.textContent = currentRole.substring(0, roleCharIndex - 1);
            roleCharIndex--;
        } else {
            roleElement.textContent = currentRole.substring(0, roleCharIndex + 1);
            roleCharIndex++;
        }

        let typeSpeed = isRoleDeleting ? 40 : 70;

        if (!isRoleDeleting && roleCharIndex === currentRole.length) {
            typeSpeed = 2000;
            isRoleDeleting = true;
        } else if (isRoleDeleting && roleCharIndex === 0) {
            isRoleDeleting = false;
            roleIndex = (roleIndex + 1) % roleOptions.length;
            typeSpeed = 500;
        }

        setTimeout(roleTypeEffect, typeSpeed);
    }

    setTimeout(roleTypeEffect, 500);
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderCertificates();

    // Close modal on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('universalModal');
            if (!modal.classList.contains('hidden')) closeModal();
        }
    });

    // Smooth scroll for nav links
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

// Expose functions to global scope
window.openModal = openModal;
window.closeModal = closeModal;
window.changeCertPage = changeCertPage;