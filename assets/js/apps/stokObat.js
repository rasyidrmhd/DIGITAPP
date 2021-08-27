if (!localStorage.getItem("username")) {
  window.location.href = "login.html";
}

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

// localStorage.setItem("tabelObat", JSON.stringify(table_obat));

document.getElementById("displayName").textContent = localStorage.getItem("username") + " (Admin)";
let tbody = document.getElementById("tbody");
let batuk = 0;
let demam = 0;
let flu = 0;
let suplemen = 0;
let output = "";
let tabelObat = [];
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

  let no = 1;
  for (const obat of tabelObat) {
    output += `<tr class="text-center">
        <td class="align-middle">${no}</td>
        <td class="align-middle text-left">${obat.nama_obat}</td>
        <td class="align-middle">${obat.jenis_obat}</td>
        <td class="align-middle">${obat.tipe}</td>
        <td class="align-middle">
          <div class="btn-group" role="group">
            <button type="button" onclick="kurangStok('${obat.id_obat}')" class="btn btn-success btn-sm"><i class="fas fa-minus"></i></button> 
            <button type="button" class="btn btn-light btn-sm" disabled>${obat.stok}</button>
            <button type="button" onclick="tambahStok('${obat.id_obat}')" class="btn btn-success btn-sm"><i class="fas fa-plus"></i></button></td>
          </div>
        <td class="align-middle">${obat.harga}</td>
        <td class="align-middle">
          <button onclick="hapusObat('${obat.nama_obat}', '${obat.id_obat}')" class="btn btn-danger btn-circle">
            <i class="fa fa-fw fa-trash"></i>
          </button>
        </td>
      </tr>`;

    if (obat.jenis_obat === "batuk") {
      batuk += obat.stok;
    } else if (obat.jenis_obat === "demam") {
      demam += obat.stok;
    } else if (obat.jenis_obat === "flu") {
      flu += obat.stok;
    } else {
      suplemen += obat.stok;
    }
    no++;
  }

  tbody.innerHTML = output;
  document.getElementById("batuk").textContent = batuk;
  document.getElementById("demam").textContent = demam;
  document.getElementById("flu").textContent = flu;
  document.getElementById("suplemen").textContent = suplemen;
}

function hapusObat(namaObat, idObat) {
  //   let tabel = JSON.parse(localStorage.getItem("tabelObat"));
  //   for (const obat of tabel) {
  //     console.log(obat);
  //   }

  var konfirmasi = confirm(`Apakah Anda yakin ingin menghapus ${namaObat}?`);
  if (konfirmasi) {
    let indexToDelete;

    for (let i = 0; i < tabelObat.length; i++) {
      if (tabelObat[i]["id_obat"] === idObat) {
        indexToDelete = i;
      }
    }

    // delete that index
    if (indexToDelete > -1) {
      tabelObat.splice(indexToDelete, 1);
    }

    localStorage.setItem("tabelObat", JSON.stringify(tabelObat));
    output = "";
    batuk = 0;
    demam = 0;
    flu = 0;
    suplemen = 0;
    getStok();
  } else {
    return false;
  }
}

function kurangStok(idObat) {
  // traverse through tabelObat
  for (let i = 0; i < tabelObat.length; i++) {
    if (idObat === tabelObat[i]["id_obat"]) {
      if (tabelObat[i]["stok"] === 1) {
        hapusObat(tabelObat[i]["nama_obat"], idObat);
        break;
      }
      tabelObat[i]["stok"]--;
    }
  }

  localStorage.setItem("tabelObat", JSON.stringify(tabelObat));
  output = "";
  batuk = 0;
  demam = 0;
  flu = 0;
  suplemen = 0;
  getStok();
}

function tambahStok(idObat) {
  // traverse through tabelObat
  for (let i = 0; i < tabelObat.length; i++) {
    if (idObat === tabelObat[i]["id_obat"]) {
      tabelObat[i]["stok"]++;
    }
  }

  localStorage.setItem("tabelObat", JSON.stringify(tabelObat));
  output = "";
  batuk = 0;
  demam = 0;
  flu = 0;
  suplemen = 0;
  getStok();
}

function logoutUser() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}
