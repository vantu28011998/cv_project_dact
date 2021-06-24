var i = 0;
function move(appbar,value,asycSec) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById(appbar);
    var width = 5;
    var id = setInterval(frame, asycSec);
    function frame() {
      if (width >= value) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width+ "%";
        document.getElementById(appbar +'-value').innerHTML = width + "%";
      }
    }
  }
}
onload = function(){move("java",85,20);
i=0;
move("dart",70,35);
i=0;
move("python",65,50);
i=0;
move("english",70,40);
i=0;
move("japanese",65,45);
}