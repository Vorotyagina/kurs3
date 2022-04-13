import "../style.css";

function shuffle(arr) {
    //перемешивает карты
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function countCard(arr) {
    //раздаем карты в зависимости от уровня игры
    var shortArr = [];

    if (level === 1) {
        numberCard = 3;
    }
    if (level === 2) {
        numberCard = 6;
    }
    if (level === 3) {
        numberCard = 12;
    }
    shortArr = arr.slice(0, numberCard);
    shortArr = shuffle(shortArr.concat(shortArr));

    return shortArr;
}

function cardInit() {
    var valueCard = [];
    var shortCard = [];

    valueCard = shuffle(valueCardInit); //перемешиваем колоду
    shortCard = countCard(valueCard); //берем нужно количество карт

    itemNumber = numberCard * 2;
    for (var it = 1; it < itemNumber + 1; it++) {
        const card = document.createElement("div");
        card.classList.add("card");
        gallery.appendChild(card);
    }

    valueCardSave = shortCard;
}

function removeChilds(node) {
    var fc = node.firstChild;

    while (fc) {
        node.removeChild(fc);
        fc = node.firstChild;
    }
}

//выводим карты рубашками вверх
const gallery = document.querySelector(".gallery");
var itemNumber = 36;
var valueCardInit = [
    "6 бубны",
    "6 крести",
    "6 пики",
    "6 черви",
    "7 бубны",
    "7 крести",
    "7 пики",
    "7 черви",
    "8 бубны",
    "8 крести",
    "8 пики",
    "8 черви",
    "9 бубны",
    "9 крести",
    "9 пики",
    "9 черви",
    "10 бубны",
    "10 крести",
    "10 пики",
    "10 черви",
    "валет бубны",
    "валет крести",
    "валет пики",
    "валет черви",
    "дама бубны",
    "дама крести",
    "дама пики",
    "дама черви",
    "король бубны",
    "король крести",
    "король пики",
    "король черви",
    "туз бубны",
    "туз крести",
    "туз пики",
    "туз черви",
]; //массив с порядковыми номерами карт;
var valueCardSave = [];
var numberCard;

cardInit();

//по клику переворачиваем карты

gallery.addEventListener("click", (event) => {
    event.preventDefault();

    var j = 0;

    if (event.target.className === "card") {
        var tempElement = event.target;
        for (var i = itemNumber; i > 0; i--) {
            if (tempElement.previousElementSibling) {
                j++;
                tempElement = tempElement.previousElementSibling;
            }
        }
        event.target.style.background = `url("img/${valueCardSave[j]}.jpg")`;
    }
});

const buttonLevels = document.querySelectorAll(".level-number");
const containerLevel = document.querySelectorAll(".div-container-level");

var level;

buttonLevels.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        const buttons = element.parentElement.children;
        for (let button of buttons) {
            button.style.border = "#ffffff";
        }
        element.style.border = "#241245 solid 3px";
        level = Number(element.textContent);
    });
});

const enter = document.querySelector(".enter");
const divMain = document.querySelector(".div-main");
const game = document.querySelector(".center");
const buttonAgain = document.querySelector(".button-again");

enter.addEventListener("click", (event) => {
    event.preventDefault();
    valueCardSave = [];
    cardInit();
    divMain.classList.add("disabled");
    game.classList.remove("disabled");
});

buttonAgain.addEventListener("click", (event) => {
    event.preventDefault();

    removeChilds(gallery);

    game.classList.add("disabled");
    const buttons = containerLevel[0].children;
    for (let button of buttons) {
        button.style.border = "#ffffff";
    }
    level = 0;
    divMain.classList.remove("disabled");
});
