const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");

let isBulbOn = false;

toggleButton.addEventListener("click", () => {
    isBulbOn = !isBulbOn;
    if (isBulbOn) {
        bulb.classList.add("on");
    } else {
        bulb.classList.remove("on");
    }
});