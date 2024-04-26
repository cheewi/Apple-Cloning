const selectElement = (element) => document.querySelector(element);

selectElement('.hamburger').addEventListener('click', () => {
    selectElement('header').classList.toggle('active')
} )