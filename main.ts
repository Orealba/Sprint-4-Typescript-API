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


//Clima

const cargarClima = async() => {
  
  try{

 
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      
    };
    const respuesta = await fetch("https://www.meteosource.com/api/v1/free/point?place_id=lhospitalet-de-llobregat-6356131&sections=current&timezone=UTC&language=en&units=metric&key=h0xfi7lv092neom9tueiu15yj0jabx9htj5j0cw3", requestOptions);
    
    if (!respuesta.ok) {
      throw new Error(`Error al obtener el lugar: ${respuesta.status}`);
    }

    // Convertimos la respuesta a JSON
    const datos = await respuesta.json();
    console.log("Datos completos de la API:", datos);

    console.log("Respuesta de la API:", datos);

    const temperatura = datos.current.temperature;
    const descripcion = datos.current.summary;
    

    // Mostramos los datos del lugar en el HTML
    let myElement = document.getElementById("clima");
    if (myElement) {
      myElement.innerHTML = `<h3>Weather: </h3>` + `<h3> ${temperatura}°C - ${descripcion}</h3>`;
    } else {
      console.error("Elemento con id 'clima' no encontrado");
    }

  } catch (error) {
    console.error("Error al cargar el clima:", error);
  }
};

// Llamamos a la función para cargar el clima
cargarClima();