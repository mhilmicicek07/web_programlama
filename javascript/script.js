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

// //! STRING METHODS

// const firstName = "Ali Veli";
// const lastName = "KONYA";
// const age = 25;
// let hobbies = "Formula1 Sinema Spor Kitap Yazılım";

// let veri;

// console.log(veri) // undefined çünkü tanımlı değil değer yok
// console.log(typeof veri) // undefined

// //? String Birleştirme

// veri = firstName + lastName;
// console.log(veri) // Ali VeliKONYA
// console.log(typeof veri) // string

// veri = firstName + " " + lastName;
// console.log(veri) // Ali Veli KONYA
// console.log(typeof veri) // string

// veri = "Ali Veli";
// veri += "KONYA";
// console.log(veri) // Ali VeliKONYA
// console.log(typeof veri) // string

// veri = "Ali Veli";
// veri += " KONYA";
// console.log(veri) // Ali Veli KONYA
// console.log(typeof veri) // string

// veri = 'Benim adım '+firstName+' '+ lastName + '. Yaşım '+age+' ve İstanbul\'da yaşıyorum';
// veri = "Benim adım "+firstName+" " + lastName + ". Yaşım "+age+ " ve İstanbul'da yaşıyorum";
// console.log(veri) // Benim adım Ali Veli KONYA. Yaşım 25 ve İstanbul'da yaşıyorum
// console.log(veri) // Benim adım Ali Veli KONYA. Yaşım 25 ve İstanbul'da yaşıyorum
// console.log(typeof veri) // string
// console.log(typeof veri) // string

// veri = firstName.concat(" ",lastName);
// console.log(veri) // Ali Veli KONYA
// console.log(typeof veri) // string

// veri = veri.toUpperCase();
// console.log(veri) // ALI VELI KONYA
// console.log(typeof veri) // string

// veri = veri.toLowerCase();
// console.log(veri) // ali veli konya
// console.log(typeof veri) // string

// //* veri = veri.substring(2,10);
// console.log(veri) // Ali Veli KONYA nın 2.index ile 10.index(hariç) arası "i veli k" seçti. index 0 dan başlar
// console.log(typeof veri) // string

// //* veri = veri.slice(1,8);
// console.log(veri) // Ali Veli KONYA nın 1.index ile 8.index(hariç) arası "li veli" seçti. index 0 dan başlar
// console.log(typeof veri) // string

// //* veri = veri.indexOf("e");
// console.log(veri) // Ali Veli KONYA nın içinde eleman arama. e harfi 5.index te yer alıyor. index 0 dan başlar. aranan eleman yoksa -1 sonucunu verir.
// console.log(typeof veri) // number

// veri = veri.replace("veli","ahmet");
// console.log(veri) // ali ahmet konya veli kısmı ahmet ile değiştirildi.
// console.log(typeof veri) // string

// veri = veri.length;
// console.log(veri) // 15 Stringin uzunluğunu verir boşluklar dahildir.
// console.log(typeof veri) // number

// veri = hobbies.split(" "); // değişkende boşluk(" ") yerine virgül(,) kullanılsaydı virgül olarak belirtilmesi gerekirdi.
// console.log(veri) // (5) ['Formula1', 'Sinema', 'Spor', 'Kitap', 'Yazılım'] string ifadeyi objeye dönüştürme.
// console.log(typeof veri) // object

// //! ARRAYS

// let isim = "Ali Veli";
// let names = ["Arda","Kerem","Ali","Veli"];
// console.log(names) //(4) ['Arda', 'Kerem', 'Ali', 'Veli'] (4) ifadesi uzunluğunu belirtir ayrıca öğrenmek için aşağıdaki yapılır:
// console.log(names.length) // 4
// console.log(typeof names) // object

// let years = [1990,2007,1980,2000,2005];
// console.log(years) //(4) [1990,1980,2000,2005]
// console.log(typeof years) // object

