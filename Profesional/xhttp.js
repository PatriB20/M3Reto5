
class Profesional {
    
    constructor(name, age, gnere,isRetired,
       nacionality, oscarsNumber,profession)
       {
           this.name= name;
           this.age= age;
           this.gnere= gnere;
           this.isRetired = isRetired;
           this.nacionality = nacionality;
           this.oscarsNumber = oscarsNumber;
           this.profession = profession;

       }
   }
function postProfesional() {
    let profesional =new Profesional(
                    document.getElementById("nombre").value,
                     document.getElementById("edad").value,
                     document.getElementById("genero").value,
                     document.getElementById("retirado").value,
                     document.getElementById("nacionalidad").value,
                     document.getElementById("oscars").value,
                     document.getElementById("profesion").value )
    const url="http://127.0.0.1:3000/profesionales"
    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(profesional),
        method:"POST"
    }
    fetch(url,param)
    .then(function(data){
        return data.json()
    })
    .then(function(result){
        console.log(result)
    })
     .catch (function(error){
        console.log(error)
    })
}

function getProfesional(){
    let id= document.getElementById("Mid").value;
    let url="http://127.0.0.1:3000/profesionales?id=" +id;
    
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
    document.getElementById("mostrarNombre").value= result.name;
    document.getElementById("mostrarEdad").value= result.age;
    document.getElementById("mostrarGenero").value= result.gnere;
    document.getElementById("mostrarRetirado").value= result.isRetired;
    document.getElementById("mostrarNacionalidad").value= result.nacionality;
    document.getElementById("mostrarNoscars").value= result.oscarsNumber;
    document.getElementById("mostrarProfesion").value= result.profession;
    })

    .catch (function(error){
        console.log(error)
    })
}

function putProfesional(){
    let id= document.getElementById("id").value;
    
const url="http://127.0.0.1:3000/profesionales"
let param ={
headers:{"Content-type": "application/json; charset= UTF-8"},
body: JSON.stringify(profesionales),
method:"PUT"}

fetch(url,param)
    .then(function(data){
        return data.json
    })
    .then(function(result){
        result=(profesionales[id].nombre=document.getElementById("nombre").value,
        profesionales[id].edad=document.getElementById("edad").value,
        profesionales[id].genero= document.getElementById("genero").value,
        profesionales[id].estaRetirado=document.getElementById("retirado").value,
        profesionales[id].nacionalidad=document.getElementById("nacionalidad").value,
        profesionales[id].nOscars=document.getElementById("oscars").value,
        profesionales[id].profesion=document.getElementById("profesion").value)
        return result
    })
    .catch (function(error){
    console.log(error)
    })

}
function deleteProfesional(){
    let id= document.getElementById("id").value;
    const url="http://localhost:3000/profesionles"
    
    let param ={
        headers:{"Content-type": "application/json; charset= UTF-8"},
        body: JSON.stringify(profesional),
        method:"DELETE"}
        
       
    fetch(url,param)
        .then(function(data){
            return data
        })
        .then(function(result){
          console.log(result) 
        })
        .catch (function(error){
         console.log(error)
        })
}
function getProfesionales(){
    
    let url="http://127.0.0.1:3000/profesionales"
    
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
    document.getElementById("profesionales").value= result.profesionales
   
    })

    .catch (function(error){
        console.log(error)
    })
}