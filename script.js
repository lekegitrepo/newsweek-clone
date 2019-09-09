var nav = document.getElementById("top-nav");
var menu = document.getElementById("bottom-nav");
var date = document.getElementById("date");

function widthUpdate() {
  var width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (width < 993) {
    nav.style.position = "fixed";
    nav.style.top = 0;
    menu.style.visibility = "hidden";
    date.style.visibility = "hidden";
    date.style.position = "absolute";
  } else {
    // nav.style.position = "absolute";
    nav.style.position = "relative"; //fixed
    nav.style.top = 100;
    menu.style.visibility = "visible";
    date.style.visibility = "visible";
    date.style.position = "relative";
  }
}

window.onresize = function(event) {
  widthUpdate();
};

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    nav.style.position = "fixed";
    menu.style.visibility = "hidden";
    date.style.visibility = "hidden";
    date.style.position = "absolute";
  } else {
    // nav.style.position = "absolute";
    nav.style.position = "relative"; //fixed
    nav.style.top = 100;
    menu.style.visibility = "visible";
    date.style.visibility = "visible";
    date.style.position = "relative";
  }
};
