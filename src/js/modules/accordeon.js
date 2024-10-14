function accordeon() {

    const accordeonTriger = document.querySelectorAll('.accordeon__triger');

    accordeonTriger.forEach((item) => {
        item.addEventListener('click', () => {
            item.parentNode.classList.toggle('accordeon__item--active');
            item.querySelector('.icon--accordeon-arrow').classList.toggle('rotated');
        })
    });

}

export default accordeon;