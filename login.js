//Login User
const table_admin = [
    {
      username: 'joko1',
      pass: "hacktiv8",
    },
  ];

function loginUser(table_admin) {
    let userName = 'joko1';
    let pass = 'hacktiv8';
    //Gagal login
    if (!username) {
      return 'Isi Username dulu!';
    } else if (!pass) {
      return 'Isi Password dulu!';
    }
    //Menuju Halaman Admin 
    if (userName == table_admin.username && pass == table_admin.pass) {
      return 'Selamat datang admin';
    }
  }