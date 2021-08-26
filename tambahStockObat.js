function tambahStockObat(tabel_obat, nama_obat, tipe) {
    for (let value of tabel_obat) {
      if (nama_obat == value.nama_obat && tipe == value.tipe) {
        value.stok++;    
      }
    }
    return tabel_obat;
}