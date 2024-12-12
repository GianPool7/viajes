const galeria=document.getElementById("galeria");
const cargarImagen=(id,nombre,ruta,descripcion)=>{
    galeria.querySelector('.galeria__imagen').src=ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen=id;
    galeria.querySelector(".galeria__titulo").innerHTML=nombre;
    galeria.querySelector(".galeria__descripcion-imagen-activa").innerHTML=descripcion;
};

export {cargarImagen};