console.log(`Let's learn about the event object that is normally 
used as a parameter of an eventListener function.\n`);

const clearBtn = document.querySelector('.clear-post');
clearBtn.addEventListener('click', (event) =>{
    // This is for check event type
    console.log(event.type);
    // This is to get the value of X-co ordinates where the button is clicked
    // actually the rigth distance where mouse is clicked from the top left co-ordinates of the browser.
    console.log(event.clientX);
    // This is to get the value of Y-co ordinates where the button is clicked
    // actually the bottom/down distance where mouse is clicked from the top left co-ordinates of the browser.
    console.log(event.clientY);
    // This is to get the value of X-co ordinates where the button is clicked
    // actually the right distance where mouse is clicked from the top left co-ordinates of the button.
    console.log(event.offsetX);
    // This is to get the value of Y-co ordinates where the button is clicked
    // actually the bottom/down distance where mouse is clicked from the top left co-ordinates of the button.
    console.log(event.offsetY);
    // Check the status of the key is pressed or not.
    // if mouse is clicked keeping the target key pressed then status will be true
    // otherwise false.
    console.log(event.altKey)
    console.log(event.shiftKey)
    console.log(event.ctrlKey)
    // we can the html element that will be clicked.
    console.log(event.target)
    console.log(event.target.id)
    console.log(event.target.className)
    console.log(event.target.innerText)
    event.target.style.background = 'black';
})