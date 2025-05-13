document.addEventListener("DOMContentLoaded", () => {
  // Inicializar contador regresivo
  initCountdown()

  // Inicializar galería
  initGallery()

  // Inicializar animaciones de fade-in
  initFadeIn()

  // Inicializar reproductor de música
  initMusicPlayer()
})

// Contador regresivo
function initCountdown() {
  const targetDate = new Date("May 31, 2025 00:00:00").getTime()

  function updateCountdown() {
    const now = new Date().getTime()
    const difference = targetDate - now

    if (difference <= 0) {
      document.getElementById("days").innerText = "00"
      document.getElementById("hours").innerText = "00"
      document.getElementById("minutes").innerText = "00"
      document.getElementById("seconds").innerText = "00"
      return
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    document.getElementById("days").innerText = days.toString().padStart(2, "0")
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0")
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0")
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0")
  }

  // Actualizar cada segundo
  updateCountdown()
  setInterval(updateCountdown, 1000)
}

// Galería de imágenes
function initGallery() {
  // Imágenes de ejemplo (reemplazar con las reales)
  const images = [
    { src: "images/galery/re13.jpg", alt: "Foto 1" },
    { src: "images/galery/re8.jpg", alt: "Foto 2" },
    { src: "images/galery/re9.jpg", alt: "Foto 3" },
    { src: "images/galery/re12.jpg", alt: "Foto 4" },
    { src: "images/galery/re11.jpg", alt: "Foto 5" },
    { src: "images/bac/hero-bg.jpg", alt: "Foto 6" },
  ]

  const galleryTrack = document.querySelector(".gallery-track")
  const galleryDots = document.querySelector(".gallery-dots")

  if (!galleryTrack || !galleryDots) return

  // Crear elementos de la galería
  images.forEach((image, index) => {
    // Crear item de galería
    const galleryItem = document.createElement("div")
    galleryItem.className = `gallery-item ${index === 0 ? "active" : ""}`
    galleryItem.setAttribute("data-index", index)

    // Crear tarjeta
    const galleryCard = document.createElement("div")
    galleryCard.className = "gallery-card"

    // Crear imagen
    const img = document.createElement("img")
    img.src = image.src
    img.alt = image.alt
    img.className = "gallery-image"

    // Ensamblar elementos
    galleryCard.appendChild(img)
    galleryItem.appendChild(galleryCard)
    galleryTrack.appendChild(galleryItem)

    // Crear punto de navegación
    const dot = document.createElement("div")
    dot.className = `gallery-dot ${index === 0 ? "active" : ""}`
    dot.setAttribute("data-index", index)
    dot.addEventListener("click", () => {
      moveToSlide(index)
    })
    galleryDots.appendChild(dot)
  })

  let currentIndex = 0
  const itemCount = images.length

  // Función para mover a una diapositiva específica
  function moveToSlide(index) {
    // Actualizar índice actual
    currentIndex = index

    // Actualizar clases activas
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.classList.remove("active")
    })
    document.querySelectorAll(".gallery-dot").forEach((dot) => {
      dot.classList.remove("active")
    })

    const activeItem = document.querySelector(`.gallery-item[data-index="${index}"]`)
    const activeDot = document.querySelector(`.gallery-dot[data-index="${index}"]`)

    if (activeItem) activeItem.classList.add("active")
    if (activeDot) activeDot.classList.add("active")

    // Calcular y aplicar transformación
    const offset = (index * -100) / itemCount
    galleryTrack.style.transform = `translateX(${offset}%)`
  }

  // Función para avanzar a la siguiente diapositiva
  function nextSlide() {
    const newIndex = (currentIndex + 1) % itemCount
    moveToSlide(newIndex)
  }

  // Cambiar automáticamente cada 3 segundos
  setInterval(nextSlide, 3000)
}

// Animaciones de fade-in
function initFadeIn() {
  const fadeElements = document.querySelectorAll(".fade-in")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aplicar retraso si está especificado
          const delay = entry.target.getAttribute("data-delay") || 0

          setTimeout(() => {
            entry.target.classList.add("visible")
          }, delay)

          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  fadeElements.forEach((element) => {
    observer.observe(element)
  })
}

// Inicializar PhotoSwipe
let PhotoSwipeLightbox
let PhotoSwipe

