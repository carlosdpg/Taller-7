$(document).on('ready',function (){

		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(id, dpto) {
				$("#departamento").append('<option value="' + id + '">' + dpto.departamento + '</option>');
				let ciudades = dpto.ciudades;
			});
		});

		$("#departamento").on("change", function(){
			 let dptoid = $("#departamento").val();
			 $("ciudad").empty();
			 $.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
				 let cdd = data[dptoid].ciudades;
				 for (let i = 0; i < cdd.length; i++) {
					 $("#ciudad").append('<option value="' + i + '">' + cdd[i] + '</option>');
					 console.log(cdd[i]);
				 };
			 });
		 });
	});