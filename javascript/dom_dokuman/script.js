//! DOM MANIPULASYON ÖRNEKLERİ

// let veri;

// veri = window.document;
// console.log(veri) // #document (file:///C:/Users/MeHMeTHiLMi/Desktop/web_programlama/javascript/index.html) sitenin kodlarını barındırır
// veri = window.document.head;
// console.log(veri) // sayfadaki head etiketi ve içerisindeki HTML kodları
// veri = window.document.body;
// console.log(veri) // sayfadaki body etiketi ve içerisindeki HTML kodları
// veri = window.document.URL;
// console.log(veri) // file:///C:/Users/MeHMeTHiLMi/Desktop/web_programlama/javascript/dom_dokuman/index.html sitenin URL'si
// veri = window.document.domain; // live server ile çalıştığındaki adresi -> 127.0.0.1
// console.log(veri) // file:///C:/Users/MeHMeTHiLMi/Desktop/web_programlama/javascript/dom_dokuman/index.html sitenin URL'si
// veri = window.document.images;
// console.log(veri) // HTMLCollection [] isimli bir ögede sitedeki varsa resimler görüntülenebilir
// veri = window.document.forms;
// console.log(veri) // HTMLCollection [form#addTaskForm, addTaskForm: form#addTaskForm] isimli bir ögede sitedeki varsa formlar görüntülenebilir
// veri = window.document.forms[0].id;
// console.log(veri) // varsa formun id si -> addTaskForm
// veri = window.document.forms[0].method;
// console.log(veri) // varsa formun methodu -> get
// veri = window.document.forms[0].action;
// console.log(veri) // varsa formun action u -> yoksa file:///C:/Users/MeHMeTHiLMi/Desktop/web_programlama/javascript/dom_dokuman/index.html , varsa action ismi 
// veri = window.document.scripts;
// console.log(veri) // sitede kullanılan scriptleri HTMLCollection(3) [script, script, script] ögesi içinde listeler
// veri = window.document.scripts[2];
// console.log(veri) // sitede kullanılan [index no] da bulunan scripti listelemek için

// //! ELEMENT SEÇİMİ

// //? Tekli Seçim

// //* document.getElementById();

// let veri;
// veri = document.getElementById('header');
// console.log(veri) // <h2 class="app-title" id="header">Todo List</h2>
// veri = document.getElementById('header').id;
// console.log(veri) // header
// veri = document.getElementById('header').className;
// console.log(veri) // app-title

// veri = document.getElementById('header');
// console.log(veri) // <h2 class="app-title" id="header">Todo List</h2>
// //* veri = veri.id;
// console.log(veri) // header
// //* veri = veri.className;
// console.log(veri) // app-title

// veri = veri.style.color = "blue"; // h2 başlığın rengi mavi oldu
// //* veri = veri.style.fontSize = "50px"; // h2 başlığın fontu 50px oldu
// //* veri = veri.style.fontWeight = "bold"; // h2 başlığın fontu 50px oldu
// //* veri = veri.style.display = "none"; // h2 başlığın görünürlüğü kapandı

// document.getElementById("header").innerText = "Yapılacaklar"; // başlık Yapılacaklar olarak değiştirildi

// document.getElementById('header').innerText = "<b>ToDo List</b>"; // başlık <b>ToDo List</b> olarak değişti

// document.getElementById('header').innerHTML = "<b>ToDo List</b>"; // başlık kalın yazıyla ToDo List olarak değişti

// //* document.querySelector();

// console.log(document.querySelector("#header")); //* id ye göre seçim için
// console.log(document.querySelector(".card-header")); //* class'a göre seçim için
// console.log(document.querySelector("div")); //* etikete göre seçim için

// document.querySelector("li").style.color = "blue"; // listedeki ilk elemanın rengi mavi oldu
// document.querySelector("li:last-child").style.color = "yellow"; // listedeki son elemanın rengi sarı oldu
// document.querySelector("li:nth-child(2)").style.color = "red"; // listedeki 2.sıradaki elemanın rengi kırmızı oldu

// document.querySelector("li").className = "list-group-item list-group-item-danger"; // ilk elemanın class ının değiştirilmesi
// document.querySelector("li").classList.add("active"); // ilk elemanın classına active in eklenmesi

// //? Çoklu Seçim

// //* document.getElementsByClassName();

// let veri;
// console.log(veri) //undefined

// veri = document.getElementsByClassName("list-group-item");
// console.log(veri) // sayfada belirtilen classa sahip tüm elemanlar görüntülenir
// //* veri = document.getElementsByClassName("list-group-item")[0];
// //* console.log(veri) // sayfada belirtilen classa sahip index no daki eleman görüntülenir

