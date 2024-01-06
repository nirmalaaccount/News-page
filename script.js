const mainSection = document.querySelector('.main-section');
const flexSection = document.querySelector('.flex-section');


const openBtn = document.querySelector('.icon-menu');
openBtn.onclick = function(){
    sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
    mainSection.style.opacity=0.5;
    flexSection.style.opacity=0.5;
}
const closeBtn = document.querySelector('.close-menu');
closeBtn.onclick = function(){
    sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
    mainSection.style.opacity=1;
    flexSection.style.opacity=1;
}