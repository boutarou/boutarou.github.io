let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/igo_circle.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Enter your nickname');
    if (!myName || myName === null) {
        setUserName();
        return;
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + '\'s portfolio';
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '\'s portfolio';
}

myButton.onclick = function () {
    setUserName();
}