// veri = veri[2];
// console.log(veri) // sayfada belirtilen classa sahip index no daki eleman görüntülenir

// //* veri[1].style.fontSize = "30px";
// //* veri[1].style.color = "red";
// //* veri[2].style.textContent = "new item";

// for (let i = 0; i<veri.length; i++){
//     console.log(veri[i].style.color = "orange");
//     console.log(veri[i].textContent = "new item");
// }

// //* document.getElementsByTagName();

// veri = document.getElementsByTagName("li");
// console.log(veri) // sayfada belirtilen etikete sahip tüm elemanlar görüntülenir
// veri = document.getElementsByTagName("a");
// console.log(veri) // sayfada belirtilen etikete sahip tüm elemanlar görüntülenir
// veri = document.getElementById("task-list").getElementsByTagName("a");
// console.log(veri) // belirtilen id veya class ın içinde bulunan tüm etiketler görüntülenir

// //* document.querySelectorAll();

// veri = document.querySelectorAll("li");
// console.log(veri) // sayfada belirtilen etikete sahip tüm elemanlar Nodelist olarak görüntülenir. içerisindeki bazı methodlar kullanılabilir.

// veri.forEach(function(item,index){
//     // console.log(item);
//     item.textContent=`${index} - item`;
// });

// //! ELEMENTLER ÜZERİNDE GEZİNME

// let value;

// const todoList = document.querySelector(".list-group");
// value = todoList;
// console.log(value) // list-group classındaki tüm elementler görüntülenir

// const todo = document.querySelector(".list-group-item:nth-child(2)");
// value = todo;
// console.log(value) // list-group classında yer alan 2.sıra yani indexno1 deki element görüntülenir

// const card = document.querySelector(".card");
// value = card;
// console.log(card) // card classında yer alan tüm elementler görüntülenir

// //* Child Nodes

// value = todoList.childNodes;
// console.log(value) // list-group classındaki tüm öğeler(textler dahil) NodeList olarak görüntülenir

// value = todoList.children;
// console.log(value) // list-group classındaki tüm elementler(textler hariç) HTML Collection olarak görüntülenir

// value = todoList.children[0];
// console.log(value) // list-group classında index noda yer alan element görüntülenir

// value = todoList.children[todoList.children.length - 1];
// console.log(value) // list-group classında yer alan en sondaki element görüntülenir

// value = todoList.children[1].textContent = "değişen madde" // list-group classında index no da yer alan elementin texti değiştirildi

// value = card;
// console.log(card) // card classında yer alan tüm elementler görüntülenir

// value = card.children;
// console.log(value) // card classındaki tüm elementler(textler hariç) HTML Collection olarak görüntülenir

// value = card.children[1].children[0].textContent = "Merhaba !"; // card classında iç içe index no da yer alan elementin texti değiştirildi

// value = todoList;
// value = todoList.children[0];
// console.log(value) // list-group classında index noda yer alan element görüntülenir

// value = todoList.firstElementChild;
// console.log(value) // list-group classındaki ilk element görüntülenir

// value = todoList.lastElementChild;
// console.log(value) // list-group classındaki son element görüntülenir

// value = todoList.children.length;
// console.log(value) // list-group classındaki element sayısı görüntülenir

// value = todoList.childElementCount;
// console.log(value) // list-group classındaki element sayısı görüntülenir

// value = card;
// console.log(value) // card classında yer alan tüm elementler görüntülenir

// value = card.parentElement;
// console.log(value) // card classının yer aldığı ana,kapsayıcı,parent,bir üst element (çocuktan babaya) görüntülenir

// value = card.parentElement.parentElement;
// console.log(value) // card classının yer aldığı ana,kapsayıcı,parent,iki üst element (çocuktan dedeye) görüntülenir

// value = todo;
// console.log(value); // list-group classında yer alan 2.sıra yani indexno1 deki element görüntülenir

// value = todo.previousElementSibling;
// console.log(value); // list-group classında yer alan 1.sıra yani indexno0 daki element görüntülenir

// value = todo.nextElementSibling;
// console.log(value); // list-group classında yer alan 3.sıra yani indexno2 deki element görüntülenir

// value = todo.nextElementSibling.nextElementSibling;
// console.log(value); // list-group classında yer alan 4.sıra yani indexno3 deki element görüntülenir

// value = todo.previousElementSibling.previousElementSibling;
// console.log(value); // null -> çünkü zaten 2.sıra indexno1 deki eleman seçiliydi -1 index no yok

