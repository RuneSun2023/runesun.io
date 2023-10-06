// Din JavaScript kode her
// /scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    for (let i = 0; i < 50; i++) {
        const codeStream = document.createElement('div');
        codeStream.className = 'codeStream';
        codeStream.style.left = Math.random() * window.innerWidth + 'px';
        codeStream.textContent = '1010101010101010101010101010101010101010101010101010101010101010';
        body.appendChild(codeStream);
    }
});
