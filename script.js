// Menampilkan pesan di konsol
console.log("Hello, World!");

// Fungsi untuk mengganti teks di elemen dengan ID 'myText'
function changeText() {
  var element = document.getElementById("myText");
  element.innerHTML = "Teks telah diubah!";
}

// Menambahkan event listener pada tombol
var button = document.getElementById("myButton");
button.addEventListener("click", changeText);