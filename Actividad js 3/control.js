
let form = document.querySelector('form');
let usuario = document.getElementById('usuario');
let pass = document.getElementById('pass');
let submit = document.getElementById('submit');

form.onsubmit = function(e) { if (datosCompletados(e)) { validarUsuario(e)}}

function datosCompletados(e){
	let esValido = true;
	if (usuario.value === '' || pass.value === '') {
		e.preventDefault();
		alert('Debes completar todos los datos.');
		esValido=false;
	}
	return esValido;
}

function validarUsuario(e){
		let esValido = false;
		let i = 0;
		
			while(i<usuario.value.length || esValido ){
			if(usuario.value[i] === '@'){
				esValido = true;
			}
			i++;
		}	
		
		if(!esValido){
			e.preventDefault();
			alert('Usuario ingresado no valido. El usuario debe contener al menos una @.');
		}	
}

