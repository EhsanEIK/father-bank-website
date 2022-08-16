document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    const withdrawBalanceField = document.getElementById('withdraw-balance');
    const previousWithdrawBalance = parseFloat(withdrawBalanceField.innerText);

    const newWithdrawBalance = previousWithdrawBalance + withdrawAmount;

    withdrawBalanceField.innerText = newWithdrawBalance;

    let totalBalanceField = document.getElementById('total-balance');
    let totalBalance = parseFloat(totalBalanceField.innerText);

    totalBalance -= withdrawAmount;
    totalBalanceField.innerText = totalBalance;
});