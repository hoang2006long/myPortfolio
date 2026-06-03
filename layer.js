// 1. Lấy tất cả các nút bấm mở, nút đóng và các layer
const openBtns = document.querySelectorAll('.open-btn');
const closeBtns = document.querySelectorAll('.close-btn');
const allLayers = document.querySelectorAll('.overlay-layer');

// 2. Lắng nghe sự kiện click cho TẤT CẢ các nút MỞ
openBtns.forEach(button => {
  button.addEventListener('click', () => {
    // Lấy chuỗi id từ thuộc tính data-target (Ví dụ: "layer-login")
    const targetId = button.getAttribute('data-target');
    // Tìm đúng layer đó trên trang
    const targetLayer = document.getElementById(targetId);

    if (targetLayer) {
      targetLayer.classList.add('active'); // Thêm class để hiện layer
    }
  });
});

// 3. Lắng nghe sự kiện click cho TẤT CẢ các nút ĐÓNG
closeBtns.forEach(button => {
  button.addEventListener('click', () => {
    // Tìm ngược lên trên để lấy layer cha chứa nút đóng vừa bấm
    const parentLayer = button.closest('.overlay-layer');

    if (parentLayer) {
      var iframe = document.getElementById('youtubeVideo_1');
      var videoSrc = iframe.src;
      iframe.src = videoSrc;
      parentLayer.classList.remove('active'); // Xóa class để ẩn layer
    }
  });
});

// 4. Tùy chọn nâng cao: Bấm ra vùng đen bên ngoài cũng tự đóng layer
allLayers.forEach(layer => {
  layer.addEventListener('click', (event) => {
    // Nếu người dùng click trúng phần nền đen (chứ không phải khung màu trắng)
    if (event.target === layer) {
      layer.classList.remove('active');
      if (allLayers) {
      var iframe = document.getElementById('youtubeVideo_1');
      var videoSrc = iframe.src;
      iframe.src = videoSrc;
      parentLayer.classList.remove('active'); // Xóa class để ẩn layer
    }
    }
  });
});