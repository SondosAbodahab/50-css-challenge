const searchInput = document.querySelector('.search-input')
const searchIcon = document.querySelector('.search-icon')


searchIcon.addEventListener('click', ()=>{
    searchInput.classList.toggle('hidden')
    searchInput.focus()
})
