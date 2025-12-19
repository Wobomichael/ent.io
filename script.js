
function openModal(id) {
    document.getElementById(id).style.transform = "translateY(0)";
}

function closeModal(id) {
    document.getElementById(id).style.transform = "translateY(100%)";
}

function toggleForm(type) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginToggle = document.getElementById('loginToggle');
    const signupToggle = document.getElementById('signupToggle');

    if (type === 'login') {
        loginForm.innerHTML =`
                    <h2>Welcome Back</h2>
                    <input type="email" placeholder="Email" required>
                    <input type="password" placeholder="Password" required>
                    <a href="#" class="forgotten" onclick="forgot()">Forgot Password?</a>
                    <button type="submit" class="btn-submit">Sign In</button>`;
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
    } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        loginToggle.classList.remove('active');
        signupToggle.classList.add('active');
    }
}

function forgot(){
    document.getElementById('loginForm').innerHTML =`
                    <h2>Recover Account</h2>
                    <p>Request a link to recover password by email</p>
                    <br>
                    <input type="email" placeholder="Email" required>
                    <button type="submit" class="btn-submit">Send Link</button>`;
}



function fas(){
    const navLinks = document.querySelector('.nav-links');
    const fasbar = document.getElementById('fasbar');
    navLinks.classList.toggle('active');
    fasbar.classList.toggle('fa-bars');
    fasbar.classList.toggle('fa-times');
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if (event.target == modal) {
        modal.style.transform = "translateY(100%)";
    }
}

document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const fasbar = document.getElementById('fasbar');
    if (e.target.id !== 'fasbar' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        fasbar.classList.remove('fa-times');
        fasbar.classList.add('fa-bars');
    }
});