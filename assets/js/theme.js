if(!localStorage.getItem('theme') == 'light') {
    setDarkMode();

    if(!document.getElementById('checkbox').checked) {
        localStorage.setItem('checkbox', true);
    }
}

function setDarkMode() {
    // darkmode definido en style.css
    let isDark = document.body.classList.toggle('darkmode');

    if(isDark) {
        setDarkMode.checked = true;
        localStorage.setItem('theme', 'light');
        document.getElementById('checkbox').setAttribute('checked', 'checked');
    } else {
        setDarkMode.checked = true;
        localStorage.removeItem('theme', 'light');
    }
}