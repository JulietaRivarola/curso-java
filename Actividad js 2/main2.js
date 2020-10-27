
let t =document.getElementById('tablas');

for ( i=11; i>=9 ;i-- ){
	t.insertAdjacentHTML('beforeend', 'tabla del '+ i +'<br><br>');

	for ( j=0; j<=10; j++ ) {
		t.insertAdjacentHTML('beforeend', i + "x" + j +": "+ i*j + "<br>");
	}
		t.insertAdjacentHTML('beforeend', '<br><br>');

}
