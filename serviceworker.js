/******************
 * SERVICE WORKER *
 ******************/

//it creates a list of all the files to be cached
//@cacheName: 	It is used to give a unique name to the cache und to update it
//				      When the app has a new release such as version 2, we should then add
//              all of our files (including our new files) to a new cache
var cacheName = 'MD-cache';
var filesToCache = [
 'img/0001.jpg',
 'img/0002.jpg',
 'img/0003.jpg',
 'img/0004.jpg',
 'img/0005.jpg',
 'img/0006.jpg',
 'img/0007.jpg',
 'img/0008.jpg',
 'img/0009.jpg',
 'img/0010.jpg',
 'img/android-icon-36x36.png',
 'img/android-icon-48x48.png',
 'img/android-icon-72x72.png',
 'img/android-icon-96x96.png',
 'img/android-icon-144x144.png',
 'img/android-icon-192x192.png',
 'img/apple-icon-57x57.png',
 'img/apple-icon-60x60.png',
 'img/apple-icon-72x72.png',
 'img/apple-icon-96x96.png',
 'img/apple-icon-144x144.png',
 'img/apple-icon-192x192.png',
 'img/apple-icon.png',
 'img/apple-icon-57x57.png',
 'img/apple-icon-76x76.png',
 'img/apple-icon-114x114.png',
 'img/apple-icon-120x120.png',
 'img/apple-icon-152x152.png',
 'img/apple-icon-180x180.png',
 'img/apple-icon-precomposed.png',
 'img/favicon-16x16.png',
 'img/favicon-32x32.png',
 'img/favicon-96x96.png',
 'img/home.png',
 'img/icon_invertiert.png',
 'img/icon_web.png',
 'img/ms-icon-70x70.png',
 'img/ms-icon-144x144.png',
 'img/ms-icon-150x150.png',
 'img/ms-icon-310x310.png',
 'backend/movieLibrary.json',
 'backend/users.json',
 'css/main.css',
 'css/nav.css',
 'css/swip.css',
 'html/groups.html',
 'html/home.html',
 'html/profil.html',
 'html/swipe.html',
 'js/groups.js',
 'js/login.js',
 'js/main.js',
 'js/profil.js',
 'js/swip.js',
 'js/use_serviceworker.js',
 'js/use_webworker.js',
 'js/webworker.js',
];

// Install the service worker asynchronously, which then actually caches all the files contained in the above list
// NOTE: Cache only the files that do not change every time
// When registration is complete (see use_serviceworker.js file), the serviceworker.js file is automatically downloaded,
//   then installed, and finally activated.
// In the install listener, we initialize the cache and add files to the cache for offline use.
// @waituntil(): 	The service worker does not install until the code inside waitUntil is executed.
// The code inside "then" will be run, asynchronously
// @caches: Caches is a special CacheStorage object available in the scope of the given Service Worker to enable saving data
//					Saving to web storage won't work, because web storage is synchronous.
//					We open a cache with a given name, then add all the files our app uses to the cache, so they can be downloaded
//          next time (identified by request URL).
self.addEventListener("install", event => {
  console.log("Service Worker Lab 04 PWA installing.");
  event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
  );
});

// This event is usually used to delete any files that are no longer necessary and clean up after the app in general.
self.addEventListener("activate", event => {
  console.log("Service Worker Lab 04 PWA activating.");
});

// The service worker fetches content from the cache if it is available there, providing offline functionality
// @RespondWith:  It works as a virtual proxy server between the app and the network.
//					      Allows to respond to every single request with any response we want: prepared by the Service Worker,
//                taken from cache, modified if needed.
self.addEventListener('fetch', event => {
  console.log("Service Worker MD fetching.");
  event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
  );
});

