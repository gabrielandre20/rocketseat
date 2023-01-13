const openModalButton = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKrey = event.key === 'Escape'

    if(isEscKrey) {
        modalWrapper.classList.add('invisible')
    }
}) 