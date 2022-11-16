function showmodal() {
    document.querySelector('.overlay').classList.add('showoverlay')
    document.querySelector('.loginform').classList.add('showlogin')
}

function removemodal() {
    document.querySelector('.overlay').classList.remove('showoverlay')
    document.querySelector('.loginform').classList.remove('showlogin')
}