// let mix = ["Arda","Yılmaz",1990,null,undefined,["programlama","futbol"]];
// console.log(mix) //(6) ['Arda', 'Yılmaz', 1990, null, undefined, Array(2)] Array(2) = "programlama","futbol"
// console.log(typeof mix) // object

// //? Get Array Item
// console.log(names[0]) // Arda. Array içerisinde index numarasına göre elemanı gösterme index 0 dan başlar
// console.log(names[3]) // Veli. Array içerisinde index numarasına göre elemanı gösterme index 0 dan başlar

// //? Set Array Item
// names[0] = "Levent"; // değişkendeki n. index numarasındaki eleman yerine yeni değer atamak arda yerine levent
// console.log(names) // (4) ['Levent', 'Kerem', 'Ali', 'Veli']
// console.log(typeof names) // object

// names[4] = "Mehmet"; // array uzunluğu biliniyorsa (names 3 uzunlukta index no olarak) 4.index e yeni değer atanarak array a eleman ekleme yapılabilir.
// console.log(names) // (5) ['Levent', 'Kerem', 'Ali', 'Veli', 'Mehmet']
// console.log(typeof names) // object

// names[names.length] = "Ahmet"; // array uzunluğu bilinmeden arrayin uzunluğu saydırılarak sona gelecek şekilde yeni eleman ekleme
// console.log(names) // (6) ['Levent', 'Kerem', 'Ali', 'Veli', 'Mehmet', 'Ahmet']
// console.log(typeof names) // object

// //? Add Item
// names.push("Aslı"); // array sonuna ekleme
// console.log(names) // (7) ['Levent', 'Kerem', 'Ali', 'Veli', 'Mehmet', 'Ahmet', 'Aslı']
// console.log(typeof names) // object

// names.unshift("Ayşe"); // array başına ekleme
// console.log(names) // (8) ['Ayşe', 'Levent', 'Kerem', 'Ali', 'Veli', 'Mehmet', 'Ahmet', 'Aslı']
// console.log(typeof names) // object

// //? Remove Item
// //* years.pop(); // arraydeki son indexi silme. normalde years arrayinde 2005 de vardı.
// //* console.log(years) //(3) [1990, 1980, 2000]

// //* years.shift(); // arraydeki ilk indexi silme. normalde years arrayinde 1990 da vardı.
// //* console.log(years) //(3) [1980, 2000, 2005]

// //? Seacrh Item (indexOf)
// let index = names.indexOf("Levent");
// console.log("index : " + index) // index : 1 //* yani Levent elemanı 1.indexte yer alıyor (8) ['Ayşe', 'Levent', 'Kerem', 'Ali', 'Veli', 'Mehmet', 'Ahmet', 'Aslı']

// names.reverse(); // arrayi tersten sıralama
// console.log(names); // (8) ['Aslı', 'Ahmet', 'Mehmet', 'Veli', 'Ali', 'Kerem', 'Levent', 'Ayşe']

// years.sort(); // array e araya 2007 yılı manuel eklendi son hali böyle. arrayi küçükten büyüğe sıralama.
// console.log(years) // (5) [1980, 1990, 2000, 2005, 2007]

// names.sort(); // arrayi alfabeye göre sıralama.
// console.log(names); // (8) ['Ahmet', 'Ali', 'Aslı', 'Ayşe', 'Kerem', 'Levent', 'Mehmet', 'Veli']

// let veri = names.concat(years); // iki array i birleştirme
// console.log(veri) //(13) ['Ahmet', 'Ali', 'Aslı', 'Ayşe', 'Kerem', 'Levent', 'Mehmet', 'Veli', 1980, 1990, 2000, 2005, 2007]

// names.splice(2,0,"Eda"); // arrayde 2.indexten başlayıp silinecek öğe sayısı kadar eleman silip (silinme istenmiyorsa 0) Eda öğesini array e belirtilen index no ya ekleme.
// console.log(names) // (9) ['Ahmet', 'Ali', 'Eda', 'Aslı', 'Ayşe', 'Kerem', 'Levent', 'Mehmet', 'Veli']

