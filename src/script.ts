//ts-ignore
import "./style.css";
import * as _ from "lodash";

//перемешивает карты
function shuffle(arr: string[]) {

    var j: number, temp: string;
    for (var i:number = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

//удаляем детей
function removeChilds(node: HTMLElement) {
    var fc = node.firstChild;

    while (fc) {
        node.removeChild(fc);
        fc = node.firstChild;
    }
}

//раздаем карты в зависимости от уровня игры
function countCard(arr: string[]) {

    var shortArr: string[] = [];
    if (level === 1) {
        numberCard = 3;
    }
    if (level === 2) {
        numberCard = 6;
    }
    if (level === 3) {
        numberCard = 12;
    }
    //добавляем карты, чтобы получились пары
    shortArr = arr.slice(0, numberCard);
    shortArr = shuffle(shortArr.concat(shortArr));

    return shortArr;
}

function timeForShow(level: number) {

    if (level === 1) {
        return 500;
    }
    if (level === 2) {
        return 1000;
    }
    if (level === 3) {
        return 1800;
    }
}

function cardInit() {
    var valueCard: string[] = [];
    var shortCard: string[] = [];

    valueCard = shuffle(valueCardInit); //перемешиваем колоду

    shortCard = countCard(valueCard); //берем нужно количество карт

    itemNumber = numberCard * 2;
    valueCardSave = shortCard;

    // выводим рубашками вниз
    for (var it: number = 0; it < itemNumber+1; it++) {

        const card = document.createElement("div");
        card.classList.add("card");
        gallery?.appendChild(card);

        (card as any).style.background = `url("img/${valueCardSave[it]}.jpg")`;
    }
}

function showResult(res: string) {

    const textRes: any = document.querySelector(".result-text");
    const imgSvg: any = document.querySelector(".img-svg");

    clearTimeout(t);
    divContainerTimeValue.textContent = timeValue.textContent;

    resultWin.style.display = "block";

    textRes.textContent = res;
    imgSvg.src = (res != "Вы победили!") ? "img/gameover.svg" : "img/win.svg";

    removeChilds(gallery);

    game.classList.add("disabled");
    const buttons = containerLevel[0].children;
    for (let index: number = 0; index < buttons.length; index++) {
      // for (let button of buttons) {
        let button: any = buttons[index];
        button.style.border = "#ffffff";
    }
    level = 0;
    // divMain?.classList.remove("disabled");

}

function tick(){
    sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hrs++;
            }
    }
}

function add() {
    tick();
    timeValue.textContent = (min > 9 ? min : "0" + min)
            + ":" + (sec > 9 ? sec : "0" + sec);
            //(hrs > 9 ? hrs : "0" + hrs)+ ":" +
    timer();
}

function timer() {
  return (setTimeout(add, 1000));
}


//НАЧАЛО
const gallery: HTMLDivElement = document.querySelector(".gallery")!;
var itemNumber: number = 36;
// вся колода карт
var valueCardInit: string[] = [
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
];
var valueCardSave: string[] = [];
var numberCard: number;

var hrs: number = 0;
var min: number = 0;
var sec: number = 0;

const timeValue: any = document.querySelector(".time-value");

const buttonLevels = document.querySelectorAll(".level-number");
const containerLevel = document.querySelectorAll(".div-container-level");

var level: number; //уровень
var cl = 0; //счетчик открытых карт
var card1: string = "";
var result: string;
var t: any;

const divContainerTimeValue: any = document.querySelector(".div-container-time-value");
const resultWin: any = document.querySelector(".result");
const enter: any = document.querySelector(".enter");
const divMain: any = document.querySelector(".div-main");
const game: any = document.querySelector(".center");
const buttonsAgain: any = document.querySelectorAll(".button-again");

//раздаем карты
//cardInit();

//по клику переворачиваем карты
gallery?.addEventListener("click", (event) => {
    event.preventDefault();

    var j = 0;

    let eventCurrent = event.target as HTMLButtonElement;

    if ((eventCurrent.className === "card") && (eventCurrent.style.backgroundImage === "url(\"img/close_card.jpg\")")) {
    // if (event.currentTarget.className === "card") {
        var tempElement = event.target;
        for (var i = itemNumber; i > 0; i--) {
            if ((tempElement as HTMLButtonElement).previousElementSibling) {
                j++;
                tempElement = (tempElement as HTMLButtonElement).previousElementSibling;
            }
        }
        cl++;
        if (card1 === "") {
            card1 = valueCardSave[j];
        }
        (event.target as HTMLButtonElement).style.background = `url("img/${valueCardSave[j]}.jpg")`;

        if (cl === 2) {
            cl = 0;
            if (card1 === valueCardSave[j]) {
                result = "Вы победили!";
            } else {
                result = "Вы проиграли";
            }
            card1="";
            setTimeout(() => {
                showResult(result);
            }, 1000);
        }
    }
});

buttonLevels.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        const buttons: any = element.parentElement?.children;
            for (let index: number = 0; index < buttons.length; index++) {
                let button: any = buttons[index];
                button.style.border = "#ffffff";
                (element as any).style.border = "#241245 solid 3px";
                level = Number(element.textContent);
            }
    });
});

enter.addEventListener("click", (event) => {
    event.preventDefault();

    valueCardSave = [];
    cardInit();

    setTimeout(() => {

        for (var it: number = 0; it < itemNumber+1; it++) {

            const card: any = document.querySelectorAll(".card");
            for (it = 0; it < card.length-1; it++) {
                card[it].style.background = `url("img/close_card.jpg")`;
            }
        }

    }, timeForShow(level));

    timeValue.textContent = "00:00";
    min = 0;
    sec = 0;
    t = timer();

    divMain.classList.add("disabled");
    game.classList.remove("disabled");
});

buttonsAgain.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        removeChilds(gallery);

        game.classList.add("disabled");
        const buttons = containerLevel[0].children;
        for (let index: number = 0; index < buttons.length; index++) {
          // for (let button of buttons) {
            let button: any = buttons[index];
            button.style.border = "#ffffff";
        }
        level = 0;
        divMain?.classList.remove("disabled");

        if (resultWin.style.display = "block") {
          resultWin.style.display = "none";
        }
    })
});
