//---------------------------------------DEFINITIONER---------------------------------------//

let cards = Math.round(Math.random()* 52)
let listOfCards = [];
let counter = 0;
let list1 = [];
let listWithLists = []
//---------------------------------------FUNKTIONER---------------------------------------//


function randomStack() {
    document.getElementById("submit").disabled = false
    randomCards = []
    trueOrFalse = false
    let cards = Math.round(Math.random()* 52)
    while (cards > 0) {
        i = Math.round(Math.random()* cards) + 1;
        randomCards.push(i);
        cards = cards - i;
    }
    randomCards = randomCards.sort(function(a, b) {
        return a - b;
    });
    document.getElementById("lista").value = randomCards
}

function ownInput() {
    document.getElementById("submit").disabled = true
    document.getElementById("skip").disabled = false
    document.getElementById("continue").disabled = false
    trueOrFalse = false
    let sum = 0
    let txt1List = []
    txt1 = document.getElementById("lista")
    txt1List = txt1.value.split(",")
    for (let i = 0; i < txt1List.length; i++) {
        sum += Number(txt1List[i])
    }
    if (sum > 52) {
        console.log("Du kan inte använda fler än 52 kort.")
    }
    else {
        listOfCards = txt1List
        listOfCards = listOfCards.sort(function(a, b) {
            return a - b;
        });
        listWithLists.push(listOfCards)
        console.log(listOfCards)
    }
}

function nextStack() {
    counter += 1
    list1 = listOfCards
    let newList = []

    for (let i = 0; i < listOfCards.length; i++) {
        if (listOfCards[i] > 1 ) {
            newList.push(listOfCards[i]-1)
        }
    }

    newList.push(listOfCards.length)
    listOfCards = newList
    listOfCards = listOfCards.sort(function(a, b) {
        return a - b;
      });   

    console.log(listOfCards)

    if (listOfCards.toString() == list1.toString()) {
        document.getElementById("skip").disabled = true
        document.getElementById("continue").disabled = true
        document.getElementById("submit").disabled = false
        console.log("Två drag upprepade sig efter varandra och patiansen gick ut. Grattis! Upptäckt efter " + counter + " drag.")
        document.getElementById("text").innerText = "Två drag upprepade sig efter varandra och patiansen gick ut. Grattis! Upptäckt efter " + counter + " drag."
        var paragraph = document.getElementById("text");
        paragraph.classList.toggle("highlight");
        listWithLists = []
        counter = 0
    }
    else if (listWithLists.toString().includes(listOfCards.toString())) {
        document.getElementById("skip").disabled = true
        document.getElementById("continue").disabled = true
        document.getElementById("submit").disabled = false
        counter += 1
        console.log("Patiansen har upprepats och kan därför inte gå ut. Upptäckt efter " + counter + " drag.")
        document.getElementById("text").innerText = "Patiansen har upprepats och kan därför inte gå ut. Upptäckt efter " + counter + " drag." 
        var paragraph = document.getElementById("text");
        paragraph.classList.toggle("highlight");
        trueOrFalse = true
        listWithLists = []
        counter = 0
    }
    listWithLists.push(listOfCards)
}

function skip() {
    while (listOfCards.toString() != list1.toString() && trueOrFalse == false) {
        nextStack()
    }
    listWithLists = []
}

function reset() {
    listWithLists = []
    listOfCards = []
    list1 = []
    counter = 0
    document.getElementById("lista").value = " "
    document.getElementById("text").innerText = ""
    console.clear()
    var paragraph = document.getElementById("text");
    paragraph.classList.remove("highlight");
}

function textChange() {
    document.getElementById("submit").disabled = false
}

//----------------------------------------------MAIN PROGRAM----------------------------------------------//
