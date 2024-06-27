//Tooltip btn enviar correo
$("#enviarCorreo").hover(function () {
    $(this).attr('title', 'Presiona para enviar a tu correo');
})

//Tooltip btn agregar favoritos
$("#agregarFavoritos").hover(function () {
    $(this).attr('title', 'Agrega esta receta a tus favoritos');
})

//Alert onclick btn enviar correo
$("#enviarCorreo").on("click", function () {
    alert("El correo fue enviado correctamente ✅")
})

//Animación para desaparecer card-text al hacer onclick en card
$(".card").on("click", function () {
    $(".card-text").toggle("slow", function () {
    });
})

//Cambiar a color rojo h4 al hacer doble click
$("h4").on("dblclick", function () {
    $(this).css({
        "color":"red"
    })
})


