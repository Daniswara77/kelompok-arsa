document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Interaksi Sejarah ---
    const btnSejarah = document.getElementById('btn-sejarah');
    const sejarahKonten = document.getElementById('sejarah-konten');

    btnSejarah.addEventListener('click', function() {
        // Toggle (ubah) class 'hidden' pada konten
        const isHidden = sejarahKonten.classList.toggle('hidden');
        btnSejarah.textContent = isHidden ? 'Tampilkan Sejarah Singkat' : 'Sembunyikan Sejarah Singkat';
    });

    // --- 2. Interaksi Filosofi ---
    const btnFilosofi = document.getElementById('btn-filosofi');
    const filosofiKonten = document.getElementById('filosofi-konten');
    const tokohCards = document.querySelectorAll('.tokoh-card');

    btnFilosofi.addEventListener('click', function() {
        // Toggle konten filosofi umum
        const isHidden = filosofiKonten.classList.toggle('hidden');
        btnFilosofi.textContent = isHidden ? 'Pelajari Lebih Lanjut Filosofi Tokoh' : 'Sembunyikan Filosofi Tambahan';
    });

    // Menambahkan interaksi saat kartu tokoh diklik
    tokohCards.forEach(card => {
        card.addEventListener('click', function() {
            const tokohName = this.getAttribute('data-tokoh');
            let info = "";

            switch (tokohName) {
                case 'warok':
                    info = "Warok: Simbol kesatria dan spiritualitas Ponorogo, memiliki pengaruh besar dalam masyarakat dan kesenian.";
                    break;
                case 'jathil':
                    info = "Jathil: Tarian kuda lumping yang enerjik, pada awalnya dibawakan oleh penari laki-laki dengan dandanan wanita. Kini menjadi penari perempuan.";
                    break;
                case 'bujang-ganong':
                    info = "Bujang Ganong: Seringkali bertindak sebagai penghubung antara penonton dan pertunjukan, dengan gerakan akrobatik yang lucu dan dinamis.";
                    break;
                default:
                    info = "Informasi tokoh ini sedang disiapkan.";
            }

            // Menampilkan informasi di pop-up sederhana (alert)
            alert(`Detail Tokoh ${this.querySelector('h3').textContent}:\n\n${info}`);
        });
    });

    // --- 3. Interaksi Musik ---
    const musikList = document.getElementById('musik-list');
    musikList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const alat = event.target.getAttribute('data-alat');
            alert(`Anda mengklik: ${event.target.textContent}. Fungsi ${alat} dalam Reog sangat krusial!`);
            // Di proyek nyata, Anda dapat memicu pemutaran suara alat musik di sini.
        }
    });
});