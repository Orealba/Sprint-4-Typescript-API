interface rankingChistes {
  joke: string;
  score: number;
  date: string;
}
let reportAcudits: rankingChistes[] = []

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


 
    let myElement = document.getElementById("chistecito");
    if (myElement) {
      myElement.innerHTML = `<h1>${chiste}</h1>`;
    } else {
      console.error("Elemento con id 'chistecito' no encontrado");
    }
   

      reportAcudits.push({
        joke: chiste,
        score: 0,
        date: new Date().toISOString(),
      })
      console.log("Este es un reporte de chistes: " , reportAcudits)
    } catch (error) {
      console.error("Error al cargar el chiste:", error);
    }
 };
 

  let votoChiste = (score:number) =>{
    if ( reportAcudits.length > 0){
      reportAcudits[reportAcudits.length - 1].score = score;
      reportAcudits[reportAcudits.length - 1].date = new Date().toISOString();
      console.log("Reporte nuevo : ", reportAcudits)
    }
  };
 
  document.getElementById("nuevoChiste")?.addEventListener("click", cargarNuevoChiste);
  document.querySelector(".sad-image")?.addEventListener("click", () => votoChiste(1));
  document.querySelector(".normal-image")?.addEventListener("click", () => {console.log("Sad image clicked"); votoChiste(2)});
  document.querySelector(".happy-image")?.addEventListener("click", () => {
    console.log("Happy image clicked");
    votoChiste(3);
  });
 cargarNuevoChiste()