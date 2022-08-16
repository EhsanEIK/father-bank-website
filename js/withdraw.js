document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);
    withdrawField.value = '';

    if (isNaN(withdrawAmount)) {
        alert('Please provide a number');
        return;
    }

    const withdrawBalanceField = document.getElementById('withdraw-balance');
    const previousWithdrawBalance = parseFloat(withdrawBalanceField.innerText);

    let totalBalanceField = document.getElementById('total-balance');
    let totalBalance = parseFloat(totalBalanceField.innerText);

    if (withdrawAmount > totalBalance) {
        alert('Insufficient Balance in your account!');
        return;
    }

    const newWithdrawBalance = previousWithdrawBalance + withdrawAmount;

    withdrawBalanceField.innerText = newWithdrawBalance;


    totalBalance -= withdrawAmount;
    totalBalanceField.innerText = totalBalance;


});