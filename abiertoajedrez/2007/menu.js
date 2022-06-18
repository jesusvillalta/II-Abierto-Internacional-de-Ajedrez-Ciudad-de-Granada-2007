function popup(imagen,ancho,alto) {

	var ancho= parseInt(ancho)+40;
	var alto=parseInt(alto)+40;
	
	var prop_ventana = '"toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=0px,left=0px,width='+ ancho + 'px, height=' + alto + 'px"';
	var ventana=window.open(imagen,"popup",prop_ventana);
	
	if(ventana.closed==true)
		{
		ventana=window.open(imagen,"popup",prop_ventana);
		}
	else{
		ancho+=20;alto+=21;
		ventana.resizeTo(ancho,alto);
		ventana.location.href=imagen;
}
	ventana.focus();
	}