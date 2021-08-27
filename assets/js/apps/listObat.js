let cardObat = document.getElementById("cardObat");
let output = "";
let tabelObat = JSON.parse(localStorage.getItem("tabelObat"));

let formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "IDR",
});

console.log(formatter.format(300000));
getStok();

function getStok() {
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
