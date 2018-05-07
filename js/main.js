const nav = document.querySelector("#nav");
const sticky = nav.offsetTop;

function stickNav() {
  if (window.pageYOffset >= sticky) {
    document.querySelector(".main__banner__list__logo").style.display = "block";
    nav.classList.add("sticky");
  } else {
    document.querySelector(".main__banner__list__logo").style.display = "none";
    nav.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickNav);
