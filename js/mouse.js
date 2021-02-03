/*=============================================
=          Objeto con als propiedades del Mouse          =
=============================================*/

var pm={
	zona: document.querySelector("#efectoMouse"),
	figuras: document.querySelectorAll("#efectoMouse figure"),
	mouseX:0,
	mouseY:0,
	horizontal: true,
	vertical: false
}




/*=============================================
=          Objeto con metodos del Mouse          =
=============================================*/

var mm={
	inicioMouse: function(){
		pm.zona.addEventListener("mousemove",mm.movimientoMouse);
		for(var i=0; i<pm.figuras.length; i++){
			pm.figuras[i].innerHTML = '<img src="img/mouse/plano0'+i+'.png">';	
	  		pm.figuras[i].style.zIndex= -i;

	  	}

		//campturar la altura escalando por hijos	
		/* SE REALIZA UN RETARDO DE TIEMPO OSEA ESPERA A QUE TODO 
		CARGUE PARA PODER REALIZAR LA CAPTURA DE LA ALTURA  	
		*/
		setTimeout( function(){
			pm.zona.style.height= pm.figuras[0].childNodes[0].height+"px";
		},100);

	},
	movimientoMouse: function(mouse){
		pm.mouseX=mouse.offsetX;
		pm.mouseY=mouse.offsetY;
		for(var i=0; i<pm.figuras.length; i++){

			if(pm.horizontal){// si se mueve el mouse horizontal se mueve hacia las X
				pm.figuras[i].style.left= -pm.mouseX/(i*100+50) +"%";
			}
			if(pm.vertical){// si se mueve vertical se movera en Y
				pm.figuras[i].style.top= -pm.mouseY/(i*100+50) +"%";
			}
				
	  	}

	}
}

mm.inicioMouse();