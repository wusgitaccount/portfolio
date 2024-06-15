  var bar = document.getElementById('progress-bar');
    window.onscroll = function (e) {
    var vheight = document.body.offsetHeight - window.innerHeight;
    var barHeight = (window.pageYOffset * 100 / vheight)
    bar.style.height = barHeight + '%'
    }
function generate() {

var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

function populate(a) {
  for ( var i = 0; i < 6; i++ ) {
    var x = Math.round( Math.random() * 10 );
    var y = hexValues[x];
    a += y;
  }
  return a;
}

var newColor1 = populate('#');
var newColor2 = populate('#');
var angle = 0;

var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

document.getElementById('progress-bar').style.background = gradient;
document.getElementById('body').style.background = newColor1;
document.getElementById("p").style.background = gradient;
$('#p').css('-webkit-background-clip','text');
}

document.onload = generate();
