let intro = document.querySelector('.intro');
let sections = document.querySelectorAll('section'); // stores all sections in an array  sections = [home-page, capture-page...]
let backBtn = document.querySelector('button.back-btn')
/*This Section is the loading page of the application*/
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(
        () => { intro.style.left = '-100vw'; },
        3000
    )
})//end of window.eventListener

//console.log(sections.length);

const showSection = (sectionId, currentIndex) =>{ //showSection = function, sectionId = 
    const link = document.querySelector(`section#${sectionId}`);
    console.log(`currentIndex = ${currentIndex}`);
    link.classList.add('active');
    link.classList.remove('hidden');

    sectionId === 'home-page' ? backBtn.classList.add('hidden'):backBtn.classList.remove('hidden'); //is the current section shown the homepage? then add back button otherwise remove
    
    sections.forEach((section) => { //goes through all section element inside of the sections array
        if (section.id !== sectionId) { //if the current section id is not the current section being shown, hide that section
            section.classList.add('hidden');
            section.classList.remove('active');
        }
    });
}