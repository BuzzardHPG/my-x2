// Toggle Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// تحقق من حالة الوضع المحفوظة في localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '☀️';
} else {
    body.classList.remove('dark-mode');
    themeToggle.innerHTML = '🌙';
}

// تغيير الوضع عند النقر على الزر
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode'); // حفظ الوضع الداكن
        themeToggle.innerHTML = '☀️';
    } else {
        localStorage.setItem('theme', 'light-mode'); // حفظ الوضع الفاتح
        themeToggle.innerHTML = '🌙';
    }
});

// إخفاء الـ loading بعد 5 ثوانٍ كحد أقصى
// setTimeout(hideLoading, 2500);

function hideLoading() {
    const loadingElement = document.getElementById('content-loading');
    if (loadingElement) {
        loadingElement.classList.add('hidden');
    }
}

// إخفاء الـ loading بعد تحميل الصفحة بالكامل
window.onload = function() {
    hideLoading();
};

// أو إخفاء الـ loading بعد تحميل DOM فقط
document.addEventListener('DOMContentLoaded', () => {
    hideLoading();
});

// إدارة المستخدمين
const users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser(email, password) {
    const user = { email, password };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        return true;
    }
    return false;
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}

// Toggle Language between English and Arabic
const languageToggle = document.getElementById('language-toggle');
const languageElements = document.querySelectorAll('[data-lang]');
const htmlElement = document.documentElement; // The <html> element

