const table_keranjang = [
    {
      id_obat_keranjang: 'B2',
      nama_obat_keranjang: 'enervon-C',
      jumlah: 3
    }
  ];
function kurangiPesanan(table_keranjang) {
  let tombolKurangi = true; // Tombol kurangi dipencet
  let indexArray = 1; // Dari DOM Mungkin posisi table keranjang dalam gambar tampilan web
  let output = [];
  if (tombolKurangi) {
    if (table_keranjang.jumlah[indexArray]-1 == 0) {
      for (let pesananFixed of table_keranjang) {
        if (pesananFixed != table_keranjang[indexArray]) {
          output.push(pesananFixed);
        }
      }
    } else {
      table_keranjang.jumlah[indexArray]--;
      return table_keranjang;
    }
  }
  return output;
}