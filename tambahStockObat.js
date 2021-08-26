const table_obat = [
    {
      id_obat: B1,
      nama_obat: "panadol",
      tipe: "tablet",
      stok: 2,
      harga: 5000,
      // perluResep: false,
    },
    {
      id_obat: B2,
      nama_obat: "lansoprazole",
      tipe: "kapsul",
      stok: 10,
      harga: 3000,
      // perluResep: false,
    },
    {
      id_obat: 3,
      nama_obat: "enervon-C",
      tipe: "tablet",
      stok: 8,
      harga: 10000,
      // perluResep: true,
    },
  ];
  
  const table_admin = [
    {
      username: joko1,
      pass: "hacktiv8",
    },
  ];
  
  const table_keranjang = [];
  
  const table_pesanan = [
    //awalnya kosong
    {
      id_pesanan: 01,
      id_obat: [1, 2], //pakai array aja kali ya? pakai id referensi ke tabel_obat
      nama_obat: ["nama1", "nama2"],
      harga_obat: ["harga1", "harga2"],
      total_harga: 8000, //totalin harga pakai id obat
      nama_pembeli: "Acit",
      nolep: 0819,
      // buktiResepDokter: "gambar.png", //jika ada obat yg perlu resep dokter
    },
  ];

  