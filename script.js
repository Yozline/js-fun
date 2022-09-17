const getNumber = (max = 11, min = 0) => Math.floor(Math.random() * (max - min) + min);

const optimizeNumber = (n) =>  (n + "").length === 2 ? n : "0" + n;

const data = [];
const colors = ["#2EFF9D","#FF00CC","#FF195B","#FFFF69","#2EF2DF"];
let n = Math.floor(getNumber(51, 6) /6) *6;
while(n--) {
    data.push(getNumber(100));
}
console.log(data);

const box = document.querySelector(".box");
box.innerHTML = "<div class=\"card\"></div>"

for (let val of data) {
    box.innerHTML += `<div class="card" style="background-color: ${colors[getNumber(colors.length)-1]}">${optimizeNumber(val)}</div>`;
}

function showTime(day = new Date(2023,0,1)) {

    let now = new Date();
    let d,h,m,s;
    let time = Math.floor((day - now) / 1000);
    m = Math.floor(time / 60);
    s = time - m * 60;
    h = Math.floor (m/60);
    m -= h *60;
    d = Math.floor(h / 24);
    h -= d*24;
    return `${d} д. ${h} ч. ${m} мин. ${s} сек.`
};
box.firstElementChild.innerText = `До нового года осталось ${showTime()}`;
setInterval(function() {
    box.firstElementChild.innerText = `До нового года осталось ${showTime()}`;
}, 1000);

console.log(showTime());