const table_obat = [
  {
    id_obat: "D1",
    nama_obat: "panadol",
    tipe: "tablet",
    jenis_obat: "demam",
    stok: 4,
    harga: 5000,
    src: "panadol.jfif",
  },
  {
    id_obat: "D2",
    nama_obat: "sanmol",
    tipe: "cair",
    jenis_obat: "demam",
    stok: 8,
    harga: 7000,
    src: "sanmol.jfif",
  },
  {
    id_obat: "D3",
    nama_obat: "paracetamol",
    tipe: "tablet",
    jenis_obat: "demam",
    stok: 10,
    harga: 10000,
    src: "paracetamol.jfif",
  },
  {
    id_obat: "F1",
    nama_obat: "mixagrip",
    tipe: "tablet",
    jenis_obat: "flu",
    stok: 11,
    harga: 6000,
    src: "mixagrip.jfif",
  },
  {
    id_obat: "F2",
    nama_obat: "decolgen",
    tipe: "tablet",
    jenis_obat: "flu",
    stok: 9,
    harga: 6000,
    src: "decolgen.jfif",
  },
  {
    id_obat: "F3",
    nama_obat: "triaminic",
    tipe: "cair",
    jenis_obat: "flu",
    stok: 12,
    harga: 8000,
    src: "triaminic.jfif",
  },
  {
    id_obat: "B1",
    nama_obat: "woods",
    tipe: "cair",
    jenis_obat: "batuk",
    stok: 10,
    harga: 7000,
    src: "woods.jfif",
  },
  {
    id_obat: "B2",
    nama_obat: "OBH combi",
    tipe: "cair",
    jenis_obat: "batuk",
    stok: 15,
    harga: 9000,
    src: "obhCombi.jfif",
  },

  {
    id_obat: "B3",
    nama_obat: "konidin",
    tipe: "tablet",
    jenis_obat: "batuk",
    stok: 14,
    harga: 4000,
    src: "konidin.jfif",
  },
  {
    id_obat: "S1",
    nama_obat: "vitalong c",
    tipe: "kapsul",
    jenis_obat: "suplemen",
    stok: 10,
    harga: 12000,
    src: "vitalongC.jfif",
  },
  {
    id_obat: "S2",
    nama_obat: "imboost",
    tipe: "tablet",
    jenis_obat: "suplemen",
    stok: 11,
    harga: 15000,
    src: "imboost.jfif",
  },
  {
    id_obat: "S3",
    nama_obat: "stimuno",
    tipe: "kapsul",
    jenis_obat: "suplemen",
    stok: 12,
    harga: 2000,
    src: "stimuno.jfif",
  },
];

let tbody = document.getElementById("tbody");
let cardObat = document.getElementById("cardObat");
let output = "";
let tabelObat = [];

let formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "IDR",
});

getStok();

function getStok() {
  if (localStorage.getItem("tabelObat")) {
    tabelObat = JSON.parse(localStorage.getItem("tabelObat"));
  } else {
    for (const obat of table_obat) {
      tabelObat.push(obat);
    }

    localStorage.setItem("tabelObat", JSON.stringify(tabelObat));
  }

  for (const obat of tabelObat) {
    output += `
    <div class="card m-3" style="width: 18rem;">
        <img class="card-img-top" src="../assets/img/obat/${obat.src}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title"><strong>${obat.nama_obat}</strong></h5>
            <span class="card-text"><h6>Jenis Obat: <span class="badge badge-info">${obat.jenis_obat}</span></h6></span>
            <span class="card-text"><h6>Tipe Obat: <span class="badge badge-warning">${obat.tipe}</span></h6></span>
            <span class="card-text"><h5>Harga: <span class="badge badge-success">${formatter.format(obat.harga)}</span></h5></span>
            <a href="#" onclick="pesanObat('${obat.id_obat}')" class="btn btn-primary btn-block"><i class="fas fa-shopping-cart"></i> Masukkan ke keranjang</a>
        </div>
    </div>
    `;
  }

  cardObat.innerHTML = output;
}

// const table_keranjang = [];

let tabelKeranjang = [];
let outputKeranjang = " ";
getKeranjang();

function pesanObat(idObat) {
  // alert(idObat);
  let sudahAdaDiKerajang = false;
  let tempObj = {};
  let indexTerpilih;

  // cari id obat dulu
  // get data obat dari local storage
  for (let i = 0; i < tabelObat.length; i++) {
    if (idObat === tabelObat[i]["id_obat"]) {
      indexTerpilih = i;
    }
  }

  // traverse tabel keranjang, kalo uda ada, tambah jumlah aja, kalo belum baru push baru
  for (let i = 0; i < tabelKeranjang.length; i++) {
    if (idObat === tabelKeranjang[i]["id_obat_keranjang"]) {
      sudahAdaDiKerajang = true;
      tabelKeranjang[i]["jumlah"]++;
    }
  }

  // kalo dikeranjang blm ada barangnya, buat entry baru
  if (!sudahAdaDiKerajang) {
    tempObj = {
      id_obat_keranjang: tabelObat[indexTerpilih]["id_obat"],
      nama_obat_keranjang: tabelObat[indexTerpilih]["nama_obat"],
      jumlah: 1,
    };

    tabelKeranjang.push(tempObj);
  }

  // kurangi stok setelah masuk ke keranjang
  tabelObat[indexTerpilih]["stok"]--;

  localStorage.setItem("tabelKeranjang", JSON.stringify(tabelKeranjang));
  localStorage.setItem("tabelObat", JSON.stringify(tabelObat));
  getKeranjang();
}

