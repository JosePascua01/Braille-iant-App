let intro = document.querySelector('.intro');
let sections = document.querySelectorAll('section'); // stores all sections in an array  sections = [home-page, capture-page...]
let backBtn = document.querySelector('button#back-btn')
/*This Section is the loading page of the application*/
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(
        () => {
            intro.style.left = '-100vw';
            appLogics.startHome();
        },
        3000
    )
})//end of window.eventListener

//console.log(sections.length);
const appLogics = (() => {

    const startHome = () => {
        return document.querySelector('#home-page').classList.remove('hidden'), document.querySelector('#home-page').classList.add('active');
    }

    const showSection = (sectionId) => { //showSection = function, sectionId =
        /*        console.log(backBtn); 
                console.log(sectionId);*/
        const link = document.querySelector(`section#${sectionId}`);
        link.classList.add('active');
        link.classList.remove('hidden');

        sectionId !== 'home-page' ? backBtn.classList.remove('hidden') : backBtn.classList.add('hidden'); //if the current section shown is not homepage then add back button otherwise remove

        sections.forEach((section) => { //goes through all section element inside of the sections array
            if (section.id !== sectionId) { //if the current section id is not the current section being shown, hide that section
                section.classList.add('hidden');
                section.classList.remove('active');
            }
        });
    }

    const takePic = () => {
        document.querySelector('#picture').click();
    }

    const previewFile = (event) => {
        alert(`This should show the preview page`);
        const input = event.target;
        const reader = new FileReader();

        reader.onload = function () {
            const output = document.getElementById('output-img');
            output.src = reader.result;
        };

        showSection('preview-page');
        reader.readAsDataURL(input.files[0]);
    }


    return {
        startHome,
        showSection,
        takePic,
        previewFile,
    }
})();