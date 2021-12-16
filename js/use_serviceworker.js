/************************
 * USE A SERVICE WORKER *
 ************************/

//Register Service Worker
// If the service worker API is supported in the browser, it is registered using the
// ServiceWorkerContainer.register() method.
if ("serviceWorker" in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
            .register("serviceworker.js")
            .then(serviceWorker => {
                console.log("Service Worker Lab 04 PWA registered: ", serviceWorker);
            })
            .catch(error => {
                console.error("Error registering the Service Worker  Lab 04 PWA: ", error);
            });
    });
}
