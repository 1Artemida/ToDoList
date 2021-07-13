let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let lists = document.querySelector('#elements');
let elements = document.getElementsByTagName('li');

btn.addEventListener('click', () => {
    let txt = input.value;
    if (txt === "") {
        alert("Додайте що-небуть.");
    } else {
        let li = document.createElement('li');
        li.innerHTML = txt;
        lists.insertBefore(li, elements.childNodes);
        input.value = '';
    }
})

lists.addEventListener('click', e => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
})