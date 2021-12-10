//*******************************************************************************
//*************************  UI *************************************************
//*******************************************************************************

showItems();
showIncomesAndExpenses();

// calculate total balance
function showTotalBalance(){
  const income = document.querySelector('.income__amount p').innerText.replace(/[$,]/g,'');
  const expense = document.querySelector('.expense__amount p').innerText.replace(/[$,]/g,'');
  const totalBalance = parseInt(income) - parseInt(expense);
  document.querySelector('.balance__amount p').innerText = sep(totalBalance);
  document.querySelector('header').className = totalBalance < 0 ? 'red' : 'green';
}
// calculate and display updated incomes and expenses
function showIncomesAndExpenses(){
  const items = getItemsFromLS();
  let incomes = 0, expenses = 0;
  items.forEach(item =>{
    const value = parseInt(item.value);
    item.type === '+' ? incomes += value : expenses += value;
  })
  document.querySelector('.income__amount p').innerText = `$${sep(incomes)}`;
  document.querySelector('.expense__amount p').innerText = `$${sep(expenses)}`;
  showTotalBalance();
}

// event after submitting proper data in the form 
document.querySelector('#ewallet-form').addEventListener('submit', event => {
    event.preventDefault();
    const description = document.querySelector('.add__description').value;
    const value = document.querySelector('.add__value').value;
    const type = document.querySelector('.add__type').value;
    const addBtn = document.querySelector('.add__btn');
    const balance = Number(document.querySelector('.balance__amount').children[0].textContent);
    
    (value && description) && addItem(type, description, value);
})

// show items from the local storage
function showItems(){
  const collection = document.querySelector('.collection');
  let items = getItemsFromLS();
  items.forEach(item => {
    const newItem = createHTMLItem(item.description, item.time, item.type, item.value);
    collection.insertAdjacentHTML('afterbegin', newItem);
  });
}

// create item like the element of html collection
function createHTMLItem(description, time, type, value){
  const newItem = 
  `<div class="item">
    <div class="item-description-time">
      <div class="item-description">
        <p>${description}</p>
      </div>
      <div class="item-time">
        <p>${time}</p>
      </div>
    </div>
    <div class="item-amount ${type === '+' ? 'income-amount' : 'expense-amount'}">
      <p>${type}$${sep(value)}</p>
    </div>
  </div>` ;
  return newItem;
}

// add item from input form to the collection
function addItem( type, description, value){
  const time = getFormattedTime();
  const collection = document.querySelector('.collection');
  const newItem = createHTMLItem(description, time, type, value);
  collection.insertAdjacentHTML('afterbegin', newItem);
  addItemToLS(description, time, type, value);
  showIncomesAndExpenses();
  resetForm();
}

// reset the form after a complete item input
function resetForm(){
    document.querySelector('.add__type').value = "+"; // making default type +
    document.querySelector('.add__description').value = "";
    document.querySelector('.add__value').value = "";
}

//*******************************************************************************
//*************************  LS *************************************************
//*******************************************************************************

// get items from the local storage
function getItemsFromLS(){
  let items = localStorage.getItem('items');
  return (items) ? JSON.parse(items) : [];
  
}

// add items to local storage
function addItemToLS(description, time, type, value){
  let items = getItemsFromLS();
  items.push({ description, time, type, value});
  localStorage.setItem('items', JSON.stringify(items));
}

//*******************************************************************************
//**************************  Utility Functions  ********************************
//*******************************************************************************

// making commaseparated formate
function sep(amount){
  return parseInt(amount).toLocaleString();
}
// formate the date time according to our expectation
function getFormattedTime(){
    const now = new Date().toLocaleDateString('en-us', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
    const time = now.split(',')[1];
    const date = now.split(',')[0].split(' ');
    return `${date[1]} ${date[0]}, ${time}`;
}