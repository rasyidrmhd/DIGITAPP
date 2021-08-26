const table_obat = [
  {
    id_obat: 'D1',
    nama_obat: "panadol",
    jenis_obat: "demam",
    tipe: "tablet",
    stok: 5,
    harga: 5000,
    // perluResep: false,
  },
  {
    id_obat: 'B1',
    nama_obat: "lansoprazole",
    jenis_obat: 'batuk',
    tipe: "kapsul",
    stok: 10,
    harga: 3000,
    // perluResep: false,
  },
  {
    id_obat: 'B2',
    nama_obat: "enervon-C",
    jenis_obat: 'batuk',
    tipe: "tablet",
    stok: 8,
    harga: 10000,
    // perluResep: true,
  },
];

function checkStock(idObat, tabelObat) {
  /**cek untuk toggle display tombol '+'
   * jika stok obat uda 0, return flag sudahKosong = true
   */
  let sudahKosong = false;
  let indexTerpilih;

  // loop tabel obat
  for (let i = 0; i < tabelObat.length; i++) {
    if (idObat === tabelObat[i]['id_obat']) {
      indexTerpilih = i;
    }
  }

  if (tabelObat[indexTerpilih]['stok'] === 0) {
    sudahKosong = true;
  }

  return sudahKosong;
}

console.log(checkStock('B1', table_obat));