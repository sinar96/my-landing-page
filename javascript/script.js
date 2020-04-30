var nomor = 0;
var caption = document.getElementById('caption');
var text = ['Tahfidz dan Tahsin', 'Kultum Maghrib dan Subuh', 'Kelas IT', 'Puasa Sunnah', 'Tahajjud'];

function ganti(angka) {
    nomor = angka;
    ganti_gambar(angka);
}

function sebelum() {
    nomor--;
    if (nomor < 0) nomor = 4;
    ganti_gambar(nomor);
}


function sesudah() {
    nomor++;
    if (nomor > 4) nomor = 0;
    ganti_gambar(nomor);
}

// refactor fungsi mengganti gambar
function ganti_gambar(angka) {
    var lokasi = 'assets/' + angka + '.jpg';
    document.getElementById('gambar').src = lokasi;
    caption.innerHTML = text[angka];
    return false;
}