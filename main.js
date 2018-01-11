
var cen = document.getElementById("centre");
var acc = document.getElementById("Acceuil1");

acc.onclick = function() 
    {
	    var csrc = cen.getAttribute('style');
	    var bsrc = acc.getAttribute('style');
	    if(csrc === 'display: none;') {
	      cen.setAttribute ('style','display: all;');
	      acc.setAttribute ('style','display: none;');
	    }
	}

/* Code qui ne marche pas, l'idée est de prendre l'input de la l'Input Form (la barre de recherche avec le code JS document.getElementById)
Amorcer une fonction avec le clic sur le bouton Recherche Google, cette fonction cherche l'input et retourne une execution d'une url qui contient
le 'https://www.google.fr/#q'+ requete entrée en Input


var rechercheLancement = document.getElementById('button2');
var maRecherche = document.getElementById('Search');

function Recherche() {
	var nameValue = document.getElementById('Search').value;
  	nameValue = 'https://www.google.fr/#q'+ nameValue;
  //	window.open(nameValue);
	}

rechercheLancement.onclick = function() {
  Recherche();
	}
*/

//pop up
window.onload = function() {
	setTimeout (function fonc ()
		{alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }
		, 1000);};

