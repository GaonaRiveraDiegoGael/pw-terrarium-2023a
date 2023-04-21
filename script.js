// Tomando control del objeto
// sea arrastable
dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

// Implementando la funcion drag element
function dragElement( terrariumElement ){
    // Creando variables que controlan las posiciones
    // iniciales y finales
    let pos1 = 0,
    pos2 = 0,
    // pos3 graba posicion en "x" de mouse al momento
    // de hacer onpointerdown a un elemento
    // pos4 graba posicion en "x" de mouse al momento
    // de hacer onpointerdown a un elemento
    pos3 = 0,
    pos4 = 0
    // Registrar un evento
    terrariumElement.onpointerdown = pointerDrag
    
    function pointerDrag( event ){
        // Previene todo comportamiento
        // que tenga por defecto
        // el evento en cuestion en
        // mi documento
        event.preventDefault();
        // Vamos a guardar la posicion inicial
        // que se tiene al momento de hacer
        // el pointerDrag
        pos3 = event.clientX;
        pos4 = event.clientY

        // Registrando handler para evento de arrastre
        document.onpointermove = elementDrag;
        //Registrando handler para evento
        // de liberacion del boton
        document.onpointerup = stopElementDrag;

        // Creando las funciones
        function elementDrag(event){
            // Calculando las diferencias
            // de la posicion nueva posicion
            pos1 = pos3 - event.clientX;
            pos2 = pos4 - event.clientY;

            // Actualizamos posiciones originales
            pos3 = event.clientX;
            pos4 = event.clientY;

            // Mover la imagen con las posiciones 
            // Con las posiciones calculadas
            // de modo que la imagen quede en
            // la nueva posicion del mouse
            terrariumElement.style.left = `${terrariumElement.offsetLeft - pos1}px`;
            terrariumElement.style.top = `${terrariumElement.offsetTop - pos2}px`;
        }
        function stopElementDrag(event){
            document.onpointermove = null;
            document.onpointerup = null;
        }
    }
}



