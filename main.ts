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
     
   
    
 
     const datos =  await respuesta.json()
     const chiste = datos.joke;  
    console.log("Este es mi nuevo chiste: " + chiste);  

//quede aqui
 
     let chistes: string = `<h1>${datos.joke}<h1>`;
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
  document.getElementById("nuevoChiste")?.addEventListener("click", cargarNuevoChiste);

 
 
 cargarNuevoChiste()