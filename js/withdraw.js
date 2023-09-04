document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Get a reference to the input field where the user enters the withdrawal amount
    const withdrawFieldElement = document.getElementById('withdraw-field');

    // Get the user's input (as a string) from the input field and convert it to a floating-point number
    const newWithdrawAmountString = withdrawFieldElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Check if the user's input is not a valid number
    if (typeof (newWithdrawAmount) !== 'number' || isNaN(newWithdrawAmount)) {
        alert('Please enter a number');
        withdrawFieldElement.value = '';
        return;
    }

    // Get a reference to the element displaying the total withdrawal amount
    const withdrawTotalAmount = document.getElementById('withdraw-total');

    // Get the previous withdrawal amount (as a string), convert it to a number
    const previousWithdrawAmountString = withdrawTotalAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // Get a reference to the element displaying the total balance amount
    const balanceTotalAmount = document.getElementById('balance-total');

    // Get the previous balance amount (as a string), convert it to a number
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Clear the user input field
    withdrawFieldElement.value = '';

    // Check if the withdrawal amount is greater than the available balance
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You do not have sufficient funds!');
        return;
    }

    // Calculate the new withdrawal total and update the display
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawTotal;

    // Calculate the new balance total and update the display
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalAmount.innerText = currentBalanceTotal;
})






/* document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawFieldElement.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if (typeof (newWithdrawAmount) !== 'number' || isNaN(newWithdrawAmount)) {
        alert('Please enter number');
        withdrawFieldElement.value = '';
        return;
    }

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    withdrawFieldElement.value = '';

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('বাপের ব্যাংকে এত টাকা নাই!!');
        return;
    }

    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawTotal;



    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalAmount.innerText = currentBalanceTotal;


})*/
