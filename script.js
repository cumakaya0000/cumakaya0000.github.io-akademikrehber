// Declare variables
const $ = window.jQuery
const toastr = window.toastr
const Swal = window.Swal

// Wait for all libraries to load
if (typeof $ === "undefined") {
  console.error("jQuery is not loaded")
}
if (typeof toastr === "undefined") {
  console.error("Toastr is not loaded")
}
if (typeof Swal === "undefined") {
  console.error("SweetAlert2 is not loaded")
}

// Faculty Data (JSON Structure)
const facultyData = {
  faculties: [
    {
      id: "humanities",
      name: "İnsani Bilimler ve Edebiyat Fakültesi",
      icon: "bi-book-fill",
      color: "literature",
      departments: [
        {
          id: "turkish-lit",
          name: "Türk Dili ve Edebiyatı",
          academics: [
            {
              id: 1,
              name: "Ahmet Yılmaz",
              title: "Prof. Dr.",
              role: "Fakülte Dekanı",
              department: "Türk Dili ve Edebiyatı",
              room: "101-A",
              floor: 1,
              phone: "+902125550101",
              email: "a.yilmaz@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Klasik Türk Edebiyatı",
              officeHours: "Pazartesi-Çarşamba 14:00-16:00",
            },
          ],
        },
        {
          id: "english-lit",
          name: "İngiliz Dili ve Edebiyatı",
          academics: [
            {
              id: 2,
              name: "Burcu Aksoy",
              title: "Doç. Dr.",
              role: "Bölüm Başkanı",
              department: "İngiliz Dili ve Edebiyatı",
              room: "102-B",
              floor: 1,
              phone: "+902125550102",
              email: "b.aksoy@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Modern İngiliz Edebiyatı",
              officeHours: "Salı-Perşembe 10:00-12:00",
            },
          ],
        },
        {
          id: "history",
          name: "Tarih",
          academics: [
            {
              id: 3,
              name: "Mehmet Kaya",
              title: "Dr. Öğr. Üyesi",
              role: "Araştırma Görevlisi",
              department: "Tarih",
              room: "103-C",
              floor: 1,
              phone: "+902125550103",
              email: "m.kaya@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Osmanlı Tarihi",
              officeHours: "Çarşamba-Cuma 13:00-15:00",
            },
          ],
        },
      ],
    },
    {
      id: "arts",
      name: "Güzel Sanatlar Fakültesi",
      icon: "bi-palette-fill",
      color: "arts",
      departments: [
        {
          id: "painting",
          name: "Resim",
          academics: [
            {
              id: 4,
              name: "Kemal Arslan",
              title: "Prof. Dr.",
              role: "Sanat Yönetmeni",
              department: "Resim",
              room: "204-A",
              floor: 2,
              phone: "+902125550204",
              email: "k.arslan@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Yağlıboya Tekniği",
              officeHours: "Pazartesi-Çarşamba 15:00-17:00",
            },
          ],
        },
        {
          id: "music",
          name: "Müzik",
          academics: [
            {
              id: 5,
              name: "Selin Yıldız",
              title: "Doç. Dr.",
              role: "Müzik Direktörü",
              department: "Müzik",
              room: "205-B",
              floor: 2,
              phone: "+902125550205",
              email: "s.yildiz@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Klasik Müzik",
              officeHours: "Salı-Perşembe 11:00-13:00",
            },
          ],
        },
        {
          id: "sculpture",
          name: "Heykel",
          academics: [
            {
              id: 6,
              name: "Emre Güven",
              title: "Dr. Öğr. Üyesi",
              role: "Atölye Sorumlusu",
              department: "Heykel",
              room: "206-C",
              floor: 2,
              phone: "+902125550206",
              email: "e.guven@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Modern Heykel",
              officeHours: "Çarşamba-Cuma 14:00-16:00",
            },
          ],
        },
      ],
    },
    {
      id: "business",
      name: "İktisadi ve İdari Bilimler Fakültesi",
      icon: "bi-briefcase-fill",
      color: "business",
      departments: [
        {
          id: "economics",
          name: "İktisat",
          academics: [
            {
              id: 7,
              name: "Hasan Öztürk",
              title: "Prof. Dr.",
              role: "Fakülte Dekanı",
              department: "İktisat",
              room: "301-A",
              floor: 3,
              phone: "+902125550301",
              email: "h.ozturk@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Makro Ekonomi",
              officeHours: "Pazartesi-Çarşamba 16:00-18:00",
            },
          ],
        },
        {
          id: "management",
          name: "İşletme",
          academics: [
            {
              id: 8,
              name: "Fatma Erdoğan",
              title: "Doç. Dr.",
              role: "Bölüm Başkanı",
              department: "İşletme",
              room: "302-B",
              floor: 3,
              phone: "+902125550302",
              email: "f.erdogan@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "İnsan Kaynakları",
              officeHours: "Salı-Perşembe 09:00-11:00",
            },
          ],
        },
        {
          id: "public-admin",
          name: "Kamu Yönetimi",
          academics: [
            {
              id: 9,
              name: "Ali Kılıç",
              title: "Dr. Öğr. Üyesi",
              role: "Araştırma Görevlisi",
              department: "Kamu Yönetimi",
              room: "303-C",
              floor: 3,
              phone: "+902125550303",
              email: "a.kilic@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Yerel Yönetimler",
              officeHours: "Çarşamba-Cuma 15:00-17:00",
            },
          ],
        },
      ],
    },
    {
      id: "engineering",
      name: "Mühendislik Fakültesi",
      icon: "bi-gear-fill",
      color: "engineering",
      departments: [
        {
          id: "computer",
          name: "Bilgisayar Mühendisliği",
          academics: [
            {
              id: 10,
              name: "Cem Demir",
              title: "Dr.",
              role: "Yazılım Uzmanı",
              department: "Bilgisayar Mühendisliği",
              room: "104-A",
              floor: 1,
              phone: "+902125550104",
              email: "c.demir@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Yapay Zeka",
              officeHours: "Pazartesi-Çarşamba 13:00-15:00",
            },
          ],
        },
        {
          id: "electrical",
          name: "Elektrik-Elektronik Mühendisliği",
          academics: [
            {
              id: 11,
              name: "Elif Özkan",
              title: "Prof. Dr.",
              role: "Dekan Yardımcısı",
              department: "Elektrik-Elektronik Müh.",
              room: "105-B",
              floor: 1,
              phone: "+902125550105",
              email: "e.ozkan@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Güç Sistemleri",
              officeHours: "Salı-Perşembe 14:00-16:00",
            },
          ],
        },
        {
          id: "mechanical",
          name: "Makine Mühendisliği",
          academics: [
            {
              id: 12,
              name: "Okan Şahin",
              title: "Doç. Dr.",
              role: "Bölüm Başkanı",
              department: "Makine Mühendisliği",
              room: "106-C",
              floor: 1,
              phone: "+902125550106",
              email: "o.sahin@uni.edu.tr",
              image: "https://via.placeholder.com/60x60/cccccc/666666?text=Foto",
              specialization: "Termodinamik",
              officeHours: "Çarşamba-Cuma 10:00-12:00",
            },
          ],
        },
      ],
    },
  ],
}

