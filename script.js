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
    reveal("connor");
  } else if (val == "129857") {
    reveal("yt");
  } else if (val == "54098") {
    reveal("maps");
  }
}

function reveal(id) {
  for(let b of document.getElementById("stvari").children) {
    if(b.id == id) {
      b.style.visibility = "visible";
      b.style.display = "block";
    } else {
      b.style.visibility = "hidden";
      b.style.display = "none";
    }
  }
}