const translations = {
    "en": {
        "home": "Home",
        "about": "About Us",
        "services": "Services",
        "courses": "Courses",
        "who-we-are": "Who We Are",
        "contact": "Contact",
        "projects": "Previous Projects",
        "welcome": "Welcome to Eastern-CADD",
        "welcome-text": "We are leaders in administrative development and digital transformation.",
        "featured-services": "Featured Services",
        "software-dev-text": "We develop websites, mobile apps, and desktop applications tailored to your needs.",
        "automation-text": "Designing and programming automated machinery and robots for industry and research.",
        "electronics-text": "Design and development of electronic control circuits for various projects.",
        "popular-courses": "Popular Courses",
        "web-design-text": "Learn HTML5, CSS3, JavaScript, and Bootstrap to create modern websites.",
        "mobile-dev-text": "Build mobile apps using React Native and Flutter.",
        "electrical-systems-text": "Learn the basics and advanced concepts of electrical systems.",
        "our-team": "Our Team",
        "footer": "© 2024 Eastern-CADD. All rights reserved.",
        "software-dev": "Software Development: Websites, mobile apps, and desktop applications.",
        "automation": "Automation & Control Systems: Designing and programming automated machinery.",
        "robotics": "Robotics: Developing robots for industry and research.",
        "custom-solutions": "Custom Solutions: Providing unique solutions to client challenges.",
        "web-design": "Web Design: HTML5, CSS3, JavaScript.",
        "mobile-dev": "Mobile Development: React Native, Flutter.",
        "electrical-systems": "Electrical Systems: Basics and advanced systems.",
        "who-we-are-text": "We are a team of experts in technology and engineering, delivering innovative solutions.",
        "name": "Name:",
        "email": "Email:",
        "message": "Message:",
        "submit": "Submit",
        "project1": "Automation Control System Project",
        "project2": "Mobile App Development Project",
        "programming": "Programming & Application Development",
        "mep-systems": "MEP Systems",
        "engineering-research": "Engineering Research & Intellectual Property",
        "low-current-systems": "Low Current Systems",
        "our-history": "Our History",
        "history-text": "Since our inception in 2024, Eastern-CADD has been at the forefront of technological innovation. We started as a small team of passionate engineers and developers, and over the years, we have grown into a leading company in the region, delivering cutting-edge solutions to our clients.",
        "our-values": "Our Values",
        "innovation": "Innovation",
        "innovation-text": "We constantly strive to innovate and bring new ideas to life, ensuring that our solutions are always ahead of the curve.",
        "quality": "Quality",
        "quality-text": "We are committed to delivering high-quality solutions that meet and exceed our clients' expectations.",
        "integrity": "Integrity",
        "integrity-text": "We conduct our business with the highest level of integrity, ensuring transparency and trust in all our dealings.",
        "our-partners": "Our Partners",
        "services-text": "We offer a wide range of services to meet your technological needs.",
        "service-details": "Service Details",
        "why-choose-us": "Why Choose Us?",
        "expertise": "Expertise",
        "expertise-text": "Our team consists of highly skilled professionals with extensive experience in their fields.",
        "innovation-text": "We are committed to delivering innovative solutions that drive your business forward.",
        "quality-text": "We ensure the highest quality standards in all our projects and services.",
        "our-clients": "Our Clients",
        "who-we-are-text": "We are a team of experts in technology and engineering, delivering innovative solutions.",
        "our-team": "Our Team",
        "our-values": "Our Values",
        "innovation": "Innovation",
        "innovation-text": "We constantly strive to innovate and bring new ideas to life, ensuring that our solutions are always ahead of the curve.",
        "quality": "Quality",
        "quality-text": "We are committed to delivering high-quality solutions that meet and exceed our clients' expectations.",
        "integrity": "Integrity",
        "integrity-text": "We conduct our business with the highest level of integrity, ensuring transparency and trust in all our dealings.",
        "our-partners": "Our Partners",
        "contact-info": "Contact Information",
        "location": "Location:",
        "phone": "Phone:",
        "website": "Website:",
        "send-message": "Send Us a Message",
        "login": "Login",
        "username": "Username",
        "password": "Password"
        },
        "ar": {
        "home": "الرئيسية",
        "about": "عن الشركة",
        "services": "الخدمات",
        "courses": "الكورسات",
        "who-we-are": "من نحن",
        "contact": "الاتصال",
        "projects": "المشاريع السابقة",
        "welcome": "مرحبًا بكم في Eastern-CADD",
        "welcome-text": "نحن رواد في التطوير الإداري والتحول الرقمي.",
        "featured-services": "الخدمات المميزة",
        "software-dev-text": "نطور مواقع ويب وتطبيقات جوال وسطح مكتب مخصصة لاحتياجاتك.",
        "automation-text": "تصميم وبرمجة الآلات الآلية والروبوتات للصناعة والبحث.",
        "electronics-text": "تصميم وتطوير دوائر التحكم الإلكترونية لمشاريع متنوعة.",
        "popular-courses": "الكورسات الشائعة",
        "web-design-text": "تعلم HTML5 وCSS3 وJavaScript وBootstrap لإنشاء مواقع ويب حديثة.",
        "mobile-dev-text": "قم ببناء تطبيقات الهاتف باستخدام React Native وFlutter.",
        "electrical-systems-text": "تعلم أساسيات ومفاهيم متقدمة في أنظمة الكهرباء.",
        "our-team": "فريقنا",  // Fixed: Added missing comma here
        "footer": "© 2024 Eastern-CADD. جميع الحقوق محفوظة.",
        "software-dev": "تطوير البرمجيات: مواقع ويب، تطبيقات جوال، وتطبيقات سطح المكتب.",
        "automation": "أنظمة التحكم الآلي: تصميم وبرمجة الآلات والأنظمة الآلية.",
        "robotics": "الروبوتات: تطوير روبوتات للصناعة والبحث.",
        "custom-solutions": "حلول مخصصة: تقديم حلول فريدة لتحديات العملاء.",
        "web-design": "تصميم الويب: HTML5, CSS3, JavaScript.",
        "mobile-dev": "تطوير تطبيقات الهاتف: React Native, Flutter.",
        "electrical-systems": "أنظمة الكهرباء: أساسيات الكهرباء، الأنظمة المتقدمة.",
        "who-we-are-text": "نحن فريق من الخبراء في التكنولوجيا والهندسة، نقدم حلولًا مبتكرة لعملائنا.",
        "name": "الاسم:",
        "email": "البريد الإلكتروني:",
        "message": "الرسالة:",
        "submit": "إرسال",
        "project1": "مشروع تصميم نظام تحكم آلي",
        "project2": "مشروع تطوير تطبيق جوال",
        "programming": "البرمجة وتطوير التطبيقات",
        "mep-systems": "أنظمة MEP",
        "engineering-research": "البحث الهندسي والملكية الفكرية",
        "low-current-systems": "أنظمة التيار الخفيف",
        "our-history": "تاريخنا",
        "history-text": "منذ تأسيسنا في عام 2024، كنا في طليعة الابتكار التكنولوجي. بدأنا كفريق صغير من المهندسين والمطورين المتحمسين، وعلى مر السنين، نمينا لتصبح شركة رائدة في المنطقة، نقدم حلولًا متطورة لعملائنا.",
        "our-values": "قيمنا",
        "innovation": "الابتكار",
        "innovation-text": "نسعى دائمًا للابتكار وإحياء الأفكار الجديدة، مما يضمن أن تكون حلولنا دائمًا في المقدمة.",
        "quality": "الجودة",
        "quality-text": "نحن ملتزمون بتقديم حلول عالية الجودة تلبي وتتجاوز توقعات عملائنا.",
        "integrity": "النزاهة",
        "integrity-text": "نقوم بأعمالنا بأعلى مستويات النزاهة، مما يضمن الشفافية والثقة في جميع تعاملاتنا.",
        "our-partners": "شركاؤنا",
        "services-text": "نقدم مجموعة واسعة من الخدمات لتلبية احتياجاتك التكنولوجية.",
        "service-details": "تفاصيل الخدمات",
        "why-choose-us": "لماذا نختارنا؟",
        "expertise": "الخبرة",
        "expertise-text": "يتكون فريقنا من محترفين ذوي مهارات عالية مع خبرة واسعة في مجالاتهم.",
        "innovation-text": "نحن ملتزمون بتقديم حلول مبتكرة تعزز تقدم عملك.",
        "quality-text": "نضمن أعلى معايير الجودة في جميع مشاريعنا وخدماتنا.",
        "our-clients": "عملاؤنا",
        "who-we-are-text": "نحن فريق من الخبراء في التكنولوجيا والهندسة، نقدم حلولًا مبتكرة.",
        "our-team": "فريقنا",
        "our-values": "قيمنا",
        "innovation": "الابتكار",
        "innovation-text": "نسعى دائمًا للابتكار وإحياء الأفكار الجديدة، مما يضمن أن تكون حلولنا دائمًا في المقدمة.",
        "quality": "الجودة",
        "quality-text": "نحن ملتزمون بتقديم حلول عالية الجودة تلبي وتتجاوز توقعات عملائنا.",
        "integrity": "النزاهة",
        "integrity-text": "نقوم بأعمالنا بأعلى مستويات النزاهة، مما يضمن الشفافية والثقة في جميع تعاملاتنا.",
        "our-partners": "شركاؤنا",
        "contact-info": "معلومات الاتصال",
        "location": "الموقع:",
        "phone": "الهاتف:",
        "website": "الموقع الإلكتروني:",
        "send-message": "أرسل لنا رسالة",
        "login": "تسجيل الدخول",
        "username": "اسم المستخدم",
        "password": "كلمة المرور"
    }
};

let currentLanguage = "en";

languageToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === "en" ? "ar" : "en";
    updateLanguage();
});

function updateLanguage() {
    // Change page direction based on language
    htmlElement.setAttribute("dir", currentLanguage === "en" ? "ltr" : "rtl");

    // Update texts
    languageElements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = translations[currentLanguage][key];
    });

    // Change language toggle button text
    languageToggle.innerHTML = currentLanguage === "en" ? "AR" : "EN";
}