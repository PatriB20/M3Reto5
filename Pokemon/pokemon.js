function getPokemon(){

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:3000/profesionales", true);
   xhttp.onreadystatechange= function(aEvt){
       if(xhttp.readyState ==4 && xhttp.status==200)
       {
           let pokemon=JSON.parse(xhttp.responseText);
           document.getElementById("mostrarNombre").value= dataJson.nombre;
         


       }
   }
   xhttp.send()
}