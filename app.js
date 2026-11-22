// Задание 1. Начисление баллов за заправку в Газпроме

const cardType = "GOLD";
const liters = 10;

let points = 0;

if (cardType === "SILVER") {
    points = liters * 0.5;
} else if (cardType === "GOLD") {
    points = liters * 0.75;
} else if (cardType === "PLATINUM") {
    points = liters * 1;
}

console.log("Баллы за заправку");
console.log("Тип карты:", cardType);
console.log("Количество литров:", liters);
console.log("Начислено баллов:", points);


// Задание 2. Расчёт количества топлива в Газпроме

const amountForFuel = 1400;
const fuelType = "АИ-92";

let pricePerLiter = 0;

// Условные цены за литр в somах
if (fuelType === "АИ-92") {
    pricePerLiter = 70;
} else if (fuelType === "АИ-95") {
    pricePerLiter = 75;
} else if (fuelType === "АИ-98") {
    pricePerLiter = 80;
} else if (fuelType === "ДТ") {
    pricePerLiter = 73;
} else if (fuelType === "Газ") {
    pricePerLiter = 35;
}

console.log("\nЗадание 2. Количество топлива");

if (pricePerLiter > 0) {
    const fuelLiters = amountForFuel / pricePerLiter;

    console.log("Тип топлива:", fuelType);
    console.log("Цена за литр:", pricePerLiter, "сом");
    console.log("Можно купить:", fuelLiters, "л");
} else {
    console.log("Неизвестный тип топлива");
}


// Задание 3. Конвертацие валют

const amountForExchange = 10_000;
const currency = "USD";

let exchangeRate = 0;

// Курсы USD и CNY из задания. Курсы EUR и RUB условные.
if (currency === "USD") {
    exchangeRate = 88;
} else if (currency === "EUR") {
    exchangeRate = 96;
} else if (currency === "RUB") {
    exchangeRate = 1;
} else if (currency === "CNY") {
    exchangeRate = 10;
}

console.log("\nЗадание 3. Конвертер валют");

if (exchangeRate > 0) {
    const result = Math.round(amountForExchange / exchangeRate);

    console.log("Курс:", exchangeRate, "сом за 1", currency);
    console.log("Сумма после конвертации:", result, currency);
} else {
    console.log("Неизвестная валюта");
}