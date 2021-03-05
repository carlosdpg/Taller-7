$(document).on('ready',function (){

		$.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
			$.each(data, function(id, dpto) {
				$("#departamento").append('<option value="' + id + '">' + dpto.departamento + '</option>');
				let ciudades = dpto.ciudades;
			});
		});

		$("#departamento").on("change", function(){
			 let dptoid = $("#departamento").val();
			 $.getJSON('https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json', function(data) {
				 let cdd = data[dptoid].ciudades;
				 console.log(cdd);
				 $.each(cdd,function(id) {
					 $("#ciudad").append('<option value="' + id + '">' + id + '</option>');
				 });
			 });
		 });
	});