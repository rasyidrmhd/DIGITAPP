const table_keranjang = [
  {
    id_obat_keranjang: 'B2',
    nama_obat_keranjang: 'enervon-C',
    jumlah: 3
  }
];

function kurangJumlahKeranjang(idObat, tabelKeranjang) {
  for (let i = 0; i < tabelKeranjang.length; i++) {
    if (idObat === tabelKeranjang[i]['id_obat_keranjang']) {
      tabelKeranjang[i]['jumlah']--;
    }

  } 
}