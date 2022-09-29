//truy xuất phàn từ
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var n = document.getElementById("b1");
    var card1 = document.getElementsByClassName("card");
    // console.log(n);
    n.onclick = function () {
      // console.log("do you click oke?");
      // console.log(element);
      card1[0].classList.add("rightMove");
    };
  },
  false
);
