// JAVASCRIPT/header.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("/HTML/header.html")
        .then(response => response.text())
        .then(headerHtml => {
            document.body.insertAdjacentHTML('afterbegin', headerHtml);
        });
});