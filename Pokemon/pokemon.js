
function getProfesional(){
    let pokemon = document.getElementById("Buscar").value
    let url=  "https://pokeapi.co/api/v2/pokemon/"+ pokemon;
    console.log(pokemon)
    
    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        method:"GET"
    }
    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result)
    {
        // let url = result.sprite.back_default
       console.log(result)
       document.getElementById("habilidades").innerHTML =result.abilities[0].ability.name;
       document.getElementById("imagen").setAttribute("src",result.sprites.back_default)
         

    })

    .catch (function(error){
        console.log(error)
    })
}