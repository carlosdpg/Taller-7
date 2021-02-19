$(document).on('ready',function (){
 		
		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(departamento, value) {
				$("#pais").append('<option name="' + dpto + '">' + value + '</option>');
			}); // close each()
		}); // close getJSON()

	});