document.addEventListener(
  "DOMContentLoaded",
  function () {
    //
    var nut = document.getElementById("nuthieuung");
    var trangthai = "lan1";
    var khoi = document.getElementById("kcd");
    nut.onclick = function () {
      // console.log("click on nut");
      if (trangthai == "lan1") {
        console.log(trangthai);
        trangthai = "lan2";
        khoi.classList.add("chieuso1");
      } else if (trangthai == "lan2") {
        console.log(trangthai);
        trangthai = "lan1";
        khoi.classList.remove("chieuso1");
      }
    };
  },
  false
);
