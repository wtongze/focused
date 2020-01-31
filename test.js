'use script';

let article = document.querySelector('article');

document.querySelectorAll('figure noscript').forEach((fig) => {
    //rawImgs.innerHTML += fig.innerHTML;
});

let reader = document.createElement('div');
reader.classList.add('focused-reader');
reader.innerText = 'test overlay';

let readerStyle = document.createElement('link');
readerStyle.rel = 'stylesheet';
readerStyle.href = 'http://127.0.0.1:8080/reader.css';

document.head.append(readerStyle);
document.body.append(reader);
