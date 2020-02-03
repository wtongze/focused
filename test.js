'use script';

let article = document.querySelector('article > div:nth-child(3)');
let focused = document.createElement('div');
let focusedStyle = document.createElement('link');
let gfmStyle = document.createElement('link');

focused.className = 'focused markdown-body';

focusedStyle.rel = 'stylesheet';
focusedStyle.href = 'http://127.0.0.1:8080/reader.css';

gfmStyle.rel = 'stylesheet';
gfmStyle.href = 'https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.css';

focused.append(article.cloneNode(true));
let reader = focused.querySelector('div');
reader.className = 'reader';

extractContent();

document.head.append(gfmStyle, focusedStyle);
document.body.append(focused);
document.body.style.overflow = 'hidden';

function extractContent() {
    // replace with real pictures
    reader.querySelectorAll('figure noscript').forEach((fig) => {
        try {
            fig.closest('figure > div').innerHTML = fig.innerHTML;
        } catch (e) {
            console.log(fig, e);
        }
    });

    // remove empty div tags
    reader.querySelectorAll('aside:empty, div:empty').forEach((ele) => {
        if (ele.innerHTML === '') {
            ele.remove()
        }
    });

    // remove old IDs, tags, 'data-selectable-paragraph 'attributes
    // and in-line styles.
    let cond = new RegExp(/^[a-z]{1,2}$/);
    reader.querySelectorAll('*').forEach((ele) => {
        let classList = [...ele.classList];
        classList.forEach((className) => {
            if (cond.test(className) === true) {
                ele.classList.remove(className);
            }
        });
        ele.removeAttribute('id');
        ele.removeAttribute('style');
        ele.removeAttribute('data-selectable-paragraph');
        if (ele.classList.length === 0) {
            ele.removeAttribute('class');
        }
    });

    // remove old avatar svg border
    let articleInfoRaw = reader.querySelectorAll('a[rel=noopener]');
    let articleInfo = articleInfoRaw[0].parentElement.parentElement.parentElement.parentElement;
    articleInfo.className = 'article-info';

    articleInfo.insertAdjacentElement('beforeend', articleInfoRaw[0].querySelector('img'));
    articleInfo.insertAdjacentElement('beforeend', articleInfoRaw[1]);

    let articleDate = document.createElement('span');
    articleDate.className = 'article-date';
    articleDate.innerText = articleInfoRaw[2].innerText;
    articleInfo.insertAdjacentElement('beforeend', articleDate);

    articleInfo.querySelector('div:first-of-type').remove();
}