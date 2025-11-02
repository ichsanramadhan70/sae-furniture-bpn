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

// ===============================================
// FUNGSI UNTUK MENGHUBUNGKAN FORMULIR KE WHATSAPP
// ===============================================

// Nomor WhatsApp tujuan Anda
const NOMOR_WA_ANDA = '6289609663232'; 

// Dapatkan elemen tombol KIRIM PESAN
const tombolKirim = document.getElementById('btn-kirim');

// Cek apakah tombol ditemukan sebelum menambahkan event listener
if (tombolKirim) {
    tombolKirim.addEventListener('click', function() {
        
        // 1. Ambil nilai dari input field
        const inputNama = document.getElementById('input-nama');
        const inputEmail = document.getElementById('input-email');
        const inputHp = document.getElementById('input-hp');
        
        // (Opsional) Lakukan validasi sederhana agar tidak mengirim data kosong
        if (!inputNama.value || !inputHp.value) {
            alert("Mohon isi Nama dan Nomor HP Anda untuk melanjutkan.");
            return; // Hentikan fungsi jika ada yang kosong
        }

        const nama = inputNama.value;
        const email = inputEmail.value; // Nilai bisa kosong, itu normal
        const noHp = inputHp.value;

        // 2. Susun teks pesan
        // %0A adalah kode untuk membuat baris baru (seperti menekan Enter)
        let pesan = `Halo, saya ingin konsultasi furniture dari website.%0A%0A`; 
        pesan += `Data Kontak Pelanggan:%0A`;
        pesan += `Nama: ${nama}%0A`;
        pesan += `Email: ${email}%0A`;
        pesan += `No. HP: ${noHp}%0A%0A`;
        pesan += `Mohon segera dihubungi. Terima kasih.`;

        // 3. Encode URI untuk memastikan semua karakter aman dan terbaca baik di URL
        const pesanEncoded = encodeURIComponent(pesan);

        // 4. Gabungkan menjadi URL WhatsApp
        const waURL = `https://wa.me/${NOMOR_WA_ANDA}?text=${pesanEncoded}`;
        
        // 5. Buka tautan di tab baru browser
        window.open(waURL, '_blank');
    });
}