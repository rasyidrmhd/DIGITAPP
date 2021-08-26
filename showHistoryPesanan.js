const table_pesanan = [
  //awalnya kosong
  {
    id_pesanan: 01,
    id_obat: [1, 2], //pakai array aja kali ya? pakai id referensi ke tabel_obat
    nama_obat: ["nama1", "nama2"],
    harga_obat: ["harga1", "harga2"],
    total_harga: 8000, //totalin harga pakai id obat
    nama_pembeli: "Acit",
    alamat: "cengkareng",
    nolep: 0819,
    // buktiResepDokter: "gambar.png", //jika ada obat yg perlu resep dokter
  },
];

const table_history = [];

function showHistoryPesanan(tabelPesanan, tabelHistory) {
  let tempObj = {};

  tempObj = {
    idPesanan: tabelPesanan[0]['id_pesanan'],
    totalHarga: tabelPesanan[0]['total_harga'],
    namaPembeli: tabelPesanan[0]['nama_pembeli'],
    alamat: tabelPesanan[0]['alamat'],
    noTelp: tabelPesanan[0]['nolep'],
  }

  tabelHistory.push(tempObj);
}