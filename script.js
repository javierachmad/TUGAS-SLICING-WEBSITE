document.addEventListener("DOMContentLoaded", function () {
  const biodata = document.getElementById("biodata");
  if (biodata) {
    biodata.innerHTML = `
            <p>Halo! Saya <strong>Javier Achmad</strong>, Mahasiswa <strong> Universitas Negeri Jember</strong> yang senang menguji dan mencoba merakit sesuatu dengan menggabungkan mikrocontroller dan software</p>
        `;
  }

  const geodata = document.getElementById("geodata");
  if (geodata) {
    geodata.innerHTML = `
            <p>Saya terus mengasah kemampuan dalam pengembangan web sederhana dan bercita-cita melanjutkan pendidikan tinggi ke <strong>Universitas Jember (UNEJ)</strong>.</p>
        `;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      alert(
        `Pesan berhasil dikirim! Terima kasih, ${nama}. Saya akan segera menghubungi Anda.`,
      );
      contactForm.reset();
    });
  }
});

document.addEventListener("touchstart", function () {}, true);
