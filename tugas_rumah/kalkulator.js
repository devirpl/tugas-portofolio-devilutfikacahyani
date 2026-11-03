// Fungsi dari latihan.js
const hitungRataRata = (tugas, uts, uas) => (tugas + uts + uas) / 3;

function predikat(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  } else {
    return "D";
  }
}

// Mengambil elemen dari halaman
const inputTugas = document.querySelector("#tugas");
const inputUts = document.querySelector("#uts");
const inputUas = document.querySelector("#uas");
const tombol = document.querySelector("#tombolHitung");
const hasil = document.querySelector("#hasil");

// Saat tombol diklik
tombol.addEventListener("click", () => {
  // Cek apakah ada kolom yang kosong
  if (inputTugas.value === "" || inputUts.value === "" || inputUas.value === "") {
    hasil.textContent = "Isi ketiga nilai dulu ya.";
    return;
  }

  // Isi kolom selalu berupa teks, jadi diubah ke angka
  const tugas = Number(inputTugas.value);
  const uts = Number(inputUts.value);
  const uas = Number(inputUas.value);

  const rata = hitungRataRata(tugas, uts, uas);
  const bulat = Math.round(rata * 10) / 10;

  hasil.textContent = `Rata-rata: ${bulat}, Predikat: ${predikat(rata)}`;
});