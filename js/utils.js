function changePageMode() {
    const body = document.body;
    const pageMode = window.localStorage.getItem("pageMode");
    if (pageMode == 'dark') window.localStorage.setItem("pageMode", "light");
    else window.localStorage.setItem("pageMode", "dark");
    body.classList.toggle("dark-mode");
}

function checkPageMode() {
    const body = document.body;
    const pageMode = window.localStorage.getItem("pageMode");
    if (pageMode == 'dark') body.classList.add("dark-mode")
    else body.classList.remove("dark-mode");

    const autoLevelStart = window.sessionStorage.getItem("reloading");
    if (autoLevelStart == "true")
    {
        const body = document.body;
        body.classList.add('show-level');
    };
}

function resetProgress() {
    window.localStorage.setItem("currentLevel", "01");
    window.location.reload(false);
}

function runLevel() {
    const body = document.body;
    body.classList.add('show-level');
 }


 function homeLink() {
    window.sessionStorage.setItem("reloading", "");
    window.location.reload(false);
}