// //! ELEMENT OLUŞTURMA

// const li = document.createElement("li");
// console.log(li) // <li></li>

// //? add class

// li.className = "list-group-item list-group-item-secondary";
// console.log(li) // <li class="list-group-item list-group-item-secondary"></li>
// //* li.id = ""; ile id eklemesi de yapılabilir.

// //? add attribute
// li.setAttribute("title","new item");
// console.log(li) // <li class="list-group-item list-group-item-secondary" title="new item"></li>
// li.setAttribute("data-id","5");
// console.log(li) // <li class="list-group-item list-group-item-secondary" title="new item" data-id="5"></li>

// const text = document.createTextNode("New item : Todo 5");
// li.appendChild(text);
// console.log(li) // <li class="list-group-item list-group-item-secondary" title="new item" data-id="5">New item : Todo 5</li>

// const a = document.createElement("a");
// a.setAttribute("href","#");
// a.className = "delete-item float-right";
// a.innerHTML = '<i class="fas fa-times"></i>';

// li.appendChild(a);
// console.log(li) // <li class="list-group-item list-group-item-secondary" title="new item" data-id="5">New item : Todo 5<a href="#" class="delete-item float-right"><i class="fas fa-times"></i></a></li>

// document.querySelector("#task-list").appendChild(li);


// //! ELEMENT SİLME

// const taskList = document.querySelector("#task-list");
// console.log(taskList) // task-list idsine sahip tüm elemanlar ve içerikleri gösterilir

// //? remove

// //* taskList.remove(); // içeriklerin silinmesi sayfada görünmez

// //* child Nodes

// //* taskList.childNodes[2].remove(); // tüm elemanların içerisindeki indexno2 deki ögenin silinmesi. tercih edilmez.

// //* children

// //* taskList.children[3].remove(); // task-list idsine sahip elemanın içinde yer alan indexno3 teki ögenin silinmesi.

// //* removeChild

// //* taskList.removeChild(taskList.children[3]); // task-list idsine sahip elemanın içinde yer alan indexno3 teki ögenin silinmesi.

// //* delete Attribute Attribute silme

// //* taskList.children[3].removeAttribute("class"); // task-list idsine sahip elemanın içinde yer alan indexno3 teki ögenin class silinmesi.

// for (let i = 0; i<taskList.children.length; i++){
//     taskList.children[i].removeAttribute("class"); // task-list idsine sahip elemanın içinde yer alan tüm öğelerin tek seferde classlarının silinmesi.
// }

// //! ELEMENT GÜNCELLEME

// const cardHeader = document.querySelector(".card-header");
// console.log(cardHeader)

// const h2 = document.createElement("h2");
// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("Yeni Listeler"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);


// //? Class Güncelleme

// const taskList = document.querySelector("#task-list");

// let value;

// link = taskList.children[0].children[0];
// value = link.className;
// console.log(value) // delete-item float-right

// value = link.classList;
// console.log(value) // DOMTokenList(2) ['delete-item', 'float-right', value: 'delete-item float-right']

// value = link.classList[0];
// console.log(value) // delete-item

// link.classList.add("new");
// console.log(link) // delete-item float-right new

// link.classList.remove("new");
// console.log(link) // delete-item float-right

// //? Attribute güncelleme

// value = link.getAttribute("href");
// console.log(value) // #
// value = link.setAttribute("href","https://instagram.com/");
// console.log(value) // undefined ama kodlarda link görünür

// value = link.hasAttribute("href");
// console.log(value) // true bahse konu attribute ün olup olmadığının kontrol edilmesi. varsa true yoksa false

// //! EVENT LISTENER VE EVENT OBJESİ

// const btn = document.querySelector("#btnDeleteAll");

// btn.addEventListener("click", function(){
//     console.log("Butona Tıklandı");
// });

// function btnClick(){
//     console.log("butona tıklandı")
// }
// btn.addEventListener("click",btnClick);

// const btn2 = document.querySelector("#btnAddNewTask");

// btn2.addEventListener("click",btnClick);

// btn.addEventListener("click",function(a){
//     a.preventDefault(); // Delete Allbutonu tıklandığında sayfa yenilenmemesi için yazılan fonksiyon
// });

// //? Event Objesi Özellikleri

// btn.addEventListener("click",function(a){
//     let value;
//     value = a;

//     a.preventDefault(); // Delete Allbutonu tıklandığında sayfa yenilenmemesi için yazılan fonksiyon
//     console.log(value); // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

