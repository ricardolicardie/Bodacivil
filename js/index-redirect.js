document.addEventListener("DOMContentLoaded", () => {
  console.log("Verificando redirección") // Para depuración

  // Verificar si es un acceso directo a wedding.html sin pasar por la precarga
  const hasOpened = sessionStorage.getItem("invitationOpened")
  const isDirectAccess = !document.referrer.includes("index.html") && !hasOpened

  console.log("¿Ha abierto la invitación?", hasOpened) // Para depuración
  console.log("¿Es acceso directo?", isDirectAccess) // Para depuración

  // Si es acceso directo y no está en modo desarrollo, redirigir a la precarga
  if (isDirectAccess && window.location.hostname !== "localhost" && !window.location.hostname.includes("127.0.0.1")) {
    console.log("Redirigiendo a index.html") // Para depuración
    window.location.href = "index.html"
  }
})
