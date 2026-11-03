/* PENGUJIAN. "proof" (opsional) = file PDF/gambar di assets/bukti/ atau link Google Drive/Docs. Kosong = tanpa tombol.
   GANTI baris contoh test case dengan test case dan hasil aktual Anda (status "Contoh" = hanya format). */
const TESTING = {
  intro: [
    { h: "Test scenario", t: "Menentukan alur atau kondisi yang perlu diuji berdasarkan fungsi sistem." },
    { h: "Test case", t: "Merinci langkah pengujian, data masukan, hasil yang diharapkan, hasil aktual, dan status." }
  ],
  docs: [
    { title: "Black-box Testing (Museum MK Lesmana)", text: "91 skenario pengujian fungsional dengan tingkat keberhasilan 100%.", proof: "" },
    { title: "User Acceptance Testing (Museum MK Lesmana)", text: "31 responden: skor rata-rata 4,68/5 dari pengunjung dan 4,83/5 dari pengelola.", proof: "" },
    { title: "System Usability Scale (Museum MK Lesmana)", text: "Skor 81,08 dari pengunjung dan 80 dari pengelola, kategori Acceptable (Grade A).", proof: "" },
    { title: "Laravel Dusk (OrangBaik)", text: "Pengujian fungsional otomatis melalui browser.", proof: "https://drive.google.com/drive/folders/184MDjvh2gZ40ZEO1T1RISjvUKljPfA19?usp=drive_link" }
  ],
  cases: [
  { sid: "VT-001", tc: "TC-030", scenario: "Akses Verifikasi Tiket", type: "Positive", pre: "Pengelola sudah login",
    steps: ["Klik menu \"Verifikasi Tiket\" pada sidebar"],
    expected: "Sistem menampilkan halaman verifikasi tiket dengan scanner QR", status: "Berhasil",
    note: "Kamera tidak terbuka", fix: "Sudah dilakukan perbaikan" },
  { sid: "VT-002", tc: "TC-031", scenario: "Scan QR Code Tiket Valid", type: "Positive", pre: "Halaman verifikasi tiket terbuka",
    steps: ["Arahkan kamera ke QR Code tiket yang valid"],
    expected: "Sistem mendeteksi QR Code dan menampilkan detail tiket", status: "Berhasil" },
  { sid: "VT-003", tc: "TC-032", scenario: "Tandai Tiket Terpakai", type: "Positive", pre: "Detail tiket terbuka dan tiket belum discan",
    steps: ["Klik tombol \"Tandai Sudah Digunakan\"", "Klik \"OK\" pada dialog konfirmasi"],
    expected: "Status tiket berubah menjadi \"Sudah Digunakan\"", status: "Berhasil" },
  { sid: "VT-005", tc: "TC-034", scenario: "Scan QR Code Tiket Belum Lunas", type: "Negative", pre: "Halaman verifikasi tiket terbuka",
    steps: ["Arahkan kamera ke QR Code tiket yang belum lunas"],
    expected: "Sistem menampilkan pesan error \"Tiket belum lunas, tidak dapat diverifikasi\"", status: "Berhasil" },
  { sid: "VT-006", tc: "TC-035", scenario: "Scan QR Code Tidak Valid", type: "Negative", pre: "Halaman verifikasi tiket terbuka",
    steps: ["Arahkan kamera ke QR Code yang tidak terdaftar"],
    expected: "Sistem menampilkan pesan error \"Token tiket tidak valid\"", status: "Berhasil" },
  { sid: "RT-002", tc: "TC-037", scenario: "Filter Riwayat Tiket", type: "Positive", pre: "Halaman riwayat tiket terbuka",
    steps: ["Pilih filter \"Sudah Discan\" pada dropdown status"],
    expected: "Sistem menampilkan hanya tiket yang sudah discan", status: "Berhasil" },
  { sid: "RT-003", tc: "TC-038", scenario: "Search Riwayat Tiket", type: "Positive", pre: "Halaman riwayat tiket terbuka",
    steps: ["Masukkan kata kunci pada kolom search", "Klik tombol \"Cari\""],
    expected: "Sistem menampilkan data sesuai kata kunci", status: "Berhasil" }
],
note: "Cuplikan sebagian skenario dari dokumen Black-box Testing.",
  note: "Baris pada tabel adalah contoh format dokumentasi, bukan hasil pengujian aktual."
};