// Floor Plans Data
const floorPlans = {
  1: {
    name: "1. Kat",
    rooms: [
      { id: "101-A", name: "Prof. Dr. Ahmet Yılmaz", x: 20, y: 30, width: 80, height: 40 },
      { id: "102-B", name: "Doç. Dr. Burcu Aksoy", x: 120, y: 30, width: 80, height: 40 },
      { id: "103-C", name: "Dr. Öğr. Üyesi Mehmet Kaya", x: 220, y: 30, width: 80, height: 40 },
      { id: "104-A", name: "Dr. Cem Demir", x: 20, y: 100, width: 80, height: 40 },
      { id: "105-B", name: "Prof. Dr. Elif Özkan", x: 120, y: 100, width: 80, height: 40 },
      { id: "106-C", name: "Doç. Dr. Okan Şahin", x: 220, y: 100, width: 80, height: 40 },
    ],
  },
  2: {
    name: "2. Kat",
    rooms: [
      { id: "204-A", name: "Prof. Dr. Kemal Arslan", x: 20, y: 30, width: 80, height: 40 },
      { id: "205-B", name: "Doç. Dr. Selin Yıldız", x: 120, y: 30, width: 80, height: 40 },
      { id: "206-C", name: "Dr. Öğr. Üyesi Emre Güven", x: 220, y: 30, width: 80, height: 40 },
    ],
  },
  3: {
    name: "3. Kat",
    rooms: [
      { id: "301-A", name: "Prof. Dr. Hasan Öztürk", x: 20, y: 30, width: 80, height: 40 },
      { id: "302-B", name: "Doç. Dr. Fatma Erdoğan", x: 120, y: 30, width: 80, height: 40 },
      { id: "303-C", name: "Dr. Öğr. Üyesi Ali Kılıç", x: 220, y: 30, width: 80, height: 40 },
    ],
  },
}

