let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    // const iconSwitch = document.getElementById('icon-darkmode')
    // iconSwitch.classList.remove('fa-sun')
    // iconSwitch.classList.add('fa-moon')
    
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    // const iconSwitch = document.getElementById('icon-darkmode')
    // iconSwitch.classList.remove('fa-moon')
    // iconSwitch.classList.add('fa-sun')

    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})