let lastScrollTop = 0;
const navbar = document.querySelector('.header');
const btnElement = document.querySelector('.scroll_top_Btn'); 

window.addEventListener('scroll', function() {
    // Lấy giá trị cuộn trang hiện tại
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 1. LOGIC CHO NAVBAR (Ẩn khi cuộn xuống, hiện khi cuộn lên)
    if (currentScroll > lastScrollTop) {
        navbar.classList.add('header-hidden');
    } else {
        navbar.classList.remove('header-hidden');
    }

    // 2. LOGIC CHO NÚT SCROLL UP (Hiện khi cuộn qua 300px)
    if (btnElement) {
        if (currentScroll > 300) {
            btnElement.classList.add('show');
        } else {
            btnElement.classList.remove('show');
        }
    }

    // Cập nhật vị trí cuộn cuối cùng
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, { passive: true });

//===================HIỆU ỨNG NỔI ẢNH===================
const options = {
  threshold: 0.1 
};

// Tạo hàm xử lý khi phần tử giao thoa với khung nhìn
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Thêm class 'active' để chạy animation
      entry.target.classList.add('active');
      // Nếu bạn chỉ muốn hiện 1 lần rồi thôi, hãy ngừng theo dõi:
      observer.unobserve(entry.target);
    }
  });
}, options);

// Chọn tất cả các phần tử có class 'reveal' và bắt đầu theo dõi
const elements = document.querySelectorAll('.reveal');
elements.forEach(el => observer.observe(el));
