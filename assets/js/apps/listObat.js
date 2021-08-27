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

function pesanObat(idObat, tabelKeranjang, tabelObat) {
  alert(idObat);
  //   let sudahAdaDiKerajang = false;
  //   let tempObj = {};
  //   let indexTerpilih;

  //   // cari id obat dulu
  //   for (let i = 0; i < tabelObat.length; i++) {
  //     if (idObat === tabelObat[i]["id_obat"]) {
  //       indexTerpilih = i;
  //     }
  //   }

  //   // traverse tabel keranjang, kalo uda ada, tambah jumlah aja, kalo belum baru push baru
  //   for (let i = 0; i < tabelKeranjang.length; i++) {
  //     if (idObat === tabelKeranjang[i]["id_obat_keranjang"]) {
  //       sudahAdaDiKerajang = true;
  //     }

  //     tabelKeranjang[i]["jumlah"]++;
  //   }

  //   // kalo dikeranjang blm ada barangnya, buat entry baru
  //   if (!sudahAdaDiKerajang) {
  //     tempObj = {
  //       id_obat_keranjang: tabelObat[indexTerpilih]["id_obat"],
  //       nama_obat_keranjang: tabelObat[indexTerpilih]["nama_obat"],
  //       jumlah: 1,
  //     };

  //     tabelKeranjang.push(tempObj);
  //   }

  //   // kurangi stok setelah masuk ke keranjang
  //   tabelObat[indexTerpilih]["stok"]--;

  //   return tabelKeranjang;
}

document.getElementById("formKeranjang").addEventListener("submit", function () {
  alert("Checkout");
});
