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

    const ppageMode = window.localStorage.getItem("hardcoreMode");
    if (ppageMode == 'true') body.classList.add("hardcore-mode")
    else body.classList.remove("hardcore-mode");

    const autoLevelStart = window.sessionStorage.getItem("reloading");
    if (autoLevelStart == "true")
    {
        const body = document.body;
        body.classList.add('show-level');
    };
}

function resetProgress() {
    window.localStorage.setItem("currentLevel", "01");
    window.sessionStorage.setItem("reloading", "false");
    window.location.reload(false);
}

function startLevel() {
    window.sessionStorage.setItem("reloading", "true");
    const body = document.body;
    body.classList.add('show-level');
}

 function homeLink() {
    window.sessionStorage.setItem("reloading", "false");
    window.location.reload(false);
}

function restartLevel() {
    if (window.sessionStorage.getItem("reloading") == 'true') window.location.reload(false);
}

function changeHardcoreMode() {
    const body = document.body;
    var checkHardcoreMode = window.localStorage.getItem("hardcoreMode");
    if (checkHardcoreMode == 'true') window.localStorage.setItem("hardcoreMode", "false");
    else window.localStorage.setItem("hardcoreMode", "true");
    body.classList.toggle("hardcore-mode");
    window.location.reload(false)
}
