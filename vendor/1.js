// document.addEventListener(
//   "DOMContentLoaded",
//   function () {
//     //
//     var tamgiac = document.getElementsByClassName("tamgiac");
//     var tamgiac = tamgiac[0];
//     var danhsach = document.getElementsByClassName("danhsach");
//     var danhsach = danhsach[0];
//     // xu ly su kien dung onclick va toggle class cho tam giac doi mau
//     tamgiac.onclick = function () {
//       // this.style.color = "white"; // tác dụng và thuộc tính style.color
//       this.classList.toggle("tamgiactrang");
//       danhsach.classList.toggle("ra");
//     };
//   },
//   false
// );
// Ket thuc bat su kien nut fb

// Lấy dữ liệu từ html5

document.addEventListener(
  "DOMContentLoaded",
  function () {
    //
    var n1 = document.getElementsByClassName("nuttongquat");
    // console.log(n1);
    for (let i = 0; i < n1.length; i++) {
      n1[i].onclick = function () {
        // console.log(n1);
        console.log(this.getAttribute("data-matkhau"));
      };
    }
  },
  false
);
