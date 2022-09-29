// console.log('tada')
// var a = 1
// var b = 2
// var c = a+b
// console.log(c);
// var diem = 2;
// if (diem < 4) {
//   console.log( "diem duoi trung binh");
// } else {console.log("ban can co gang them")}

// for in
// var student = {
//     name: 'leqdung',
//     age: 10,
//     hight: 163,
//     weight: 50,
//     maried: true,
// }
// for(var x in student){
//     console.log(x);
//     console.log(student[x]);
// }
// console.log();

// USE strict
// thêm loại của biến để tránh lỗi

//xử lý chuỗi
// var x = "iphonenokiasony";
// console.log(x.length);
// var vitri = x.indexOf("nokia"); //tim kiếm kỹ tự. Giống hàm search
// if (vitri != -1) {
//   console.log("tim thay o vi tri ky tu so: " + vitri);
//   x = x.replace("nokia", "samsung");
// } else console.log("khog tim thay");

// var y = "na, dung,le,y,nguyen,dung";
// var yNew = y.split(","); //split cat chuoi thanh mang
// console.log(yNew);

//Xử lý chuỗi
// let a = 8;
// let b = a.toString();
// console.log(b);
// let c = "A";
// let d = c.toLocaleLowerCase();
// console.log(d);

//anonymous function

// var c = function (x, y) {
//   return x + y;
// };
// var d = c(3, 5);
// console.log(typeof d);

//closure function

// function chao() {
//   var b = "Hello";
//   return function () {
//     console.log("cafe khong : " + b); //tao biến và 1 hàm bên trong hàm đó. Hàm bên trong sử dụng được cac biến đó
//   };
// }

// var c = chao();
// c(); //c là anonymous func
// console.log(c);

//CLASS
// function coffe(name, price, sugar) {
//   this.name;
//   this.price;
//   this.sugar;
// }

// var capuchino = coffe("capuchino", 200, 0.5);
// class dog {
//   dog(name, price, year) {
//     this.name = name;
//     this.price = price;
//     this.year = year;
//   }
// }
// let corgi = dog("corgi", 200, 3);
// console.log(corgi);

/* CONSTANT*/

// const GIA_COFFE_SUA_KHONG_DUONG = 10;
// GIA_COFFE_SUA_KHONG_DUONG += 1;
// console.log(GIA_COFFE_SUA_KHONG_DUONG);

/*MANG DU LIEU */
// var arr1 = [
//   {
//     name: "a",
//     age: "1998",
//   },
//   { name: "a", age: "2000" },
//   { name: "a", age: "1981" },
// ];
// for (var x in arr1) {
//   console.log(arr1[x].age);
// }

// TRUY CAP querySelector HTML
// var a = document.querySelector(".list-group-item");
// var b = document.querySelectorAll(".list-group-item");

// // a.innerHTML("change my html element");
// var c = document.querySelectorAll("phan tu duoc chon");
// console.log(a);
// console.log(b);

// var b = docment.querySelectorAll();

// Xử lý giao diện là xử lý các class
// var a = document.querySelectorAll(".btn");
// function func() {
//   const b = a[0].classList.remove("btn-outline-info");
// }
// a[1].addEventListener("click", function () {
//   a[0].classList.remove("n1");
// });

// console.log(a[2].classList.remove("btn-outline-info"));

//DOCUMENT READY
document.addEventListener(
  "DOMContentLoad",
  function () {
    //
  },
  false
);
//sự kiện click tên sư kiên.onclick() {...}
