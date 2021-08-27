const table_keranjang = [
  {
    id_obat_keranjang: 'B2',
    nama_obat_keranjang: 'enervon-C',
    jumlah: 3
  },
  {
    id_obat_keranjang: 'B3',
    nama_obat_keranjang: 'enervon-C',
    jumlah: 3
  }
];

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
  {
    id_obat: 'B3',
    nama_obat: "enervon-C",
    jenis_obat: 'batuk',
    tipe: "tablet",
    stok: 8,
    harga: 10000,
    // perluResep: true,
  },
];

const table_pesanan = [
  {
    id_pesanan: 1,
    id_obat: [ 'B2', 'B3' ],
    nama_obat: [ 'enervon-C', 'enervon-C' ],
    harga_obat: [ 10000, 10000 ],
    total_harga: 20000,
    nama_pembeli: 'darwin',
    alamat: 'bsd',
    nolep: 17
  }
];

function checkOut(namaPembeli, alamatPembeli, noTelp, tabelKeranjang, tabelPesanan, tabelObat) {
  let tempObj = {};
  let idPesanan = 0;
  let pesananCount = 1;
  let idObat = [], namaObat = [], hargaObat = [];

  // untuk menentukan id pesanan
  if (tabelPesanan.length === 0) {
    idPesanan = 1;
  } else {
    for (let i = 0; i < tabelPesanan.length; i++) {
      pesananCount++;

      if (i === tabelPesanan.length - 1) {
        break;
      }

    }

    idPesanan = pesananCount;
    pesananCount = 1;
  }

  // looping tabel keranjang utk masukin ke array id_obat, nama_obat
  for (let i = 0; i < tabelKeranjang.length; i++) {
    // masukin ke array id obat

    idObat.push(tabelKeranjang[i]['id_obat_keranjang']);
    namaObat.push(tabelKeranjang[i]['nama_obat_keranjang']);
    for (let j = 0; j < tabelObat.length; j++) {
      if (tabelKeranjang[i]['id_obat_keranjang'] === tabelObat[j]['id_obat']) {
        hargaObat.push(tabelObat[j]['harga']);
      }
      
    }
  }

  let totalHarga = 0
  for (let i = 0; i < hargaObat.length; i++) {
    totalHarga += hargaObat[i];
  }

  tempObj = {
    id_pesanan: idPesanan,
    id_obat: idObat,
    nama_obat: namaObat,
    harga_obat: hargaObat,
    total_harga: totalHarga,
    nama_pembeli: namaPembeli,
    alamat: alamatPembeli,
    nolep: noTelp,
  }

  tabelPesanan.push(tempObj);

  return tabelPesanan;
}

console.log(checkOut('darwin', 'bsd', 021, table_keranjang, table_pesanan, table_obat));