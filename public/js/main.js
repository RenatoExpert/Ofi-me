var tela0 = document.getElementById('tela0');
var tela1 = document.getElementById('tela1');
var tela2 = document.getElementById('tela2');
var tela3 = document.getElementById('tela3');
var screen = document.getElementById('screen');


function startgame() {
	tela0.style.visibility='hidden';
	tela1.style.visibility='visible';
};

function intro() {
	tela1.style.visibility='hidden';
	tela2.style.visibility='visible';
};
function refs() {
	tela2.style.visibility='hidden';
	tela3.style.visibility='visible';
};

