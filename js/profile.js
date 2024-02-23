let aboutSection = document.getElementById('about-section');
let postsSection = document.getElementById('post-section');
let editSection = document.getElementById('edit-section');

let aboutButton = document.getElementById('about');
let postsButton = document.getElementById('posts');
let editButton = document.getElementById('edit');

aboutButton.addEventListener('click',()=>{
    aboutSection.style.display =  "block";
    aboutSection.style.pointerEvents = "all";
    postsSection.style.display = "none";
    postsSection.style.pointerEvents = "none";
    editSection.style.display="none";
    editSection.style.pointerEvents = "none";
});
postsButton.addEventListener('click',()=>{
    postsSection.style.display =  "block";
    postsSection.style.pointerEvents = "all";
    aboutSection.style.display = "none";
    aboutSection.style.pointerEvents = "none";
    editSection.style.display="none";
    editSection.style.pointerEvents = "none";
});
editButton.addEventListener('click',()=>{
    editSection.style.display="block";
    editSection.style.pointerEvents = "all";
    postsSection.style.display =  "none";
    postsSection.style.pointerEvents = "none";
    aboutSection.style.display = "none";
    aboutSection.style.pointerEvents = "none";
});


const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item-links');

function handleIndicator(el) {
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });
    indicator.style.display="revert";
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');

    el.classList.add('is-active');
    el.style.color = el.getAttribute('active-color');
    el.style.fontWeight="bold";
}

items.forEach((item, index) => {
    item.addEventListener('click', e => {
        handleIndicator(e.target);
        editButton.style.backgroundColor="royalblue";
    });
    item.classList.contains('is-active') && handleIndicator(item);
});

editButton.addEventListener('click',()=>{
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    });
    editButton.style.backgroundColor="#353935";
    handleIndicator(editButton);
    editButton.style.fontWeight="normal";
    setTimeout(()=>{
        indicator.style.display="none";
    },400);
});

const oldPassToggle = document.querySelector('#oldPassToggle');
const oldPass = document.querySelector('#profileOldPassInput');
oldPassToggle.addEventListener('click', () => {
    const oldType = oldPass.getAttribute('type') === 'password' ? 'text' : 'password';
    oldPass.setAttribute('type', oldType);
    oldPassToggle.classList.toggle('bi-eye');
});

const newPassToggle = document.querySelector('#newPassToggle');
const newPass = document.querySelector('#profileNewPassInput');
newPassToggle.addEventListener('click', () => {
    const newType = newPass.getAttribute('type') === 'password' ? 'text' : 'password';
    newPass.setAttribute('type', newType);
    newPassToggle.classList.toggle('bi-eye');
});

const rePassToggle = document.querySelector('#rePassToggle');
const rePass = document.querySelector('#profileRePassInput');
rePassToggle.addEventListener('click', () => {
    const reType = rePass.getAttribute('type') === 'password' ? 'text' : 'password';
    rePass.setAttribute('type', reType);
    rePassToggle.classList.toggle('bi-eye');
});