//     value = a.target;
//     console.log(value); // Tıklanan buton -> <a id="btnDeleteAll" href="#" class="btn btn-outline-primary btn-sm delete-all float-right">Delete All</a>
//     value = a.target.id;
//     console.log(value); // Tıklanan buton id si-> btnDeleteAll
//     value = a.target.classList;
//     console.log(value); // Tıklanan buton a ait classlar listesi -> DOMTokenList(5) ['btn', 'btn-outline-primary', 'btn-sm', 'delete-all', 'float-right', value: 'btn btn-outline-primary btn-sm delete-all float-right']
//     value = a.type;
//     console.log(value); // Tıklanan butonun event tipi -> click
// });

// //? MOUSE EVENTLERİ

// const btn = document.querySelector("#btnAddNewTask");
// const ul = document.querySelector("#task-list");

// function run(event){
//     console.log(`Event type : ${event.type}`);
// }

// //* click event

// btn.addEventListener("click",run); // Event type : click tek tık
// ul.addEventListener("click",run); // Event type : click

// //* double click event

// btn.addEventListener("dblclick",run); // Event type : dblclick çift tık

// //* mouse down event

// btn.addEventListener("mousedown",run); // Event type : mousedown tıklandıktan sonra bırakana kadar

// //* mouse up event

// btn.addEventListener("mouseup",run); // Event type : mouseup tıklandıktan sonra bırakıldığında

// //* mouse enter event

// //* btn.addEventListener("mouseenter",run); // Event type : mouseenter butonun üzerine gelindiğinde

// //* mouse leave event

// //* btn.addEventListener("mouseleave",run); // Event type : mouseleave butonun üzerinden ayrıldığında

// //* mouse over event

// ul.addEventListener("mouseenter",run); // Event type : mouseenter butonun üzerine gelindiğinde
// ul.addEventListener("mouseover",run); // Event type : mouseenter

// //* mouse out event

// ul.addEventListener("mouseleave",run); // Event type : mouseleave butonun üzerinden ayrıldığında
// ul.addEventListener("mouseout",run); // Event type : mouseout

// //* mouse move

// ul.addEventListener("mousemove",run); // Event type : mousemove buton üzerine gelindiğindeki hareket sayısı

// //? KEYBOARD EVENTLERİ

// const text = document.getElementById("txtTaskName");

// function run(e){
//     console.log(e.type);
//     console.log(e.target.value);
// }

// //* focus event

// text.addEventListener("focus",run); // focus -> input alanına tıklandığında

// //* blur event

// text.addEventListener("blur",run); // blur -> input alanında bir yere tıklandığında

// //* paste event

// text.addEventListener("paste",run); // paste -> input alanına bir şey yapıştırıldığında

// //* copy event

// text.addEventListener("copy",run); // copy -> input alanındaki verinin tamamını yada bir kısmını kopyaladığımzda

// //* cut event

// text.addEventListener("cut",run); // cut -> input alanındaki verinin tamamını yada bir kısmını kestiğimizde

// //* select event

// text.addEventListener("select",run); // select -> input alanındaki verinin tamamını yada bir kısmını seçtiğimizde

// //* key down event

// text.addEventListener("keydown",run); // keydown -> input alanına klavyeden yazı yazarken bırakmama halinde

// //* key up event

// text.addEventListener("keyup",run); // keyup -> input alanında klavyeden yazı yazarken bırakıldığında

// //? EVENT BUBBLING

// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");

// form.addEventListener("click",function(){
//     console.log("form")
// });

// cardBody.addEventListener("click",function(){
//     console.log("card body")
// });

// card.addEventListener("click",function(){
//     console.log("card")
// });

// container.addEventListener("click",function(){
//     console.log("container")
// });

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation(); // olay kabarcıklanması event bubbling iptal edilmesi için tüm eventlere yazılmalıdır
// });

// //? EVENT CAPTURING

// form.addEventListener("click",function(){
//     console.log("form")
// },true);

// cardBody.addEventListener("click",function(){
//     console.log("card body")
// },true);

// card.addEventListener("click",function(){
//     console.log("card")
// },true);

// container.addEventListener("click",function(){
//     console.log("container")
// },true);

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation(); // olay yakalama event capturing iptal edilmesi için tüm eventlere yazılmalıdır
// });


// const deleteItems = document.querySelectorAll(".fa-times");

// deleteItems.forEach(function(item){
//     item.addEventListener("click",function(e){
//         console.log(e.target)
//     });
// });

// const ul = document.querySelector("ul");

// ul.addEventListener("click",function(e){
//     console.log(e.target)
//     if (e.target.className === "fas fa-times") {
//         e.target.parentElement.parentElement.remove();
//     }
// });