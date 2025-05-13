document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar el contenedor del sello
  const sealContainer = document.getElementById("seal-container")

  if (sealContainer) {
    // Verificar si el usuario ya ha abierto la invitación
    const hasOpened = sessionStorage.getItem("invitationOpened")

    if (hasOpened) {
      // Si ya se abrió en esta sesión, redirigir inmediatamente
      window.location.href = "wedding.html"
      return
    }

    // Agregar evento de clic al contenedor del sello
    sealContainer.addEventListener("click", () => {
      console.log("Sello clickeado") // Para depuración

      // Efecto de desvanecimiento
      sealContainer.classList.add("fade-out")

      // Guardar en sessionStorage que la invitación fue abierta
      sessionStorage.setItem("invitationOpened", "true")

      // Redirigir a la página principal después de completar la animación
      setTimeout(() => {
        console.log("Redirigiendo a wedding.html") // Para depuración
        window.location.href = "wedding.html"
      }, 1500)
    })
  } else {
    console.error("No se encontró el elemento con ID 'seal-container'") // Para depuración
  }

  // Agregar una forma de omitir la precarga para pruebas
  document.addEventListener("keydown", (event) => {
    // Presionar la tecla 'Escape' para omitir la precarga (para desarrollo)
    if (event.key === "Escape") {
      console.log("Tecla Escape presionada, redirigiendo") // Para depuración
      window.location.href = "wedding.html"
    }
  })
})



