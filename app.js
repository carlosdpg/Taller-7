$(document).on('ready',function (){

		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(id, dpto) {
				$("#departamento").append('<option value="' + id + '">' + dpto.departamento + '</option>');
				let ciudades = dpto.ciudades;
				console.log(ciudades.length);
				$("#ciudad").append('<option name="' + dpto.id + "" + id + '">' + ciudades[id] + '</option>');
			});
		});

		$("#departamento").on("change", function(){
			 let dpto = $("#departamento").value;
			 console.log(dpto);
		 });
	});