const fileInput = document.getElementById('fileInput');
const gallery = document.querySelector('.gallery');

fileInput.addEventListener('change', (event) => {
    const files = event.target.files;
    gallery.innerHTML = ''; // Clear existing images

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});
