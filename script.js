document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetELement = document.getElementById(targetId);

            window.scrollTo({
                top: targetELement.offsetTop,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.querySelector('.scroll-top');
    var rootElement = document.documentElement;

    function handleScroll() {
        if (rootElement.scrollTop > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    function scrollToTop() {
        rootElement.scrollIntoView({ behavior: 'smooth' });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);
})

document.addEventListener('DOMContentLoaded', function () {
    const texts = ["Hello, I'm John Doe", "Welcome to my portfolio!", "Feel free to explore."];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let speed = 100; // Speed of typing effect

    function type() {
        const text = texts[index];
        const displayText = text.substring(0, charIndex);
        document.querySelector('.typing-container').textContent = displayText;

        if (!isDeleting) {
            if (charIndex < text.length) {
                charIndex++;
            } else {
                isDeleting = true;
                speed = 50; // Speed of deleting effect
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
            } else {
                isDeleting = false;
                index = (index + 1) % texts.length;
                speed = 100; // Speed of typing effect
            }
        }

        setTimeout(type, speed);
    }

    type();
});


document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Ambil nilai dari input email
    const email = document.getElementById('newsletter-email').value;

    // Proses pengiriman email ke server atau simpan di tempat lain
    // Untuk keperluan demonstrasi, kita hanya akan mengarahkan kembali ke halaman login

    // Simulasi pengiriman formulir
    console.log('Email submitted:', email);

    // Arahkan kembali ke halaman login
   window.location.href = 'login.html'; // Ganti dengan URL halaman login Anda
});
