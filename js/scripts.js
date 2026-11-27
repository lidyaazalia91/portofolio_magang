/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // === Activate Bootstrap ScrollSpy on the main nav element ===
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // === Collapse responsive navbar when toggler is visible ===
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // === Manual scroll listener fallback to ensure active state ===
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#sideNav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // === Optional: Scroll smoothly when clicking nav links ===
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});

// === Sertifikat Showcase dengan tombol kanan kiri ===
document.addEventListener("DOMContentLoaded", () => {
    const certificates = [
        { name: "Microsoft Certificate", file: "assets/certificates/microsoft.pdf" },
        { name: "Excel Certificate", file: "assets/certificates/excel.pdf" },
        { name: "WordPress Certificate", file: "assets/certificates/wordpress.pdf" },
        { name: "ELCUP Certificate", file: "assets/certificates/elcup.pdf" },
        { name: "Gemastek Certificate", file: "assets/certificates/gemaste.pdf" },
    ];

    let current = 0;
    const pdfViewer = document.getElementById("showcasePDF");
    const title = document.getElementById("certTitle");
    const prevBtn = document.getElementById("prevCert");
    const nextBtn = document.getElementById("nextCert");

    function showCertificate(index) {
        const cert = certificates[index];
        pdfViewer.src = cert.file;
        title.textContent = cert.name;
    }

    // Tombol navigasi manual
    prevBtn.addEventListener("click", () => {
        current = (current - 1 + certificates.length) % certificates.length;
        showCertificate(current);
        resetTimer();
    });

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % certificates.length;
        showCertificate(current);
        resetTimer();
    });

    // Reset timer agar tidak langsung loncat setelah klik manual
    function resetTimer() {
        clearInterval(autoChange);
        autoChange = setInterval(() => {
            current = (current + 1) % certificates.length;
            showCertificate(current);
        }, 7000);
    }

    // Tampilkan pertama kali
    showCertificate(current);
});

// === Pop-up Foto Profil ===
document.addEventListener("DOMContentLoaded", function () {
  const profileImg = document.querySelector(".img-profile");
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");

  profileImg.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = profileImg.src;
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

