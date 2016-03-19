document.getElementById("shirt-left").addEventListener("click", function(e) {
  document.getElementById("shirt-content")
    .getElementsByClassName("clothes-content")[0]
      .getElementsByTagName("img")[0].className += " outgoing";
  document.getElementById("shirt-content")
    .getElementsByClassName("clothes-content")[0].innerHTML += '<img class="shirt ingoing" src="assets/images/shirt5.png" alt="Men\'s shirt">';

  
  var goLeft = new ui.Tween({
    values: {
        x: -1000
    }
  });

  var outgoing = new ui.Actor('#shirt-content .clothes-content img.outgoing');
  outgoing.start(goLeft);
  var ingoing = new ui.Actor('#shirt-content .clothes-content img.ingoing');
  ingoing.start(goLeft);
});

document.getElementById("pants-right").addEventListener("click", function(e) {
  document.getElementById("pants-content")
    .getElementsByClassName("clothes-content")[0]
      .getElementsByTagName("img")[0].className += " outgoing";
  document.getElementById("pants-content")
    .getElementsByClassName("clothes-content")[0].innerHTML += '<img class="pants ingoing" src="assets/images/pants2.png" alt="Men\'s shirt">';
      
  
  var goRight = new ui.Tween({
    values: {
        x: 1000
    }
  });

  var outgoing = new ui.Actor('#pants-content .clothes-content img.outgoing');
  outgoing.start(goRight);
  var ingoing = new ui.Actor('#pants-content .clothes-content img.ingoing');
  ingoing.start(goRight);
});