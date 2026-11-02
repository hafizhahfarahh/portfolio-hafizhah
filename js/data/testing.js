/* PENGUJIAN. GANTI baris contoh di bawah dengan test case dan hasil aktual dari proyek Anda.
   status "Contoh" = penanda bahwa baris itu hanya format; ubah ke "Lulus" / "Gagal" bila sudah diuji. */
const TESTING = {
  intro: [
    { h: "Test scenario", t: "Menentukan alur atau kondisi yang perlu diuji berdasarkan fungsi sistem." },
    { h: "Test case", t: "Merinci langkah pengujian, data masukan, hasil yang diharapkan, hasil aktual, dan status." }
  ],
  cases: [
    { id: "TC-001", scenario: "Login dengan data valid", expected: "Pengguna berhasil masuk ke sistem.", status: "Contoh" },
    { id: "TC-002", scenario: "Pemesanan tiket dengan data lengkap", expected: "Sistem menyimpan data pemesanan.", status: "Contoh" },
    { id: "TC-003", scenario: "Form diisi tanpa data wajib", expected: "Sistem menampilkan pesan validasi.", status: "Contoh" }
  ],
  note: "Baris di atas adalah contoh format dokumentasi, bukan hasil pengujian aktual."
};
