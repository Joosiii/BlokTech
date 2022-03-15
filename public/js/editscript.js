const divhumanedit = document.getElementById("humanprofileedit");
const divanimaledit = document.getElementById("animalprofileedit");

HumanProfileEdit();

function HumanProfileEdit() {
    divhumanedit.style.display = "block";
    divanimaledit.style.display = "none";
}

function AnimalProfileEdit() {
    divhumanedit.style.display = "none";
    divanimaledit.style.display = "block";
}

const loadFile = function(event) {
	const image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
// Bron gebruikt: https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript