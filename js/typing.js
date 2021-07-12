
function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(function() {
            element.innerHTML += letter;
        }, 75 * i)
    })
}

const title = document.querySelector('h1');
typeWrite(title);