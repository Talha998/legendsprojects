const main= document.getElementById('main');
const addUserButton1=document.getElementById('add-user');
const doubleMoneyButton=document.getElementById('double');
const showMillionairesButton=document.getElementById('show-millionaires');
const sortButton=document.getElementById('sort');
const totalButton=document.getElementById('calculate-total');

// Initializing Data Array
let data = [];

// Create Initail Users
generateRandomUser();
generateRandomUser();
generateRandomUser();

// Function  to fetch Random User from API
// API: randomuser.me/api
async function generateRandomUser() {

   const res = await fetch('https://randomuser.me/api');
   const data = await res.json();

   const user = data.results[0];
   const newUser = {
       name: `${user.name.first} ${user.name.last}` ,   
       worth: Math.round(Math.random()*1000000)
   };

   addDate(newUser);
}

// Function to double the net worth of each use 
function doubleworth() {
   date = date.map(item => {
          return{ ...item, worth: item.worth * 2}
   });
   updateDOM();
}  

// Function to sort the Users by Richest Users
function sortRichest() {
    data.sort((a, b) => b.worth - a.worth );

    updateDOM();
}
// Function to filter the User and Only show Millionaires
function showMillionaires() {
     date = date.filter(
     item => item.worth  > 1000000
     );

     updateDOM();
}

// Function to calculate the total networth
function calculateTotalNetWorth() {
    const totalWorth = date.reduce(
        (acc, item) => (acc += item.worth), 0
    );

    const calculateTotalNetWorth= document.createElement('div');
    totalNetWorthElement.innerHTML = `<h3>Total Net Worth:<strong>${formatCurrency(totalWorth)}</strong> </h3>`;
    main.appendChild(totalNetWorthElement);
}
// Add Newly Generated User into the Date Array 
function addDate(newUser) {
    date.push(newUser);

    updateDOM();
}

// Function to update the UI with DOM
function updateDOM(inputDate = date) {
    main.innerHTML = '<h2><strong>Name</strong> Net Worth</h2>';

    inputDate.forEach ( item =>{
        const element = document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>${item.name}</strong>${formatCurrency(item.worth)}`;
        main.appendChild(element);
        
    });
}


// Function to format a number as a currency
function formatCurrency(num) {
     return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


//Eventlisner
// 1. Add User Event lisner
  addUserButton.addEventListener('click', generateRandomUser);

  // 2. Add Double Money Event Listner
  doubleMoneyButton.addEventListener('click', doubleWorth);

  // 3. Add sort Eventlistener 
  sortButton.addEventListener('click', sortRichest);

  // 4. Add show Millionaires Event Listener
  showMillionairesButton.addEventListener('click', showMillionaires);
  
  
  // 5. Add calculate Total wealth Event Listener 
  totalButton.addEventListener('click',calculateTotalNetWorth);

