    const body = document.body
    let toggleBtn = document.getElementById("themeToggle")
    let moonIcon = document.getElementById("moonIcon")
    let sunIcon = document.getElementById("sunIcon")
    if (localStorage.getItem("theme") === "dark"){
        body.classList.add("dark-mode")
        moonIcon.classList.add("d-none")
        sunIcon.classList.remove("d-none")
    }
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode")
        moonIcon.classList.toggle("d-none")
        sunIcon.classList.toggle("d-none")
        localStorage.setItem("theme",body.classList.contains("dark-mode") ?"dark":"light")
    })