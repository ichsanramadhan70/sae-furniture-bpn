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
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form melakukan submit biasa (refresh halaman)

    // 1. Ambil nilai dari setiap input
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const nohp = document.getElementById('nohp').value;

    // 2. Tentukan nomor WhatsApp tujuan
    const nomorWA = "6287785394998"; // Nomor WA Anda
    
    // 3. Buat pesan yang akan dikirim ke WhatsApp
    const pesan = `Halo, saya *${nama}* tertarik dengan produk Anda.%0A%0A*Detail Kontak Pelanggan:*%0ANama: ${nama}%0AEmail: ${email}%0ANo. HP: ${nohp}%0A%0AMohon dihubungi kembali. Terima kasih.`;

    // 4. Gabungkan menjadi tautan WhatsApp API
    const waLink = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    // 5. Arahkan pengguna ke tautan WhatsApp di tab baru
    window.open(waLink, '_blank');
    
    // 6. Reset form setelah data diambil
    this.reset();
});