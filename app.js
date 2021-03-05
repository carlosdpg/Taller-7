$(document).on('ready',function (){
 		
		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(id, dpto, cdd) {
				console.log(cdd);
				$("#departamento").append('<option name="' + id + '">' + dpto + '</option>');
				$("#ciudad").append('<option name="' + dpto + '">' + cdd + '</option>');
			});
		});

	});