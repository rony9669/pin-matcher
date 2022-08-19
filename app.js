function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }

}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;


}

document.getElementById('generate-pin').addEventListener('click', function() {
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

})

document.getElementById('calculator').addEventListener('click', function(event) {

    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = ' ';
        } else if (number === '<') {
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainingDigits = digit.join('');
            typedNumberField.value = remainingDigits;

        }


    } else {

        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;

    }

})

document.getElementById('verify-pin').addEventListener('click', function() {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinUnsuccessMessage = document.getElementById('pin-unmatched');

    if (currentPin === typedNumber) {
        pinSuccessMessage.style.display = 'block';
        pinUnsuccessMessage.style.display = 'none';



    } else {
        pinUnsuccessMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';

    }
})