// Global Variables
let allAcademics = []
let filteredAcademics = []
let currentUser = null
let visitedProfessors = []
let selectedAcademic = null
let currentFloor = 1
let highlightedRoom = null

// Initialize Application
$(document).ready(() => {
  // Check if all required libraries are loaded
  if (typeof $ === "undefined" || typeof toastr === "undefined" || typeof Swal === "undefined") {
    console.error("Required libraries not loaded")
    return
  }

  // Show loading screen
  setTimeout(() => {
    $("#loadingScreen").addClass("fade-out")
    setTimeout(() => {
      $("#loadingScreen").remove()
    }, 500)
  }, 1500)

  // Initialize data
  initializeData()
  loadUserData()
  setupEventListeners()
  renderFaculties()
  updateStats()

  // Configure Toastr
  toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: "toast-top-right",
    timeOut: "3000",
  }
})

// Initialize Data
function initializeData() {
  allAcademics = []
  facultyData.faculties.forEach((faculty) => {
    faculty.departments.forEach((department) => {
      allAcademics = allAcademics.concat(department.academics)
    })
  })
  filteredAcademics = [...allAcademics]
}

// Load User Data from localStorage
function loadUserData() {
  const savedUser = localStorage.getItem("currentUser")
  const savedVisited = localStorage.getItem("visitedProfessors")
  const savedDarkMode = localStorage.getItem("darkMode")

  if (savedUser) {
    currentUser = savedUser
    updateUserInterface()
  }

  if (savedVisited) {
    visitedProfessors = JSON.parse(savedVisited)
    updateVisitedSection()
  }

  if (savedDarkMode === "true") {
    toggleDarkMode()
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search functionality
  $("#searchInput").on("input", debounce(handleSearch, 300))

  // Filter functionality
  $("#facultyFilter").on("change", handleFilter)
  $("#sortBy").on("change", handleSort)

  // Dark mode toggle
  $("#darkModeToggle").on("click", toggleDarkMode)

  // User login/logout
  $("#loginBtn").on("click", () => $("#loginModal").modal("show"))
  $("#loginSubmitBtn").on("click", handleLogin)
  $("#logoutBtn").on("click", handleLogout)

  // Floor map
  $("#floorMapBtn").on("click", () => {
    showFloorMap(1)
    $("#floorMapModal").modal("show")
  })

  // Floor selection
  $(document).on("click", "[data-floor]", function () {
    const floor = Number.parseInt($(this).data("floor"))
    showFloorMap(floor)
    $("[data-floor]").removeClass("active")
    $(this).addClass("active")
  })

  // Message sending
  $("#sendMessageBtn").on("click", handleSendMessage)

  // Form submissions
  $("#loginForm").on("submit", (e) => {
    e.preventDefault()
    handleLogin()
  })

  $("#messageForm").on("submit", (e) => {
    e.preventDefault()
    handleSendMessage()
  })
}

// Debounce function for search
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Handle Search
function handleSearch() {
  const searchTerm = $("#searchInput").val().toLowerCase()
  filterAcademics(searchTerm)
}

// Handle Filter
function handleFilter() {
  const searchTerm = $("#searchInput").val().toLowerCase()
  filterAcademics(searchTerm)
}

// Handle Sort
function handleSort() {
  const searchTerm = $("#searchInput").val().toLowerCase()
  filterAcademics(searchTerm)
}

// Filter Academics
function filterAcademics(searchTerm = "") {
  const facultyFilter = $("#facultyFilter").val()
  const sortBy = $("#sortBy").val()

  // Filter by search term
  filteredAcademics = allAcademics.filter((academic) => {
    const matchesSearch =
      !searchTerm ||
      academic.name.toLowerCase().includes(searchTerm) ||
      academic.department.toLowerCase().includes(searchTerm) ||
      academic.title.toLowerCase().includes(searchTerm) ||
      academic.specialization.toLowerCase().includes(searchTerm)

    const matchesFaculty =
      !facultyFilter ||
      facultyData.faculties
        .find((f) => f.id === facultyFilter)
        ?.departments.some((d) => d.academics.some((a) => a.id === academic.id))

    return matchesSearch && matchesFaculty
  })

  // Sort results
  filteredAcademics.sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name, "tr")
      case "title":
        return a.title.localeCompare(b.title, "tr")
      case "department":
        return a.department.localeCompare(b.department, "tr")
      default:
        return 0
    }
  })

  renderFaculties()
  updateResultsInfo()
}

