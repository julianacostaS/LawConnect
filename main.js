const toggleButton = document.getElementById('toggleButton');
const navList = document.getElementById('navList');
const navListTwo = document.getElementById('navList-two');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active');
    navListTwo.classList.toggle('active');
});