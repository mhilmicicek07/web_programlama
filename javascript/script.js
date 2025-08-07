// alert("Siteye Hoş Geldiniz!")
// console.log("Hoş Geldiniz!")
// console.log(123)
// console.error("Hata Oluştu !")
// console.warn("Bir uyarı aldınız!")

// console.clear()

//! Değişkenler

// var password;
// console.log(password)

// password = "leventert"
// console.log(password)

// yas = 25;
// console.log(yas)

//? Değişken tanımlama kuralları

// 1- Değişken isimleri rakamla başlanmaz 1yas gibi bir değişken adı olmaz yas1 olabilir

// yas1 = 30;

// 2- Gömülü komutları değişken adı olarak belirtilemez if, for gibi

// 3- Değişken adı 2 kelimeden oluşturuluyorsa boşluk bırakılmaz _(alt çizgi) yada camelCase(adSoyad) kullanılır

// var adSoyad = "Levent Ertunalılar"
// console.log(adSoyad)

// 4- Değişken isimlerinde Türkçe karakter kullanılmamalı.

//* Sabitler(Değiştirilmesini istemediğimiz değişkenler)

// const email = "12345@gmail.com";
// console.log(email)
// email = "56789@gmail.com"
// console.log(email) // script.js:39 Uncaught TypeError: Assignment to constant variable.at script.js:39:7 hatası verir

// //! Değişken Türleri

// //? Primitive Types
// //* String
// let firstName = "Ali Veli Konya";
// console.log(typeof firstName) // string

// //* Number
// let age = 30;
// console.log(typeof age) // number

// //* Boolean mantıksal değerler(doğru yanlış evet hayır)
// let kredi_kullanimi = false; // yada true
// console.log(typeof kredi_kullanimi) // boolean

// //* undefined(tanımsız)
// let phone;
// console.log(typeof phone) //undefined

// //? Refference Types : Objects
// //* Array
// let liste = ["Ali","Veli","Konya"];
// console.log(typeof liste) // object

// //* Object Literals
// let address = {
//     city: "İstanbul",
//     country: "Türkiye",
// }
// console.log(typeof address) // object

// //* Fonksiyon içeren değişkenler
// var hesapla = function(){
//     return 0;
// }
// console.log(typeof hesapla) // function

// //! Operatörler
// let veri;
// const a = 20;
// const b = 10;
// const c = 5;

// let d=3;

// //? Aritmetik Operatörler
// veri = a+b;
// console.log(veri)
// veri = a-b;
// console.log(veri)
// veri= a*b;
// console.log(veri)
// veri = a/b;
// console.log(veri)
// veri = d++;
// console.log(d)
// veri = ++d;
// console.log(d)
// veri = d--;
// console.log(d)
// veri = --d;
// console.log(d)
// veri = a%b; // a'nın b'ye bölümünden kalan (mod alma operatörü) sayının tek çift olma durumunda kullanılabilir.
// console.log(veri)
// console.log(typeof veri) // number

// //? Atama Operatörleri
// veri = a;
// console.log(veri)
// veri += a; // veri = veri + a;
// console.log(veri)
// veri -= a; // veri = veri - a;
// console.log(veri)
// veri *= a; // veri = veri * a;
// console.log(veri)
// veri /= a; // veri = veri / a;
// console.log(veri)
// veri %= a; // veri = veri % a;

// //? Karşılaştırma Operatörleri
// veri = a == b; // birbirine eşitliği karşılaştırılır. eşit değilse false döner.
// console.log(veri)
// console.log(typeof veri) // boolean değer false 20 eşitdeğildir 10 a

// veri = b == c;
// console.log(veri)
// console.log(typeof veri) // boolean değer false 10 eşitdeğildir 5 e

// veri = 5 === "5"; // hem değer hem de tür karşılaştırması için
// console.log(veri)
// console.log(typeof veri) // boolean değer false değer eşit 5 ama biri number diğeri string

// veri = a != b; // eşit değildir eşit olmamasını karşılaştırma
// console.log(veri)
// console.log(typeof veri) // boolean değer true çünkü 20 eşit değildir 10 a

// veri = a !== b; // eşit değildir eşit olmamasını karşılaştırma türleri de dahil
// console.log(veri)
// console.log(typeof veri) // boolean değer true çünkü 20 eşit değildir 10 a

// veri = a > b;
// console.log(veri)
// console.log(typeof veri) // boolean değer true çünkü 20 büyüktür 10 dan

// veri = b < c;
// console.log(veri)
// console.log(typeof veri) // boolean değer false çünkü 10 küçük değildir 5 ten

// veri = 5 >= 5;
// console.log(veri)
// console.log(typeof veri) // boolean değer true çünkü 5 eşittir 5 e

// veri = b <= c;
// console.log(veri)
// console.log(typeof veri) // boolean değer false 10 5 ten küçük veya eşit değil

// //? Mantıksal Operatörler

// //* and (&&) iki durumun da doğru veya eşit olmasının sorgulanmasında kullanılır iki durumda doğruysa true döner biri yanlış olsa dahi false döner (ve)

// veri = (a>b) && (a>c);
// console.log(veri)
// console.log(typeof veri) // boolean değer true çünkü 20, 10'dan büyüktür ve aynı şekilde 20 5'ten de büyüktür.

// //* or (||) iki durumdan birinin doğru veya eşit olmasının sorgulanmasında kullanılır iki durumdan biri dahi doğru olsa true döner (veya)

// veri = (b>a) || (a>c);
// console.log(veri)
// console.log(typeof veri) // boolean değer true çünkü 10, 20'den büyük olmasa bile 10, 5'ten büyüktür. yani iki durumdan biri doğru.

