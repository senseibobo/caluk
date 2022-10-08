let correctAnswer = 0;
let currentIndex = 0;
let questions = [
    {
        q: "Koji je Markusov model u igrici 'Detroit: Become Human'?",
        a: [
            "RK200",
            "AX400",
            "RK800",
            "PL600"
        ],
        c: 0
    },
    {
        q: "Za kog lika iz igrice 'Metalni Zupcanik Uzdizanje: Osveta' odgovara pesma 'The Stains of Time'?",
        a: [
            "Senator Armstrong",
            "Jetstream Sam",
            "Sundowner",
            "Monsoon"
        ],
        c: 3
    },
    {
        q: "Koji boss u igrici 'Dark Souls 3' je objektivno najtezi?",
        a: [
            "Abyss Watchers",
            "Vordt of the Boreal Valley",
            "Slave Knight Gael",
            "Pontiff Sulyvahn"
        ],
        c: 0
    },
    {
        q: "Ko je kralj Redanie u toku desavanja igrice 'The Witcher 3: Wild Hunt'?",
        a: [
            "Foltest",
            "Radovid V",
            "Dijkstra",
            "Emhyr var Emreis"
        ],
        c: 1
    }
]

function loadQuestion(index) {
    let pitanje = document.getElementById("pitanje");
    let q = questions[index].q;
    pitanje.innerHTML = q;
    let odgovori = document.getElementsByClassName("odgovor");
    let i = 0;
    for(let odgovor of odgovori) {
        odgovor.innerHTML = questions[index].a[i];
        i++;
    }
    correctAnswer = questions[index].c;
}

function pressed(index) {
    if(index == correctAnswer) {
        currentIndex ++;
        if(currentIndex < questions.length) {
            loadQuestion(currentIndex)
        } else {
            document.getElementById("pitanje").innerHTML = "SVAKA CAST! 31987";
            document.getElementById("choices").style.visibility = "hidden";
        }
    } else {
        currentIndex = 0;
        loadQuestion(currentIndex);
    }
}