// names.splice(2,1,"Can");
// console.log(names) // (9) ['Ahmet', 'Ali', 'Yeşim', 'Aslı', 'Ayşe', 'Kerem', 'Levent', 'Mehmet', 'Veli']


// //! KOŞULLU DURUMLAR

// //? (IF-ELSE)

// const firstName = "Ali Veli";
// const userName = "aliveli";
// const userName = "aliveli1";
// const age = 20;
// const age = 15;
// const age = 22;
// const isStudent = true;
// const isStudent = false;
// const school = "university";
// const school = "lise";

// if (userName =="aliveli" ){
//     console.log("Merhaba Ali!")
// }
// else{
//     console.log("Kullanıcı Bulunamadı!")
// }

// if (age === 20 ) {
//     console.log("Yaşınız: 20")
// }

// if (isStudent === true ) {
// if (isStudent) {
//     console.log("Hangi bölümde okuyorsun?")
// }
// else{
//     console.log("Mesleğiniz nedir?")
// }

// if (age >= 18) {
//     if(school == "university"){
//         console.log("Ehliyet Alabilirsin!")
//     }
//     else{
//         console.log("Eğitim durumunuz ehliyet için yetersiz")
//     }
// }
// else{
//     console.log("Yaşınız ehliyet için yeterli değil")
// }

// let id = "2323223";
// if (typeof id != undefined){
//     console.log("id: " + id)
// }else{
//     console.log("No id!")
// }

// //? SWITCH-CASE

// let islem = 1;
// let islem = 3;
// let islem = 6; //* default

// switch (islem) {
//     case 1:
//         console.log("1 Nolu İşlem Yapıldı!")
//         break;
//     case 2:
//         console.log("2 Nolu İşlem Yapıldı!")
//         break;
//     case 3:
//         console.log("3 Nolu İşlem Yapıldı!")
//         break;

//     default:
//         console.log("Herhangi Bir İşlem Yapılmadı!")
// }

// let day;

// switch (new Date().getDay()) {
// switch (new Date().getDay()+1) { // günü arttırmak için 1 fazla dersek cuma iken cumartesi olur.
//     case 0:
//         day = "Pazar";
//         break;
//     case 1:
//         day = "Pazartesi";
//         break;
//     case 2:
//         day = "Salı";
//         break;
//     case 3:
//         day = "Çarşamba";
//         break;
//     case 4:
//         day = "Perşembe";
//         break;
//     case 5:
//         day = "Cuma";
//         break;
//     case 6:
//         day = "Cumartesi";
//         break;
// }

// console.log(day) // cuma

// let hour = 30;

// switch (true) {
//     case (hour >= 6 && hour <= 12):
//         console.log("Günaydın !")
//         break;

//     case (hour >= 13 && hour <= 17):
//         console.log("İyi Günler !")
//         break;

//     case (hour >= 18 && hour <= 24):
//         console.log("İyi Akşamlar !")
//         break;

//     case (hour >= 0 && hour <= 6):
//         console.log("İyi Geceler !")
//         break;

//     default:
//         console.log("Saat Geçersiz! Yanlış Zaman!")
// }

// //! OBJECT LITERALS

// let firstName = "Ali";
// let lastName = "Veli";

// let firstName2 = "Ali";
// let lastName2 = "Veli";

// let ali = ["Ali","Veli",25,];
// let ayşe = ["Ayşe","Veli",30,];

// let veri;
// console.log(veri) // undefined çünkü başta tanımlı değil

// let user = {
//     userName: "leventert",
//     firstName: "Levent",
//     lastName: "Ertunalılar",
//     age: 37,
//     hobbies: ["spor","kitap okumak","yazılım"],
//     address: {
//         city: "İstanbul",
//         country: "Türkiye",
//         phone: "05300000000",
//     }
// }
// console.log(typeof user) // object

