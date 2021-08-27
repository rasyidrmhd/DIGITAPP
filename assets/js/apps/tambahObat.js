if (!localStorage.getItem("username")) {
  window.location.href = "login.html";
}

function validasi() {
  let stok = document.getElementById("stok");
  let harga = document.getElementById("harga");

  if (stok.value < 1) {
    alert("Stok tidak boleh lebih kecil dari 1");
    stok.value = 1;
  }

  if (harga.value < 1000) {
    alert("Harga tidak boleh lebih kecil dari 1000");
    harga.value = 1000;
  }
}

document.getElementById("displayName").textContent = localStorage.getItem("username") + " (Admin)";
document.getElementById("tambahObat").addEventListener("submit", function (e) {
  e.preventDefault();
  let nama = document.getElementById("nama").value;
  let jenis = document.getElementById("jenis").value;
  let tipe = document.getElementById("tipe").value;
  let stok = document.getElementById("stok").value;
  let harga = document.getElementById("harga").value;

  let tabelObat = JSON.parse(localStorage.getItem("tabelObat"));
  tambahObatBaru(nama, tipe, jenis, harga, stok, tabelObat);
});

function tambahObatBaru(namaObat, tipeObat, jenisObat, hargaObat, stokObat, tabel) {
  // untuk auto increment id
  let batukCount = 1;
  let demamCount = 1;
  let fluCount = 1;
  let suplemenCount = 1;
  let idObat = "";

  //traverse through table_obat dulu, cek jumlah per jenis
  for (let i = 0; i < tabel.length; i++) {
    if (tabel[i]["jenis_obat"] === "batuk") {
      batukCount++;
    } else if (tabel[i]["jenis_obat"] === "demam") {
      demamCount++;
    } else if (tabel[i]["jenis_obat"] === "flu") {
      fluCount++;
    } else if (tabel[i]["jenis_obat"] === "suplemen") suplemenCount++;
  }

  if (jenisObat === "batuk") {
    idObat = `${jenisObat[0].toUpperCase()}${batukCount}`;
  } else if (jenisObat === "demam") {
    idObat = `${jenisObat[0].toUpperCase()}${demamCount}`;
  } else if (jenisObat === "flu") {
    idObat = `${jenisObat[0].toUpperCase()}${fluCount}`;
  } else if (jenisObat === "suplemen") {
    idObat = `${jenisObat[0].toUpperCase()}${suplemenCount}`;
  }

  let tempObj = {
    id_obat: idObat,
    nama_obat: namaObat,
    jenis_obat: jenisObat,
    tipe: tipeObat,
    stok: Number(stokObat),
    harga: Number(hargaObat),
    src: "default.jpg",
  };

  tabel.push(tempObj);
  localStorage.setItem("tabelObat", JSON.stringify(tabel));
  window.location.href = "stokObat.html";
}

function logoutUser() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}
