// Tarayıcı Depolama Alanları

// Local Storage


// SetItem Metodu(Veri Eklemek için)

localStorage.setItem("programlama","javascript");
localStorage.setItem("bilgisayar",7000);

// GetItem Fonksiyonu(Veriye Ulaşmak için)

// const value = localStorage.getItem("bilgisayar");
// console.log(value);
// console.log(typeof value);

// Clear Local Storage Fonksiyonu(Veriyi Temizlemek için)

// localStorage.clear();

// console.log(localStorage.getItem("klavye"));

if(localStorage.getItem("bilgisayar") === null){
    console.log("Sorgulanan Veri Bulunamadi!");
}else{
    console.log("Sorgulanan Veri Bulundu!");
}