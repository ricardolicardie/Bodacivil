// Base de datos simulada de invitados
const guestDatabase = [
  {
    code: "FPA",
    guests: [
      { id: 1, name: "Mercy", confirmed: null },
      { id: 2, name: "Andre", confirmed: null },
      { id: 3, name: "Rodri", confirmed: null },
    ],
  },
  {
    code: "VMC",
    guests: [
      { id: 4, name: "Vale", confirmed: null },
      { id: 5, name: "Marce", confirmed: null },
    ],
  },
  {
    code: "FAA",
    guests: [
      { id: 6, name: "Abuelo Edgar", confirmed: null },
      { id: 7, name: "Abuela Tere", confirmed: null },
      { id: 8, name: "Tia Angelica", confirmed: null },
      { id: 9, name: "Tia Susy", confirmed: null },
    ],
  },
  {
    code: "MFF",
    guests: [
      { id: 10, name: "Franches", confirmed: null },
      { id: 11, name: "Antony", confirmed: null },
    ],
  },
  {
    code: "AAF",
    guests: [
      { id: 12, name: "Tonito", confirmed: null },
      { id: 13, name: "Mayita", confirmed: null },
    ],
  },
  {
    code: "FAF",
    guests: [
      { id: 14, name: "Lico", confirmed: null },
      { id: 15, name: "Suly", confirmed: null },
      { id: 16, name: "Nataly", confirmed: null },
      { id: 17, name: "Emy", confirmed: null },
      { id: 18, name: "owen", confirmed: null },
      { id: 19, name: "Sofi", confirmed: null },
    ],
  },
  {
    code: "EAF",
    guests: [
      { id: 20, name: "Tio Edgarin", confirmed: null },
      { id: 21, name: "Mike", confirmed: null },
      { id: 22, name: "Diana", confirmed: null },
    ],
  },
  {
    code: "CGF",
    guests: [
      { id: 23, name: "Doña Rosa", confirmed: null },
      { id: 24, name: "Estuardo", confirmed: null },
      { id: 25, name: "Nelly", confirmed: null },
      { id: 26, name: "Fati", confirmed: null },
      { id: 27, name: "Dany", confirmed: null },
    ],
  },
  {
    code: "EGF",
    guests: [
      { id: 28, name: "Vivi", confirmed: null },
      { id: 29, name: "Edgar", confirmed: null },
      { id: 30, name: "Diego", confirmed: null },
    ],
  },
  {
    code: "MSF",
    guests: [
      { id: 31, name: "Fany", confirmed: null },
      { id: 32, name: "Andres", confirmed: null },
    ],
  },
  {
    code: "JSA",
    guests: [{ id: 33, name: "Jessica Santisteban", confirmed: null }],
  },
  {
    code: "ACA",
    guests: [
      { id: 34, name: "Abner Chay", confirmed: null },
      { id: 35, name: "Abner's girlfriend", confirmed: null },
    ],
  },
  {
    code: "CBF",
    guests: [
      { id: 36, name: "Carlos", confirmed: null },
      { id: 37, name: "Barbarita", confirmed: null },
    ],
  },
  {
    code: "LRA",
    guests: [
      { id: 38, name: "luky", confirmed: null },
      { id: 39, name: "Juanjo", confirmed: null },
    ],
  },
  {
    code: "JSA",
    guests: [
      { id: 40, name: "Jennifer Samayoa", confirmed: null },
      { id: 41, name: "Jennifer's boyfriend", confirmed: null },
    ],
  },
  {
    code: "AMA",
    guests: [{ id: 42, name: "Andrea Maldonado", confirmed: null }],
  },
  {
    code: "PDA",
    guests: [{ id: 43, name: "Pamela Debroy", confirmed: null }],
  },
  {
    code: "JOA",
    guests: [{ id: 44, name: "Josseline Orozco", confirmed: null }],
  },
  {
    code: "DIA",
    guests: [{ id: 45, name: "Deborah Imery", confirmed: null }],
  },
  {
    code: "ELA",
    guests: [{ id: 46, name: "Estefany de León", confirmed: null }],
  },
  {
    code: "ACF",
    guests: [
      { id: 47, name: "Angel", confirmed: null },
      { id: 48, name: "Meches", confirmed: null },
    ],
  },
  {
    code: "RCF",
    guests: [
      { id: 49, name: "Rodrigo", confirmed: null },
      { id: 50, name: "Gaby", confirmed: null },
    ],
  },
  {
    code: "JCA",
    guests: [{ id: 51, name: "Josue", confirmed: null }],
  },
  {
    code: "AEP",
    guests: [
      { id: 52, name: "Any", confirmed: null },
      { id: 53, name: "Evy", confirmed: null },
    ],
  },
  {
    code: "EGA",
    guests: [{ id: 54, name: "Emmy Guerra", confirmed: null }],
  },
  {
    code: "DAA",
    guests: [{ id: 55, name: "Dennilson Alvarez", confirmed: null }],
  },
  {
    code: "ASA",
    guests: [{ id: 56, name: "Abby Seijas", confirmed: null }],
  },
  {
    code: "JVA",
    guests: [{ id: 57, name: "Jaquelinne Velásquez", confirmed: null }],
  },
  {
    code: "TQA",
    guests: [{ id: 58, name: "Tyron Quiñonez", confirmed: null }],
  },
  {
    code: "GPA",
    guests: [{ id: 59, name: "Guadalupe Polío", confirmed: null }],
  },
  {
    code: "NJA",
    guests: [{ id: 60, name: "Nicolle Jumique", confirmed: null }],
  },
  {
    code: "JZA",
    guests: [{ id: 61, name: "Jose Zúñiga", confirmed: null }],
  },
  {
    code: "HYA",
    guests: [{ id: 62, name: "Héctor Yuca", confirmed: null }],
  },
  {
    code: "AJC",
    guests: [{ id: 63, name: "Jeofrey Carmona", confirmed: null }],
  },
  {
    code: "KGA",
    guests: [{ id: 64, name: "Kevin García", confirmed: null }],
  },
  {
    code: "DAR",
    guests: [{ id: 65, name: "David A. Rodriguez", confirmed: null }],
  },
  {
    code: "JLA",
    guests: [{ id: 66, name: "Jehu López", confirmed: null }],
  },
  {
    code: "LAW",
    guests: [{ id: 67, name: "LeAnn Wright", confirmed: null }],
  },
  {
    code: "MMA",
    guests: [{ id: 68, name: "Marielle Moguel", confirmed: null }],
  },
  {
    code: "AHA",
    guests: [{ id: 69, name: "Alyssa Hammett", confirmed: null }],
  },
  {
    code: "AMF",
    guests: [
      { id: 70, name: "Willy Menendez", confirmed: null },
      { id: 71, name: "Sofi Menendez", confirmed: null },
      { id: 72, name: "Dani", confirmed: null },
      { id: 73, name: "Vale", confirmed: null },
    ],
  },
  {
    code: "GSF",
    guests: [
      { id: 74, name: "Gabe Sanchez", confirmed: null },
      { id: 75, name: "Kindale Sanchez", confirmed: null },
    ],
  },
  {
    code: "DLF",
    guests: [
      { id: 76, name: "Derick Lopez", confirmed: null },
      { id: 77, name: "Lindsey Lopez", confirmed: null },
      { id: 78, name: "Bebe Isaac", confirmed: null },
    ],
  },
  {
    code: "FIB",
    guests: [
      { id: 79, name: "Chako Baeza", confirmed: null },
      { id: 80, name: "Kelsey Baeza", confirmed: null },
    ],
  },
  {
    code: "AJS",
    guests: [
      { id: 81, name: "Angel Sanchez", confirmed: null },
      { id: 82, name: "Jaimey Sanchez", confirmed: null },
    ],
  },
  {
    code: "JSJ",
    guests: [
      { id: 83, name: "Jessica Gawor", confirmed: null },
      { id: 84, name: "Steffen Gawor", confirmed: null },
    ],
  },
  {
    code: "ALA",
    guests: [
      { id: 85, name: "Alejandro Apen", confirmed: null },
      { id: 86, name: "Sara", confirmed: null },
    ],
  },
  {
    code: "JHA",
    guests: [{ id: 87, name: "Johann Hernandez", confirmed: null }],
  },
  {
    code: "ALF",
    guests: [
      { id: 88, name: "Aderke Lopez", confirmed: null },
      { id: 89, name: "Mikeyla Lopez", confirmed: null },
    ],
  },
  {
    code: "RLF",
    guests: [
      { id: 90, name: "Roberto Larios", confirmed: null },
      { id: 91, name: "Cali Larios", confirmed: null },
      { id: 92, name: "Nico", confirmed: null },
      { id: 93, name: "Nala", confirmed: null },
    ],
  },
  {
    code: "FIL",
    guests: [
      { id: 94, name: "Melvin Ixcoy", confirmed: null },
      { id: 95, name: "Sandy Licardie", confirmed: null },
      { id: 96, name: "Duiliam Licardie", confirmed: null },
      { id: 97, name: "Yansi Licardie", confirmed: null },
      { id: 98, name: "Amalica Aceytuno", confirmed: null },
    ],
  },
  {
    code: "AFF",
    guests: [
      { id: 99, name: "Manuel Aceituno", confirmed: null },
      { id: 100, name: "Vielca Barrios", confirmed: null },
      { id: 101, name: "Amalia Aceytuno", confirmed: null },
      { id: 102, name: "Jose Aceytuno", confirmed: null },
    ],
  },
  {
    code: "FVV",
    guests: [
      { id: 103, name: "Romario Veliz", confirmed: null },
      { id: 104, name: "Andrea Aceytuno", confirmed: null },
      { id: 105, name: "Andre Aceytuno", confirmed: null },
      { id: 106, name: "Bebe Adrian", confirmed: null },
    ],
  },
  {
    code: "FLL",
    guests: [
      { id: 107, name: "Marlon Lopez", confirmed: null },
      { id: 108, name: "Leidy Licardie", confirmed: null },
      { id: 109, name: "Mariangel Licardie", confirmed: null },
      { id: 110, name: "Dani Licardie", confirmed: null },
      { id: 111, name: "Angelina Licardie", confirmed: null },
    ],
  },
  {
    code: "FDC",
    guests: [
      { id: 112, name: "Pastor Pablo", confirmed: null },
      { id: 113, name: "Pastora Chiqui", confirmed: null },
      { id: 114, name: "Raquel de la cruz", confirmed: null },
    ],
  },
  {
    code: "MAA",
    guests: [
      { id: 115, name: "Maddie Archer", confirmed: null },
      { id: 116, name: "Cristian Monterroso", confirmed: null },
    ],
  },
  {
    code: "FFF",
    guests: [
      { id: 117, name: "Emanuel Fuentes", confirmed: null },
      { id: 118, name: "Raemi Fuentes", confirmed: null },
    ],
  },
  {
    code: "TEST",
    guests: [{ id: 119, name: "Invitado de Prueba", confirmed: null }],
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
