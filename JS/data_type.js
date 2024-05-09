let year = 1990; // یک مقدار عددی
let name = "Alice"; // یک مقدار رشته‌ای
let isActive = true; // مقدار بولین
let uniqueId = Symbol("id");
let empty = null; // مقدار null
let notInitialized; // مقدار undefined

let numbers = [1, 2, 3, 4, 5]; // آرایه‌ای از اعداد

let person = {
    name: "Alice",
    age: 25
}; // یک شیء

//conver to string
let number = 42;
let str = String(number);
console.log(str); // -> "42"

//or
let num = 42;
let stri = num + "";
console.log(stri); // -> "42"

// لیترال‌ها و متغیرهای اولیه
let years = 1990;
let names = "Alice";
let Active = true;
console.log(year); // -> 1990
console.log(names); // -> Alice
console.log(Active); // -> true

// تبدیل انواع داده
let strin = String(year); // تبدیل به رشته
let numi = Number("123"); // تبدیل به عدد
let bool = Boolean("Hello"); // تبدیل به بولین

console.log(str); // -> "1990"
console.log(num); // -> 123
console.log(bool); // -> true

console.log(typeof bool);