'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2700dfcb9b1540776b0896afb9fd46e5",
"assets/AssetManifest.json": "c78e95d0f34ac1c1a82c1274bf73a832",
"assets/assets/avatar_span.png": "9d7ddb27d53fd545a3235f0f5864989a",
"assets/assets/bf_2042_white_logo.svg": "1fee66e8902ee1e58ff76c91a105ecfb",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "4797d7c46d4427409ea6e85f6a8ad32f",
"assets/NOTICES": "7b647b756561a6d3cb6e3d2dbaf539d3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bc83594fb74eff61277941cfda3d5fc5",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "36ad46d33f3df4a4f1f5fb76115ef802",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/android/android-launchericon-144-144.png": "1792a6c93d195ef987d4e5772fb4a341",
"icons/android/android-launchericon-192-192.png": "8ce383c6e4a2ab8e9c1e7a04f2b99005",
"icons/android/android-launchericon-48-48.png": "0d80c19c29aac3fa723005f8e3746020",
"icons/android/android-launchericon-512-512.png": "89a7ed443ab97e0ecdc8405e0aa79cf6",
"icons/android/android-launchericon-72-72.png": "2ef886ba2f09abc4d5c469c5beed75e2",
"icons/android/android-launchericon-96-96.png": "25dec3b373155b75de5004ca3593a6e8",
"icons/ios/100.png": "1402b607a26e5ee083dfb68a85a6c85a",
"icons/ios/1024.png": "e799fef1cbdd5803a7276bb3c9d2b130",
"icons/ios/114.png": "ea8ba4261987834dcdd681cf5f47c7db",
"icons/ios/120.png": "5d224a405a8f439f4d4ecaded45843a9",
"icons/ios/128.png": "81e5d834ad9ae55f5056b6459ef60ed2",
"icons/ios/144.png": "1792a6c93d195ef987d4e5772fb4a341",
"icons/ios/152.png": "a892f21d34d8712e3d9becc90a4855b4",
"icons/ios/16.png": "36ad46d33f3df4a4f1f5fb76115ef802",
"icons/ios/167.png": "9e77656e88bc05f437fa01b14754c635",
"icons/ios/180.png": "b9c41ec5bbe642aa3f4c77633fed0e6f",
"icons/ios/192.png": "8ce383c6e4a2ab8e9c1e7a04f2b99005",
"icons/ios/20.png": "38904d3e4edbc8230a9b6a9d81dc5179",
"icons/ios/256.png": "eaf9d6fdb9279d34bf5217dd0cfba558",
"icons/ios/29.png": "c911e344e48defe3b6b917bb90709abc",
"icons/ios/32.png": "21251b20914e3e180a40fd4f6408a3bb",
"icons/ios/40.png": "30d409a413294893e77887f5c17d40f1",
"icons/ios/50.png": "bbe4847f7778f9a3d0addc66b248865c",
"icons/ios/512.png": "89a7ed443ab97e0ecdc8405e0aa79cf6",
"icons/ios/57.png": "c4182efabd5998a9dc3d6a3df31ea21f",
"icons/ios/58.png": "013eadacef2974764573964f05e51281",
"icons/ios/60.png": "dc0d28ca6fb9b307a7559afd7ba3c679",
"icons/ios/64.png": "2af60263b65b219378f6debb0d14c489",
"icons/ios/72.png": "2ef886ba2f09abc4d5c469c5beed75e2",
"icons/ios/76.png": "f35d890da3cb1f2252e63032eb9077a2",
"icons/ios/80.png": "d9924d3e6e8703d5d2cedfc13b9b0e89",
"icons/ios/87.png": "d78bbe0aab3a6cd27056fe3d30d41fe9",
"icons/windows11/LargeTile.scale-100.png": "833090d19d2b406297dd37a9d94a0593",
"icons/windows11/LargeTile.scale-125.png": "1027fffe3d3db1e163d23e8cfdd95c1e",
"icons/windows11/LargeTile.scale-150.png": "d1bc24853a4f80ae7d40a825cbc9e83d",
"icons/windows11/LargeTile.scale-200.png": "0b8f37b99ca8c30b8e7e0ff9e417ca68",
"icons/windows11/LargeTile.scale-400.png": "97143efc5ab51911f9a920f545bb6e68",
"icons/windows11/SmallTile.scale-100.png": "63106ddbc685d61f8abce5b1587e6a77",
"icons/windows11/SmallTile.scale-125.png": "b7d7f954f5db499e970cbf8a7237a2a4",
"icons/windows11/SmallTile.scale-150.png": "fda34aee5cc0cebcfaf86eed0f2ed522",
"icons/windows11/SmallTile.scale-200.png": "6f862ac2eb7ad249d2a652121ab423d0",
"icons/windows11/SmallTile.scale-400.png": "bdf192c88ba7f4ee7e8fde714efe8872",
"icons/windows11/SplashScreen.scale-100.png": "2c885372b3f1b97a72989ad5a39db1e9",
"icons/windows11/SplashScreen.scale-125.png": "063e5694fc70b91ee05ae75ad9741503",
"icons/windows11/SplashScreen.scale-150.png": "bfa6aaf584ca398e669369684f5a353a",
"icons/windows11/SplashScreen.scale-200.png": "38040261eb191e9257be5ee49a200d52",
"icons/windows11/SplashScreen.scale-400.png": "845d6b097018645d6fd60c2e9ea7371d",
"icons/windows11/Square150x150Logo.scale-100.png": "97edb11cfea0dae1d7a07acb03f8a2b5",
"icons/windows11/Square150x150Logo.scale-125.png": "d8e13fd851d0c073e79cc9e6ae3a7759",
"icons/windows11/Square150x150Logo.scale-150.png": "22f257a4f495f59956f79bbc15c23911",
"icons/windows11/Square150x150Logo.scale-200.png": "0dc39e903f6ed920b19531d9482a69c6",
"icons/windows11/Square150x150Logo.scale-400.png": "1636496ab046f9868d56715d60f45803",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png": "73bb7f9069e395b01d4d76dd1d5b3b5d",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png": "5ca0c7ee8ba6059d291e66181018e8d4",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png": "f34bdbd948a7a7879e8caeb8af440aa2",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png": "cc873293c8b285c3a9d9b0e058a34ecd",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png": "3817ec41309ec83b7f739c420f8ec8a6",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png": "050af30b822e9b0bef51e4b5637346b8",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png": "b19fdf005f23e45ba76614dcfd917dd1",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png": "9b5d0a58a277700570ebb8f6bf0b5a32",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png": "d164d660e577664801fa958ed9d022cb",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png": "2b28cbd6e4df47666c3bdbf3a4a807a6",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png": "2b5372fecf6baa517cffeb576b8872e9",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png": "462773a181e92a244eded4697849951a",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png": "f454bac36166d2055c1ba0a837b0915a",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png": "3287664522b9fef6a816d382ef53aa39",
"icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png": "50c3302b5cebb12e3b18b6938970907e",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-16.png": "73bb7f9069e395b01d4d76dd1d5b3b5d",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-20.png": "5ca0c7ee8ba6059d291e66181018e8d4",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-24.png": "f34bdbd948a7a7879e8caeb8af440aa2",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-256.png": "cc873293c8b285c3a9d9b0e058a34ecd",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-30.png": "3817ec41309ec83b7f739c420f8ec8a6",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-32.png": "050af30b822e9b0bef51e4b5637346b8",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-36.png": "b19fdf005f23e45ba76614dcfd917dd1",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-40.png": "9b5d0a58a277700570ebb8f6bf0b5a32",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-44.png": "d164d660e577664801fa958ed9d022cb",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-48.png": "2b28cbd6e4df47666c3bdbf3a4a807a6",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-60.png": "2b5372fecf6baa517cffeb576b8872e9",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-64.png": "462773a181e92a244eded4697849951a",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-72.png": "f454bac36166d2055c1ba0a837b0915a",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-80.png": "3287664522b9fef6a816d382ef53aa39",
"icons/windows11/Square44x44Logo.altform-unplated_targetsize-96.png": "50c3302b5cebb12e3b18b6938970907e",
"icons/windows11/Square44x44Logo.scale-100.png": "d164d660e577664801fa958ed9d022cb",
"icons/windows11/Square44x44Logo.scale-125.png": "cd31887334160f60c51253b1724db77d",
"icons/windows11/Square44x44Logo.scale-150.png": "2fa5884df3267ce943301cf56500e733",
"icons/windows11/Square44x44Logo.scale-200.png": "fd507e386b5e26f78e3909119165e6e2",
"icons/windows11/Square44x44Logo.scale-400.png": "78cecef6c41aefdefffb8b12e392c617",
"icons/windows11/Square44x44Logo.targetsize-16.png": "73bb7f9069e395b01d4d76dd1d5b3b5d",
"icons/windows11/Square44x44Logo.targetsize-20.png": "5ca0c7ee8ba6059d291e66181018e8d4",
"icons/windows11/Square44x44Logo.targetsize-24.png": "f34bdbd948a7a7879e8caeb8af440aa2",
"icons/windows11/Square44x44Logo.targetsize-256.png": "cc873293c8b285c3a9d9b0e058a34ecd",
"icons/windows11/Square44x44Logo.targetsize-30.png": "3817ec41309ec83b7f739c420f8ec8a6",
"icons/windows11/Square44x44Logo.targetsize-32.png": "050af30b822e9b0bef51e4b5637346b8",
"icons/windows11/Square44x44Logo.targetsize-36.png": "b19fdf005f23e45ba76614dcfd917dd1",
"icons/windows11/Square44x44Logo.targetsize-40.png": "9b5d0a58a277700570ebb8f6bf0b5a32",
"icons/windows11/Square44x44Logo.targetsize-44.png": "d164d660e577664801fa958ed9d022cb",
"icons/windows11/Square44x44Logo.targetsize-48.png": "2b28cbd6e4df47666c3bdbf3a4a807a6",
"icons/windows11/Square44x44Logo.targetsize-60.png": "2b5372fecf6baa517cffeb576b8872e9",
"icons/windows11/Square44x44Logo.targetsize-64.png": "462773a181e92a244eded4697849951a",
"icons/windows11/Square44x44Logo.targetsize-72.png": "f454bac36166d2055c1ba0a837b0915a",
"icons/windows11/Square44x44Logo.targetsize-80.png": "3287664522b9fef6a816d382ef53aa39",
"icons/windows11/Square44x44Logo.targetsize-96.png": "50c3302b5cebb12e3b18b6938970907e",
"icons/windows11/StoreLogo.scale-100.png": "bbe4847f7778f9a3d0addc66b248865c",
"icons/windows11/StoreLogo.scale-125.png": "2522f07e0daffb2b803bbc49cf3271d6",
"icons/windows11/StoreLogo.scale-150.png": "003baa587deb97539857344b072e1ba0",
"icons/windows11/StoreLogo.scale-200.png": "1402b607a26e5ee083dfb68a85a6c85a",
"icons/windows11/StoreLogo.scale-400.png": "001a7c6f509f63cf10ff0210cf278f9a",
"icons/windows11/Wide310x150Logo.scale-100.png": "e4a2fd06e35a391882bb44854e395113",
"icons/windows11/Wide310x150Logo.scale-125.png": "c93dfeb73e8236988ac2f8c3c6998fb1",
"icons/windows11/Wide310x150Logo.scale-150.png": "f4d3a39a97ccd673ac2ee7607e68a8a5",
"icons/windows11/Wide310x150Logo.scale-200.png": "2c885372b3f1b97a72989ad5a39db1e9",
"icons/windows11/Wide310x150Logo.scale-400.png": "38040261eb191e9257be5ee49a200d52",
"index.html": "43e266215ef80bb0102f3a82d9607bd6",
"/": "43e266215ef80bb0102f3a82d9607bd6",
"main.dart.js": "4b4094ad1f087fcfa8e86bfdb30e4566",
"manifest.json": "bb3b029592260d57545edc70693cb992",
"version.json": "515a2f077acd4fb69492b4bd9988493d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
