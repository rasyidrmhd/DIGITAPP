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

function hapusDariKeranjang(idObat, tabelKeranjang) {
  let indexTerpilih;

  for (let i = 0; i < tabelKeranjang.length; i++) {
    if (idObat === tabelKeranjang[i]['id_obat_keranjang']) {
      indexTerpilih = i;
    }
  } 

  // hapus id tersebut
  if (indexTerpilih > -1) {
    tabelKeranjang.splice(indexTerpilih, 1);
  }

  return tabelKeranjang;
}

console.log(hapusDariKeranjang('B2', table_keranjang));