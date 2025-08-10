// //! Tarayıcı Depolama Alanları

// //? Session Storage -> örneğin tarayıcı/oturum açıldıktan kapatılana kadar veriler tarayıcıya kaydedilir

// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear = document.querySelector("#clear");

// const addkey = document.querySelector("#addkey");
// const addvalue = document.querySelector("#addvalue");
// const deletekey = document.querySelector("#deletekey");

// function addItem(e){
//     sessionStorage.setItem(addkey.value, addvalue.value)
// }

// function deleteItem(e){
//     sessionStorage.removeItem(deletekey.value)
// }

// function clearItem(e) {
//     sessionStorage.clear();
// }

// add.addEventListener("click",addItem);
// del.addEventListener("click",deleteItem);
// clear.addEventListener("click",clearItem);


// //? Local Storage -> oturumdan bağımsız bir şekilde veriler tarayıcıya kaydedilir

// //* SetItem Metodu(Veri Eklemek için)

// localStorage.setItem("programlama", "javascript");
// localStorage.setItem("bilgisayar", 7000);

// //* GetItem Fonksiyonu(Veriye Ulaşmak için)

// const value = localStorage.getItem("bilgisayar");
// console.log(value); // 7000
// console.log(typeof value); // string

// //* Clear Local Storage Fonksiyonu(Veriyi Temizlemek için)

// localStorage.clear();

// //* Local Storage da arama yapmak için

// console.log(localStorage.getItem("klavye")); // yoksa null olarak döner

// if (localStorage.getItem("klavye") === null) {
//     console.log("Sorgulanan Veri Bulunamadi!");
// } else {
//     console.log("Sorgulanan Veri Bulundu!");
// }