const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        document.querySelector("em").textContent = "Deaktiver Dark Mode!";
        localStorage.setItem("theme", "dark");

    } else {
        document.documentElement.setAttribute("data-theme", "light");
        document.querySelector("em").textContent = "Aktiver Dark Mode!";
        localStorage.setItem("theme", "light");
    }
}

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark"){
        toggleSwitch.checked = true;
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);
