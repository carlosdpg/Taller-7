$(document).on('ready',function (){
 		
		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(departamento, value) {
				$("#usuarios").append('<option name="' + key + '">' + value + '</option>');
			}); // close each()
		}); // close getJSON()

	});