function getKeranjang() {
  outputKeranjang = "";
  if (localStorage.getItem("tabelKeranjang")) {
    tabelKeranjang = JSON.parse(localStorage.getItem("tabelKeranjang"));
  }

  let no = 1;
  let totalHarga = 0;
  for (const item of tabelKeranjang) {
    for (const obat of tabelObat) {
      if (item.id_obat_keranjang === obat.id_obat) {
        // console.log(obat);
        outputKeranjang += `
          <tr class="text-center">
          <td class="align-middle">${no}</td>
          <td class="align-middle text-left">${obat.nama_obat}</td>
          <td class="align-middle">${obat.jenis_obat}</td>
          <td class="align-middle">${obat.tipe}</td>
          <td class="align-middle">
            <div class="btn-group" role="group">
              <button type="button" onclick="kurangJumlahKeranjang('${obat.id_obat}')" class="btn btn-success btn-sm"><i class="fas fa-minus"></i></button>
              <button type="button" class="btn btn-light btn-sm" disabled>${item.jumlah}</button>
              <button type="button" id="buttonTambahKeranjang" onclick="tambahJumlahKeranjang('${obat.id_obat}')" class="btn btn-success btn-sm"><i class="fas fa-plus"></i></button></td>
            </div>
          <td class="align-middle">${formatter.format(obat.harga)}</td>
          <td class="align-middle">
            <button onclick="hapusDariKeranjang('${obat.id_obat}')" class="btn btn-danger btn-circle">
              <i class="fa fa-fw fa-trash"></i>
            </button>
          </td>
        </tr>`;
        totalHarga += obat.harga * item.jumlah;
      }
    }

    no++;
  }
  document.getElementById("totalKeranjang").innerHTML = formatter.format(totalHarga);
  document.getElementById("logoKeranjang").innerHTML = tabelKeranjang.length + " <i class='fas fa-shopping-cart'></i>";
  tbody.innerHTML = outputKeranjang;
}

function kurangJumlahKeranjang(idObat) {
  let indexTerpilih;

  for (let i = 0; i < tabelKeranjang.length; i++) {
    if (idObat === tabelKeranjang[i]["id_obat_keranjang"]) {
      indexTerpilih = i;
      if (tabelKeranjang[i]["jumlah"] === 1) {
        tabelObat[indexTerpilih]["stok"]++;
        hapusDariKeranjang(idObat);
        break;
      }

      tabelKeranjang[i]["jumlah"]--;
      tabelObat[indexTerpilih]["stok"]++;
    }
  }

  localStorage.setItem("tabelKeranjang", JSON.stringify(tabelKeranjang));
  localStorage.setItem("tabelObat", JSON.stringify(tabelObat));
  getKeranjang();
  checkStock(idObat);
}

function tambahJumlahKeranjang(idObat) {
  let indexTerpilih;

  for (let i = 0; i < tabelKeranjang.length; i++) {
    if (idObat === tabelKeranjang[i]["id_obat_keranjang"]) {
      tabelKeranjang[i]["jumlah"]++;
      indexTerpilih = i;

      if (tabelObat[indexTerpilih]["stok"] < 1) {
        alert("Stok sudah melewati batas");
        tabelKeranjang[i]["jumlah"]--;
      } else {
        tabelObat[indexTerpilih]["stok"]--;
      }
    }
  }

  localStorage.setItem("tabelKeranjang", JSON.stringify(tabelKeranjang));
  localStorage.setItem("tabelObat", JSON.stringify(tabelObat));
  getKeranjang();
}

function hapusDariKeranjang(idObat) {
  let indexTerpilih;

  for (let i = 0; i < tabelKeranjang.length; i++) {
    if (idObat === tabelKeranjang[i]["id_obat_keranjang"]) {
      indexTerpilih = i;
    }
  }

  // hapus id tersebut
  if (indexTerpilih > -1) {
    tabelKeranjang.splice(indexTerpilih, 1);
  }

  localStorage.setItem("tabelKeranjang", JSON.stringify(tabelKeranjang));
  getKeranjang();
}

function checkStock(idObat) {
  /**cek untuk toggle display tombol '+'
   * jika stok obat uda 0, return flag sudahKosong = true
   */
  let sudahKosong = false;
  let indexTerpilih;

  // loop tabel obat
  for (let i = 0; i < tabelObat.length; i++) {
    if (idObat === tabelObat[i]["id_obat"]) {
      indexTerpilih = i;
    }
  }

  if (tabelObat[indexTerpilih]["stok"] === 0) {
    sudahKosong = true;
  }

  return sudahKosong;
}

