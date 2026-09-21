document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan isi biodata di index2.html jika elemennya ada
    const biodata = document.getElementById("biodata");
    if (biodata) {
        biodata.innerHTML = `
            <p>Halo! Saya <strong>Javier Achmad</strong>, siswa <strong>SMAN 1 Tenggarang</strong> yang senang menguji coba pembuatan website dan belajar koding secara mandiri.</p>
        `;
    }

    // Menampilkan isi geodata di about.html jika elemennya ada
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
            e.preventDefault(); // Mencegah reload halaman

            const nama = document.getElementById("nama").value;

            // Menampilkan Alert
            alert(`Pesan berhasil dikirim! Terima kasih, ${nama}. Saya akan segera menghubungi Anda.`);

            // Mengosongkan form kembali setelah dikirim
            contactForm.reset();
        });
    }
});