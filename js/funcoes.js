
function myFunction() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour >= 22 ) {
        greeting = "Good Night";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("img1").innerHTML = greeting;
}

function funcaoTeste(colecao){
	var e = colecao.innerHTML;
	
	console.log(e)
	
	var elemento = document.getElementById("0").parentNode
	
	console.log(elemento)
	
	elemento.setAttribute("href", "#sec4")
	
}
