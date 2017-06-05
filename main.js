var i;
var view = {
  hideText: function () {
    var proj = document.getElementById('blog');
    var projChild = proj.children;
    for (i = 0; i < projChild.length; i += 1) {
      if (projChild[i].tagName !== 'H2' && projChild[i].tagName !== 'H3') {
        projChild[i].style.display = 'none';
      }
    }
  },
  toggleTxt: function (txt) {
    var text = document.getElementById(txt);
    if (text.style.display === 'none') {
      text.style.display = 'initial';
    } else {
      text.style.display = 'none';
    }
  }
};

var handlers = {
  setUpEvents: function () {
    var proj = document.getElementById('blog');
    proj.addEventListener('click', function (event) {
      var elementClicked = event.target;
      if (elementClicked.id === 'intro') {
        view.toggleTxt('intro-txt');
      } else if (elementClicked.id === 'src') {
        view.toggleTxt('src-txt');
      } else if (elementClicked.id === 'newdev') {
        view.toggleTxt('dev-txt');
      } else if (elementClicked.id === 'dsgn') {
        view.toggleTxt('dsgn-txt');
      } else if (elementClicked.id === 'js') {
        view.toggleTxt('js-txt');
      }
    });
  }
};

view.hideText();
handlers.setUpEvents();
