const rulesBtn = document.querySelector('.sam__button-rules');
const overlay = document.querySelector('.sam__overlay');
const rulesContent = document.querySelector('.sam__back');
const closeRules = document.querySelector('.sam__rules-close');

rulesBtn.addEventListener('click', ()=>{
    overlay.classList.remove('opacity');
    rulesContent.classList.remove('hidden');
})

closeRules.addEventListener('click', ()=>{
    overlay.classList.add('opacity');
    rulesContent.classList.add('hidden');
})

const copyCodeContent = document.querySelector('.sam__code-text').textContent;
const copyBtn = document.querySelector('.sam__code-copy');
const codeCopy = document.querySelector('.sam__code');

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copyCodeContent)
        .then(() => {
            console.log('Text copied to clipboard');
            codeCopy.classList.add('copy')
            copyBtn.disabled = true;
            setTimeout(()=>{
                codeCopy.classList.remove('copy');
                copyBtn.disabled = false;
            }, 5000)
        })
})

const mainPage = document.querySelector('.sam');
const mobileButton = document.querySelector('.sam__button-mob');
const footer = document.querySelector('.sam__footer');
const logo = document.querySelector('.sam__logo')
const footerCopy = document.querySelector('.sam__footer-copyright');

let counter = 0;

mobileButton.addEventListener('click', ()=>{
    counter++;
    mainPage.classList.toggle('overflow');
    footer.classList.toggle('visible');
    mobileButton.classList.toggle('active');
    if(counter%2 === 0){
        footerCopy.setAttribute('id', 'none');
        logo.setAttribute('id', 'bottom');
    }
    if(counter%2 !== 0){
        logo.setAttribute('id', 'none');
        footerCopy.setAttribute('id', 'bottom');
    }

})

const anchors = document.querySelectorAll('a[href*="#"]');

for (const anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}





