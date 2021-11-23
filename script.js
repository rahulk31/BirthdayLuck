const bday = document.querySelector('#bday');
const luckyNumber = document.querySelector('#lucky-num');
const btn = document.querySelector('.btn');
const message = document.querySelector('.message');

const getLucky = (sum, num) => {
    if(sum%num === 0) {
        message.textContent = "Congratulations! Your b'day is Lucky";
    } else {
        message.textContent = "Sorry! Your b'day is not Lucky";
    }
}

const calculateSum = (dob) => {
    let sum = 0;
    for(let i=0; i<dob.length; i++) {
        sum += Number(dob.charAt(i));
    }
    return sum;
}

const clickHandler = () => {
    if((bday.value && luckyNumber.value) && Number(luckyNumber.value) > 0) {
        const dob = bday.value.replaceAll('-','');
        const sum = calculateSum(dob);
        if(sum && dob) {
            getLucky(sum, Number(luckyNumber.value));
        }
    } else {
        message.textContent = "Please enter valid details"
    }
}

btn.addEventListener('click', clickHandler)