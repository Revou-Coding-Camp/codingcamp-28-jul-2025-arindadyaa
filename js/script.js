// Menampilkan nama pengguna di halaman
const name = ("Arinda:");
if (name) {
  document.getElementById("userName").innerText = name;
}

// Validasi form dan tampilkan hasil
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const result = document.getElementById("result");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("messageText").value;

  if (!name || !email || !phone || !message) {
    result.innerHTML = "<p style='color:red;'>Semua field wajib diisi!</p>";
    return;
  }

  result.innerHTML = `
    <h3>Hasil Input:</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telepon:</strong> ${phone}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;
});
