const navlinks = document.getElementById("nav-links");
const humburger = document.getElementById("humburger");

if (humburger && navlinks) {
    humburger.addEventListener("click", () => {
        navlinks.classList.toggle("show");const navlinks = document.getElementById("nav-links");
const humburger = document.getElementById("humburger");

if (humburger && navlinks) {
    humburger.addEventListener("click", () => {
        navlinks.classList.toggle("show");
    });
}

const loginItem = document.getElementById("loginLink");
const userMenu = document.getElementById("userMenu");
const avatarBtn = document.getElementById("avatarBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const logoutBtn = document.getElementById("logoutBtn");
const avatarLetter = document.getElementById("avatarLetter");

if (avatarBtn && dropdownMenu) {
    avatarBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });
}

document.addEventListener("click", (e) => {
    if (
        userMenu &&
        dropdownMenu &&
        !userMenu.contains(e.target)
    ) {
        dropdownMenu.style.display = "none";
    }
});

function checkAuth() {
    const userData = localStorage.getItem("user");

    if (!userData) {
        if (loginItem) {
            loginItem.style.display = "inline-block";
        }

        if (userMenu) {
            userMenu.style.display = "none";
        }

        return;
    }

    try {
        const user = JSON.parse(userData);

        if (loginItem) {
            loginItem.style.display = "none";
        }

        if (userMenu) {
            userMenu.style.display = "inline-block";
        }

        if (avatarLetter) {
            if (user.username && user.username.length > 0) {
                avatarLetter.textContent =
                    user.username.charAt(0).toUpperCase();
            } else {
                avatarLetter.textContent = "U";
            }
        }

    } catch (error) {
        localStorage.removeItem("user");

        if (loginItem) {
            loginItem.style.display = "inline-block";
        }

        if (userMenu) {
            userMenu.style.display = "none";
        }
    }
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        alert("Logout successfully!");
        window.location.href = "login.html";
    });
}

function handleResize() {
    if (window.innerWidth > 1024 && navlinks) {
        navlinks.classList.remove("show");
    }
}

window.addEventListener("resize", handleResize);

checkAuth();
handleResize();
    });
}

const loginItem = document.getElementById("loginLink");
const userMenu = document.getElementById("userMenu");
const avatarBtn = document.getElementById("avatarBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const logoutBtn = document.getElementById("logoutBtn");
const avatarLetter = document.getElementById("avatarLetter");

if (avatarBtn && dropdownMenu) {
    avatarBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        dropdownMenu.style.display =
            dropdownMenu.style.display === "block"
                ? "none"
                : "block";
    });
}

document.addEventListener("click", (e) => {
    if (userMenu && dropdownMenu && !userMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
    }
});

function checkAuth() {
    const userData = localStorage.getItem("user");

    if (userData) {
        const user = JSON.parse(userData);

        if (loginItem) {
            loginItem.style.display = "none";
        }

        if (userMenu) {
            userMenu.style.display = "inline-block";
        }

        const letter = user.username
            ? user.username.slice(0, 1).toUpperCase()
            : "U";

        if (avatarLetter) {
            avatarLetter.textContent = letter;
        }
    } else {
        if (loginItem) {
            loginItem.style.display = "inline-block";
        }

        if (userMenu) {
            userMenu.style.display = "none";
        }
    }
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        alert("Logout successfully!");
        window.location.href = "login.html";
    });
}

checkAuth();

function handleResize() {
    if (window.innerWidth > 1024 && navlinks) {
        navlinks.classList.remove("show");
    }
}

window.addEventListener("resize", handleResize);
handleResize();