document.addEventListener(
  "DOMContentLoaded",
  function () {
    //
    var nut = document.getElementById("nuthieuung");
    var khoi = document.getElementById("kcd");
    var trangthai = "lan1";
    nut.onclick = function () {
      // console.log("click on nut");
      if (trangthai == "lan1") {
        console.log(trangthai);
        trangthai = "lan2";
        khoi.classList.add("chieuso1");
        khoi.classList.remove("ko-dong");
      } else if (trangthai == "lan2") {
        console.log(trangthai);
        trangthai = "lan1";
        khoi.classList.remove("chieuso1");
      }
    };
  },
  false
);
