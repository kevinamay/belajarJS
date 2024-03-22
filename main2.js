// INI YANG SALAH
// let saldoAwal = prompt("masukan saldo awal anda :");
// alert("saldo awal anda:" + saldoAwal);
// let gajiTambahan = prompt("masukan gaji anda :");
// alert("gaji anda :" + gajiTambahan);
// const totalSaldo = saldoAwal + gajiTambahan;
// alert(`total saldo anda adalah  ${totalSaldo}`);

// INI YANG BENAR
//TUGAS 1
let saldoAwal = parseFloat(prompt("Masukkan saldo awal anda:"));
alert("Saldo awal anda: " + saldoAwal);
let gajiTambahan = parseFloat(prompt("Masukkan gaji anda:"));
alert("Gaji anda: " + gajiTambahan);
const totalSaldo = saldoAwal + gajiTambahan;
alert(`Total saldo anda adalah ${totalSaldo}`);
// Dalam kode ini, parseFloat digunakan untuk mengonversi nilai yang diterima dari prompt ke dalam tipe data float (bilangan desimal), sehingga operasi penambahan berfungsi dengan benar.

// TUGAS 2
// let hari = new Date().getDay();
// alert(`hari ini adalah hari ${hari}`);
// console.log(hari);

let hari = new Date().getDay();
// digunakan untuk mengambil variabel hari yang ada dan yang terkini
let namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
// ini merupakan array yang berisikan hari hari dalam bahasa indonesia
alert(`Hari ini adalah hari ${namaHari[hari]}`);
// alret yang menampilkan pesan nama hari berdasarkan nilai 'hari' yang diperoleh sebelumnya {namaHari[hari]} digunakan untuk mengakses nama hari sesuai dengan nilai array 'hari' dari 'namaHari'
console.log(namaHari[hari]);
// digunakan untuk memunculkan di console
