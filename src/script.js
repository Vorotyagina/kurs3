function shuffle(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
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
console.log(valueCardInit);
var valueCard = shuffle(valueCardInit); //перемешанная колода;
console.log(valueCard);

for (var it = 1; it < itemNumber + 1; it++) {
    const card = document.createElement("div");
    card.classList.add("card");
    gallery.appendChild(card);
}

const cardActive = document.querySelectorAll(".card");
//по клику переворачиваем карты
cardActive.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
        var j = 0;
        var tempElement = element;
        for (var i = 36; i > 0; i--) {
            if (tempElement.previousElementSibling) {
                j++;
                tempElement = tempElement.previousElementSibling;
            }
        }
        event.target.style.background = `url("img/${valueCard[j]}.jpg")`;
    });
});
