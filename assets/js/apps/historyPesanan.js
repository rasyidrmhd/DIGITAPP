if (!localStorage.getItem("username")) {
  window.location.href = "login.html";
}

// const table_pesanan = [
//   //awalnya kosong
//   {
//     id_pesanan: "P1",
//     id_obat: ["B2", "B3"], //pakai array aja kali ya? pakai id referensi ke tabel_obat
//     // nama_obat: ["nama1", "nama2"],
//     // harga_obat: ["harga1", "harga2"],
//     // total_harga: 8000, //totalin harga pakai id obat
//     nama_pembeli: "Acit",
//     alamat: "Ujungberung",
//     nolep: 0819,
//   },
// ];
const table_pesanan = [
  {
    id_pesanan: "P1",
    id_obat: ["B2", "B3"], //pakai array aja kali ya? pakai id referensi ke tabel_obat
    // nama_obat: ["enervon-C", "enervon-D"],
    // harga_obat: [10000, 10000],
    jumlah_obat: [2, 2],
    // total_harga: 40000, //totalin harga pakai id obat
    nama_pembeli: "Acit",
    alamat: "Ujungberung",
    nolep: 0819,
  },
];

let tabelHistory = [];
let tbody = document.getElementById("tbody");
let output = "";
document.getElementById("displayName").textContent = localStorage.getItem("username") + " (Admin)";
showHistoryPesanan();

function showHistoryPesanan() {
  if (localStorage.getItem("tabelHistory")) {
    tabelHistory = JSON.parse(localStorage.getItem("tabelHistory"));
  } else {
    let tabelObat = JSON.parse(localStorage.getItem("tabelObat"));
    for (const pesanan of table_pesanan) {
      let tempObj = {};
      let id_pesanan = pesanan.id_pesanan;
      let nama_obat = [];
      let harga_obat = [];
      let jumlah_obat = pesanan.jumlah_obat;
      let total_harga = 0;
      let nama_pembeli = pesanan.nama_pembeli;
      let nolep = pesanan.nolep;
      let alamat = pesanan.alamat;

      for (let i = 0; i < pesanan.id_obat.length; i++) {
        for (const obat of tabelObat) {
          if (pesanan.id_obat[i] === obat.id_obat) {
            nama_obat.push(obat.nama_obat);
            harga_obat.push(obat.harga);
            total_harga += obat.harga * pesanan.jumlah_obat[i];
          }
        }
      }

      tempObj = { id_pesanan, nama_obat, harga_obat, jumlah_obat, total_harga, nama_pembeli, nolep, alamat };
      tabelHistory.push(tempObj);
    }

    localStorage.setItem("tabelHistory", JSON.stringify(tabelHistory));
  }

  output = "";
  for (let i = 0; i < tabelHistory.length; i++) {
    output += "<tr class='text-center'>";
    output += "  <td class='align-middle'>" + (i + 1) + "</td>";
    output += "  <td class='align-middle text-left'>" + tabelHistory[i].nama_pembeli + "</td>";
    output += "  <td class='align-middle text-left'>" + tabelHistory[i].nolep + "</td>";
    output += "  <td class='align-middle'>" + tabelHistory[i].alamat + "</td>";
    output += "  <td class='align-middle'>";
    for (let j = 0; j < tabelHistory[i].nama_obat.length; j++) {
      output += `${j + 1}. ${tabelHistory[i].nama_obat[j]} = ${tabelHistory[i].harga_obat[j]} x ${tabelHistory[i].jumlah_obat[j]}<br>`;
    }
    // for (const obat of history[i].nama_obat) {
    //   output += `${obat} ${history[i]}`;
    // }
    output += "  </td>";
    output += "  <td class='align-middle'>" + tabelHistory[i].total_harga + "</td>";
    output += "</tr>";
  }

  tbody.innerHTML = output;
  console.log(tabelHistory);

  //   tempObj = {
  //     idPesanan: table_pesanan[0]["id_pesanan"],
  //     totalHarga: table_pesanan[0]["total_harga"],
  //     namaPembeli: table_pesanan[0]["nama_pembeli"],
  //     alamat: table_pesanan[0]["alamat"],
  //     noTelp: table_pesanan[0]["nolep"],
  //   };

  //   tabelHistory.push(tempObj);
}

function logoutUser() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}
