tbody = document.getElementById("tbody");
let output = "";
showHistoryPesanan();

function showHistoryPesanan() {
  //   if (localStorage.getItem("tabelHistory")) {
  //     tabelHistory = JSON.parse(localStorage.getItem("tabelHistory"));
  //   } else {
  //     tabelObat = JSON.parse(localStorage.getItem("tabelObat"));
  //     for (const pesanan of table_pesanan) {
  //       let tempObj = {};
  //       let id_pesanan = pesanan.id_pesanan;
  //       let nama_obat = [];
  //       let harga_obat = [];
  //       let jumlah_obat = pesanan.jumlah_obat;
  //       let total_harga = 0;
  //       let nama_pembeli = pesanan.nama_pembeli;
  //       let nolep = pesanan.nolep;
  //       let alamat = pesanan.alamat;

  //       for (let i = 0; i < pesanan.id_obat.length; i++) {
  //         for (const obat of tabelObat) {
  //           if (pesanan.id_obat[i] === obat.id_obat) {
  //             nama_obat.push(obat.nama_obat);
  //             harga_obat.push(obat.harga);
  //             total_harga += obat.harga * pesanan.jumlah_obat[i];
  //           }
  //         }
  //       }

  //       tempObj = { id_pesanan, nama_obat, harga_obat, jumlah_obat, total_harga, nama_pembeli, nolep, alamat };
  //       tabelHistory.push(tempObj);
  //     }

  //     localStorage.setItem("tabelHistory", JSON.stringify(tabelHistory));
  //   }

  let tabelHistory = JSON.parse(localStorage.getItem("tabelHistory"));

  console.log(tabelHistory[tabelHistory.length - 1]);
  output = "";
  output += "<tr class='text-center'>";
  output += "  <td class='align-middle text-left'>" + tabelHistory[tabelHistory.length - 1].nama_pembeli + "</td>";
  output += "  <td class='align-middle text-left'>" + tabelHistory[tabelHistory.length - 1].nolep + "</td>";
  output += "  <td class='align-middle'>" + tabelHistory[tabelHistory.length - 1].alamat + "</td>";
  output += "  <td class='align-middle'>";
  for (let j = 0; j < tabelHistory[tabelHistory.length - 1].nama_obat.length; j++) {
    output += `${j + 1}. ${tabelHistory[tabelHistory.length - 1].nama_obat[j]} = ${tabelHistory[tabelHistory.length - 1].harga_obat[j]} x ${tabelHistory[tabelHistory.length - 1].jumlah_obat[j]}<br>`;
  }
  output += "  </td>";
  output += "  <td class='align-middle'>" + tabelHistory[tabelHistory.length - 1].total_harga + "</td>";
  output += "</tr>";

  tbody.innerHTML = output;
  //   console.log(tabelHistory);
}
