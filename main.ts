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


 const obtenerPlaceIdPorPrefijo = async (prefijo: string) => {
  try {
    const response = await fetch(
      `https://www.meteosource.com/api/v1/free/find_places_prefix?prefix=${prefijo}&key=h0xfi7lv092neom9tueiu15yj0jabx9htj5j0cw3`
    );

    if (!response.ok) {
      throw new Error(`Error al buscar el lugar: ${response.status}`);
    }

    const datosLugar = await response.json();
    console.log("Resultados de búsqueda de lugar:", datosLugar);

    if (datosLugar.places && datosLugar.places.length > 0) {
      const placeId = datosLugar.places[0].id; // Obtén el place_id del primer resultado
      console.log("place_id encontrado:", placeId);

      // Llama a la función para obtener el clima con el place_id
      obtenerClimaPorPlaceId(placeId);
    } else {
      console.error("No se encontró el lugar con el prefijo:", prefijo);
    }
  } catch (error) {
    console.error("Error al buscar el lugar:", error);
  }
};

const obtenerClimaPorPlaceId = async (placeId: string) => {
  try {
    const response = await fetch(
      `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=current&timezone=UTC&language=en&units=metric&key=h0xfi7lv092neom9tueiu15yj0jabx9htj5j0cw3`
    );

    if (!response.ok) {
      throw new Error(`Error al obtener el clima: ${response.status}`);
    }

    const datosClima = await response.json();
    console.log("Datos completos del clima:", datosClima);

    const temperatura = datosClima.current?.temperature || "N/A";
    console.log("Temperatura actual:", temperatura);

    // Mostrar en el HTML
    const myElement = document.getElementById("clima");
    if (myElement) {
      myElement.innerHTML = `<h1>Temperatura: ${temperatura}°C</h1>`;
    } else {
      console.error("Elemento con id 'clima' no encontrado");
    }
  } catch (error) {
    console.error("Error al cargar el clima", error);
  }
};

// Llama a la función de búsqueda con el prefijo (por ejemplo, "London")
obtenerPlaceIdPorPrefijo("Barcelona");
