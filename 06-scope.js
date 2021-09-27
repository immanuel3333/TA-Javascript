/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
console.log("Ada 2: Global dan Local scope");
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
console.log("Global Scope :  variabel yang biasanya dideklarasikan di awal program file dimana dia dapat digunakan dimanapun pada program tersebut. Nilai global dapat diganti didalam fungsi");

console.log("Local Scope :  variabel yang hanya dapat digunakan/diakses pada fungsi tempatnya dideklarasaikan(tidak bisa diakses di luar fungsi)");
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

let a = "Immanuel";
function namaSaya() {
    let b = " Siburian"
    console.log(a + b);
}
console.log(namaSaya());

console.log("a merupakan variabel global dan b lokal");
/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/////Hasil yang dikeluarkan adalah mariah dikarenakan variabel name sudah diassign dengan nilai vaiabel lokal yang diberikan saat pemanggilan fungsinya.
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

//Hasil yang dikeluarkan adalah mariah