// veri = user;
// console.log(veri)
// {userName: 'leventert', firstName: 'Levent', lastName: 'Ertunalılar', age: 37, hobbies: Array(3), …}
// address
// :
// {city: 'İstanbul', country: 'Türkiye', phone: '05300000000'}
// age
// :
// 37
// firstName
// :
// "Levent"
// hobbies
// :
// (3) ['spor', 'kitap okumak', 'yazılım']
// lastName
// :
// "Ertunalılar"
// userName
// :
// "leventert"
// [[Prototype]]
// :
// Object
// console.log(typeof user) // object

// veri = user.firstName;
// console.log(veri) // Levent

// veri = user.lastName
// console.log(veri) // Ertunalılar

// veri = user.hobbies
// console.log(veri) // (3) ['spor', 'kitap okumak', 'yazılım']

// veri = user.hobbies.length;
// console.log(veri) // 3

// veri = user.address.city;
// console.log(veri) // İstanbul

// veri = user.address.phone;
// console.log(veri) // 05300000000

// //! DÖNGÜLER (LOOPS)

// //? WHILE

// let i = 0;
// while (i < 10) {
//     console.log(i)
//     i++; // i += 1; // i = i + 1;
// }

// let a = 10;
// while (a > 0) {
//     console.log(a)
//     a--; // i -= 1; // i = i - 1;
// }

// //* break ve continue

// let b = 0;
// while (b < 10) {
//     console.log(b)
//     if (b == 6) {
//         break // kodların çalışmayı durdurması istenildiğinde döngüde kullanılır. koşul doğru olsa dahi döngüden çıkar.
//     }
//     b++;
// }

// let s = 0;
// while (s < 10) {
//     if (s == 6) {
//         continue // döngüyü başa alıp sonsuz döngüye girer.
//     }
//     console.log(s)
//     s++;
// }

// //? DO-WHILE

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while(i<10);

// //? FOR

// for (let i = 0; i<10; i++){
//     console.log(i)
// }

// for (let i = 0; i<10; i++){
//     if (i==3){
//         console.log("Seçilen Rakam: " + i)
//         break; // continue
//     }
//     console.log(i)
// }

// let toplam = 0;

// for (let i = 1; i<10; i++){
//     toplam += i// toplam = toplam +i
// }
// console.log(toplam)

// let sonuc = 1;

// for (let i = 1; i<10; i++){
//     sonuc *= i
// }
// console.log(sonuc)

// //! ARRAY ve OBJECT LERDE DÖNGÜ KULLANIMI

// //? ARRAYS

// let cities = ["İstanbul", "Ankara", "İzmir", "Eskişehir", "Bursa"];

// for (let i = 0; i < cities.length; i++) {
// console.log(cities) // 5 kere (5) ['İstanbul', 'Ankara', 'İzmir', 'Eskişehir', 'Bursa']
//     console.log(cities[i]) // Sırasıyla ayrı ayrı İstanbul Ankara İzmir Eskişehir Bursa
// }

// //* for-in methodu

// for (let i in cities) {
//     console.log(`index: ${i} value: ${cities[i]}`);
// index: 0 value: İstanbul
// index: 1 value: Ankara
// index: 2 value: İzmir
// index: 3 value: Eskişehir
// index: 4 value: Bursa
// }

// //* for-each methodu

// cities.forEach(function (item) {
//     console.log(item) // Sırasıyla ayrı ayrı İstanbul Ankara İzmir Eskişehir Bursa
// });

// //? OBJECTS

// let users = [
//     { firstName: "Aslı", lastName: "Yılmaz" },
//     { firstName: "Kerem", lastName: "Bilgin" },
//     { firstName: "Tolga", lastName: "Mertoğlu" },
//     { firstName: "Selin", lastName: "Şahin" },
// ]

