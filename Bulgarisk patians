//---------------------------------------DEFINITIONER---------------------------------------//

let cards = Math.round(Math.random()* 52)
let listOfCards = [];
let counter = 0;
let list1 = [];
let listWithLists = []

//---------------------------------------FUNKTIONER---------------------------------------//

function randomStack() {
    listOfCards = []
    trueOrFalse = false
    let cards = Math.round(Math.random()* 52)
    while (cards > 0) {
        i = Math.round(Math.random()* cards) + 1;
        listOfCards.push(i);
        cards = cards - i;
    }
    listOfCards = listOfCards.sort(function(a, b) {
        return a - b;
    });
    listWithLists.push(listOfCards)
    console.log(listOfCards)
}

function ownInput() {
    trueOrFalse = false
    txt1 = document.getElementById("lista")
    listOfCards = txt1.value.split(",")
    listWithLists.push(listOfCards)
    console.log(listOfCards)

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
        console.log("Två drag upprepade sig efter varandra och patiansen gick ut. Grattis!")
    }
    else if (listWithLists.toString().includes(listOfCards.toString())) {
        counter += 1
        console.log("Patiansen har upprepats och kan därför inte gå ut. Upptäckt efter " + counter + " drag.")
        trueOrFalse = true
    }

    listWithLists.push(listOfCards)
}

function skip() {
    while (listOfCards.toString() != list1.toString() && trueOrFalse == false) {
        nextStack()
    }
}

//----------------------------------------------MAIN PROGRAM----------------------------------------------//
