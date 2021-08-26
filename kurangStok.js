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

function kurangStok(idObat, tabelObat) {
  // traverse through tabelObat

  for (let i = 0; i < tabelObat.length; i++) {
    if (idObat === tabelObat[i]['id_obat']) {
      tabelObat[i]['stok']--;
    }
    
  }

  return tabelObat;
}

console.log(kurangStok('B2', table_obat));

