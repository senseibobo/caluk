function load() {
  let el = document.getElementById("masina");
  for (let child of el.children) {
    console.log("added");
    child.addEventListener("onclick", kliknut);
  }
}
function kliknut(n) {
  let p = document.getElementById("pisanje");
  if ("0123456789".includes(n)) p.value += n;
  else {
    if (n == "#") {
      check(p.value);
    }
    p.value = "";
  }
}

function check(val) {
  let p = document.getElementById("poruka");
  if (val == "1993") {
    document.getElementById("connor").style.visibility = "visible";
    document.getElementById("connor").style.display = "block";
    document.getElementById("yt").style.visibility = "hidden";
    document.getElementById("poruka").innerText = "";
  } else if (val == "129857") {
    document.getElementById("connor").style.visibility = "hidden";
    document.getElementById("connor").style.display = "none";
    document.getElementById("yt").style.visibility = "visible";
    document.getElementById("poruka").innerText = "";
  } else if (val == "54098") {
    document.getElementById("connor").style.visibility = "hidden";
    document.getElementById("connor").style.display = "none";
    document.getElementById("yt").style.visibility = "hidden";
    document.getElementById("poruka").innerHTML =
      "<h1><a href='https://www.google.com/maps/@44.6610863,20.9334678,3a,40.6y,228.63h,62.68t/data=!3m6!1e1!3m4!1smc5qwjoGyYpUFVK0qXvFmQ!2e0!7i13312!8i6656'>link</a>";
  }
}
