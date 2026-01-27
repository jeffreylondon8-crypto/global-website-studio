// Load navigation on every page
function loadNavigation() {
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        });
}

// Call when page loads
document.addEventListener('DOMContentLoaded', loadNavigation);
