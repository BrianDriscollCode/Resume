function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`nav ul li a[href="#${id}"]`).classList.add('active');
}