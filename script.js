document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-section');
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    });
});

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-section');
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    });
});


