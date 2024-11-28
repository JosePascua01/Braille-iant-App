let intro = document.querySelector('.intro');
let sections = document.querySelectorAll('section'); // stores all sections in an array  sections = [home-page, capture-page...]
let backBtnContainer = document.querySelector('div.mobile');
let imageCapture = document.querySelector('button#image-capture');

imageCapture.addEventListener('change', (event) => {
    if (event.target === document.getElementById('picture')) {
        appLogics.previewFile(event);
    }
});

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

    const showSection = (sectionId) => { //showSection >> function, sectionId >> page-name
        /*        console.log(backBtn);
        console.log(sectionId);*/
        const link = document.querySelector(`section#${sectionId}`);
        link.classList.add('active');
        link.classList.remove('hidden');

        appLogics.backButton(sectionId);

        sections.forEach((section) => { //goes through all section element inside of the sections array
            if (section.id !== sectionId) { //if the current section id is not the current section being shown, hide that section
                section.classList.add('hidden');
                section.classList.remove('active');
            }
        });
    }

    const backButton = (sectionId) => {
        const backBtn = document.querySelector('#back-btn');
        sectionId !== 'home-page' ? (backBtn.classList.add('active'), backBtn.classList.remove('hidden')) : (backBtn.classList.add('hidden'), backBtn.classList.remove('active'))
        backBtn.onclick = () => {
            switch (sectionId) {
                case 'preview-page':
                    showSection('home-page');
                    break
                case 'OCR-page':
                    showSection('preview-page');
                    break
                case 'saved-page':
                    showSection('home-page');
                    break
                case 'faqs-page':
                    showSection('home-page');
                    break
            }
        }
    }//end of backbutton function

    const takePic = () => {
        document.querySelector('#picture').click();
    }

    const previewFile = (event) => {
        //alert(`This should show the preview page`);
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
        backButton,
        takePic,
        previewFile,
    }
})();