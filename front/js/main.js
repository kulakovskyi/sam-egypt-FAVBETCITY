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
        // .catch(err => {
        //     console.error('Error in copying text: ', err);
        // });
})






