/* PENGALAMAN. Angka di poin otomatis ditebalkan.
   "proof" (opsional) = gambar/PDF/link Drive untuk satu item. Poin juga boleh berbentuk { t: "teks", proof: "file/link" }. Kosong = tanpa tombol. */
const INTERNSHIP = {
  title: "PT Kereta Api Indonesia (Persero)",
  role: "Transformation Office Procurement Representative Intern",
  date: "Juli - Agustus 2025", proof: "",
  overview: "Berpartisipasi dalam transformasi digital proses bisnis pengadaan melalui peninjauan dokumentasi, analisis dokumen pengadaan, pemetaan proses bisnis, dan koordinasi dengan berbagai pemangku kepentingan.",
  groups: [
    { title: "Analisis Proses Bisnis", points: [
      "Meninjau SOP E-Catalog dan E-Purchasing untuk mendukung penyesuaian proses bisnis pengadaan.",
      "Menyusun flowchart sebagai representasi alur proses bisnis.",
      "Meninjau dokumen perencanaan pengadaan untuk memahami kebutuhan dan tahapan proses." ] },
    { title: "Analisis Dokumen Pengadaan", points: [
      "Menganalisis Kerangka Acuan Kerja (KAK), Rencana Anggaran Biaya (RAB), serta formulir evaluasi teknis dan keuangan.",
      "Meninjau profil, kualifikasi, pengalaman perusahaan, dan tenaga ahli dari proposal konsultan.",
      "Memeriksa kelengkapan dokumen administrasi proyek." ] },
    { title: "Dokumentasi dan Koordinasi", points: [
      "Memperbarui materi presentasi transformasi digital pengadaan.",
      "Meninjau hasil sosialisasi regulasi untuk mendukung penyusunan materi FAQ.",
      "Mengikuti rapat koordinasi dan pertemuan penawaran konsultan." ] }
  ],
  contributions: [
    "Meninjau 2 SOP dan 2 dokumen perencanaan pengadaan.",
    "Menganalisis 2 paket dokumen pengadaan.",
    "Mendukung evaluasi 11+ proposal konsultan.",
    "Berpartisipasi dalam 15+ rapat dan diskusi."
  ],
  skills: ["Business Process Analysis", "Document Review", "Requirements Understanding", "Process Mapping", "Stakeholder Coordination"]
};
/* Item: { title, sub (peran), where, date, text, points, chips } */
const STUDY_GROUPS = [
  { title: "ERP Laboratory", sub: "Anggota Kelompok Studi", where: "Telkom University", date: "2025", proof: "",
    text: "Mengikuti pembelajaran dan praktik proses bisnis perusahaan menggunakan Odoo melalui empat modul utama.", chips: ["Inventory", "Purchasing", "Manufacturing", "Sales"] },
  { title: "EIM Laboratory", sub: "Anggota Kelompok Studi", where: "Telkom University", date: "2024", proof: "",
    text: "Mempelajari konsep Cloud Computing dan penerapannya dalam mendukung kebutuhan serta operasional aplikasi bisnis." }
];
const ORGANIZATIONS = [
  { title: "Badan Perwakilan Mahasiswa Sistem Informasi (BPM SI)", sub: "Anggota Komisi Internal dan Perhubungan", date: "2024 - 2025", proof: "",
    text: "Mendukung koordinasi internal organisasi dan hubungan dengan pihak eksternal.",
    points: ["Menyusun dan menyebarluaskan 6+ publikasi informasi kegiatan pleno dan agenda organisasi.", "Menyiapkan materi presentasi untuk penyampaian informasi dan dokumentasi pembahasan pleno.", "Mengoordinasikan jadwal, lokasi, dan kebutuhan tempat kegiatan.", "Berkolaborasi dengan anggota organisasi serta pihak eksternal dalam pelaksanaan kegiatan."] },
  { title: "OSIS SMA Negeri 1 Majalaya", sub: "Sekretaris Umum", date: "2021", proof: "",
    text: "Bertanggung jawab mendukung administrasi dan dokumentasi kegiatan organisasi selama satu periode kepengurusan.",
    points: ["Mendukung administrasi 10+ program kerja melalui penyusunan proposal dan laporan kegiatan.", "Menyusun notulensi rapat serta mengelola dokumentasi hasil pembahasan sebagai arsip organisasi."] }
];
const COMMITTEES = [
  { title: "PKKMB Telkom University", sub: "Anggota Divisi Logistik", date: "2024", proof: "",
    points: ["Menjadi PIC koordinasi 11 kebutuhan logistik Divisi PDD.", "Berkoordinasi dengan beberapa vendor untuk penyewaan kamera dan perlengkapan dokumentasi.", "Mengelola distribusi kebutuhan logistik dan konsumsi panitia serta peserta."] },
  { title: "Panitia Pemilihan Umum HMSI (PPUH)", sub: "Sekretaris I", date: "2023 - 2024", proof: "",
    points: ["Mengelola dokumentasi administrasi selama kurang lebih tiga bulan, dari persiapan hingga pelaksanaan pemilihan.", "Menghasilkan 12+ notulensi, 1 proposal, 3 surat, dan 1 laporan pertanggungjawaban."] },
  { title: "Kuliah Umum MK Tata Kelola Manajemen TI", sub: "Anggota Divisi Acara", date: "2023", proof: "",
    points: ["Menyusun rundown dan bertanggung jawab sebagai timekeeper agar acara berjalan sesuai jadwal."] }
];
