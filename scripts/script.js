//1 Задача
let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));

//2 Задача
let date = '2025-12-31';
console.log(date.replace(/-/g, '/'));

//3 Задача
let str1 = 'Я учу javascript!';
console.log(str1.substr(2,3));
console.log(str1.substr(6,10));

console.log(str1.substring(2,5));
console.log(str1.substring(6,16));

console.log(str1.slice(2,5));
console.log(str1.slice(6,16));

//4 Задача
let cub = [4, 2, 5, 19, 13, 0, 10];
    sum = 0;
    for (let i = 0; i < cub.length; i++) {
        sum += Math.pow(cub[i], 3);
    }
console.log(Math.round(Math.sqrt(sum)));

//5 Задача
let a = 3;
let b = 5;
    let c = a-b;
console.log(Math.abs(c));

//6 Задача
let dat = new Date();
let da = dat.getDate();
let mon = dat.getMonth();
    if (da < 10) {
    da = '0'.concat(da);
    }
        if (mon < 10) {
        mon = '0'.concat(mon);
        }
console.log("", dat.getHours(), ":", dat.getMinutes(), ":",dat.getSeconds(), " ", da, ".", mon+1, ".", dat.getFullYear());

//8 Задача
let phone = prompt("Введите номер телефона в международном формате 123 12 1231231");
    let reg = /[1-9]{1,3}\s*[0-9]{1,2}\s*[0-9]{7-9}/gi;
console.log(reg.test(phone));
