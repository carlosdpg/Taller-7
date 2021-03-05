$(document).on('ready',function (){
 		
		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(id, dpto) {
				$("#departamento").append('<option name="' + id + '">' + dpto.departamento + '</option>');
				$("#ciudad").append('<option name="' + dpto.id + "" + id + '">' + dpto.ciudades + '</option>');
				let ciudades = dpto.ciudades;
			});
			console.log(ciudades);
		});
	});