//------------------------------------------//
//--|funcionalidad_ambulancia_informativa|--//
//------------------------------------------//
const boton_favorito = document.getElementById("boton_favorito");
const boton_estado = document.getElementById("boton_estado");
const boton_informacion = document.getElementById("boton_informacion");
const estado_actual = document.getElementById("estado_actual");
const informacion_adicional = document.getElementById("informacion_adicional");
const contenedor_estado = document.querySelector(".estado_ambulancia");
const icono_favorito = boton_favorito.querySelector("i");
//----------------------------------------------------//
//--|guardar_y_actualizar_datos_usando_localstorage|--//
//----------------------------------------------------//
let favorita = localStorage.getItem("ambulancia_favorita") === "true";
let disponible = localStorage.getItem("ambulancia_disponible");
if (disponible === null) {
    disponible = true;
} else {
    disponible = disponible === "true";
}
function actualizar_favorito() {
    if (favorita) {
        boton_favorito.classList.add("activo");
        icono_favorito.classList.remove("fa-regular");
        icono_favorito.classList.add("fa-solid");
    } else {
        boton_favorito.classList.remove("activo");
        icono_favorito.classList.remove("fa-solid");
        icono_favorito.classList.add("fa-regular");
    }
    localStorage.setItem("ambulancia_favorita", favorita);
}
function actualizar_estado() {
    if (disponible) {
        estado_actual.textContent = "Disponible";
        contenedor_estado.classList.remove("ocupada");
        boton_estado.innerHTML = `
            <i class="fa-solid fa-bell"></i>
            Marcar como ocupada
        `;
    } else {
        estado_actual.textContent = "Ocupada";
        contenedor_estado.classList.add("ocupada");
        boton_estado.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Marcar disponible
        `;
    }
    localStorage.setItem("ambulancia_disponible", disponible);
}
//---------------------//
//--|evento_favorito|--//
//---------------------//
boton_favorito.addEventListener(
    "click",
    function() {
        favorita = !favorita;
        actualizar_favorito();
    }
);
//-------------------//
//--|evento_estado|--//
//-------------------//
boton_estado.addEventListener(
    "click",
    function() {
        disponible = !disponible;
        actualizar_estado();
    }
);
//------------------------//
//--|evento_informacion|--//
//------------------------//
boton_informacion.addEventListener(
    "click",
    function() {
        informacion_adicional.classList.toggle("mostrar");
        const visible = informacion_adicional.classList.contains("mostrar");
        if (visible) {
            boton_informacion.innerHTML = `
                <i class="fa-solid fa-chevron-up"></i>
                Ocultar información
            `;
        } else {
            boton_informacion.innerHTML = `
                <i class="fa-solid fa-circle-info"></i>
                Más información
            `;
        }
    }
);
actualizar_favorito();
actualizar_estado();