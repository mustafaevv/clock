const hourArr = document.querySelector(".h");
const minArr = document.querySelector(".m");
const secArr = document.querySelector(".s");
const hourNum = document.querySelector(".hours");
const minNum = document.querySelector(".minutes");

const addZero = (n) => (n < 10 ? `0${n}` : n);

const time = new Date();
let hour = time.getHours() * 30;
let minut = time.getMinutes() * 6;
let second = time.getSeconds() * 6;

hourArr.style.transition = `1s linear`;
minArr.style.transition = `1s linear`;
secArr.style.transition = `1s linear`;

const clock = () => {
  second += 360 / 60;
  minut += 360 / 60 ** 2;
  hour += 360 / (60 ** 2 * 12);

  hourArr.style.transform = `rotate(${hour}deg)`;
  minArr.style.transform = `rotate(${minut}deg)`;
  secArr.style.transform = `rotate(${second}deg)`;

  hourNum.innerHTML = addZero(time.getHours());
  minNum.innerHTML = addZero(time.getMinutes());

  setTimeout(clock, 1000);
};
clock();

const tabsItem = document.querySelectorAll('.tabsItem')
const contentItems = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener('click', () => {
    tabsItem.forEach(item => item.classList.remove('active'))
    tabsItem[i].classList.add('active')
    contentItems.forEach(item => item.classList.remove('active'))
    contentItems[i].classList.add('active')
  })
}

const stopwatchHours = document.querySelector('.stopwatch__hours')
const stopwatchMinutes = document.querySelector('.stopwatch__minutes')
const stopwatchSeconds = document.querySelector('.stopwatch__seconds')
const stopwatchBtn = document.querySelector('.stopwatch__btn')
const tabsLinkSpan = document.querySelector('.tabsLink__span')
let intervalId;
stopwatchBtn.addEventListener('click', () => {
  if (stopwatchBtn.innerHTML === 'start') {
    stopwatchBtn.innerHTML = 'stop'
    intervalId = setInterval(tick, 1000)
    tabsLinkSpan.style.display = 'block'
    tabsLinkSpan.style.transition = '0.5s'
    tabsLinkSpan.style.background = 'white'
  } else if (stopwatchBtn.innerHTML === 'stop') {
    stopwatchBtn.innerHTML = 'reset'
    clearInterval(intervalId)
    tabsLinkSpan.style.background = 'red'
    tabsLinkSpan.style.transition = '0.5s'
  } else if (stopwatchBtn.innerHTML === 'reset') {
    stopwatchBtn.innerHTML = 'start'
    stopwatchHours.innerHTML = '0'
    stopwatchMinutes.innerHTML = '0'
    stopwatchSeconds.innerHTML = '0'
    tabsLinkSpan.style.display = 'none'
    tabsLinkSpan.style.transition = '0.5s'
  }
})

const tick = () => {
  stopwatchSeconds.innerHTML++
  if (stopwatchSeconds.innerHTML >= 60) {
    stopwatchSeconds.innerHTML = 0
    stopwatchMinutes.innerHTML++
  }
  if (stopwatchMinutes.innerHTML >= 60) {
    stopwatchMinutes.innerHTML = 0
    stopwatchHours.innerHTML++
  }
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// arr.forEach((num) => {
//   console.log(num);
// })