function initPhotoSwipe() {
  // Verificar si PhotoSwipe está disponible
  if (typeof PhotoSwipeLightbox === "undefined") {
    console.error("PhotoSwipe no está cargado correctamente")
    return
  }

  // Opciones para PhotoSwipe
  const options = {
    gallery: "#photo-gallery",
    children: "a",
    pswpModule: () => PhotoSwipe,
  }

  // Crear instancia de PhotoSwipe Lightbox
  const lightbox = new PhotoSwipeLightbox(options)

  // Manejar elementos de video
  lightbox.on("uiRegister", () => {
    lightbox.pswp.ui.registerElement({
      name: "custom-caption",
      order: 9,
      isButton: false,
      appendTo: "root",
      html: "Caption text",
      onInit: (el, pswp) => {
        lightbox.pswp.on("change", () => {
          const currSlideElement = lightbox.pswp.currSlide.data.element
          let captionHTML = ""
          if (currSlideElement) {
            const alt = currSlideElement.querySelector("img").getAttribute("alt")
            captionHTML = alt || ""
          }
          el.innerHTML = captionHTML
        })
      },
    })
  })

  // Manejar elementos de video
  lightbox.on("itemData", (e) => {
    const itemData = e.itemData
    const el = itemData.element

    if (el && el.dataset.pswpType === "video") {
      itemData.type = "video"

      // Obtener la URL del video
      const videoUrl = el.dataset.videoUrl

      // Crear contenido personalizado para el video
      itemData.html = `
        <div class="pswp-video-container">
          <iframe width="100%" height="100%" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
      `
    }
  })

  // Inicializar PhotoSwipe
  lightbox.init()
}

// Agregar después de document.addEventListener("DOMContentLoaded", () => { ... })
// Inicializar reproductor de música
function initMusicPlayer() {
  const musicToggle = document.getElementById("music-toggle")
  const audio = document.getElementById("background-music")
  const playIcon = document.getElementById("play-icon")
  const pauseIcon = document.getElementById("pause-icon")

  if (!musicToggle || !audio) return

  // Configurar el audio para estar listo
  audio.load()

  // Añadir clase para animar el botón y llamar la atención
  musicToggle.classList.add("pulse-attention")

  // Manejar el clic en el botón de música
  musicToggle.addEventListener("click", () => {
    if (audio.paused) {
      // Intentar reproducir
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Reproducción exitosa
            playIcon.style.display = "none"
            pauseIcon.style.display = "inline-block"
            musicToggle.classList.remove("pulse-attention")
          })
          .catch((error) => {
            // Error al reproducir (raro después de un clic)
            console.error("Error al reproducir audio:", error)
            playIcon.style.display = "inline-block"
            pauseIcon.style.display = "none"
          })
      }
    } else {
      // Pausar la reproducción
      audio.pause()
      playIcon.style.display = "inline-block"
      pauseIcon.style.display = "none"
    }
  })

  // Manejar el evento de finalización del audio
  audio.addEventListener("ended", () => {
    // Si el audio termina, reiniciarlo (debido al atributo loop, esto rara vez ocurrirá)
    if (!audio.loop) {
      playIcon.style.display = "inline-block"
      pauseIcon.style.display = "none"
    }
  })

  // Detectar interacción del usuario con la página para intentar reproducir
  const handleUserInteraction = () => {
    if (audio.paused) {
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Reproducción exitosa después de interacción
            playIcon.style.display = "none"
            pauseIcon.style.display = "inline-block"
            musicToggle.classList.remove("pulse-attention")

            // Eliminar los event listeners una vez que se reproduzca con éxito
            document.removeEventListener("click", handleUserInteraction)
            document.removeEventListener("touchstart", handleUserInteraction)
            document.removeEventListener("keydown", handleUserInteraction)
            document.removeEventListener("scroll", handleUserInteraction)
          })
          .catch((error) => {
            // Aún bloqueado o error - mantener el estado actual
            console.log("Reproducción automática bloqueada incluso después de interacción:", error)
          })
      }
    }
  }

  // Escuchar varios eventos de interacción para intentar reproducir
  document.addEventListener("click", handleUserInteraction)
  document.addEventListener("touchstart", handleUserInteraction)
  document.addEventListener("keydown", handleUserInteraction)
  document.addEventListener("scroll", handleUserInteraction)
}

