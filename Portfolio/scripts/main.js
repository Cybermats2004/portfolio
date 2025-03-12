let bordersRemoved = false; // Flag to track the border state

document.getElementById('toggleBordersBtn').addEventListener('click', function() {
    const allElements = document.querySelectorAll('*');
    
    if (bordersRemoved) {
        // Restore borders
        allElements.forEach(function(element) {
            element.style.border = ''; // Remove inline border styles to restore original styles
        });
    } else {
        // Remove borders
        allElements.forEach(function(element) {
            element.style.border = '0'; // Set borders to 0
        });
    }
    
    // Toggle the flag
    bordersRemoved = !bordersRemoved;
});