// input data catch function
function inputData (inputFieldId){
    const customerInput = document.getElementById(inputFieldId);
    const totalInputString = customerInput.value;
    const totalInputValue = parseFloat(totalInputString, 2)

    // customerInput.value = '';
    return totalInputValue;
}
// inneerText function
function balanceTextData (balanceTextId){
    const TextBalanceId =  document.getElementById(balanceTextId);
    const balanceTextString = TextBalanceId.innerText;
    const balanceTexttoNumber = parseFloat(balanceTextString);
    balanceTexttoNumber.toExponential(2);
    // console.log(typeof balanceTexttoNumber)
    return balanceTexttoNumber
}
function inputFieldClear (inputFieldId){
    const customerInput = document.getElementById(inputFieldId);
    customerInput.value = '';
}