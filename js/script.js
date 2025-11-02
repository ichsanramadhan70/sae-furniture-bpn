// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

// Tentukan nomor WhatsApp tujuan
const nomorWa = '6289609663232'; // Ganti dengan No HP/WA Anda (tanpa +, spasi, atau -)

// Dapatkan elemen tombol
const tombolKirim = document.getElementById('btn-kirim');

tombolKirim.addEventListener('click', function() {
    // 1. Ambil nilai dari input field
    const nama = document.getElementById('input-nama').value;
    const email = document.getElementById('input-email').value;
    const noHp = document.getElementById('input-hp').value;

    // 2. Susun teks pesan
    let pesan = `Halo, saya ingin konsultasi furniture.%0A`; // %0A adalah kode untuk baris baru (Enter)
    pesan += `Nama: ${nama}%0A`;
    pesan += `Email: ${email}%0A`;
    pesan += `No. HP: ${noHp}%0A`;
    pesan += `Mohon info ketersediaan produk Anda. Terima kasih.`;

    // 3. Gabungkan menjadi URL WhatsApp
    const waURL = `https://wa.me/${nomorWa}?text=${pesan}`;
    
    // 4. Buka tautan di tab baru
    window.open(waURL, '_blank');
});