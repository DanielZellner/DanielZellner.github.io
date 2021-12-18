/* MAIN */

//The following code detects if the PWA is launched as an app or visited as a website
//Source: https://stackoverflow.com/questions/50543163/can-i-detect-if-my-pwa-is-launched-as-an-app-or-visited-as-a-website

// Detects if device is on iOS
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
}
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