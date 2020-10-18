const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds= document.querySelector('#seconds')
const year = document.querySelector('#year')
const loading = document.querySelector('#loading')
const happyNewYear = document.querySelector('#happyNewYear')

const countdown = document.querySelector('#countdown')

const  currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

const welcome = currentYear +1;



function updateCountDown(){
  const currentTime = new Date();

  year.innerText = welcome

  const diff = newYearTime - currentTime;

  const d = Math.floor(diff/1000/60/60/24);
  const h = Math.floor(diff/1000/60/60) % 24;
  const m = Math.floor(diff/1000/60) % 60;
  const s = Math.floor(diff/1000) % 60;
  


  days.innerText = d <10 ? '0' + d : d ;
  hours.innerText = h < 10? '0'+ h : h;
  minutes.innerText = m < 10? '0' + m : m ;
  seconds.innerText = s < 10? '0' + s: s;


if (d==0 && h == 0 && m == 0 && s == 0){
  
  happyNewYear.innerText = 'happy new year'
  countdown.style.display = 'none'
  year.classList.add('year_update')
  year.classList.remove('year')

  
}

}




setTimeout (function (){
countdown.style.display = 'flex'
loading.style.display = 'none'
},1000)

var int = setInterval(updateCountDown , 1000)

