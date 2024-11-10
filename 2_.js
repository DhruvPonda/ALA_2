document.addEventListener('DOMContentLoaded', () => {
    const ball = document.getElementById('ball');

    // Toggle color on click
    ball.addEventListener('click', () => {
        if (ball.style.backgroundColor === 'rgb(97, 218, 251)') {
            ball.style.backgroundColor = 'orange';
        } else {
            ball.style.backgroundColor = '#61dafb';
        }
    });
});
