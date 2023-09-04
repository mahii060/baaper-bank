document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-1: get the deposit value from input field and parse it into float  (input value)
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    if (typeof (newDepositAmount) !== 'number' || isNaN(newDepositAmount)) {
        alert('Please enter a number');
        depositField.value = '';
        return;
    }

    //step-2: get the total deposit amount and parse it into float $00
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-3: add the previous value from the deposit amount and the new deposit amount value and set it as total deposit amount
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = currentDepositTotal;

    //step-4:get the total balance amount and parse it into float (balance)
    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-5: calculate the total balance amount(previous balance total + new deposit amount)
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalAmount.innerText = currentBalanceTotal;

    //last step
    depositField.value = '';
})