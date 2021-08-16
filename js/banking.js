//handle deposite button

document.getElementById('deposite-btn').addEventListener('click', function () {
    // get the amount of deposite 
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    // console.log(depositeAmount);

    //update depostie amount.

    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeText = depositeTotal.innerText;

    const previousDepositeAmount = parseFloat(previousDepositeText);

    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;

    depositeTotal.innerText = newDepositeTotal;


    //update account balance

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear the deposite info field
    depositeInput.value = '';
});


//handle withdraw amount....

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    //set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //update balance 

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input

    withdrawInput.value = '';
})