// Update Results Info
function updateResultsInfo() {
  const count = filteredAcademics.length
  const searchTerm = $("#searchInput").val()
  let text = `${count} akademisyen bulundu`
  if (searchTerm) {
    text += ` "${searchTerm}" için`
  }
  $("#resultsInfo").text(text)
}

// Render Faculties
function renderFaculties() {
  const accordion = $("#facultyAccordion")
  accordion.empty()

  // Group filtered academics by faculty
  const facultiesByAcademics = {}

  filteredAcademics.forEach((academic) => {
    const faculty = facultyData.faculties.find((f) =>
      f.departments.some((d) => d.academics.some((a) => a.id === academic.id)),
    )

    if (faculty) {
      if (!facultiesByAcademics[faculty.id]) {
        facultiesByAcademics[faculty.id] = {
          ...faculty,
          academics: [],
        }
      }
      facultiesByAcademics[faculty.id].academics.push(academic)
    }
  })

  // Render each faculty
  Object.values(facultiesByAcademics).forEach((faculty, index) => {
    const facultyHtml = createFacultyHtml(faculty, index)
    accordion.append(facultyHtml)
  })

  // Add animation classes
  setTimeout(() => {
    $(".faculty-card").addClass("fade-in")
  }, 100)
}

// Create Faculty HTML
function createFacultyHtml(faculty, index) {
  const collapseId = `collapse${faculty.id}`
  const academicsHtml = faculty.academics.map((academic) => createAcademicHtml(academic)).join("")

  return `
        <div class="accordion-item faculty-card">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed modern-accordion-btn" type="button" 
                        data-bs-toggle="collapse" data-bs-target="#${collapseId}" 
                        aria-expanded="false" aria-controls="${collapseId}">
                    <div class="faculty-icon ${faculty.color}">
                        <i class="${faculty.icon}"></i>
                    </div>
                    <div class="faculty-info">
                        <span class="faculty-name">${faculty.name}</span>
                        <small class="faculty-count">${faculty.academics.length} Akademisyen • Tıklayın</small>
                    </div>
                    <div class="expand-indicator">
                        <i class="bi bi-chevron-down"></i>
                    </div>
                </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse" data-bs-parent="#facultyAccordion">
                <div class="accordion-body p-0">
                    <!-- Desktop Table View -->
                    <div class="table-responsive desktop-view">
                        <table class="table modern-table mb-0">
                            <thead>
                                <tr>
                                    <th>Akademisyen</th>
                                    <th>Unvan</th>
                                    <th>Bölüm</th>
                                    <th>Oda</th>
                                    <th>İletişim</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${academicsHtml}
                            </tbody>
                        </table>
                    </div>
                    
                    <!-- Mobile Cards View -->
                    <div class="mobile-cards mobile-view">
                        ${faculty.academics.map((academic) => createMobileCardHtml(academic)).join("")}
                    </div>
                </div>
            </div>
        </div>
    `
}

