const divhuman = document.getElementById("humanprofile");
const divanimal = document.getElementById("animalprofile");

HumanProfile();

function HumanProfile() {
    divhuman.style.display = "block";
    divanimal.style.display = "none";
}

function AnimalProfile() {
    divhuman.style.display = "none";
    divanimal.style.display = "block";
}