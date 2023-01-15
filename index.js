let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


document.querySelector("#increment-btn").addEventListener("click",increment)
document.querySelector("#save-btn").addEventListener("click",save)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