// //* not (!) olumsuz tersine döndürür.
// veri = !(a>b);
// console.log(veri)
// console.log(typeof veri) // boolean değer false çünkü 20, 10 dan büyüktür ancak not operatörü ile tersine döndürüldü.

// veri = !(a<b);
// console.log(veri)
// console.log(typeof veri) // boolean değer true çünkü 10, 20 dan küçüktür ancak not operatörü ile tersine döndürüldü.

// //! DATE OBJECT

// let zaman = new Date();
// console.log(zaman);
// console.log(typeof zaman); // object
// let birthday = new Date(1988,4,12);

// //? Get Methods
// console.log(zaman.getMonth()); // Ay, Ocak 0, Ağustos 7.Ay vs...
// console.log(zaman.getDate()); // Gün, ilk gün 0, 7.gün 7
// console.log(zaman.getFullYear()); // Yıl, 2025
// console.log(zaman.getDay()); // Gün, ilk gün pazar 0, Perşembe 4.gün
// console.log(zaman.getHours()); // Saat 17
// console.log(zaman.getMinutes()); // Dakika 52
// console.log(zaman.getSeconds()); // Saniye 30
// console.log(zaman.getMilliseconds()); // Milisaniye 411

// //*Doğum günü yaş hesaplama
// console.log(zaman.getFullYear() - birthday.getFullYear()); // 37
// console.log(zaman.getMonth() - birthday.getMonth()); // 3

// //? Set Methods

// zaman.setDate(25);
// console.log(zaman); // 25 Ağustos
// console.log(typeof zaman); 
// zaman.setMonth(3);
// console.log(zaman);// April Nisan
// console.log(typeof zaman); 
// zaman.setFullYear(2024);
// console.log(zaman);// 2024
// console.log(typeof zaman); 
// zaman.setHours(20);
// console.log(zaman);// Saat 20.56
// console.log(typeof zaman); 

// //! NUMBER METHODS

// let veri;

// veri = Number("5");
// console.log(veri) // 5
// console.log(typeof veri) // number

// veri = parseInt("5");
// console.log(veri) // 5
// console.log(typeof veri) // number

// veri = parseFloat("5.5");
// console.log(veri) // 5.5
// console.log(typeof veri) // number

// veri = parseInt("5c");
// console.log(veri) // 5
// console.log(typeof veri) // number c görmezden gelindi

// veri = parseInt("c5");
// console.log(veri) // NaN (Not a Number) sayı değildir
// console.log(typeof veri) // Number

// veri = isNaN("c5");
// console.log(veri) // true
// console.log(typeof veri) // boolean

// veri = isNaN("5")
// console.log(veri) // false
// console.log(typeof veri) // boolean

// var sayi = 15.4358573978;
// veri = sayi.toPrecision(5);
// console.log(veri) // 15.436
// console.log(typeof veri) // string

// veri = sayi.toFixed(6);
// console.log(veri) // .435857 virgül den sonra 6 basamak
// console.log(typeof veri) // string

// veri = Math.PI;
// console.log(veri) // 3.141592653589793 Pi Sayısı
// console.log(typeof veri) // number

// veri = Math.round(3.5);
// console.log(veri) // 4
// console.log(typeof veri) // number

// veri = Math.round(3.2);
// console.log(veri) // 3
// console.log(typeof veri) // number

// veri = Math.ceil(3.2);
// console.log(veri) // 4
// console.log(typeof veri) // number

// veri = Math.floor(3.8);
// console.log(veri) // 3
// console.log(typeof veri) // number

// veri = Math.pow(3,3);
// console.log(veri) // 27 kuvvetini alma 3ün kübü 9
// console.log(typeof veri) // number

// veri = Math.sqrt(81);
// console.log(veri) // 9 karekök alma 81 in karekökü 9
// console.log(typeof veri) // number

// veri = Math.abs(-50);
// console.log(veri) // 50 mutlak değere dönüştürme
// console.log(typeof veri) // number

// veri = Math.min(1,3,5,7,9,10);
// console.log(veri) // 1 en küçük sayıyı bulma
// console.log(typeof veri) // number

// veri = Math.max(5,6,3,7,35,12,9);
// console.log(veri) // 35 en büyük sayıyı bulma
// console.log(typeof veri) // number

// veri = Math.random(); // 0 ile 1 arasından rastgele sayı
// console.log(veri) // 0.978166....
// console.log(typeof veri) // number

// veri = Math.random()* 10; // 0 ile 10 arasından rastgele sayı
// console.log(veri) // 2.1010911
// console.log(typeof veri) // number

// veri = Math.floor(Math.random()*10);
// console.log(veri) // 4
// console.log(typeof veri) // number

// veri = Math.floor(Math.random()*100); // 0 ile 100 arasından rastgele sayı
// console.log(veri) // 68
// console.log(typeof veri) // number

// veri = Math.floor(Math.random()*100 + 1); // 1 ile 100 arasından rastgele sayı
// console.log(veri) // 19
// console.log(typeof veri) // number

//! STRING METHODS












// Immediate Functions

// function welcome() {

//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"];
//     var today = new Date();
//     var msg = "Welcome.Today is " + days[today.getDay()];
//     return msg;
// }

// console.log(welcome());

// // (function(){

// // }());

// // (function(){

// // })();

// (function (name) {
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satuday"];
//     var today = new Date();
//     var msg = 'Welcome ' + name + ' Today is ' + days[today.getDay()];
//     console.log(msg);

// }("Levent"));