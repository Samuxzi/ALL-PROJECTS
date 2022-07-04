let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
let count =0
let myname=("Samuel")
let Fooditems=["Spagetti", "Rice", "Cassava", "Yam" ]
console.log(Fooditems)
Fooditems.push("Bread")
console.log (Fooditems)

Fooditems.pop()
console.log (Fooditems)
Fooditems.shift()
console.log (Fooditems)
Fooditems.unshift("agbado")
console.log(Fooditems)

while(count <5){
    console.log (Fooditems[count])
    count = count+1
}
function Add(){
    if (count== 10) {
        saveEl.textContent+= count+5
        count= 0
        countEl.textContent=count
    }
        
    else {
        count+=1
        countEl.textContent=count
    }
}
function Subtract(){
    count-=1
    countEl.textContent=count
}

