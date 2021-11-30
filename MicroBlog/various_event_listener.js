console.log(`Let's start to learn various eventListener in JS`)

const clearBtn = document.querySelector('.clear-post ');
clearBtn.addEventListener('click', (event) => {
    console.log(`Do you want to clear all post? 🤦‍♂️`)
});
clearBtn.addEventListener('mouseenter', (event) => {
    console.log(`Click to clear all post 😜`)
});
clearBtn.addEventListener('mouseleave', (event) => {
    console.log(`You have left the button!!!🎈🎈`)
});
clearBtn.addEventListener('mousemove', (event) => {
    console.log(`Do you know lot of lines is printing you by moving your cursor/ mouse?`)
});
clearBtn.addEventListener('click', (event) => {
    console.log(`Do you want to clear all post?`)
});