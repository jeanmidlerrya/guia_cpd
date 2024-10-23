

function tema(cor){

	var elemento_fundo = document.getElementsByClassName("tema")
	var texto = document.getElementsByClassName("list-group-item")
	var escala = document.getElementsByClassName("link")
	var corpo = document.getElementById("corpo")
	var listGroup = document.getElementsByClassName("list-group")
	var listGroupItem = document.getElementsByClassName("list-group-item")


	var cor_texto 
	var codigo_fundo
	var cor_texto_escala
	var list_background

	if(cor == "laranja"){
		codigo_fundo = "#ff8700"
		cor_texto = "#ff8700"
		cor_texto_escala = "#ff8700"
		list_background = "#ffffff"
		corpo.style.background = "url('img/4935872.jpg')"

	}else if(cor == "verde"){
		codigo_fundo = "#055b00"
		cor_texto = "#055b00"
		cor_texto_escala = "#055b00"
		list_background = "#ffffff"
		corpo.style.background = "#1c171e"
		corpo.style.background = "url('img/4935872.jpg')"

	}else if (cor == "azul"){
		codigo_fundo = "#0F3F90"
		cor_texto = "#007bff"
		cor_texto_escala = "#007bff"
		list_background = "#ffffff"
		corpo.style.background = "#1c171e"
		corpo.style.background = "url('img/4935872.jpg')"

	}else if(cor == "dark"){
		codigo_fundo = "#312c33"
		cor_texto = "#ffffff"
		cor_texto_escala = "#312c33"
		corpo.style.background = "#1c171e"
		list_background = "#474349"
		
	}	

	for(var i = 0; i < elemento_fundo.length; i++){
		elemento_fundo[i].style.background = codigo_fundo
		
	}
	
	for(var i = 0; i < texto.length; i++){
		texto[i].style.color = cor_texto
	}

	for(var i = 0; i < escala.length; i++){
		escala[i].style.color = cor_texto_escala
		
	}

	for(var i = 0; i < listGroup.length; i++){
		listGroup[i].style.color = list_background		
	}

	for(var i = 0; i < listGroupItem.length; i++){
		listGroupItem[i].style.background = list_background	
	}


	
			
}