let lastScrollTop = 0;
const navbar = document.querySelector('.header');
const btnElement = document.querySelector('.scroll_top_Btn'); 
const revealElements = document.querySelectorAll('.reveal'); // Chọn sẵn danh sách để dùng cho việc reset

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // LOGIC RESET KHI LÊN TRÊN CÙNG
    if (currentScroll <= 10) {
        revealElements.forEach(el => {
            if (el.offsetTop > 500) { 
                el.classList.remove('active');
            } 
        });
    }

    // LOGIC CHO NAVBAR
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        navbar.classList.add('header-hidden');
    } else {
        navbar.classList.remove('header-hidden');
    }

    // LOGIC CHO NÚT SCROLL UP 
    if (btnElement) {
        if (currentScroll > 300) {
            btnElement.classList.add('show');
        } else {
            btnElement.classList.remove('show');
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });

//=================== HIỆU ỨNG NỔI ẢNH (Scroll Reveal) ===================
const options = {
    threshold: 0.01
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, options);

// Kích hoạt theo dõi
revealElements.forEach(el => observer.observe(el));