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

function tambahObatBaru(namaObat, tipeObat, jenisObat, hargaObat, stokObat, tabel) {
  // untuk auto increment id
  let batukCount = 1, demamCount = 1, fluCount = 1, suplemenCount = 1;
  let idObat = '';
  
  //traverse through table_obat dulu, cek jumlah per jenis
  for (let i = 0; i < tabel.length; i++) {
    if (tabel[i]['jenis_obat'] === 'batuk') {
      batukCount++;
    } else if (tabel[i]['jenis_obat'] === 'demam') {
      demamCount++
    } else if (tabel[i]['jenis_obat'] === 'flu') {
      fluCount++;
    } else if (tabel[i]['jenis_obat'] === 'suplemen')
      suplemenCount++;
  }

  if (jenisObat === 'batuk') {
    idObat = `${jenisObat[0].toUpperCase()}${batukCount}`;
  } else if (jenisObat === 'demam') {
    idObat = `${jenisObat[0].toUpperCase()}${demamCount}`;
  } else if (jenisObat === 'flu') {
    idObat = `${jenisObat[0].toUpperCase()}${fluCount}`;
  } else if (jenisObat === 'suplemen') {
    idObat = `${jenisObat[0].toUpperCase()}${suplemenCount}`;
  }

  let tempObj = {
    id_obat: idObat,
    nama_obat: namaObat,
    jenis_obat: jenisObat,
    tipe: tipeObat,
    stok: stokObat,
    harga: hargaObat,
  }

  tabel.push(tempObj);

  return tabel;
    
}

console.log(tambahObatBaru('panadol', 'tablet', 'demam', 5000, 10, table_obat));
// console.log(tambahObatBaru('komix', 'sirup', 'suplemen', 5000, 10, table_obat));