if (localStorage.getItem("username")) {
  window.location.href = "stokObat.html";
}

const table_admin = [
  {
    username: "acit",
    pass: "acit",
  },
  {
    username: "darwin",
    pass: "darwin",
  },
  { username: "giffari", pass: "giffari" },
  { username: "royan", pass: "royan" },
];

//Login User
document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();
  let table = table_admin;
  let username = document.getElementById("username").value;
  let pass = document.getElementById("pass").value;
  let found = false;
  for (const admin of table) {
    if (username === admin.username && pass === admin.pass) {
      found = true;
    }
  }

  if (!found) {
    alert("Akun tidak ditemukan");
  } else if (found) {
    window.location.href = "stokObat.html";
    localStorage.setItem("username", username);
  }
});

function logutUser() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}
