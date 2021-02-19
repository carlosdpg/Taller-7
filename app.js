$(document).on('ready',function (){
 		
		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(id, departamento) {
				$("#pais").append('<option name="' + id + '">' + departamento + '</option>');
			}); // close each()
		}); // close getJSON()

	});