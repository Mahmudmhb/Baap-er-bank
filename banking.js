document.getElementById('button-deposite').addEventListener('click', function(){
    // console.log('hello world')
    const inputFild =document.getElementById('deposit-total');
    const inputDeposit =parseFloat(inputFild.value) ;
    // console.log(inputDeposit);
    const inputAmount =document.getElementById('deposit-total-amount');
    const currentDepositAmont =parseFloat(inputAmount.innerText) ;
    const newDepositAmount = currentDepositAmont + inputDeposit;
    inputAmount.innerText=newDepositAmount;
    // clear deposit input 
    inputFild.value = ' ';
    // upadate balance 
    const totalBalance = document.getElementById('upadate-balance');
    const upadateBalace = parseFloat(totalBalance.innerText);
    const newBalance = upadateBalace + inputDeposit;
    totalBalance.innerText =newBalance;
});
// withdraw option
document.getElementById('button-withdrow').addEventListener('click', function (){
    // console.log('reday to function')
    const withdrawAmount= document.getElementById('withdraw-amount');
    const withdrawAmountText =parseFloat(withdrawAmount.value) ;
    console.log(withdrawAmountText);

    const withdrawBalance =document.getElementById('withraw-total');
    withdrawBalanceText=parseFloat(withdrawBalance.innerText);
   
    const withdrawTotalBlance = withdrawBalanceText + withdrawAmountText;

    withdrawBalance.innerText =withdrawTotalBlance;


    console.log(withdrawBalance);
    withdrawAmount.value='';
     

    // drecrase in main balance 
    const totalBalance = document.getElementById('upadate-balance');
    const upadateBalace = parseFloat(totalBalance.innerText);
    const updateWithdraw = upadateBalace - withdrawAmountText;
    totalBalance.innerText =updateWithdraw;
   

     

})