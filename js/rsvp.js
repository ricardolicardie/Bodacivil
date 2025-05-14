// Base de datos simulada de invitados
const guestDatabase = [
  {
    code: "FFV",
    guests: [
      { id: 1, name: "Pedro", confirmed: null },
      { id: 2, name: "Lesbia", confirmed: null },
      { id: 3, name: "Vane", confirmed: null },
      { id: 4, name: "Pietro", confirmed: null },
    ],
  },
  {
    code: "SFA",
    guests: [
      { id: 5, name: "Sofi", confirmed: null },
      { id: 6, name: "Novio de Sofi", confirmed: null },
    ],
  },
{
    code: "AFA",
    guests: [
      { id: 7, name: "Beto", confirmed: null },
      { id: 8, name: "Lucia", confirmed: null },
    ],
  },
{
    code: "RFA",
    guests: [
      { id: 9, name: "Roberto", confirmed: null },
    ],
  },
{
    code: "JPF",
    guests: [
      { id: 10, name: "Juan Pablo", confirmed: null },
      { id: 11, name: "Novia de Juan Pablo", confirmed: null },
    ],
  },
{
    code: "CFA",
    guests: [
      { id: 12, name: "Sofi", confirmed: null },
    ],
  },
{
    code: "FFG",
    guests: [
      { id: 13, name: "Aldo", confirmed: null },
      { id: 14, name: "Andrea", confirmed: null },
      { id: 15, name: "Aldito", confirmed: null },
    ],
  },
{
    code: "GXA",
    guests: [
      { id: 16, name: "Gaby Arriaga", confirmed: null },
      { id: 17, name: "Jimena Arriaga", confirmed: null },
    ],
  },

  { 
  code: "TEST",
    guests: [{ id: 18, name: "Invitado de Prueba", confirmed: null }],
  },
]

// Inicializar la base de datos en localStorage si no existe
function initDatabase() {
  if (!localStorage.getItem("weddingGuests")) {
    localStorage.setItem("weddingGuests", JSON.stringify(guestDatabase))
  }
  console.log("Base de datos inicializada:", localStorage.getItem("weddingGuests") ? "OK" : "Error")
}

// Obtener la base de datos de localStorage
function getDatabase() {
  return JSON.parse(localStorage.getItem("weddingGuests"))
}

// Guardar la base de datos en localStorage
function saveDatabase(database) {
  localStorage.setItem("weddingGuests", JSON.stringify(database))
}

// Buscar invitados por código
function findGuestsByCode(code) {
  const database = getDatabase()
  const invitation = database.find((inv) => inv.code.toUpperCase() === code.toUpperCase())
  return invitation ? invitation.guests : null
}

// Actualizar el estado de confirmación de múltiples invitados
function updateGuestsConfirmation(guestIds, confirmationStatus, message = "") {
  const database = getDatabase()
  let updatedCount = 0

  for (const invitation of database) {
    for (const guest of invitation.guests) {
      if (guestIds.includes(guest.id)) {
        guest.confirmed = confirmationStatus
        guest.message = message
        updatedCount++
      }
    }
  }

  if (updatedCount > 0) {
    saveDatabase(database)
    return true
  }

  return false
}

