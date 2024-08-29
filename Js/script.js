function formValidation(){
    let fullName = document.getElementById("fullName").value;
    if (fullName == ""){
        alert ("All field must be filled!");
    } 
    else{
        document.getElementById('result').innerHTML = "Submitted"
    }
    console.log(fullName);
}

function replaceName(){
    let name = prompt("Who is your name?","");
    document.getElementById("ganti").innerHTML= name
}
replaceName()

let indexSlide = 1;
showBanner(indexSlide);

function nextSlide(n) {
    let listImage = document.getElementsByClassName('imge');

    // Perbarui indexSlide dengan menambah atau mengurangi n
    indexSlide += n;

    // Jika indexSlide lebih besar dari jumlah gambar, kembali ke gambar pertama
    if (indexSlide > listImage.length) indexSlide = 1;

    // Jika indexSlide lebih kecil dari 1, kembali ke gambar terakhir
    if (indexSlide < 1) indexSlide = listImage.length;

    showBanner(indexSlide);
}

function showBanner(n) {
    let listImage = document.getElementsByClassName('imge'); // pastikan 'imge' benar di HTML
    
    // Pastikan bahwa listImage tidak kosong
    if (listImage.length === 0) {
        console.error("Tidak ada elemen dengan kelas 'imge' ditemukan.");
        return;
    }

    // Sembunyikan semua gambar
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    // Tampilkan gambar yang sesuai dengan indexSlide
    if (n <= listImage.length && n > 0) {
        listImage[n - 1].style.display = "block";
    } else {
        console.error("Indeks keluar dari batas: " + n);
    }

    console.log(listImage);
}
setInterval(function() {
    nextSlide(1); // Pindah ke gambar berikutnya
}, 1000);

