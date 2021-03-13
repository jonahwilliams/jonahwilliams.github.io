'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e7b59fae6f30e968c4031d355d4c453a",
".git/config": "1c3492f2bcc609142a76a27068a0e8f4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "916e8c9caed49071040770919ed72466",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a8c0265998108525aaef34503d826e2",
".git/logs/refs/heads/master": "0a8c0265998108525aaef34503d826e2",
".git/logs/refs/remotes/website/master": "4f3b462a77da06bc9299c4bc80533b85",
".git/objects/08/6722809c74d5031c2427b31262de14e4a10560": "8eb0c7cd27a88f3912578a75b49ec598",
".git/objects/11/9c545edecc22d1f362caff000f0e0d4dbe1b8a": "832b2627a73beb405dfc39d902aa4090",
".git/objects/11/a78cc27b20ca1d22b950bf4bdb33f8fe90fc2a": "9f3eb3f5ac3592ea1f9ab6064297cd28",
".git/objects/18/b8aea3b732460d13bb8cb7de812dbae7e9ee84": "2b753d8a768dd494db332f7e4cb55fbf",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2b/7adcb458a1bd803d013e7b954d4bdb53903953": "27dff0e48f480d9c677a71f93d586bc3",
".git/objects/33/74aca03058e66d3a2cae074f0bcbd73466aad5": "e8b1edf59bc40d4f94d3776b88705612",
".git/objects/51/fcc39906b9b2291606a28aae897f5148d78316": "33339388db3e22faf114615326354296",
".git/objects/52/9948abe1bc53ab849554b6858ef03f0e039d89": "2c6a864a0247cc05b774ad33172739e0",
".git/objects/57/69e8f8eb0298d50de341d46fddccc543bb2072": "e925b4fe404e1855f9a515836a6e71be",
".git/objects/65/80d3a169e895d914f159c060b947e36746f275": "34514d47340caad5197155b259bae4be",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/6c/e6ea4085bb28459d1107b01c95b4d6121bed73": "73eec04916249a4af29f07b49ced3631",
".git/objects/70/c7184b76531e779d8d9a2aeb64709a643d42e0": "42c67bfc2c96b90df5ac8bc251f531fc",
".git/objects/74/97950809662aebac14a4ab6cec72a52a157ff7": "a71a7881adc1f22b26881eaf9ad4c3ae",
".git/objects/7d/d3e12509004f475a3547e206601c7ec9c1734d": "2500bed25fa4cb033faacd9699c517a9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9b/f9b4e97b6576c8cc3d4527073731fd9cc57493": "04889bdee9eb2a0d199d4f4113c377ce",
".git/objects/a3/3824e962d70a20a8ce9608de42636881815e1c": "aae82cc04ccb76aec0c9b5056937482c",
".git/objects/a6/3f852827a07ccf4bc15f8ca5a245f413ab0c26": "439bdb67fd3f15d568bc41954ea1e5e6",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b5/6717cb3ff3b1af373ae2298aa68c1085ef68fc": "29e1fe43a50d179d5fbda8622c01c93c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c8/5a2195e0068ce5625d72a51666711c9316a4fc": "e0b6405cd23fcd9642356eff400c4db0",
".git/objects/ce/29665a9c15beb6af579dae8e889d140add21fd": "84af5a6aacee42dd1a4d048f972a51bf",
".git/objects/db/1cc001cccacf7e60f60c1bd6c5048a9bd38c02": "ceca7cbe595f12400ab7bb98baf5be72",
".git/objects/db/bfcb8a3209189be7289089b14f740084e35023": "e36a1badb75d7756b4355ca9d41d5ef1",
".git/objects/dc/ca687a434d5c7b6a3027e65e0b7d8728b25c71": "f3034edac1aefd684c6d2429aa203a62",
".git/objects/e1/82ce397d7e6efa8641ace482f637aa0d47f4c4": "d9ed5d7a1f60522233da71b7b6988fc1",
".git/objects/e4/c2bbc76c211ea4eddd5871a0c12d1b5c7cc2b9": "1d7dd887295181838e1e2b783ad4f037",
".git/objects/ef/dd5e84a0397ecada7b9cfde51db87db08766bd": "ad7d8c09a50d25e6b1fd7275b39a3dbe",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f7/457db066392b4d477e14419fb56b74a906b1ae": "2f321556852e88712883e89801611e64",
".git/objects/f7/a122ea7ce2c10b0d80e5d4aebf083950547140": "05aebf2feccc6fd81615a106c9cf48a6",
".git/objects/fd/763f11bf0a7dc0f69b0d29c80746458751ef1b": "7b5ca92aa1f2a5b2078becf1a96a1ef8",
".git/refs/heads/master": "6de20ec5d593c049024ec40dca4fc0ed",
".git/refs/remotes/website/master": "6de20ec5d593c049024ec40dca4fc0ed",
"assets/AssetManifest.json": "23185f26d173e7b8946f7df36b4077c5",
"assets/assets/CursesTransparent_24x36.png": "4ad656518ec0757e7a3e447adf6e399e",
"assets/assets/Curses_24x24.png": "372c99d4a86354b5b6f08dd71fc71be6",
"assets/assets/Curses_24x36.png": "d98d776a76fe8e6ea3a352ed1f5b94e4",
"assets/assets/Open_Sans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/Open_Sans/OpenSans-BoldItalic.ttf": "3a8113737b373d5bccd6f71d91408d16",
"assets/assets/Open_Sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/Open_Sans/OpenSans-ExtraBoldItalic.ttf": "37f52104364c2eb5482fd85777bda0ac",
"assets/assets/Open_Sans/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/assets/Open_Sans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/Phoebus_16x16.png": "c19959b8dcff48dbc1edb215cad53303",
"assets/assets/Space_Mono/SpaceMono-Bold.ttf": "450f757ba22bf3eb9f839eb26287398a",
"assets/assets/Space_Mono/SpaceMono-BoldItalic.ttf": "97244ddaccbf325073da7af362e2cb5f",
"assets/assets/Space_Mono/SpaceMono-Italic.ttf": "233cc83beb6682c47f0d6a3ea129428f",
"assets/assets/Space_Mono/SpaceMono-Regular.ttf": "52eb73dbce8bf4083a59acc2e91699ad",
"assets/assets/sprite_64x64.png": "5cd0dfb537732a3882c997d3bfd7e169",
"assets/assets/vcr_osd_mono.ttf": "5fcd6c657ffa8a6791632c705f0944ea",
"assets/assets/Vector_square_48x72.png": "bd52e6c284bc195396600dce13b337fb",
"assets/FontManifest.json": "be451be4233c125fed03ecc08f1656a3",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "52d8c921440de32d7a60cb92b66ff0d3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "927e1dfe980a15cce527225786fc9851",
"/": "927e1dfe980a15cce527225786fc9851",
"main.dart.js": "2eb3c570df6cab37e9481c6bd942a22d",
"manifest.json": "0841f9ce1bf7e73fe9ea74595d3f6cfc",
"version.json": "e5577922c5fb05554cff83a4faf2b143"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
