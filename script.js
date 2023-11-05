const lightModeBtn=document.querySelector(".light-mode");
const darkModeBtn=document.querySelector(".dark-mode");

lightModeBtn.addEventListener("click", setLightMode);
darkModeBtn.addEventListener("click", setDarkMode);

function setDarkMode(){
    setUserTheme("dark");
}
function setLightMode(){
    setUserTheme("light");
}
function setUserTheme(newtheme){
    document.documentElement.setAttribute("data-theme", newtheme);
}