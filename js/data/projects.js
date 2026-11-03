/* PROYEK = studi kasus. Bagian yang dikosongkan ([] atau "") otomatis tidak tampil.
   Teks: intro (2 kolom), focus (poin), role (paragraf), method {h,t}, tools {h,items}, outcomes (poin), status.
   Angka di dalam poin otomatis ditebalkan.
   BUKTI (opsional): poin focus/outcomes boleh berbentuk { t: "teks", proof: "file/link" }; artifacts boleh berupa PDF/link (bukan hanya gambar);
   videos boleh link YouTube atau Google Drive (bagikan "Siapa saja yang memiliki link").
   ASET: cover | videos (link YouTube biasa) | screenshots {src,caption} | artifacts {src,label,text} | features {tag,title,text,src,caption}
   Taruh gambar di assets/projects/<nama-proyek>/ dengan nama file yang sama seperti di sini. */
const PROJECTS = [
  {
    title: "Website Pemesanan Tiket Museum MK Lesmana",
    type: "Tugas Akhir, 2026",
    subtitle: "Aplikasi pemesanan tiket dan kegiatan museum berbasis web",
    summary: "Digitalisasi pemesanan tiket, pembayaran, e-tiket QR, dan pengelolaan kunjungan museum.",
    cover: "assets/projects/museum/cover.jpg",
    meta: [{ k: "Peran", v: "Pengembang utama" }, { k: "Metode", v: "Agile Scrum" }, { k: "Teknologi", v: "Laravel, MySQL, Midtrans" }],
    highlights: [
      { v: "15", l: "Fitur dikembangkan" }, { v: "6", l: "Proses bisnis dimodelkan" },
      { v: "91", l: "Skenario black-box, 100% berhasil" }, { v: "81,08", l: "Skor SUS pengunjung (Grade A)" }
    ],
    intro: [
      { h: "Gambaran Proyek", t: "Mengembangkan aplikasi pemesanan tiket berbasis web untuk Museum MK Lesmana guna mendigitalisasi pemesanan tiket dan pengelolaan kegiatan museum. Aplikasi mengintegrasikan informasi museum, berbagai jenis tiket kegiatan, transaksi, verifikasi kunjungan, serta pengelolaan data pengunjung dalam satu platform." },
      { h: "Konteks dan Masalah", t: "Sebelumnya pemesanan tiket dan pendaftaran kegiatan masih manual. Informasi kegiatan belum tersedia di kanal terpusat, pencatatan pengunjung belum sistematis, dan pengelolaan tiket serta pendapatan dilakukan terpisah. Kondisi ini menyulitkan pengunjung mencari informasi dan memesan, serta menyulitkan pengelola memantau transaksi dan data kunjungan." }
    ],
    focus: [
      "Menganalisis proses bisnis pemesanan tiket dan operasional museum.",
      "Merancang alur pemesanan untuk berbagai jenis tiket dan kegiatan museum.",
      "Mengembangkan fitur pemesanan, pembayaran, penerbitan e-tiket, dan verifikasi kunjungan.",
      "Membangun fitur pengelolaan tiket, data pengunjung, dan laporan penjualan.",
      "Melakukan pengujian fungsional serta evaluasi penerimaan dan usability aplikasi."
    ],
    role: ["Sebagai pengembang utama proyek tugas akhir, saya menangani analisis kebutuhan, pemodelan proses bisnis dan sistem, perancangan antarmuka, pengembangan aplikasi, serta pengujian."],
    method: [
      { h: "Agile Scrum", t: "Kerangka kerja pengembangan iteratif." },
      { h: "Business Process Modeling", t: "Menganalisis proses bisnis eksisting dan merancang proses target dengan BPMN." },
      { h: "System Analysis & Design", t: "Menyusun Use Case Description, Activity Diagram, Sequence Diagram, dan ERD." },
      { h: "Software Testing", t: "Black-box Testing, User Acceptance Testing (UAT), dan System Usability Scale (SUS)." }
    ],
    tools: [
      { h: "Backend", items: ["Laravel", "PHP"] }, { h: "Database", items: ["MySQL"] },
      { h: "Pembayaran", items: ["Midtrans"] }, { h: "Verifikasi tiket", items: ["QR Code"] },
      { h: "Desain UI/UX", items: ["Figma"] }, { h: "Pemodelan", items: ["BPMN", "UML", "ERD"] }
    ],
    outcomes: [
      "Mengembangkan 15 fitur untuk mendukung kebutuhan pengunjung dan pengelola.",
      "Memodelkan 6 proses bisnis eksisting dan target.",
      "Menghasilkan dokumentasi sistem: 35 Use Case Description, 32 Activity Diagram, 32 Sequence Diagram, 36 Product Backlog Items, dan 1 ERD.",
      "Menjalankan 91 skenario Black-box Testing dengan tingkat keberhasilan 100%.",
      "Melaksanakan UAT terhadap 31 responden: skor rata-rata 4,68/5 dari pengunjung dan 4,83/5 dari pengelola.",
      "Skor SUS 81,08 dari pengunjung dan 80 dari pengelola, keduanya kategori Acceptable dengan Grade A."
    ],
    videos: ["https://youtu.be/rKAo9ETsJig"],
    screenshots: [
      { src: "assets/projects/museum/gambar-1.jpg", caption: "Halaman pemesanan tiket" },
      { src: "assets/projects/museum/gambar-2.jpg", caption: "Dashboard pengelola" }
    ],
    artifacts: [
      { src: "assets/projects/museum/bpmn.jpg", label: "BPMN", text: "Proses eksisting dan target" },
      { src: "assets/projects/museum/activity.jpg", label: "Activity Diagram", text: "Contoh alur fitur" },
      { src: "assets/projects/museum/sequence.jpg", label: "Sequence Diagram", text: "Contoh alur fitur" },
      { src: "assets/projects/museum/erd.jpg", label: "ERD", text: "Rancangan basis data" },
      { src: "assets/projects/museum/uat.jpg", label: "UAT dan SUS", text: "Ringkasan hasil pengujian" }
    ],
    status: "Aplikasi dikembangkan dan diuji pada lingkungan lokal (localhost), belum dipublikasikan atau dideploy ke server produksi.", proof: "https://docs.google.com/spreadsheets/d/133CNKGEnztQGJZm2_EhAM4EQdLUDHj_d/edit?usp=drive_link&ouid=100918561195301112068&rtpof=true&sd=true", // opsional: laporan/dokumen proyek (PDF atau link Drive)
   
    link: "" // opsional, contoh "https://github.com/hafizhahfarahh/nama-repo"
  },
  {
    title: "Website Koperasi Sejahtera",
    type: "Capstone Project, 2025",
    subtitle: "Sistem pengelolaan simpan pinjam koperasi sekolah berbasis web",
    summary: "Pengajuan pinjaman lewat WhatsApp, persetujuan, angsuran, tagihan, dan laporan keuangan.",
    cover: "assets/projects/koperasi/cover.jpg",
    meta: [{ k: "Peran", v: "Pengembang utama (kelompok)" }, { k: "Pengujian", v: "UAT bersama pengurus" }, { k: "Teknologi", v: "Laravel, MySQL, Bootstrap" }],
    highlights: [
      { v: "12", l: "Fitur dikembangkan" }, { v: "12", l: "Use Case Description" },
      { v: "12", l: "Activity Diagram" }, { v: "2", l: "Model proses bisnis" }
    ],
    intro: [
      { h: "Gambaran Proyek", t: "Mengembangkan sistem informasi berbasis web untuk membantu digitalisasi administrasi simpan pinjam koperasi sekolah. Sistem mencakup data anggota, pengajuan dan persetujuan pinjaman, pembayaran angsuran, tagihan, notifikasi, dan laporan keuangan." },
      { h: "Konteks dan Masalah", t: "Administrasi koperasi membutuhkan pengelolaan data anggota, pengajuan pinjaman, pencatatan pembayaran, dan pemantauan tagihan. Sistem dikembangkan agar pengurus dapat mengelola aktivitas tersebut secara terintegrasi dan anggota lebih mudah mengakses layanan koperasi." }
    ],
    focus: [
      "Menganalisis kebutuhan pengurus dan anggota koperasi.",
      "Memetakan proses bisnis administrasi koperasi sebelum dan sesudah digitalisasi.",
      "Merancang struktur basis data dan alur interaksi pengguna.",
      "Mengembangkan sebagian besar implementasi aplikasi, dari modul anggota hingga pengelolaan pinjaman dan laporan.",
      "Mengintegrasikan pengajuan pinjaman melalui WhatsApp serta fitur notifikasi."
    ],
    role: [
      "Proyek dikerjakan berkelompok dengan anggota dari berbagai bidang peminatan. Saya menangani sebagian besar pekerjaan pengembangan aplikasi (coding), sedangkan anggota lain berkontribusi sesuai bidang peminatannya.",
      "Kontribusi saya mencakup implementasi fitur, pengembangan antarmuka, pengolahan data, dan integrasi fungsi aplikasi."
    ],
    method: [
      { h: "Business Process Analysis", t: "Menganalisis proses bisnis eksisting dan merancang proses target dengan BPMN." },
      { h: "System Analysis & Design", t: "Menyusun Use Case Diagram, Use Case Description, Activity Diagram, dan ERD." },
      { h: "Requirement-Based Development", t: "Mengembangkan fitur berdasarkan kebutuhan pengurus dan anggota koperasi." },
      { h: "User Acceptance Testing", t: "Memvalidasi fungsi aplikasi bersama pengurus koperasi." }
    ],
    tools: [
      { h: "Backend", items: ["Laravel", "PHP"] }, { h: "Database", items: ["MySQL"] },
      { h: "Frontend", items: ["Blade", "Bootstrap"] }, { h: "Pemodelan", items: ["BPMN", "UML", "ERD"] }
    ],
    outcomes: [
      "Mengembangkan 12 fitur untuk mendukung pengelolaan simpan pinjam koperasi.",
      "Menghasilkan 2 model proses bisnis (eksisting dan target).",
      "Menyusun 12 Use Case Description, 12 Activity Diagram, 1 Use Case Diagram, dan 1 ERD.",
      "Mengimplementasikan pengajuan pinjaman via WhatsApp, persetujuan pengurus, pencatatan angsuran, pengelolaan tagihan, notifikasi, dan laporan keuangan.",
      "Melakukan UAT bersama pengurus untuk memvalidasi kesesuaian fungsi dengan kebutuhan operasional."
    ],
    flow: [
      { title: "Pengajuan", text: "Anggota mengajukan pinjaman melalui WhatsApp." },
      { title: "Persetujuan", text: "Pengurus meninjau dan memutuskan menyetujui atau menolak." },
      { title: "Pembayaran angsuran", text: "Pembayaran sebagian maupun penuh dicatat dan sisa pinjaman dipantau." },
      { title: "Tagihan dan laporan", text: "Sistem menampilkan tagihan, notifikasi, dan laporan keuangan." }
    ],
    videos: [],
    screenshots: [
      { src: "assets/projects/koperasi/gambar-1.jpg", caption: "Pengajuan pinjaman" },
      { src: "assets/projects/koperasi/gambar-2.jpg", caption: "Persetujuan pinjaman" },
      { src: "assets/projects/koperasi/gambar-3.jpg", caption: "Pembayaran angsuran" }
    ],
    artifacts: [
      { src: "assets/projects/koperasi/bpmn.jpg", label: "BPMN", text: "Proses eksisting dan target" },
      { src: "assets/projects/koperasi/usecase.jpg", label: "Use Case Diagram", text: "Kebutuhan pengurus dan anggota" },
      { src: "assets/projects/koperasi/erd.jpg", label: "ERD", text: "Rancangan basis data" },
      { src: "assets/projects/koperasi/uat.jpg", label: "Test Case", text: "Test Case dan Test Scenario" },

    ],
    status: "Aplikasi dikembangkan dan diuji pada lingkungan lokal (localhost), belum dipublikasikan atau dideploy ke server produksi.", proof: "", // opsional: laporan/dokumen proyek (PDF atau link Drive)
   
    link: ""
  },
  {
    title: "OrangBaik",
    type: "Proyek Tugas Besar, 2025",
    subtitle: "Platform web untuk mendukung penanganan bencana",
    summary: "Edukasi mitigasi bencana serta testimoni dan cerita korban.",
    cover: "assets/projects/orangbaik/cover.jpg",
    meta: [{ k: "Jenis", v: "Proyek kelompok" }, { k: "Pengujian", v: "Laravel Dusk" }, { k: "Teknologi", v: "Laravel, MySQL" }],
    intro: [
      { h: "Gambaran Proyek", t: "Proyek kelompok yang mengangkat kebutuhan penanganan bencana, termasuk edukasi mitigasi dan dukungan bagi masyarakat terdampak." },
      { h: "Kontribusi Saya", t: "Mengembangkan fitur edukasi mitigasi bencana serta fitur testimoni dan cerita korban, termasuk alur pengelolaan konten dan moderasi." }
    ],
    features: [
      { tag: "FR08", title: "Edukasi mitigasi bencana", text: "Admin mengelola konten edukasi berdasarkan kategori evakuasi, kesehatan, dan psikososial. Pengguna mengakses materinya.", src: "assets/projects/orangbaik/gambar-1.jpg", caption: "Halaman edukasi mitigasi" },
      { tag: "FR12", title: "Testimoni dan cerita korban", text: "Pengguna mengirim cerita, admin memoderasi, lalu cerita yang disetujui ditampilkan kepada pengguna lain.", src: "assets/projects/orangbaik/gambar-2.jpg", caption: "Halaman testimoni" }
    ],
    videos: ["https://drive.google.com/file/d/1D7Er67Mi2Cgci-j1NtFgMuflzmqJ44hk/view?usp=drive_link"], screenshots: [],
    artifacts: [{ src: "assets/projects/orangbaik/dusk.jpg", label: "Laravel Dusk", text: "Skrip dan hasil pengujian fungsional otomatis di browser" }],
    status: "", proof: "", // opsional: laporan/dokumen proyek (PDF atau link Drive)
    link: ""
  }
];
