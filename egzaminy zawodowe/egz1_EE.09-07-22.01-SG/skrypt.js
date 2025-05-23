
const mainImage = document.getElementById('lan');

function changeImage(event) {
    mainImage.src = event.target.src; 
}

let heartIcon = document.getElementById('serce');
heartIcon.addEventListener('click', function () {
    
    if (heartIcon.src.includes('icon-off.png')) {
        heartIcon.src = 'icon-on.png';
    } else {
        heartIcon.src = 'icon-off.png';
    }
});

const thumbnails = document.querySelectorAll('aside:first-child img');
thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', changeImage);
});
