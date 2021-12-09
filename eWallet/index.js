// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯



document.querySelector('#ewallet-form').addEventListener('submit', event => {
    event.preventDefault();
    const description = document.querySelector('.add__description').value;
    const value = document.querySelector('.add__value').value;
    const type = document.querySelector('.add__type').value;
    const addBtn = document.querySelector('.add__btn');
    const balance = Number(document.querySelector('.balance__amount').children[0].textContent);
    
    (value && description) && addItem(type, description, value);
})

// UI
function addItem( type, description, value){
const newItem = 
  `<div class="item">
    <div class="item-description-time">
      <div class="item-description">
        <p>${description}</p>
      </div>
      <div class="item-time">
        <p>${getFormattedTime()}</p>
      </div>
    </div>
    <div class="item-amount ${type === '+' ? 'income-amount' : 'expense-amount'}">
      <p>${type}$${value}</p>
    </div>
  </div>` ;
  const collection = document.querySelector('.collection');
  collection.insertAdjacentHTML('afterbegin', newItem);
  resetForm();
}

function resetForm(){
    document.querySelector('.add__type').value = "+"; // making default type +
    document.querySelector('.add__description').value = "";
    document.querySelector('.add__value').value = "";
}

// Utilities
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