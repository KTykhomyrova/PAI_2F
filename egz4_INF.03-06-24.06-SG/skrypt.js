
const firstBlock = document.querySelector('main div:nth-child(1)');
const secondBlock = document.querySelector('main div:nth-child(2)');
const thirdBlock = document.querySelector('main div:nth-child(3)');


const firstBlockButton = firstBlock.querySelector('input[type="button"]');
const secondBlockButton = secondBlock.querySelector('input[type="button"]');
const thirdBlockButton = thirdBlock.querySelector('input[type="button"]');


function showBlock(show, hide1, hide2) {
    show.style.visibility = 'visible';
    hide1.style.visibility = 'hidden';
    hide2.style.visibility = 'hidden';
}

firstBlockButton.addEventListener('click', () => {
    showBlock(secondBlock, firstBlock, thirdBlock);
});

secondBlockButton.addEventListener('click', () => {
    showBlock(thirdBlock, firstBlock, secondBlock);
});

thirdBlockButton.addEventListener('click', () => {
    const passwordInput = thirdBlock.querySelector('input[type="password"]:nth-child(1)');
    const confirmPasswordInput = thirdBlock.querySelector('input[type="password"]:nth-child(3)');

    const firstNameInput = firstBlock.querySelector('input[type="text"]:nth-child(1)');
    const lastNameInput = firstBlock.querySelector('input[type="text"]:nth-child(3)');

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert('Podane hasła różnią się');
    } else {
        console.log(`Witaj ${firstNameInput.value} ${lastNameInput.value}`);
    }
});
