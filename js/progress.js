let pgs = 0;

function fullBar() {
    if (pgs >= 100) {
        alert("ProgressBar заполнен");
    }
}

btn1.onclick = function() {
    pgs += 1;
    document.getElementById('progBar').style.width = pgs + "%";
    document.getElementById('progBar').innerHTML = pgs + "%";
    fullBar();
  };

  btn2.onclick = function() {
    pgs += 3;
    document.getElementById('progBar').style.width = pgs + "%";
    document.getElementById('progBar').innerHTML = pgs + "%";
    fullBar();
  };
  
btn3.onclick = function() {
    pgs += 7;
    document.getElementById('progBar').style.width = pgs + "%";
    document.getElementById('progBar').innerHTML = pgs + "%";
    fullBar();
  };