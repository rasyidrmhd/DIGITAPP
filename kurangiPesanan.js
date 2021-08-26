const table_keranjang = [
    {
      id_obat_keranjang: 'B2',
      nama_obat_keranjang: 'enervon-C',
      jumlah: 3
    }
  ];
function kurangiPesanan(table_keranjang) {
  let tombolKurangi = true; // Tombol kurangi dipencet
  for (let itemPembelian of table_keranjang) {
    if (tombolKurangi) {
      itemPembelian.jumlah--;
    }
  }
}