// Function to effect Typewriter
function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(function() {
            element.innerHTML += letter;
        }, 75 * i)
    })
}

// Effect applied to header h1
const title = document.querySelector('h1');
typeWrite(title);