// for (let i = 0; i < users.length; i++) {
// console.log(users) // 4 kere aşağıdakini gösterdi
//     0 : { firstName: 'Aslı', lastName: 'Yılmaz' }
//     1 : { firstName: 'Kerem', lastName: 'Bilgin' }
//     2 : { firstName: 'Tolga', lastName: 'Mertoğlu' }
//     3 : { firstName: 'Selin', lastName: 'Şahin' }
//     length : 4
//     [[Prototype]] : Array(0) tüm kullanılabilecek methodların olduğu kısım
// console.log(users[i])
// { firstName: 'Aslı', lastName: 'Yılmaz' }
// { firstName: 'Kerem', lastName: 'Bilgin' }
// { firstName: 'Tolga', lastName: 'Mertoğlu' }
// { firstName: 'Selin', lastName: 'Şahin' }
//     console.log(users[i].firstName) // sırasıyla ayrı ayrı Aslı Kerem Tolga Selin
//     console.log(users[i].lastName) // sırasıyla ayrı ayrı Yılmaz Bilgin Mertoğlu Şahin

// }

// //* for-in methodu

// for (let i in users) {
//     console.log(`index: ${i} value: ${users[i].firstName}`)
// index: 0 value: Aslı
// index: 1 value: Kerem
// index: 2 value: Tolga
// index: 3 value: Selin
// console.log(`index: ${i} value: ${users[i].lastName}`)
// index: 0 value: Yılmaz
// index: 1 value: Bilgin
// index: 2 value: Mertoğlu
// index: 3 value: Şahin
// }

// //* Map Methodu

// let veri = users.map(function(item){
//     return item.firstName + " " + item.lastName;
// });
// console.log(veri) // (4) ['Aslı Yılmaz', 'Kerem Bilgin', 'Tolga Mertoğlu', 'Selin Şahin']
// console.log(typeof veri) // object

// let numbers = [1,3,5,9,12];

// let num = numbers.map(function(n){
//     return n*n;
// });
// console.log(num) //(5) [1, 9, 25, 81, 144]
// console.log(typeof num) // object

// //! FUNCTIONS (FONKSİYONLAR)

// function merhaba(){
//     console.log("Merhaba !")
// }
// merhaba();
// merhaba();
// merhaba();

// function merhaba(name,age){
//     console.log(`İsim: ${name} Yaş: ${age}`)
// }
// merhaba(); // İsim: undefined Yaş: undefined
// merhaba("Levent",37) // İsim: Levent Yaş: 37
// merhaba("Aslı",23) // İsim: Aslı Yaş: 23
// merhaba("Yasemin",28) // İsim: Yasemin Yaş: 28

// function yasHesapla(dogumYili){
//     return 2025 - dogumYili; 
// }

// yasHesapla(1990);
// console.log(yasHesapla(1990)) // 35

// let ageSamet = yasHesapla(1990);
// console.log(ageSamet) // 35
// let ageMehmet = yasHesapla(2000);
// console.log(ageMehmet) // 25
// let ageCagla = yasHesapla(2005);
// console.log(ageCagla) // 20

// function ehliteyAlabilmeDurumu (dogumYili, isim){
//     let yas = yasHesapla(dogumYili);
//     let ehliyet = 18 - yas;

//     if (ehliyet > 0) {
//         console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı`)
//     }else{
//         console.log("Ehliyet Alabilirsiniz.")
//     }
// }

// ehliteyAlabilmeDurumu(1990,"Esra"); // Ehliyet Alabilirsiniz.
// ehliteyAlabilmeDurumu(2010,"Esra"); // Esra ehliyet alabilmenize 3 yıl kaldı
// ehliteyAlabilmeDurumu(2000,"Ali");  // Ehliyet Alabilirsiniz.

// //! WINDOW OBJESİ

// console.log(window);
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// alert : ƒ alert()
// atob : ƒ atob()
// blur : ƒ blur()
// btoa : ƒ btoa()
// caches : CacheStorage { }
// cancelAnimationFrame : ƒ cancelAnimationFrame()
// cancelIdleCallback : ƒ cancelIdleCallback() ve devamı baya uzun bir obje

