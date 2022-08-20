function genaratePin() {
    const pin = randomNumer();
    const newpin = pin + '';
    if (newpin.length === 4) {
        return pin;
    } else {
        genaratePin();
    }
}
function randomNumer() {
    const random = Math.round(Math.random() * 10000)
    return random;
}

document.getElementById("generate-pin").addEventListener('click', function () {
    const Pin = genaratePin();
    console.log("🚀 ~ file: index.js ~ line 17 ~ document.getElementById ~ Pin", Pin)
    const genarateInput = document.getElementById('display-pin');
    const genarateInputString = genarateInput.value;
    console.log(typeof genarateInputString)
    genarateInput.value = Pin;
})
document.getElementById('calculator').addEventListener('click', function (event) {
    let clickValue = event.target.innerText;
    const mathingInputField = document.getElementById('typed-numbers');
    const prevValue = mathingInputField.value;

    if (isNaN(clickValue)) {
        if (clickValue === "C") {
            mathingInputField.value = '';
        } else if (clickValue === "<") {
            const newClickValue = prevValue.split('');
            newClickValue.pop();
            const newNumber = newClickValue.join('')
            mathingInputField.value = newNumber;

        }
    } else {
        const newValue = prevValue + clickValue;
        mathingInputField.value = newValue;

    }


})

document.getElementById('verify-pin').addEventListener('click', function () {
    const genarateInput = document.getElementById('display-pin');
    const genarateInputPin = genarateInput.value
    const mathingInputField = document.getElementById('typed-numbers');
    const mathingInputFieldValue = mathingInputField.value
    if (genarateInputPin === mathingInputFieldValue) {
        const match = document.getElementById('pin-success')
        match.style.display = 'block'
        const er = document.getElementById("pin-failure")
        er.style.display = 'none';
        
    } else {
        const err = document.getElementById("pin-failure")
        err.style.display = 'block';
        const match = document.getElementById('pin-success')
        match.style.display = 'none'
    }


})
