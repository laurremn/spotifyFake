//DECLARANDO VARIABLES CON JS DESDE DOM
let usuarioBaseDatos="sura45"
let contraseñaBaseDatos="12345"
let correoBaseDatos="savelo@gmail.com"
let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioNombre=document.getElementById("Nombre")
let cajaFormularioEmail=document.getElementById("Correo")
let cajaFormularioPassword=document.getElementById("contraseña")
//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()
    
    //1.capturamos la informacion del formulario
    let nombreUsuario=cajaFormularioNombre.value
    let correoUsuario=cajaFormularioEmail.value
    let passwordUsario=cajaFormularioPassword.value
    
    //validando los datos del usuario
    if(usuarioBaseDatos==nombreUsuario){
        Swal.fire({
            title: "Bienvenido"+nombreUsuario,
            text: "Tus datos son correctas",
            icon: "success"
          });

          window.location.href="./src/views/home.html"
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops " + nombreUsuario +"tienes un problema",
            text: " Verifica tus datos",
          });
    }
        
})

/*cajaFormularioNombre.addEventListener("click",function(){
    alert("digite su nombre")
})

cajaFormularioNombre.addEventListener("click",function(){
    alert("digite su nombre")
})

cajaFormularioNombre.addEventListener("click",function(){
    alert("digite su nombre")
})*/