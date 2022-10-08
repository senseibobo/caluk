function load() {
  let el = document.getElementById("masina");
  for (let child of el.children) {
    console.log("added");
    child.addEventListener("onclick", kliknut);
  }
  reveal("zgrada");
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
    reveal("yt");
  } else if (val == "54098") {
    reveal("kviz");
  }else if(val == "84259") {
    reveal("maps")
  }
  else if (val == "31987") {
    reveal("checkkutija")
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