// Create Academic HTML (Desktop)
function createAcademicHtml(academic) {
  const titleBadgeClass = getTitleBadgeClass(academic.title)
  const isVisited = visitedProfessors.includes(academic.id)

  return `
        <tr class="academic-row">
            <td>
                <div class="academic-profile">
                    <img src="${academic.image}" alt="${academic.name}" class="profile-img">
                    <div class="profile-info">
                        <h6 class="profile-name">${academic.name}</h6>
                        <small class="profile-role">${academic.role}</small>
                    </div>
                </div>
            </td>
            <td><span class="badge modern-badge ${titleBadgeClass}">${academic.title}</span></td>
            <td><span class="department-text">${academic.department}</span></td>
            <td>
                <span class="room-badge" onclick="showRoomOnMap('${academic.room}', ${academic.floor})" 
                      style="cursor: pointer;" title="Kat planında göster">
                    ${academic.room}
                </span>
            </td>
            <td>
                <div class="contact-links">
                    <a href="tel:${academic.phone}" class="contact-link" title="${academic.phone}">
                        <i class="bi bi-telephone"></i>
                    </a>
                    <a href="mailto:${academic.email}" class="contact-link" title="${academic.email}">
                        <i class="bi bi-envelope"></i>
                    </a>
                    <button class="contact-link" onclick="openMessageModal(${academic.id})" title="Mesaj gönder">
                        <i class="bi bi-chat-dots"></i>
                    </button>
                    ${
                      currentUser
                        ? `
                        <button class="contact-link ${isVisited ? "text-danger" : ""}" 
                                onclick="toggleVisited(${academic.id})" 
                                title="${isVisited ? "Ziyaret listesinden çıkar" : "Ziyaret listesine ekle"}">
                            <i class="bi bi-heart${isVisited ? "-fill" : ""}"></i>
                        </button>
                    `
                        : ""
                    }
                </div>
            </td>
        </tr>
    `
}

