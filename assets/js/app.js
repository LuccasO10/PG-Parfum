document.getElementById("btn-voltar").addEventListener("click", function(e) {
    e.preventDefault();

    if (window.history.length > 1) {
        history.back();
    } else {
        window.location.href = "index.html";
    }
});