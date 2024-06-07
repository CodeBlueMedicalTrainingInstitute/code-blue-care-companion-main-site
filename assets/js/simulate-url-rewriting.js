// JavaScript code to simulate URL rewriting
window.onload = function () {
    var path = window.location.pathname;

    // Remove ".html" extension from the URL
    var newPath = path.replace(/\.html$/, '');

    // Redirect to the new path
    if (newPath !== path) {
        window.location.href = newPath;
    }
};
