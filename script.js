const amountInp = document.querySelector('#amount')
const guestInp = document.querySelector('#guest')
const calculateBtn = document.querySelector('#calc')
const serviceSelect = document.querySelector('#quality') 
const tip = document.querySelector('#tip-amount')

calculateBtn.addEventListener('click', function amount() {
    let amountVal = amountInp.value;
    let persons = guestInp.value;
    let service = serviceSelect.value;
    let sum = amountVal / persons
    let res = Math.ceil((sum / 100) * service)
    tip.style.visibility = 'visible'
    if (isNaN(res)) {
        res = 0;
        tip.innerHTML = `For ${res} $ each`
    } else {
        tip.innerHTML = res + '$ For each'
    }
    clearTip()
})

 function clearTip() {
     setTimeout(() => {
        tip.style.visibility = 'hidden'
     }, 5000)
 }

 