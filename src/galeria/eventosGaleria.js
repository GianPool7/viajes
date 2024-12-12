import cerrarGaleria from "./cerrarGaleria";
import sliderClick from "./sliderClick"

const galeria=document.getElementById("galeria");
galeria.addEventListener("click",(e)=>{
    const boton=e.target.closest("button");
    // CERRAR GALERIA
    if (boton?.dataset?.accion==="cerrar-galeria") {
        console.log("cerrar galeria");
        cerrarGaleria();
    }
    // carousel slide clic
    //console.log(e.target.closest.dataset.id);

    if (e.target.dataset.id) {
        console.log(e.target.dataset.id);
        sliderClick(e);
    }
    
})