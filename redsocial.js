/*AÑADIDO UN PRIMER COMENTARIO*/

/*Base de datos de usuarios */
const userDatabase = [
    {
        username : "usuario1",
        password : "123456"
    },
    {
        username : "usuario2",
        password : "654321"
    },
    {
        username : "usuario3",
        password : "951357"
    },
    {
        username : "usuario4",
        password : "753159"
    },
]
/*Base de datos timeline */
const usersTimeline = [
    {
        username    : "usuario1",
        timeline    : "Aprendiendo Javascrit"
    },
    {
        username    : "usuario2",
        timeline    : "Parchando bici"
    },
    {
        username    : "usuario3",
        timeline    : "Cocinando"
    },
    {
        username    : "usuario4",
        timeline    : "Usando coca"
    }
]

/*Funcion para realizar las validaciones del usuario y pass que se ingresan */
function comprobar(){
    /*Declarando variables que se obtienen de inputs en una pagina html */
    let usu = document.getElementById("usuario").value;
    let pass = document.getElementById("clave").value;

    /*usando el metodo SOME para ver si hay algun elemento dentro del array
    de usuarios, aunque tambien se puede usar FIND pero lo use en la linea de en medio. */
    if (userDatabase.some((usuario) => usuario.username === usu.toLowerCase()) 
        && userDatabase.some((usuario) => usuario.password === pass)) {
        
        let u = usersTimeline.find((usuario1) => usuario1.username === usu.toLowerCase());

        alert(`Bienvenido ${u.username}, ${u.timeline}`);
        
    } else {
        alert('Usuario u contraseña incorrecto!');
    }

    
}