// veri = window;

// console.log(veri) // veri : Window {window: Window, self: Window, document: document, name: '', location: Location, …} Global bir değişken

// //? alert methodu kullanıcıya mesaj uyarı gönderme

// alert("Merhaba !");

// //? prompt methodu kullanıcıdan veri alma

// var veri2 = prompt("Adınızı giriniz: ");

// //? confirm kullanıcıdan onay alma

// var veri3 = confirm("Çıkmak istediğinizden emin misiniz?");
// console.log(veri3) // onaylanırsa true, onaylanmazsa false değeri döndürür.

// if (veri3 == true){
//     console.log("Çıkış Gerçekleşti !")
// }else{
//     console.log("Çıkış Gerçekleşmedi !")
// }

// //? location methodu tarayıcı özelliklerini alma

// loc = window.location;
// console.log(loc); // Location {ancestorOrigins: DOMStringList, href: 'file:///C:/Users/MeHMeTHiLMi/Desktop/web_programlama/javascript/index.html', origin: 'file://', protocol: 'file:', host: '', …}

// loc = window.location.href;
// console.log(loc); // file:///C:/Users/MeHMeTHiLMi/Desktop/web_programlama/javascript/index.html

// loc = window.location.origin;
// console.log(loc); // file://

// loc = window.location.protocol;
// console.log(loc); // file:

// window.location.href = "https://udemy.com";
// window.location.reload();

// //? navigator methodu

// console.log(window.navigator) // Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 0, scheduling: Scheduling, …}

// //? document methodu

// console.log(window.document) // #document (file:///C:/Users/MeHMeTHiLMi/Desktop/web_programlama/javascript/index.html) sitenin kodlarını barındırır

// //! SCOPE (KAPSAM) KAVRAMI

// //? Global Scope

// var veri1 = 5; //* Global Scope
// let veri2 = 10; //* Global Scope
// const veri3 = 15; //* Global Scope
// console.log(veri1,veri2,veri3) // 5 10 15

// //? Function Scope(ÖNCELİKLİ GLOBAL'E GÖRE)

// function a() {
//     //* Function Scope
// }

// function fonksiyon(){
//     var veri1 = 30; //* Function Scope
//     let veri2 = 40; //* Function Scope
//     const veri3 = 50; //* Function Scope
//     console.log(veri1,veri2,veri3); // 30 40 50
// }

// fonksiyon();

// console.log(veri1,veri2,veri3) // 5 10 15

// //? Block Scope(ÖNCELİKLİ GLOBAL'E GÖRE)

// if (true) {
//     //* Block Scope
// }

// if (true) {
//     var a = 10;
//     let b = 20;
//     const c= 30;
// }

// console.log(a) // 10
// console.log(b) // undefined hatası
// console.log(c) // undefined hatası

// //! block içerisinde var ile değişken tanımlandıysa globalde de etkisini göstermeye devam eder. tercih edilmez.

// var veri1 = 5; //* Global Scope
// let veri2 = 10; //* Global Scope
// const veri3 = 15; //* Global Scope
// console.log(veri1,veri2,veri3) // 5 10 15

// if (true) {
//     var veri1 = 30;
//     let veri2 = 40;
//     const veri3= 50;
//     console.log(veri1,veri2,veri3) // 30 40 50
// }

// //! block içerisinde var ile değişken tanımlandıysa globalde de etkisini göstermeye devam eder. tercih edilmez.
// console.log(veri1,veri2,veri3) // 30 10 15


// var admin_password = "1111111";
// let admin_password = "1111111";
// const admin_password = "1111111";

// if (true){
    // var admin_password = "2222222";
    // let admin_password = "2222222";
//     const admin_password = "2222222";
// }

// console.log(admin_password) //2222222
// console.log(admin_password) //1111111 let ile tanımlanması durumunda
// console.log(admin_password) //1111111 const ile tanımlanması durumunda
