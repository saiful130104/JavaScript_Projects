const form = document.getElementById('form');
const message = document.getElementById('message');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

function getUserInfo(){
    return {
        name : form.name.value,
        email : form.email.value,
        phone : form.phone.value,
        website : form.website.value,
        password : form.password.value
    }
}

function colorMessage(color){
    message.style.color = color;
    password1.style.borderColor = color;
    password2.style.borderColor = color;
}

function validateForm() {
    const isValid = form.checkValidity()
    if(!isValid){
        message.textContent = "Please fill out all fields properly🤑";
        message.style.color = 'red';
    }else{
        const passwordMatch = password1.value === password2.value;
        console.log({passwordMatch});
        if(passwordMatch){
            message.textContent = "Registration Success😍"
            colorMessage('green');
        }
        else{
            message.textContent = "Make sure passwords are matched😎";
            colorMessage('red');
        }
    }
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validateForm();
    console.log(getUserInfo());
})