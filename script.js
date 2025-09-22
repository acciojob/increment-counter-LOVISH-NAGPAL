let btn=document.getElementById('button')
let counter=documnet.getElementById('counter')

let value=0

counter.textContent=value

btn.addEventListener("onClick",()=>{
	value+=1
	counter.textContent=value
})