// Inicializar el formulario RSVP
function initRsvpForm() {
  // Inicializar la base de datos
  initDatabase()

  // Elementos del formulario
  const form = document.getElementById("rsvp-form")
  const formSuccess = document.getElementById("form-success")
  const formLoading = document.getElementById("form-loading")
  const formError = document.getElementById("form-error")
  const formSteps = document.querySelectorAll(".form-step")
  const progressSteps = document.querySelectorAll(".progress-step")
  const progressLines = document.querySelectorAll(".progress-line-inner")
  const prevButtons = document.querySelectorAll(".btn-prev")
  const retryButton = document.querySelector(".btn-retry")

  // Elementos específicos
  const codeInput = document.getElementById("invitation-code")
  const codeError = document.getElementById("code-error")
  const verifyCodeBtn = document.getElementById("verify-code")
  const guestsList = document.getElementById("guests-list")
  const guestError = document.getElementById("guest-error")
  const selectGuestsBtn = document.getElementById("select-guests")
  const messageInput = document.getElementById("message")
  const summaryContent = document.getElementById("summary-content")
  const selectAllCheckbox = document.getElementById("select-all-guests")

  if (!form) return

  let currentStep = 1
  let selectedGuests = null
  let selectedGuestIds = []

  // Función para verificar el código de invitación
  verifyCodeBtn.addEventListener("click", () => {
    const code = codeInput.value.trim()

    if (!code) {
      showError(codeInput, codeError, "Por favor, ingresa tu código de invitación.")
      return
    }

    const guests = findGuestsByCode(code)

    if (!guests) {
      showError(codeInput, codeError, "Código de invitación no válido. Por favor, verifica e intenta nuevamente.")
      codeInput.classList.add("shake")
      setTimeout(() => {
        codeInput.classList.remove("shake")
      }, 600)
      return
    }

    // Código válido, guardar invitados y avanzar al siguiente paso
    selectedGuests = guests
    selectedGuestIds = [] // Reiniciar selección
    renderGuestsList(guests)
    showStep(2)
  })

  // Función para manejar el checkbox "Seleccionar todos"
  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener("change", function () {
      const checkboxes = document.querySelectorAll(".guest-checkbox")
      checkboxes.forEach((checkbox) => {
        checkbox.checked = this.checked

        // Actualizar la lista de IDs seleccionados
        const guestId = Number.parseInt(checkbox.value)
        if (this.checked) {
          if (!selectedGuestIds.includes(guestId)) {
            selectedGuestIds.push(guestId)
          }
        } else {
          selectedGuestIds = selectedGuestIds.filter((id) => id !== guestId)
        }
      })

      // Actualizar la apariencia de los elementos
      updateGuestItemsAppearance()
    })
  }

  // Función para renderizar la lista de invitados con checkboxes
  function renderGuestsList(guests) {
    guestsList.innerHTML = ""

    // Agregar el checkbox "Seleccionar todos" si hay más de un invitado
    if (guests.length > 1) {
      const selectAllContainer = document.createElement("div")
      selectAllContainer.className = "select-all-container"
      selectAllContainer.innerHTML = `
<div class="select-all-info">
  <i class="fas fa-users guest-icon"></i>
  <span class="bodoni-text">Todos los invitados</span>
</div>
<div class="select-all-selection">
  <label class="select-all-label">
    <input type="checkbox" id="select-all-guests" class="guest-checkbox-all">
    <span class="bodoni-text">Seleccionar todos</span>
  </label>
</div>
`
      guestsList.appendChild(selectAllContainer)

      // Agregar event listener al checkbox
      const selectAllCheckbox = selectAllContainer.querySelector("#select-all-guests")
      selectAllCheckbox.addEventListener("change", function () {
        const checkboxes = document.querySelectorAll(".guest-checkbox")
        checkboxes.forEach((checkbox) => {
          checkbox.checked = this.checked

          // Actualizar la lista de IDs seleccionados
          const guestId = Number.parseInt(checkbox.value)
          if (this.checked) {
            if (!selectedGuestIds.includes(guestId)) {
              selectedGuestIds.push(guestId)
            }
          } else {
            selectedGuestIds = selectedGuestIds.filter((id) => id !== guestId)
          }
        })

        // Actualizar la apariencia de los elementos
        updateGuestItemsAppearance()
      })
    }

    guests.forEach((guest) => {
      const guestItem = document.createElement("div")
      guestItem.className = "guest-item"
      guestItem.setAttribute("data-id", guest.id)

      // Determinar el estado y el icono
      let statusClass = "pending"
      let statusText = "Pendiente"

      if (guest.confirmed === true) {
        statusClass = "confirmed"
        statusText = "Confirmado"
      } else if (guest.confirmed === false) {
        statusClass = "declined"
        statusText = "No asistirá"
      } else if (guest.confirmed === "zoom") {
        statusClass = "zoom"
        statusText = "Verá por Zoom"
      }

      guestItem.innerHTML = `
    <div class="guest-info">
      <i class="fas fa-user guest-icon"></i>
      <div class="guest-name">${guest.name}</div>
      <div class="guest-status ${statusClass}">${statusText}</div>
    </div>
    <div class="guest-selection">
      <label class="guest-checkbox-label">
        <input type="checkbox" class="guest-checkbox" value="${guest.id}">
      </label>
    </div>
  `

      // Hacer que todo el elemento sea clickeable, no solo el checkbox
      guestItem.addEventListener("click", function (e) {
        // Evitar que se active si se hizo clic directamente en el checkbox
        if (e.target.type !== "checkbox") {
          const checkbox = this.querySelector(".guest-checkbox")
          checkbox.checked = !checkbox.checked

          // Disparar el evento change manualmente
          const event = new Event("change")
          checkbox.dispatchEvent(event)
        }
      })

      const checkbox = guestItem.querySelector(".guest-checkbox")
      checkbox.addEventListener("change", function () {
        const guestId = Number.parseInt(guest.id)

        if (this.checked) {
          if (!selectedGuestIds.includes(guestId)) {
            selectedGuestIds.push(guestId)
          }
        } else {
          selectedGuestIds = selectedGuestIds.filter((id) => id !== guestId)

          // Si desmarcamos un checkbox, también desmarcamos "Seleccionar todos"
          const selectAllCheckbox = document.getElementById("select-all-guests")
          if (selectAllCheckbox) {
            selectAllCheckbox.checked = false
          }
        }

        // Actualizar la apariencia de los elementos
        updateGuestItemsAppearance()
      })

      guestsList.appendChild(guestItem)
    })
  }

  // Función para actualizar la apariencia de los elementos según su selección
  function updateGuestItemsAppearance() {
    document.querySelectorAll(".guest-item").forEach((item) => {
      const id = Number.parseInt(item.getAttribute("data-id"))
      const checkbox = item.querySelector(".guest-checkbox")

      if (checkbox && checkbox.checked) {
        item.classList.add("selected")
      } else {
        item.classList.remove("selected")
      }
    })

    // Actualizar el estado del checkbox "Seleccionar todos"
    const selectAllCheckbox = document.getElementById("select-all-guests")
    const checkboxes = document.querySelectorAll(".guest-checkbox")

    if (selectAllCheckbox && checkboxes.length > 0) {
      selectAllCheckbox.checked = checkboxes.length === Array.from(checkboxes).filter((cb) => cb.checked).length
    }

    // Actualizar el contador de seleccionados si existe
    const selectedCount = document.getElementById("selected-count")
    if (selectedCount) {
      selectedCount.textContent = selectedGuestIds.length
    }
  }

  // Función para seleccionar invitados y avanzar
  selectGuestsBtn.addEventListener("click", () => {
    if (selectedGuestIds.length === 0) {
      showError(null, guestError, "Por favor, selecciona al menos un invitado de la lista.")
      return
    }

    // Encontrar los invitados seleccionados
    const selectedGuestsList = selectedGuests.filter((guest) => selectedGuestIds.includes(guest.id))

    // Actualizar el resumen
    updateSummary(selectedGuestsList)

    // Avanzar al siguiente paso
    showStep(3)
  })

  // Función para actualizar el resumen con múltiples invitados
  function updateSummary(guestsList) {
    let summaryHTML = ""

    // Mostrar cada invitado seleccionado
    summaryHTML += `<div class="summary-item">
      <div class="summary-label">Invitados seleccionados:</div>
      <div class="summary-value">
        <ul class="summary-guests-list">
          ${guestsList.map((guest) => `<li>${guest.name}</li>`).join("")}
        </ul>
      </div>
    </div>`

    // Si todos tienen el mismo estado de confirmación, preseleccionarlo
    const allConfirmed = guestsList.every((guest) => guest.confirmed === true)
    const allDeclined = guestsList.every((guest) => guest.confirmed === false)
    const allZoom = guestsList.every((guest) => guest.confirmed === "zoom")

    if (allConfirmed) {
      document.getElementById("attending-yes").checked = true
    } else if (allDeclined) {
      document.getElementById("attending-no").checked = true
    } else if (allZoom) {
      document.getElementById("attending-zoom").checked = true
    }

    // Si todos tienen el mismo mensaje, mostrarlo
    const messages = guestsList.map((guest) => guest.message).filter(Boolean)
    if (messages.length > 0 && new Set(messages).size === 1) {
      messageInput.value = messages[0]
    } else {
      messageInput.value = ""
    }

    summaryContent.innerHTML = summaryHTML
  }

  // Manejar envío del formulario con EmailJS
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (selectedGuestIds.length === 0) {
      return
    }

    // Obtener el estado de confirmación
    const attending = document.querySelector('input[name="attending"]:checked').value
    const message = messageInput.value

    // Convertir el valor de asistencia al formato correcto
    let confirmationStatus
    if (attending === "yes") {
      confirmationStatus = true
    } else if (attending === "no") {
      confirmationStatus = false
    } else if (attending === "zoom") {
      confirmationStatus = "zoom"
    }

    // Mostrar estado de carga
    form.style.display = "none"
    formLoading.classList.remove("hidden")

    // Encontrar los invitados seleccionados para el email
    const selectedGuestsList = selectedGuests.filter((guest) => selectedGuestIds.includes(guest.id))

    // Preparar datos para EmailJS
    const emailData = {
      invitation_code: codeInput.value.trim(),
      guests: selectedGuestsList.map((guest) => guest.name).join(", "),
      guest_count: selectedGuestsList.length,
      attendance: attending === "yes" ? "Asistirá" : attending === "zoom" ? "Verá por Zoom" : "No asistirá",
      message: message || "Sin mensaje",
    }

    // Enviar email con EmailJS
    if (typeof emailjs !== "undefined" && typeof window.sendRSVPEmail === "function") {
      // Usar la función centralizada de emailjs-config.js
      window
        .sendRSVPEmail(emailData)
        .then((response) => {
          console.log("Email enviado correctamente:", response)

          // Actualizar la base de datos
          const updated = updateGuestsConfirmation(selectedGuestIds, confirmationStatus, message)

          // Ocultar carga
          formLoading.classList.add("hidden")

          if (updated) {
            // Mostrar éxito
            formSuccess.classList.remove("hidden")
          } else {
            // Mostrar error
            formError.classList.remove("hidden")
          }
        })
        .catch((error) => {
          console.error("Error al enviar email:", error)
          formLoading.classList.add("hidden")
          formError.classList.remove("hidden")
        })
    } else {
      console.error(
        "EmailJS no está inicializado correctamente. Verifica que el script de EmailJS esté incluido en tu HTML y que la función sendRSVPEmail esté definida.",
      )
      formLoading.classList.add("hidden")
      formError.classList.remove("hidden")
    }
  })

  // Event listeners para botones de navegación
  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showStep(currentStep - 1)
    })
  })

  // Botón de reintentar
  if (retryButton) {
    retryButton.addEventListener("click", () => {
      formError.classList.add("hidden")
      form.style.display = "block"
    })
  }

  // Función para mostrar error
  function showError(input, errorElement, message) {
    if (input) {
      input.classList.add("invalid")
    }
    errorElement.textContent = message
    errorElement.classList.add("visible")
  }

  // Función para ocultar error
  function hideError(input, errorElement) {
    if (input) {
      input.classList.remove("invalid")
    }
    errorElement.textContent = ""
    errorElement.classList.remove("visible")
  }

  // Función para actualizar la barra de progreso
  function updateProgressBar(step) {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < step) {
        progressStep.classList.add("completed")
        if (idx < step - 1) {
          progressStep.classList.remove("active")
        } else {
          progressStep.classList.add("active")
        }
      } else if (idx === step - 1) {
        progressStep.classList.add("active")
        progressStep.classList.remove("completed")
      } else {
        progressStep.classList.remove("active", "completed")
      }
    })

    progressLines.forEach((line, idx) => {
      if (idx < step - 1) {
        line.style.width = "100%"
      } else {
        line.style.width = "0%"
      }
    })
  }

  // Función para mostrar un paso específico con animación
  function showStep(step) {
    // Ocultar paso actual con animación
    const currentStepElement = document.querySelector(`.form-step[data-step="${currentStep}"]`)
    if (currentStepElement) {
      currentStepElement.style.opacity = "0"
      currentStepElement.style.transform = "translateY(20px)"

      // Esperar a que termine la animación de salida
      setTimeout(() => {
        formSteps.forEach((formStep) => {
          formStep.classList.remove("active")
        })

        // Mostrar nuevo paso con animación
        const nextStepElement = document.querySelector(`.form-step[data-step="${step}"]`)
        if (nextStepElement) {
          nextStepElement.classList.add("active")

          // Dar tiempo al DOM para actualizar
          setTimeout(() => {
            nextStepElement.style.opacity = "1"
            nextStepElement.style.transform = "translateY(0)"
          }, 50)
        }

        updateProgressBar(step)
        currentStep = step
      }, 300) // Tiempo de la animación de salida
    }
  }

  // Inicializar el formulario en el primer paso
  showStep(1)

  // Limpiar errores al escribir en el campo de código
  codeInput.addEventListener("input", () => {
    hideError(codeInput, codeError)
  })
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initRsvpForm()
})
