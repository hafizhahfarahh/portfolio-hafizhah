Taruh aset di sini (nama file harus sama dengan yang ditulis di js/data/):
- assets/images/foto-profil.jpg
- assets/projects/museum/   cover.jpg, gambar-1.jpg, gambar-2.jpg, bpmn.jpg, diagram.jpg, erd.jpg, uat.jpg
- assets/projects/koperasi/ cover.jpg, gambar-1.jpg, gambar-2.jpg, bpmn.jpg, usecase.jpg, erd.jpg
- assets/projects/orangbaik/ cover.jpg, gambar-1.jpg, gambar-2.jpg, dusk.jpg
- assets/fonts/  (opsional) avenir-book.woff2 dan avenir-heavy.woff2 jika Anda punya lisensi font Avenir

CARA MENAMBAH BUKTI (sertifikat, dokumen pengujian, hasil belajar, dll.)
- Taruh file di assets/bukti/ (gambar .jpg/.png atau .pdf), lalu isi kolom proof di file data, contoh:
    proof: "assets/bukti/sertifikat-bnsp.jpg"
- Bisa juga link Google Drive/Docs: proof: "https://drive.google.com/file/d/XXXX/view"
  (di Drive: Bagikan > "Siapa saja yang memiliki link")
- Beberapa bukti sekaligus: proof: ["assets/bukti/a.jpg", "assets/bukti/b.pdf"]
- Kosongkan ("") jika tidak ada bukti: tombolnya otomatis tidak muncul.
- Video demo di projects.js (videos) boleh link YouTube atau Google Drive.
