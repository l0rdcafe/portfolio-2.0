function stickNav() {
  const nav = document.querySelector("#nav");
  const sticky = nav.offsetTop;
  const top = window.pageYOffset;
  const isSticky = nav.classList.contains("sticky");
  if (top > sticky) {
    document.querySelector(".main__banner__list__logo").style.display = "block";
    nav.classList.remove("slideInDown");
    nav.classList.add("sticky");
    nav.className += " animated bounceInLeft";
  } else if (isSticky) {
    document.querySelector(".main__banner__list__logo").style.display = "none";
    nav.classList.remove("sticky");
    nav.classList.remove("bounceInLeft");
    nav.classList.add("slideInDown");
  }
}

function scrollListener() {
  window.addEventListener("scroll", stickNav);
}

document.addEventListener("DOMContentLoaded", scrollListener);
