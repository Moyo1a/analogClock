let hrs = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(()=>{
    // time variation
let day = new Date();
let hour =day.getHours(); 
let min =day.getMinutes();
let sec =day.getSeconds();

//   maths for conversion to deg
let hh= hour * 30;
let mm = min * 6;
let ss= sec * 6;
// console.log(hh);
// console.log(mm);
// console.log(ss);
// hand rotation
hrs.style.transform =`rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

let hours= document.querySelector('#hours');
let minutes= document.querySelector('#minutes');
let seconds= document.querySelector('#seconds');
let ampm= document.querySelector('#ampm');
let date= document.querySelector('#date');


let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();
let am =h >= 12 ? "PM":"AM" 
// add zero to code for singlet element

h = (h < 10) ? "0" + h: h
m = (m < 10) ? "0" + m: m
s = (s < 10) ? "0" + s: s

hours.innerHTML = h
minutes.innerHTML = m
seconds.innerHTML = s
ampm.innerHTML = am


// add am or pm



}, 1000)


        