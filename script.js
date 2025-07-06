 window.onload = function () {
      setTimeout(function () {
        document.getElementById("popup").style.display = "flex";
      }, 3000);
    }

    function closePopup() {
      document.getElementById("popup").style.display = "none";
    }