// Create Mobile Card HTML
function createMobileCardHtml(academic) {
  const titleBadgeClass = getTitleBadgeClass(academic.title)
  const isVisited = visitedProfessors.includes(academic.id)

  return `
        <div class="mobile-academic-card slide-in">
            <div class="mobile-card-header">
                <img src="${academic.image}" alt="${academic.name}" class="mobile-profile-img">
                <div class="mobile-profile-info">
                    <h6 class="mobile-name">${academic.name}</h6>
                    <span class="badge modern-badge ${titleBadgeClass} mb-2">${academic.title}</span>
                    <p class="mobile-role">${academic.role}</p>
                </div>
            </div>
            <div class="mobile-card-body">
                <div class="mobile-info-grid">
                    <div class="info-item">
                        <i class="bi bi-building"></i>
                        <span>${academic.department}</span>
                    </div>
                    <div class="info-item">
                        <i class="bi bi-door-open"></i>
                        <span onclick="showRoomOnMap('${academic.room}', ${academic.floor})" 
                              style="cursor: pointer; text-decoration: underline;" 
                              title="Kat planında göster">
                            ${academic.room}
                        </span>
                    </div>
                    <div class="info-item">
                        <i class="bi bi-clock"></i>
                        <span>${academic.officeHours}</span>
                    </div>
                    <div class="info-item">
                        <i class="bi bi-award"></i>
                        <span>${academic.specialization}</span>
                    </div>
                </div>
                <div class="mobile-contact-actions">
                    <a href="tel:${academic.phone}" class="contact-btn phone">
                        <i class="bi bi-telephone"></i>
                        <span>Ara</span>
                    </a>
                    <a href="mailto:${academic.email}" class="contact-btn email">
                        <i class="bi bi-envelope"></i>
                        <span>Mail</span>
                    </a>
                    <button class="contact-btn" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none;" 
                            onclick="openMessageModal(${academic.id})">
                        <i class="bi bi-chat-dots"></i>
                        <span>Mesaj</span>
                    </button>
                    ${
                      currentUser
                        ? `
                        <button class="contact-btn ${isVisited ? "bg-danger" : "bg-secondary"}" 
                                style="color: white; border: none;" 
                                onclick="toggleVisited(${academic.id})">
                            <i class="bi bi-heart${isVisited ? "-fill" : ""}"></i>
                            <span>${isVisited ? "Çıkar" : "Ekle"}</span>
                        </button>
                    `
                        : ""
                    }
                </div>
            </div>
        </div>
    `
}

// Get Title Badge Class
function getTitleBadgeClass(title) {
  if (title.includes("Prof.")) return "primary"
  if (title.includes("Doç.")) return "success"
  if (title.includes("Dr.")) return "info"
  if (title.includes("Öğr. Gör.")) return "warning"
  return "secondary"
}

// Update Stats
function updateStats() {
  const facultyCount = facultyData.faculties.length
  const departmentCount = facultyData.faculties.reduce((acc, f) => acc + f.departments.length, 0)
  const academicCount = allAcademics.length

  // Animate counters
  animateCounter("#facultyCount", facultyCount)
  animateCounter("#departmentCount", departmentCount)
  animateCounter("#academicCount", academicCount)

  // Populate faculty filter
  const facultyFilter = $("#facultyFilter")
  facultyData.faculties.forEach((faculty) => {
    facultyFilter.append(`<option value="${faculty.id}">${faculty.name.split(" ")[0]}...</option>`)
  })
}

// Animate Counter
function animateCounter(selector, target) {
  const element = $(selector)
  let current = 0
  const increment = target / 50
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    element.text(Math.floor(current))
  }, 30)
}

// Toggle Dark Mode
function toggleDarkMode() {
  $("body").toggleClass("dark-mode")
  const isDark = $("body").hasClass("dark-mode")

  // Update icon
  const icon = $("#darkModeToggle i")
  if (isDark) {
    icon.removeClass("bi-moon-fill").addClass("bi-sun-fill")
  } else {
    icon.removeClass("bi-sun-fill").addClass("bi-moon-fill")
  }

  // Save to localStorage
  localStorage.setItem("darkMode", isDark)

  toastr.info(`${isDark ? "Karanlık" : "Aydınlık"} mod aktif`)
}

// Handle Login
function handleLogin() {
  const username = $("#usernameInput").val().trim()
  const password = $("#passwordInput").val().trim()

  if (!username || !password) {
    Swal.fire({
      icon: "error",
      title: "Hata",
      text: "Lütfen tüm alanları doldurun!",
    })
    return
  }

  currentUser = username
  localStorage.setItem("currentUser", username)
  updateUserInterface()
  $("#loginModal").modal("hide")

  Swal.fire({
    icon: "success",
    title: "Giriş Başarılı",
    text: `Hoş geldiniz, ${username}!`,
    timer: 2000,
    showConfirmButton: false,
  })

  // Clear form
  $("#loginForm")[0].reset()
}

