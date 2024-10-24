const balloon = document.getElementById("balloon");
let size = 200; // Initial size
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

balloon.addEventListener("click", function() {
    size += 10; // Increase size by 10px
    if (size > 420) {
        size = 200; // Reset size if it exceeds 420px
    }
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex]; // Change color
    colorIndex = (colorIndex + 1) % colors.length; // Update color index
});

balloon.addEventListener("mouseleave", function() {
    if (size > 200) {
        size -= 5; // Decrease size by 5px when mouse leaves
        balloon.style.width = size + 'px';
        balloon.style.height = size + 'px';
    }
    // Change color in reverse order
    colorIndex = (colorIndex - 1 + colors.length) % colors.length; // Reverse color index
    balloon.style.backgroundColor = colors[colorIndex]; 
});
