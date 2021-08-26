const table_obat = [
  {
    id_obat: 'B1',
    nama_obat: "Dextromethorphan HBr",
    tipe: "tablet",
    stok: 2,
    harga: 5000,
    // perluResep: false,
  },
  {
    id_obat: 'D1',
    nama_obat: "Paracetamol",
    tipe: "kapsul",
    stok: 10,
    harga: 3000,
    // perluResep: false,
  },
  {
    id_obat: 'S1',
    nama_obat: "Enervon-C",
    tipe: "tablet",
    stok: 8,
    harga: 10000,
    // perluResep: true,
  },
];

const table_keranjang = [
    {
      id_obat_keranjang: 'B2',
      nama_obat_keranjang: 'enervon-C',
      jumlah: 3
    }
  ];

function checkout(namaPembeli, nolep, tableKeranjang, tableObat) {
  let output = [];
  let totalHarga = 0;
  output.push(namaPembeli);
  output.push(nolep);
  let temp = [];
  for (let pesananFixed of tableKeranjang) {
    temp.push(pesananFixed.nama_obat_keranjang);
    for (let dataObat of tableObat) {
      if (pesananFixed.id_obat_keranjang == dataObat.id_obat) {
        totalHarga += dataObat.harga*pesananFixed.jumlah;
      }
    }
  }
  output.push(temp);
  output.push(totalHarga);
  return output;
}