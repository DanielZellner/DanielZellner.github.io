// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register("../serviceworker.js")
            .then(serviceWorker => {
                console.log("Service Worker MD PWA registered.");
            })
            .catch(error => {
                console.error("Error registering the Service Worker MD PWA:", error);
            });
    });
}