document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Ambil data dari formulir
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulasi validasi (ganti dengan validasi backend yang sebenarnya)
    if (username === 'admin' && password === '12345') {
        // Login berhasil, arahkan ke halaman utama
        window.location.href = 'index.html'; // Ganti dengan URL halaman utama Anda
    } else {
        // Tampilkan pesan kesalahan
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
