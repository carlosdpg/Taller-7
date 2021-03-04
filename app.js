$(document).on('ready',function (){
 		
		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(id, dpto) {
				$("#departamento").append('<option name="' + id + '">' + dpto.departamento + '</option>');
				$("#ciudad").append('<option>' + dpto.ciudades + '</option>');
			}); // close each()
		}); // close getJSON()

	});