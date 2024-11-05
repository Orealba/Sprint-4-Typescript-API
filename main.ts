const cargarNuevoChiste = async() => {
    try{
 
   
     const myHeaders = new Headers();
         myHeaders.append("Accept", "application/json");
         
         const requestOptions  = {
           method: "GET",
           headers: myHeaders,
          
         };
 
     const respuesta = await fetch("https://icanhazdadjoke.com/",requestOptions)
     if (!respuesta.ok) {
         throw new Error(`HTTP error! Status: ${respuesta.status}`);
       }
     
    console.log(respuesta.body)
    
 
     const datos =  await respuesta.json()
     console.log(datos)
 
     let chistes: string = ""
         chistes = `<h1>${datos.joke}<h1>`;
     let myElement = document.getElementById("chistecito");
     if (myElement) {
         myElement.innerHTML = chistes;
     } else {
       console.error("Elemento con id 'chistecito' no encontrado");
     }
   } catch (error) {
     console.error("Error al cargar el chiste:", error);
   }
 }
 
 
 
 cargarNuevoChiste()