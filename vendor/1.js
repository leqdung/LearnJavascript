//truy xuất phàn từ
// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     var n = document.getElementById("b1");
//     var card1 = document.getElementsByClassName("card");
//     // console.log(n);
//     n.onclick = function () {
//       // console.log("do you click oke?");
//       // console.log(element);
//       card1[0].classList.add("rightMove");
//     };
//   },
//   false
// );

//trước khi truy xuất phải load document
document.addEventListener(
  //thêm 1 phần tủ nghe sự kiện
  "DOMContentLoaded", //yêu cầu load dom trước
  function () {
    // truy xuất 1 phần tử
    var x = document.getElementById("nut1");
    var khoi = document.getElementsByClassName("card");
    // console.log(x);
    x.onclick = function () {
      // console.log("click");
      khoi[0].classList.toggle("diphai");
    };
  },
  false
);
