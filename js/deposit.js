document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);

    const depositBalanceField = document.getElementById('deposit-balance');
    const previousDepositBalance = parseFloat(depositBalanceField.innerText);

    const newDepositBalance = previousDepositBalance + depositAmount;

    depositBalanceField.innerText = newDepositBalance;

    const totalBalanceField = document.getElementById('total-balance');
    let totalBalance = parseFloat(totalBalanceField.innerText);

    totalBalance = totalBalance + depositAmount;
    totalBalanceField.innerText = totalBalance;
});