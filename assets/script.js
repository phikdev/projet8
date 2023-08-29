const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*fleche gauche*/

const leftArrow = document.querySelector(".arrow_left");
leftArrow.addEventListener("click" , function(){
	console.log ("clique flèche gauche");
	changeSlideLeft();
});


/*fleche droite*/

const rightArrow = document.querySelector(".arrow_right");
rightArrow.addEventListener("click" , function(){
	console.log ("clique flèche droite");
	
	/*document.querySelector(".banner-img").src = "./assets/images/slideshow/"+ slides[1].image;*/
	/*document.querySelector("#banner p").innerHTML = slides[1].tagLine;*/
	changeSlideRight();
});

/*bullet point*/

for (let i = 0; i < slides.length; i++) {
const divDot = document.createElement("div");
divDot.className = "dot";


const divDots = document.querySelector(".dots");
divDots.appendChild(divDot);
};

const dot_selected = document.querySelector(".dot");
dot_selected.classList.add("dot_selected");

/*changement de slide*/

let numero = 0;

function changeSlideRight() {

    numero++;
	
    if (numero > slides.length -1) { 
		numero = 0; 
        const lastRemove = document.querySelector(".dot:nth-child("+slides.length+")");
        lastRemove.classList.toggle("dot_selected");
	}

	document.querySelector("#banner p").innerHTML = slides[numero].tagLine;
    document.querySelector(".banner-img").src = "./assets/images/slideshow/"+ slides[numero].image;
	
	const selected = document.querySelector(".dot:nth-child("+(numero+1)+")");
    selected.classList.toggle("dot_selected");

	const remove = document.querySelector(".dot:nth-child("+numero+")");
    remove.classList.toggle("dot_selected");
	
}


function changeSlideLeft() {
    numero--;
   
	if (numero < 0) { 

	numero = slides.length -1;

	const lastRemove = document.querySelector(".dot:nth-child(1)");
    lastRemove.classList.toggle("dot_selected");
		
}
	
	document.querySelector("#banner p").innerHTML = slides[numero].tagLine;
    document.querySelector(".banner-img").src = "./assets/images/slideshow/"+ slides[numero].image;

	const selected = document.querySelector(".dot:nth-child("+(numero+1)+")");
    selected.classList.toggle("dot_selected");

	if (numero < slides.length -1) {
	const remove = document.querySelector(".dot:nth-child("+(numero+2)+")");

	remove.classList.toggle("dot_selected");
	}
}




