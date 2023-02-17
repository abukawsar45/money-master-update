
document.getElementById('btn-calculate').addEventListener('click', function () {
    const inputTotalIncome = inputData('total-income');
    const foodCost = inputData('food-cost');
    const rentCost = inputData('rent-cost');
    const clothesCost = inputData('clothes-cost');
    // console.log(inputTotalIncome, foodCost, rentCost, clothesCost)
    if (isNaN(inputTotalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
        alert('Please check your input field')
        return;
    }
    else if (inputTotalIncome < foodCost + rentCost + clothesCost) {
        alert('your income value is not correct');
        return;
    }

    else {
        const totalCost = foodCost + rentCost + clothesCost;
        const restBalance = inputTotalIncome - totalCost;
        const totalCostDisplay = document.getElementById('total-expenses');
        totalCostDisplay.innerText = totalCost;
        const currentBalance = document.getElementById('current-balance');
        currentBalance.innerText = restBalance;
    }
})
// connect save button
document.getElementById('btn-save').addEventListener('click', function () {
    const saveInputField = inputData('input-save-value');
    const totalSaveWithHundred = saveInputField / 100;
    const totalBalance = balanceTextData('current-balance');
    const totalSave = totalBalance * totalSaveWithHundred;
    const TotalSaveDisplayId = document.getElementById('total-save-display');
    TotalSaveDisplayId.innerText = totalSave;
    const payBill = totalBalance - totalSave;
    const remainingBalanceId = document.getElementById('remaing-balance');
    // const paybillExpon = payBill.toExponential(2)
    remainingBalanceId.innerText = payBill
    const inputTotalIncome = inputFieldClear('total-income');
    const foodCost = inputFieldClear('food-cost');
    const rentCost = inputFieldClear('rent-cost');
    const clothesCost = inputFieldClear('clothes-cost');

})