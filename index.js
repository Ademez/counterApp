let increase = document.getElementById("count-el")
let safe = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    increase.textContent = count
}
 function save () {
     safe.textContent += count + " - "
     increase.textContent = 0
     count = 0


 }