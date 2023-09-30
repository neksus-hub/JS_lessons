"use strict";
// Блок переменных

let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие экраны нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
const rollback = 14;
let fullPrice = 100000;
let servicePrecentPrice;
let allServicePrices;
let firstSymbol;

//Блок объявления функций

const getRollBackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price < 15000 && price > 0) {
    return "Скидка не предусмотрена";
  } else if (price <= 0) {
    return "Что-то пошло не так";
  }
};

const gallServicePrices = function () {
  allServicePrices = servicePrice1 + servicePrice2;
};
gallServicePrices();

function getFullPrice() {
  fullPrice = screenPrice + allServicePrices;
}
getFullPrice();

function ucFirst(str) {
  if (!str) return str;
  let strTrim = str.trim();
  let ucFirstSymbolTitle = strTrim[0].toUpperCase() + strTrim.slice(1);
  return ucFirstSymbolTitle;
}

//Функциональный блок
screens = screens.toLowerCase();

fullPrice = screenPrice + servicePrice1 + servicePrice2;

servicePrecentPrice = fullPrice - Math.floor((fullPrice / 100) * rollback);

// мусорный блок
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(ucFirst(title));
console.log(fullPrice);
console.log(allServicePrices);
console.log(getRollBackMessage(fullPrice));
console.log(screens);
console.log(screens.length);
console.log(screens.split(","));
console.log(screenPrice);
console.log(
  "Стоимость экрана: " +
    screenPrice +
    "₽/" +
    Math.floor(screenPrice / 96.3) +
    "$/" +
    Math.floor(screenPrice / 2.62) +
    " гривен/" +
    Math.floor(screenPrice / 13.2) +
    " юаней"
);
console.log(rollback);
console.log(
  "Стоимость разработки сайта: " +
    fullPrice +
    "₽/" +
    Math.floor(fullPrice / 96.3) +
    "$/" +
    Math.floor(fullPrice / 2.62) +
    " гривен/" +
    Math.floor(fullPrice / 13.2) +
    " юаней"
);
console.log(Math.floor(fullPrice * (rollback / 100)));
console.log(service1);
console.log(servicePrice1);
console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service2);
console.log(servicePrice2);
console.log(fullPrice);
console.log(servicePrecentPrice);
