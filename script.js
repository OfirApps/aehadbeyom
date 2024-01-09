var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}
function checkFullscreen() {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  ) {
    closeFullscreen();
  } else {
    openFullscreen();
  }
}

// // Change height attribute
// document.getElementById("styler").innerHTML = document
//   .getElementById("styler")
//   .innerHTML.replace(
//     "...",
//     document.getElementById("koteret").getAttribute("koteret") + " "
//   );

koteretslist = document.getElementsByClassName("koteret")

for (let i = 0; i < koteretslist.length; i++) {
  koteret = koteretslist[i].getAttribute("koteret")
    koteretslist[i].innerHTML = `<span class="title">${koteret}</span>` + koteretslist[i].innerHTML
}