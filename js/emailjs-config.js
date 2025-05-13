// Configuración de EmailJS
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar EmailJS con tu clave pública
  emailjs.init("Y8ChVOxPvWzCCGapa") // Reemplaza con tu Public Key de EmailJS
  console.log("EmailJS inicializado correctamente")
})

// Función para enviar el formulario RSVP usando EmailJS
window.sendRSVPEmail = (formData) => {
  // Preparar los parámetros para la plantilla
  const templateParams = {
    invitation_code: formData.invitation_code,
    guests: formData.guests,
    guest_count: formData.guest_count,
    attendance: formData.attendance,
    message: formData.message || "Sin mensaje",
    date: new Date().toLocaleDateString(),
  }

  console.log("Enviando email con los siguientes datos:", templateParams)

  // Reemplaza estos valores con tus IDs reales de EmailJS
  const serviceID = "service_vqtheic" // Reemplaza con tu Service ID
  const templateID = "template_1x16wjb" // Reemplaza con tu Template ID

  // Enviar el email
  return emailjs.send(serviceID, templateID, templateParams)
}
