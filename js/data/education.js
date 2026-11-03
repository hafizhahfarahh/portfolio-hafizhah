/* PENDIDIKAN. "proof" (opsional) = gambar/PDF/link Drive. Kosongkan ("") jika tidak ada; tampilan tetap rapi.
   Contoh proof: "assets/bukti/transkrip.pdf"  atau  "https://drive.google.com/file/d/XXXX/view"  atau beberapa: ["a.jpg", "b.pdf"] */
const EDUCATION = {
  school: "Universitas Telkom", program: "S1 Sistem Informasi", date: "2022 - 2026", gpa: "3,68 / 4,00",
  text: "Mempelajari analisis dan perancangan sistem informasi, pemodelan proses bisnis, pengembangan aplikasi web, basis data, serta pengujian dan implementasi sistem.",
  proof: "", // contoh: transkrip nilai atau ijazah
  /* Mata kuliah: bukti hasil belajar (laporan, tugas, nilai) akan membuat chip bisa diklik */
  courses: [
    { name: "Analisis dan Perancangan Sistem Informasi", proof: "" },
    { name: "Pemodelan Proses Bisnis", proof: "" },
    { name: "Pengujian dan Implementasi Sistem", proof: "" },
    { name: "Pengembangan Aplikasi Website", proof: "" },
    { name: "Basis Data", proof: "" },
    { name: "Manajemen Proyek Sistem Informasi", proof: "" },
    { name: "Proyek Perangkat Lunak", proof: "" }
  ]
};
/* Sertifikasi dan pendidikan lainnya (hapus baris yang tidak diperlukan) */
const CREDENTIALS = [
  { year: "2025 - 2028", title: "System Analyst", text: "LSP Informatika, sertifikasi BNSP.", proof: "assets/bukti/sertifikat-system-analyst.pdf" },
  { year: "Okt 2025", title: "Pelatihan System Analyst", text: "KSS Consulting, 29 - 31 Oktober 2025.", proof: "assets/bukti/sertifikat-pelatihan.pdf" },
  { year: "2019 - 2022", title: "SMA Negeri 1 Majalaya", text: "Jurusan Matematika dan Ilmu Pengetahuan Alam.", proof: "" }
];
