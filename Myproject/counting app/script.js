let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
let count =0
function increment(){
    count+=1
    countEl.textContent=count
}

function save(){
    let total =count
    saveEl.textContent+=  " - "+ total 
    count=0
    countEl.textContent=count
    if(count >=18){
        countEl.textContent="limit exceeded"
    }

}
// function decrease(){
//     count-=1
//     countEl.textContent=count
// }