document.getElementById("formKeranjang").addEventListener("submit", function (e) {
  e.preventDefault();
  let nama = document.getElementById("namaCheckout").value;
  let alamat = document.getElementById("alamatCheckout").value;
  let nolep = document.getElementById("nolepCheckout").value;
  let tabelCheckout = JSON.parse(localStorage.getItem("tabelKeranjang"));

  let tabelObat = JSON.parse(localStorage.getItem("tabelObat"));
  let tabelHistory = JSON.parse(localStorage.getItem("tabelHistory"));
  let tempObj = {};
  let idPesanan = 0;
  let pesananCount = 1;
  let idObat = [];
  let namaObat = [];
  let hargaObat = [];
  let jumlahObat = [];

  // untuk menentukan id pesanan
  if (!tabelHistory) {
    idPesanan = "P1";
    tabelHistory = [];
  } else {
    for (let i = 0; i < tabelHistory.length; i++) {
      pesananCount++;

      if (i === tabelHistory.length - 1) {
        break;
      }
    }

    idPesanan = "P" + pesananCount;
    pesananCount = 1;
  }

  // looping tabel keranjang utk masukin ke array id_obat, nama_obat
  for (let i = 0; i < tabelCheckout.length; i++) {
    // masukin ke array id obat
    idObat.push(tabelCheckout[i]["id_obat_keranjang"]);
    namaObat.push(tabelCheckout[i]["nama_obat_keranjang"]);
    jumlahObat.push(tabelCheckout[i]["jumlah"]);
    for (let j = 0; j < tabelObat.length; j++) {
      if (tabelCheckout[i]["id_obat_keranjang"] === tabelObat[j]["id_obat"]) {
        hargaObat.push(tabelObat[j]["harga"]);
      }
    }
  }

  let totalHarga = 0;
  for (let i = 0; i < hargaObat.length; i++) {
    totalHarga += hargaObat[i];
  }

  tempObj = {
    id_pesanan: idPesanan,
    id_obat: idObat,
    nama_obat: namaObat,
    harga_obat: hargaObat,
    jumlah_obat: jumlahObat,
    total_harga: totalHarga,
    nama_pembeli: nama,
    alamat: alamat,
    nolep: nolep,
  };

  tabelHistory.push(tempObj);
  localStorage.removeItem("tabelKeranjang");
  localStorage.setItem("tabelHistory", JSON.stringify(tabelHistory));
  window.location.href = "invoice.html";
});

// function checkOut(namaPembeli, alamatPembeli, noTelp, tabelKeranjang) {
//   let tabelObat = JSON.parse(localStorage.getItem("tabelObat"));
//   let tabelHistory = JSON.parse(localStorage.getItem("tabelHistory"));
//   let tempObj = {};
//   let idPesanan = 0;
//   let pesananCount = 1;
//   // let idObat = [];
//   let namaObat = [];
//   let hargaObat = [];
//   let jumlahObat = [];

//   // untuk menentukan id pesanan
//   if (tabelHistory.length === 0) {
//     idPesanan = "P1";
//   } else {
//     for (let i = 0; i < tabelHistory.length; i++) {
//       pesananCount++;

//       if (i === tabelHistory.length - 1) {
//         break;
//       }
//     }

//     idPesanan = "P" + pesananCount;
//     pesananCount = 1;
//   }

//   // looping tabel keranjang utk masukin ke array id_obat, nama_obat
//   for (let i = 0; i < tabelKeranjang.length; i++) {
//     // masukin ke array id obat
//     // idObat.push(tabelKeranjang[i]["id_obat_keranjang"]);
//     namaObat.push(tabelKeranjang[i]["nama_obat_keranjang"]);
//     jumlahObat.push(tabelKeranjang[i]["jumlah"]);
//     for (let j = 0; j < tabelObat.length; j++) {
//       if (tabelKeranjang[i]["id_obat_keranjang"] === tabelObat[j]["id_obat"]) {
//         hargaObat.push(tabelObat[j]["harga"]);
//       }
//     }
//   }

//   let totalHarga = 0;
//   for (let i = 0; i < hargaObat.length; i++) {
//     totalHarga += hargaObat[i];
//   }

//   tempObj = {
//     id_pesanan: idPesanan,
//     nama_obat: namaObat,
//     harga_obat: hargaObat,
//     jumlah_obat: jumlahObat,
//     total_harga: totalHarga,
//     nama_pembeli: namaPembeli,
//     alamat: alamatPembeli,
//     nolep: noTelp,
//   };

//   tabelHistory.push(tempObj);
//   localStorage.removeItem("tabelKeranjang");
//   localStorage.setItem("tabelHistory", JSON.stringify(tabelHistory));
//   window.location.href = "invoice.html";
//   // window.location.href = "./index.html";
//   // return tabelPesanan;
// }
