const rulesBtn = document.querySelector('.sam__button-rules');
const overlay = document.querySelector('.sam__overlay');
const rulesContent = document.querySelector('.sam__back');
const closeRules = document.querySelector('.sam__rules-close');
const logo = document.querySelector('.sam__logo')
const mainPage = document.querySelector('.sam');
const wrapperMain = document.querySelector('.sam__wrapper');
const footer = document.querySelector('.sam__footer');


if(window.innerWidth <= 600){
    window.addEventListener('orientationchange', () => {
        mainPage.classList.add('overflow');
        logo.scrollIntoView();
        footer.classList.remove('visible');
        mobileButton.classList.remove('active');
    });
}



rulesBtn.addEventListener('click', ()=>{
    overlay.classList.remove('opacity');
    rulesContent.classList.remove('hidden');
    mainPage.classList.add('overflow');
    logo.scrollIntoView();
    wrapperMain.classList.add('blur');
})

closeRules.addEventListener('click', ()=>{
    overlay.classList.add('opacity');
    rulesContent.classList.add('hidden');
    wrapperMain.classList.remove('blur');
    if(footer.classList.contains('visible')){
        mainPage.classList.remove('overflow');
    }
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

const mobileButton = document.querySelector('.sam__button-mob');

mobileButton.addEventListener('click', ()=>{
    mainPage.classList.toggle('overflow');
    footer.classList.toggle('visible');
    mobileButton.classList.toggle('active');
    logo.scrollIntoView();

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





