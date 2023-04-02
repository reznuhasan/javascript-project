const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const getBalance = (input) => {
    const text = document.getElementById(input);
    return parseInt(text.innerText)
}
const setBalance = (input, value) => {
    const text = document.getElementById(input);
    text.innerText = value;
}
const addAmount = (input) => {
    const text = document.getElementById(input);
    let amount = text.value;
    if (text.value === '') {
        amount = 0;
    }
    text.value = '';
    return parseInt(amount)
}
const totalMoney = (a, b) => a + b;

// deposit part
depositBtn.addEventListener('click', () => {
    let deposit = addAmount('depositInput');
    if (deposit === 0) {
        alert("Please Add Your Amount")
    } else {
        let prevDeposit = getBalance('depositMoney');
        let totalDeposit = totalMoney(deposit, prevDeposit);
        setBalance('depositMoney', totalDeposit);
        let prevBalance = getBalance('totalMoney');
        let totalBalance = totalMoney(prevBalance, deposit);
        setBalance('totalMoney', totalBalance)
    }

})
//withdraw part
withdrawBtn.addEventListener('click', () => {
    let withdraw = addAmount('withdrawInput');
    console.log(withdraw)
    if (withdraw ===0) {
        alert("Please Add Your Amount")
    }else {
        let prevWithdraw = getBalance('withdrawMoney');
        let prevBalance = getBalance('totalMoney');
        if (withdraw <= prevBalance) {
            let totalWithdraw = totalMoney(withdraw, prevWithdraw);
            setBalance('withdrawMoney', totalWithdraw);
            let totalBalance = totalMoney(prevBalance, -withdraw);
            setBalance('totalMoney', totalBalance)
        } else {
            alert("You have not enough money")
        }
    }

})
