/**
 * Backend Team
 * // table obat untuk Admin
 * id_obat harus menggabungkan jenis(batuk(B), demam(D), flu(F), suplemen(S)) + jumlah obat per jenis
 * (test case) jika jenis batuk sudah ada 2, berati saat admin input obat baru harus B3 (karena obat batuk ke 3)
 *
 * list function:
 * 1. tambahObatBaru
 * 2. tambahStockObat
 * 3. hapusObat
 *
 *
 * // table admin
 * keluar masuk halaman untuk CRUD obat
 * list function:
 * 1. login
 * 2. logout
 * 3. hisoryPesanan
 *
 *
 * // table pesanan
 * pengguna selain Admin bisa menampung obat yang dipilih, setelah selesai baru invoice muncul
 * 1. pesanObat // tambah ke penampung atau keranjang, ada input stock
 * 2. kurangiPesanan // untuk menghapus di keranjang
 * 3. checkout // pemaksaan user, gak boleh beli lebih dari stock
 * 4. tampilInvoice
 */

/**
 * Frontend Team
 * 1. Validasi untuk bertanya, pilih admin atau pembeli
 * 1a. Jika admin, ke halaman login
 * 1b. Jika pembeli, langsung ke halaman utama
 * 2a. Admin berhasil login, lanjut ke halaman admin
 * 3. Jika pengguna sudah selesai memilih obat, bisa checkout ke halaman keranjang
 * 4. Halaman keranjang, manipulasi pesanannya sendiri
 * 5. Jika selesai, langsung ke halaman invoice 9
 * 6. Halaman invoice, terdapat tombol ke halaman utama
 *
 *
 * halaman admin
 * navbar yang direct ke stock obat, history, dan nambah stock 3
 * stock obat mirip sama halaman utama,
 *
 * 1. validasi
 * 2. login admin
 * 3. halaman utama pengguna
 * 4. keranjang
 * 5. invoice
 *
 * 6. stock obat Admin
 * 7. tambah obat
 * 8. history pesanan
 *
 *
 *
 */

const table_obat = [
  {
    id_obat: B1,
    nama_obat: "panadol",
    tipe: "tablet",
    stok: 2,
    harga: 5000,
    // perluResep: false,
  },
  {
    id_obat: B2,
    nama_obat: "lansoprazole",
    tipe: "kapsul",
    stok: 10,
    harga: 3000,
    // perluResep: false,
  },
  {
    id_obat: 3,
    nama_obat: "enervon-C",
    tipe: "tablet",
    stok: 8,
    harga: 10000,
    // perluResep: true,
  },
];

const table_admin = [
  {
    username: joko1,
    pass: "hacktiv8",
  },
];

const table_keranjang = [];

const table_pesanan = [
  //awalnya kosong
  {
    id_pesanan: 01,
    id_obat: [1, 2], //pakai array aja kali ya? pakai id referensi ke tabel_obat
    nama_obat: ["nama1", "nama2"],
    harga_obat: ["harga1", "harga2"],
    total_harga: 8000, //totalin harga pakai id obat
    nama_pembeli: "Acit",
    nolep: 0819,
    // buktiResepDokter: "gambar.png", //jika ada obat yg perlu resep dokter
  },
];
