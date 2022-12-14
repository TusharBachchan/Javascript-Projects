const hour = document.querySelector('.hourValue');
const minute = document.querySelector('.minuteValue');
const second = document.querySelector('.secondsValue');

function setTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    if (h > 12) h = h - 12;
    hour.textContent = h;
    minute.textContent = m;
    second.textContent = s;
}
setInterval(() => {
    setTime();
}, 1000)

