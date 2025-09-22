let btn=document.getElementById('button')
let counter=documnet.getElementById('counter')

let value

counter.textContent=value

btn.addEventListener("onClick",()=>{
	value+=0
	counter.textContent=value
})