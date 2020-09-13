// Getting Elements from DOM
function calculate() {
const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const currOneAmount = document.getElementById('amount-one');
const currTwoAmount= document.getElementById('amount-two');
const flipButton = document.getElementById('flip');
const rate = document.getElementById('rate');

// Fetch exchange rate from 3rd party API and update DOM
//ww.exchangerate-api.com
function calculate() {
       const currencyOneCode = currOnePicker.value;
       const currencyTwoCode = currTwoPicker.value;
       
       fetch(` https://v6.exchangerate-api.com/v6/bbd9911358e550616b2f6060/latest/${currencyOneCode}`)
       .then(res => res.json() )
       .then( data => {
           // Get the exchange rate API
             const exchangeRate = data.conversion_rates[currencyTwoCode];
             //Display the Conversion Rate 
             rate.innerText = `1 ${currencyOneCode}= ${exchangeRate} ${currencyTwoCode}`;
             // apply conversion rate and update amount of currency 
             currTwoAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);


       });

}

//  flip function for the flip button to reverse currency   
function flip() {
    const temp = currOnePicker.value;
    currOnePicker.value = currOnePicker.value;
    currTwoPicker.value = temp;
    calculate();
}; 

//Event Listeners 
currOnePicker.addEventListener('change', calculate);
currTwoPicker.addEventListener('change', calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click', flip);



calculate();