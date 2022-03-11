const divhuman = document.getElementById("humanprofile");
const divanimal = document.getElementById("animalprofile");
const divhumanedit = document.getElementById("humanprofileedit");
const divanimaledit = document.getElementById("animalprofileedit");

divanimal.style.display = "none";
divanimaledit.style.display = "none";

function HumanProfile() {
    divhuman.style.display = "block";
    divanimal.style.display = "none";
}

function AnimalProfile() {
    divhuman.style.display = "none";
    divanimal.style.display = "block";
}

function HumanProfileEdit() {
    divhumanedit.style.display = "block";
    divanimaledit.style.display = "none";
}

function AnimalProfileEdit() {
    divhumanedit.style.display = "none";
    divanimaledit.style.display = "block";
}