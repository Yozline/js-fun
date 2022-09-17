const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);

const optimizeNumber = (n) =>  (n + "").length === 2 ? n : "0" + n;

const data = [];
const colors = ["#2EFF9D","#FF00CC","#FF195B","#FFFF69","#2EF2DF"];
let n = Math.floor(getNumber(41, 1) /6) *6;
while(n--) {
    data.push(getNumber(100));
}
console.log(data);

const box = document.querySelector(".box");

for (let val of data) {
    box.innerHTML += `<div class="card" style="background-color: ${colors[getNumber(colors.length-1)]}">${optimizeNumber(val)}</div>`;
}