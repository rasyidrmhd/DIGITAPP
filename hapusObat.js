const table_obat = [
  {
    id_obat: 'D1',
    nama_obat: "panadol",
    jenis_obat: "demam",
    tipe: "tablet",
    stok: 2,
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

function hapusObat(idObat, tabel) {
  let indexToDelete;

  for (let i = 0; i < tabel.length; i++) {
    if (tabel[i]['id_obat'] === idObat) {
      indexToDelete = i;
    }
  }

  // delete that index
  if (indexToDelete > -1) {
    tabel.splice(indexToDelete, 1);
  }

  return tabel;
}

console.log(hapusObat('D1', table_obat));