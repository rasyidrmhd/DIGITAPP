function pesanObat(idObat, tabelKeranjang, tabelObat) {
  let sudahAdaDiKerajang = false;
  let tempObj = {};
  let indexTerpilih;

  // cari id obat dulu
  for (let i = 0; i < tabelObat.length; i++) {
    if (idObat === tabelObat[i]['id_obat']) {
      indexTerpilih = i;
    }
  }

  // traverse tabel keranjang, kalo uda ada, tambah jumlah aja, kalo belum baru push baru
  for (let i = 0; i < tabelKeranjang.length; i++) {

    if (idObat === tabelKeranjang[i]['id_obat_keranjang']) {
      sudahAdaDiKerajang = true;
    }

    tabelKeranjang[i]['jumlah']++;
  }

  // kalo dikeranjang blm ada barangnya, buat entry baru
  if (!sudahAdaDiKerajang) {
    tempObj = {
      id_obat_keranjang: tabelObat[indexTerpilih]['id_obat'],
      nama_obat_keranjang: tabelObat[indexTerpilih]['nama_obat'],
      jumlah: 1,
    }

    tabelKeranjang.push(tempObj);
  }

  // kurangi stok setelah masuk ke keranjang
  tabelObat[indexTerpilih]['stok']--;

  return tabelKeranjang;
}