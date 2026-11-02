/* PROYEK = studi kasus. Bagian yang dikosongkan ([] atau "") otomatis tidak ditampilkan.
   ASET:
   - cover        : gambar sampul kartu, contoh "assets/projects/museum/cover.jpg"
   - videos       : link YouTube biasa, contoh "https://youtu.be/rKAo9ETsJig"
   - screenshots  : { src: "assets/projects/museum/nama-gambar.jpg", caption: "Keterangan" }
   - artifacts    : dokumen analisis/pengujian, { src, label, text }
   - features     : { tag, title, text, src, caption }
   Taruh file gambar di assets/projects/<nama-proyek>/ dengan nama yang sama seperti yang ditulis di sini. */
const PROJECTS = [
  {
    title: "Museum MK Lesmana",
    type: "Tugas Akhir, 2026",
    subtitle: "Aplikasi pemesanan tiket museum dan event berbasis web",
    summary: "Pemesanan dan pengelolaan tiket serta dashboard pengelola museum.",
    cover: "assets/projects/museum/cover.jpg",
    tech: ["Laravel", "MySQL", "Figma", "UAT"],
    meta: [{ k: "Metode", v: "Scrum" }, { k: "Teknologi", v: "Laravel, MySQL" }, { k: "Peran", v: "Pengembangan fitur dan analisis" }],
    intro: [
      { h: "Gambaran proyek", t: "Proyek tugas akhir untuk mengembangkan aplikasi pemesanan tiket museum dan event berbasis web. Sistem membantu penyampaian informasi museum serta mendukung pemesanan dan pengelolaan tiket secara lebih terstruktur." },
      { h: "Masalah yang diselesaikan", t: "Pemesanan tiket dan pencatatan pengunjung sebelumnya dilakukan secara manual. Informasi museum dan kegiatan juga belum tersedia lewat satu kanal yang mudah diakses." }
    ],
    contributions: [
      { title: "Pengembangan fitur tiket", text: "Mengembangkan fitur pemesanan dan pengelolaan tiket serta dashboard pengelola menggunakan Laravel." },
      { title: "Analisis dan perancangan", text: "Terlibat dalam analisis kebutuhan, pemodelan proses bisnis dan sistem, perancangan basis data, serta antarmuka menggunakan Figma." },
      { title: "Pengujian penerimaan pengguna", text: "Menyusun dan melaksanakan UAT untuk mengevaluasi kesesuaian fungsi aplikasi dengan kebutuhan pengguna." }
    ],
    videos: ["https://youtu.be/rKAo9ETsJig"],
    screenshots: [
      { src: "assets/projects/museum/gambar-1.jpg", caption: "Halaman pemesanan tiket" },
      { src: "assets/projects/museum/gambar-2.jpg", caption: "Dashboard pengelola" }
    ],
    artifacts: [
      { src: "assets/projects/museum/bpmn.jpg", label: "BPMN", text: "Proses berjalan dan proses usulan" },
      { src: "assets/projects/museum/uml.jpg", label: "UML", text: "Use case / activity diagram" },
      { src: "assets/projects/museum/erd.jpg", label: "ERD", text: "Rancangan basis data" },
      { src: "assets/projects/museum/uat.jpg", label: "UAT", text: "Skenario dan hasil pengujian" }
    ],
    note: "Aplikasi dikembangkan dan diuji pada lingkungan lokal (localhost) dan belum dideploy ke server publik.",
    link: "" // opsional, contoh "https://github.com/hafizhahfarahh/nama-repo"
  },
  {
    title: "Koperasi Simpan Pinjam Sekolah",
    type: "Capstone Project, 2025",
    subtitle: "Website pengelolaan simpanan dan pinjaman koperasi sekolah",
    summary: "Modul pinjaman: pengajuan lewat WhatsApp sampai pencatatan angsuran.",
    cover: "assets/projects/koperasi/cover.jpg",
    tech: ["Laravel", "MySQL", "UAT"],
    meta: [{ k: "Jenis", v: "Capstone Project (kelompok)" }, { k: "Tahun", v: "2025" }, { k: "Pengujian", v: "UAT" }],
    intro: [
      { h: "Gambaran proyek", t: "Proyek capstone kelompok untuk mendukung pengelolaan koperasi sekolah, dengan dua area utama: simpanan dan pinjaman." },
      { h: "Peran saya", t: "Berfokus pada modul pinjaman, mulai dari pengajuan, persetujuan bendahara, pembayaran angsuran, hingga pengelolaan tagihan." }
    ],
    flow: [
      { title: "Pengajuan", text: "Anggota mengajukan pinjaman melalui WhatsApp dengan format pesan yang ditentukan." },
      { title: "Persetujuan", text: "Bendahara meninjau pengajuan dan memutuskan menyetujui atau menolak." },
      { title: "Pembayaran angsuran", text: "Bendahara mencatat pembayaran sebagian maupun penuh dan memantau sisa pinjaman." },
      { title: "Tagihan", text: "Sistem menampilkan status pembayaran, bukti pembayaran, dan informasi tagihan." }
    ],
    videos: [],
    screenshots: [
      { src: "assets/projects/koperasi/gambar-1.jpg", caption: "Pengajuan" },
      { src: "assets/projects/koperasi/gambar-2.jpg", caption: "Persetujuan pinjaman" },
      { src: "assets/projects/koperasi/gambar-3.jpg", caption: "Pembayaran angsuran" }
    ],
    artifacts: [{ src: "assets/projects/koperasi/uat.jpg", label: "UAT", text: "Evaluasi fungsi modul pinjaman bersama pengguna" }],
    note: "", link: ""
  },
  {
    title: "OrangBaik",
    type: "Proyek Tugas Besar, 2025",
    subtitle: "Platform web untuk mendukung penanganan bencana",
    summary: "Edukasi mitigasi bencana serta testimoni dan cerita korban.",
    cover: "assets/projects/orangbaik/cover.jpg",
    tech: ["Laravel", "Laravel Dusk", "MySQL"],
    meta: [{ k: "Jenis", v: "Proyek kelompok" }, { k: "Tahun", v: "2025" }, { k: "Pengujian", v: "Laravel Dusk" }],
    intro: [
      { h: "Gambaran proyek", t: "Proyek kelompok yang mengangkat kebutuhan penanganan bencana, termasuk edukasi mitigasi dan dukungan bagi masyarakat terdampak." },
      { h: "Kontribusi saya", t: "Mengembangkan fitur edukasi mitigasi bencana serta fitur testimoni dan cerita korban, termasuk alur pengelolaan konten dan moderasi." }
    ],
    videos: ["https://drive.google.com/drive/folders/1KsXOzmpEJu3Cyl4Tw5UXwM7O5bunBG7L"], screenshots: [],
    features: [
      { tag: "FR08", title: "Edukasi mitigasi bencana", text: "Admin mengelola konten edukasi berdasarkan kategori evakuasi, kesehatan, dan psikososial. Pengguna mengakses materinya.", src: "assets/projects/orangbaik/gambar-1.jpg", caption: "Halaman edukasi mitigasi" },
      { tag: "FR12", title: "Testimoni dan cerita korban", text: "Pengguna mengirim cerita, admin memoderasi, lalu cerita yang disetujui ditampilkan kepada pengguna lain.", src: "assets/projects/orangbaik/gambar-2.jpg", caption: "Halaman testimoni" }
    ],
    artifacts: [{ src: "assets/projects/orangbaik/dusk.jpg", label: "Laravel Dusk", text: "Skrip dan hasil pengujian fungsional otomatis di browser" }],
    note: "", link: ""
  }
];
