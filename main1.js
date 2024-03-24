console.log(document.title);
document.title = "kevina";
// console.log(document.title);

// ini digunakan untuk memasukan nama tersebut langsung ke body
// console.log(document.body);
// const body = document.body;
// body.append("kevina maydiva hs");
// append itu artinya mengisikan sesuatu kedalam elemen

// ini digunkan untuk memasukan elemen h1 ke tampilan
// const h1 = document.createElement("h1");
// h1.innerText = " universitas hehe";
// body.append(h1);

// const namaSaya = document.createElement("p");
// namaSaya.innerHTML = "capek woy capek";
// body.append(namaSaya);

// const namaKamu = document.createElement('b')
// namaKamu.innerText = "siapa nama kamu"
// body.append(namaKamu)

const btn = document.getElementById("btn");
// const btn2 = document.getElementById("btn2");
const btn2 = document.querySelector(".btn2");
// queryselector bisa menggunakan # untuk id dan . untuk class
console.log(btn2);

console.log(btn2);
btn.style.border = "none";
btn.style.padding = "10px";
btn.style.fontSize = "24px";
btn.style.fontFamily = "tims new roman";
btn.style.background = "red";

// event
function ganti() {
  btn.style.background = "aqua";
  console.log("aman");
//   alert("aman");
}