// Handle Logout
function handleLogout() {
  currentUser = null
  localStorage.removeItem("currentUser")
  updateUserInterface()

  toastr.success("Başarıyla çıkış yaptınız")
}

// Update User Interface
function updateUserInterface() {
  if (currentUser) {
    $("#loginBtn").addClass("d-none")
    $("#userInfo").removeClass("d-none")
    $("#userName").text(currentUser)
    updateVisitedSection()
    renderFaculties() // Re-render to show heart buttons
  } else {
    $("#loginBtn").removeClass("d-none")
    $("#userInfo").addClass("d-none")
    $("#visitedSection").addClass("d-none")
    renderFaculties() // Re-render to hide heart buttons
  }
}

// Toggle Visited
function toggleVisited(academicId) {
  const academic = allAcademics.find((a) => a.id === academicId)
  if (!academic) return

  const index = visitedProfessors.indexOf(academicId)
  if (index > -1) {
    visitedProfessors.splice(index, 1)
    toastr.info(`${academic.name} ziyaret listenizden çıkarıldı`)
  } else {
    visitedProfessors.push(academicId)
    toastr.success(`${academic.name} ziyaret listenize eklendi`)
  }

  localStorage.setItem("visitedProfessors", JSON.stringify(visitedProfessors))
  updateVisitedSection()
  renderFaculties() // Re-render to update heart icons
}

// Update Visited Section
function updateVisitedSection() {
  if (!currentUser || visitedProfessors.length === 0) {
    $("#visitedSection").addClass("d-none")
    return
  }

  $("#visitedSection").removeClass("d-none")
  const visitedList = $("#visitedList")
  visitedList.empty()

  visitedProfessors.forEach((id) => {
    const academic = allAcademics.find((a) => a.id === id)
    if (academic) {
      visitedList.append(`
                <span class="badge bg-primary me-2 mb-2" style="font-size: 0.9rem;">
                    ${academic.name}
                    <button class="btn-close btn-close-white ms-2" style="font-size: 0.7rem;" 
                            onclick="toggleVisited(${id})"></button>
                </span>
            `)
    }
  })
}

// Open Message Modal
function openMessageModal(academicId) {
  selectedAcademic = allAcademics.find((a) => a.id === academicId)
  if (!selectedAcademic) return

  $("#recipientName").text(selectedAcademic.name)
  $("#messageModal").modal("show")
}

// Handle Send Message
function handleSendMessage() {
  const senderName = $("#senderName").val().trim()
  const senderEmail = $("#senderEmail").val().trim()
  const subject = $("#messageSubject").val().trim()
  const content = $("#messageContent").val().trim()

  if (!senderName || !senderEmail || !subject || !content) {
    Swal.fire({
      icon: "error",
      title: "Hata",
      text: "Lütfen tüm alanları doldurun!",
    })
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(senderEmail)) {
    Swal.fire({
      icon: "error",
      title: "Hata",
      text: "Geçerli bir e-posta adresi girin!",
    })
    return
  }

  // Save message to localStorage
  const messages = JSON.parse(localStorage.getItem("messages") || "[]")
  const newMessage = {
    id: Date.now(),
    to: selectedAcademic.email,
    toName: selectedAcademic.name,
    from: senderEmail,
    fromName: senderName,
    subject: subject,
    content: content,
    timestamp: new Date().toISOString(),
  }

  messages.push(newMessage)
  localStorage.setItem("messages", JSON.stringify(messages))

  $("#messageModal").modal("hide")
  $("#messageForm")[0].reset()

  Swal.fire({
    icon: "success",
    title: "Mesaj Gönderildi",
    text: `${selectedAcademic.name} adlı akademisyene mesajınız iletildi.`,
    timer: 3000,
    showConfirmButton: false,
  })
}

