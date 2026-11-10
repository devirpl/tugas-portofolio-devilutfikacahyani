// 1. Daftar keahlian (halaman Beranda)
const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
];
skills.push({ nama: "JavaScript", level: "Dasar" });
const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill) {
  skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = `${skill.nama} (${skill.level})`;
    daftarSkill.appendChild(item);
  });
  jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

if (localStorage.getItem("tema") === "gelap") {
  document.body.classList.add("gelap");
  tombolTema.textContent = "Mode Terang";
}

tombolTema.addEventListener("click", () => {
  document.body.classList.toggle("gelap");

  if (document.body.classList.contains("gelap")) {
    tombolTema.textContent = "Mode Terang";
    localStorage.setItem("tema", "gelap");
  } else {
    tombolTema.textContent = "Mode Gelap";
    localStorage.setItem("tema", "terang");
  }
});
// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan) {
  kotakPesan.addEventListener("input", () => {
    hitungKarakter.textContent = `${kotakPesan.value.length}/300 karakter`;
  });
}

// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    gambar: "img/proyek-profil.png",
    alt: "Tangkapan layar halaman profil Andi Pratama",
    deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar.",
  },
  {
    judul: "Form Kontak",
    kategori: "HTML",
    gambar: "img/proyek-kontak.png",
    alt: "Tangkapan layar form kontak berisi lima isian",
    deskripsi: "Form dengan label dan validasi bawaan browser.",
  },
  {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    gambar: "img/proyek-jadwal.png",
    alt: "Tangkapan layar tabel jadwal belajar mandiri",
    deskripsi: "Jadwal belajar mingguan dengan thead dan tbody.",
  },
  {
    judul: "Portofolio Responsif",
    kategori: "CSS",
    gambar: "img/proyek-responsif.png",
    alt: "Tangkapan layar portofolio di ponsel dan laptop",
    deskripsi: "Rapi di ponsel, tablet, dan laptop dengan Flexbox.",
  },
  {
    judul: "Kode JavaScript",
    kategori: "JavaScript",
    gambar: "img/proyek-kalkulator.png",
    alt: "Tangkapan layar hasil kalkulator nilai di Console",
    deskripsi: "Latihan membuat logika pemrograman menggunakan fungsi, kondisi, array, dan perulangan JavaScript.",
  },
  {
    judul: "Hasil Console JavaScript",
    kategori: "JavaScript",
    gambar: "img/proyek-logika.png",
    alt: "Tangkapan layar hasil uji lima soal logika",
    deskripsi: "Latihan menjalankan dan menguji kode JavaScript melalui Console untuk melihat hasil program.",
  },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

function buatKartu(item) {
  return `
    <article class="kartu">
      <span class="label">${item.kategori}</span>
      <h3>${item.judul}</h3>
      <img src="${item.gambar}" alt="${item.alt}" width="280">
      <p>${item.deskripsi}</p>
    </article>`;
}

function tampilkanProyek(daftar) {
  const semuaKartu = daftar.map((item) => buatKartu(item));
  daftarProyek.innerHTML = semuaKartu.join("");
  jumlahProyek.textContent = `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

function pasangFilter(idTombol, kategori) {
  const tombol = document.querySelector(idTombol);

  tombol.addEventListener("click", () => {
    const tombolAktif = document.querySelector(".tombol-filter.aktif");
    tombolAktif.classList.remove("aktif");
    tombol.classList.add("aktif");

    if (kategori === "Semua") {
      tampilkanProyek(proyek);
    } else {
      tampilkanProyek(proyek.filter((item) => item.kategori === kategori));
    }
  });
}

if (daftarProyek) {
  tampilkanProyek(proyek);
  pasangFilter("#filter-semua", "Semua");
  pasangFilter("#filter-html", "HTML");
  pasangFilter("#filter-css", "CSS");
  pasangFilter("#filter-javascript", "JavaScript");
}