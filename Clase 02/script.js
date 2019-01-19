console.log("\n Variables");
		console.log ("Hola Mundo");
		var myName = "Italo";
		var myAge = 18;
		myYearBirth = 2000;
		console.log(myName + " " + myAge + " " + myYearBirth);

		//Operadores

		console.log("\n Operadores");
		var valor1 = 20;
		var valor2 = "20";

		if (valor1==valor2){
			console.log("Los operadores son iguales segun ==");
		}
		if (valor1===valor2){
			console.log("Los operadores son iguales segun ===");
		}else{
			console.log("Los operadores NO son iguales segun ===");
		}


		//Funciones
		console.log("\n Funciones");
		function myFunction (params){
			return "Hola";
		}
		function myFunction2(){
			console.log("Hola");
		}

		var miSegundoNombre = function (nombre){
			return "Hola "+nombre;
		}

		var miTercerNombre = (nombre, edad) =>{
			console.log("Hola "+nombre+" de edad "+edad);
		}

		myFunction();
		myFunction2();
		console.log(miSegundoNombre("Italo"));
		miTercerNombre("Italo", "18");

		//Alertas
		console.log("\n ");
		//alert ("something");
		//if (confirm("Ha sido el usuario numero 1.000.000 \n ¿Desea reclamar su premio?")){
		//	alert("Su Pc se llenó de virus :c");
		//}

		function ShowName (){
			let nuevoNombre = document.getElementById("123456").value;
			alert("Bienvenido "+nuevoNombre+" eres el usuario 1");
		}

		document.getElementById("btn2").addEventListener("click",ShowName);

		$("#btn3").click(()=>{
			alert($("#123456").val());
		})