// Show Room on Map
function showRoomOnMap(roomId, floor) {
  currentFloor = floor
  highlightedRoom = roomId
  showFloorMap(floor)
  $("#floorMapModal").modal("show")

  // Update active floor button
  $("[data-floor]").removeClass("active")
  $(`[data-floor="${floor}"]`).addClass("active")
}

// Show Floor Map
function showFloorMap(floor) {
  currentFloor = floor
  const plan = floorPlans[floor]
  if (!plan) return

  const floorPlan = $("#floorPlan")
  floorPlan.html(`
        <svg width="100%" height="300" viewBox="0 0 400 200" class="border rounded">
            <!-- Floor background -->
            <rect width="400" height="200" fill="white" stroke="#e5e7eb" stroke-width="2"/>
            
            <!-- Corridor -->
            <rect x="0" y="80" width="400" height="40" fill="#f3f4f6" stroke="#d1d5db"/>
            <text x="200" y="105" text-anchor="middle" class="text-xs" fill="#6b7280">Koridor</text>
            
            <!-- Rooms -->
            ${plan.rooms
              .map(
                (room) => `
                <g>
                    <rect x="${room.x}" y="${room.y}" width="${room.width}" height="${room.height}"
                          fill="${highlightedRoom === room.id ? "#3b82f6" : "#e5e7eb"}"
                          stroke="${highlightedRoom === room.id ? "#1d4ed8" : "#9ca3af"}"
                          stroke-width="2"
                          class="room-rect"
                          data-room="${room.id}"
                          style="cursor: pointer; transition: all 0.3s ease;"
                          onmouseover="this.style.fill='#bfdbfe'"
                          onmouseout="this.style.fill='${highlightedRoom === room.id ? "#3b82f6" : "#e5e7eb"}'"
                          onclick="selectRoom('${room.id}')"/>
                    <text x="${room.x + room.width / 2}" y="${room.y + room.height / 2 - 5}" 
                          text-anchor="middle" class="text-xs font-medium"
                          fill="${highlightedRoom === room.id ? "white" : "#374151"}"
                          style="pointer-events: none;">
                        ${room.id}
                    </text>
                    <text x="${room.x + room.width / 2}" y="${room.y + room.height / 2 + 8}" 
                          text-anchor="middle" class="text-xs"
                          fill="${highlightedRoom === room.id ? "white" : "#6b7280"}"
                          style="pointer-events: none;">
                        ${room.name.split(" ").slice(-2).join(" ")}
                    </text>
                </g>
            `,
              )
              .join("")}
        </svg>
    `)

  // Update room info
  if (highlightedRoom) {
    const room = plan.rooms.find((r) => r.id === highlightedRoom)
    if (room) {
      $("#roomInfo").removeClass("d-none")
      $("#roomDetails").html(`
                <strong>Oda:</strong> ${room.id}<br>
                <strong>Akademisyen:</strong> ${room.name}
            `)
    }
  } else {
    $("#roomInfo").addClass("d-none")
  }
}

// Select Room
function selectRoom(roomId) {
  highlightedRoom = highlightedRoom === roomId ? null : roomId
  showFloorMap(currentFloor)
}

// Utility function to get academic by room
function getAcademicByRoom(roomId) {
  return allAcademics.find((academic) => academic.room === roomId)
}

// Initialize tooltips and popovers
$(document).ready(() => {
  // Initialize Bootstrap tooltips
  $('[data-bs-toggle="tooltip"]').tooltip()

  // Initialize Bootstrap popovers
  $('[data-bs-toggle="popover"]').popover()
})

// Make selectRoom globally accessible
window.selectRoom = selectRoom

// Make functions globally accessible
window.showRoomOnMap = showRoomOnMap
window.openMessageModal = openMessageModal
window.toggleVisited = toggleVisited
window.selectRoom = selectRoom
