
let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});


navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});


let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscribeForm");
    const emailInput = document.getElementById("email");
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        
        const emailValue = emailInput.value.trim();
        messageDiv.style.display = "none";
        messageDiv.className = "message";

        if (!emailValue) {
            showMessage("Please enter your email address!", "error");
            event.preventDefault(); 
            return;
        }

        if (!validateEmail(emailValue)) {
            showMessage("Please enter a valid email address!", "error");
            event.preventDefault(); 
            return;
        }

        showMessage("Thank you for subscribing!", "success");
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.classList.add(type);
        messageDiv.style.display = "block";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const messageDiv = document.getElementById("contact-message");

    form.addEventListener("submit", function (event) {
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();

        messageDiv.style.display = "none";
        messageDiv.className = "message";
        let errorMessage = "";
        
        if (!nameValue && !emailValue && !messageValue) {
            errorMessage = "All fields are required.";
        } else {
            if (!nameValue) {
                errorMessage += "Name is required! ";
            }
            if (!emailValue) {
                errorMessage += "Email is required! ";
            }
            if (!messageValue) {
                errorMessage += " Message cannot be empty! ";
            }
        }

        if (errorMessage) {
            showMessage(errorMessage, "error");
            event.preventDefault(); 
            return;
        }

        if (!validateEmail(emailValue)) {
            showMessage("Please enter a valid email address.", "error");
            event.preventDefault(); 
            return;
        }

        showMessage("Your message has been sent successfully!", "success");
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.classList.add(type); 
        messageDiv.style.display = "block"; 

        if (type === "success") {
            setTimeout(function () {
                messageDiv.style.display = "none"; 
            }, 5000); 
        } else {
            setTimeout(function () {
                messageDiv.style.display = "none"; 
            }, 3000); 
        }
    }
});

