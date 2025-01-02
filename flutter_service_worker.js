'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3dbfd0fda686656c5c1c8670fdc748fe",
".git/config": "3958de30813d12bec8646a055eeb6a82",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b71aaa9ee77f4c26efbbf1c69dcae42f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b6a7a76649020522d101f241bb9bdd9",
".git/logs/refs/heads/master": "7b6a7a76649020522d101f241bb9bdd9",
".git/logs/refs/remotes/master/master": "0e32cbdd3277137a313d932acd070811",
".git/objects/01/e9f0a760f8c3440f4ec69fd92569c6396f8a4f": "e63e601f7eb887e8ffcc1cb11ef06aa8",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/10/766fdb1e692357e8b166b978fe708e00e3cafc": "463a1440289daee85dc16e128d92b902",
".git/objects/16/0d620544135ac62353c184ce8634acaabbedc2": "2d0fc0c51d100a76ac9a2c1b35244914",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/30/4b242f048633de752dc67b21f519efc3672b2d": "1ec2448d89062a3ae29a0465806a84fd",
".git/objects/30/8fd3422dc2387424dc818136a8d25e08e3a301": "3074793827155610f1ebbe5dbad5c1e0",
".git/objects/35/b681d0a590321784c57c8c710977b9c1719944": "3b9274a59b26e561e3dbbacbbf634c6d",
".git/objects/48/99115b33bb65c6e24b94175a80da9c3251bd34": "d98e965a0e0deaaf6b6fba35267815ad",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/533abe9786b3debdc48b195d0e69d84e03ee76": "453a0122fedf22d8d340a977a28f475f",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/56/4942284ffc32562a27cc8d5925561c8635757f": "36c6b8c7d844a48a1171364ea1d771d8",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/68/10ea5ca81efef7fc9129ad7a991bda8126aa6c": "addbc4b43b1bc3c76eda6845d15e624c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/aacc307a70a334b157441794c587a54beff959": "475316a7c9a66d7b65c857e1ff12ffc4",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/705f73535d98f2bc26af2d443c503548509dab": "86b0a19f4bdee3533abca0ce244fac9f",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/7b/c27b3ab15226bf84b8fe5b2baab8d328c680cc": "783274ca9c6e8f59621397a4766ca228",
".git/objects/81/90dc5af2b2ecff08d5c07307eb7e165f445b8c": "fc09898b6991752dfc98f6424f83d044",
".git/objects/84/6024c4bfb6c08fcaace654a0fa34333951888a": "379f73b364a30ae48328a35cfd8c795d",
".git/objects/85/249fc5f7e8f0d3b316f4a6374688fcaf4d93ed": "597f3aa4ebc3a41f2fc46b8ea842cebd",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/efe1c8a09e7a7181862eac53b25d01f8347093": "3b867adce316476e1b9d220670686a37",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8e/9ee669a845cb3cff8de2871be0645dc95ae0e9": "284517256ac0eb7e68da5af98a94bb0c",
".git/objects/90/68db8bab6dd41e174ff3be3d7a1c452896c0ec": "58bd280548d895390b5be233f0da5d31",
".git/objects/91/2031482723fad701f581554da945bc1238a24e": "5fdeb685461d01a90c6aa797c23ca39c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/95/bbd096d46e899db0fa8fd9ccdbb375d348c7c7": "0ec865fe02cd5778b9f34a68edf2161c",
".git/objects/9d/9c547966de09a3b35f01cc876aaab045cbdfc5": "d856bc7c12e76039fb82d00d135b4c3e",
".git/objects/a4/6e1b86ba3dccce7e9bdbe1c12185e92efbebf5": "0c4024372c81f4ea5da715344efcf716",
".git/objects/a6/4c0cd3c4c235108597f4d2faced5d96f9253b2": "eefac78786a116068f5fc8dbaf4550cc",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/652f593b9c2e7d47c3c5aa9eb5d91896f89047": "8e5c1798e56dfc680458bb997c16df1f",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/bb8756dbc0852eb33d278c16a90df5e74f4583": "b6788f596f7fc4d23e426d7451d407c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e7987b5ffebbb1f76e9f534d67ef507c53f14f": "4e11477a447eab0a2203131bbd46bc71",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/808a35784e1c86a0037504997aa68a556f4a16": "9b9ff1971a8b25f8f3874df383942feb",
".git/objects/c1/3d131490506cf88fdfc739378889fb122c6b0a": "b6cf7d610a4ec30f2bbf2cc971b82d30",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/8841213c0a835341ade6b7165de5b844156312": "b903d456dfbbebc8bb84a1418083744b",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/ca/88de68de34542c7dde687c31241909fdcfb309": "f1c5e844211340660b46950301a3c8d2",
".git/objects/cc/47cf4a5c08c8529c7e8e20380869930883a4e1": "e48d5c92d3bf76826b30a3aa4d657e06",
".git/objects/ce/266ccfb49599de30ed725398130b4ae3cc55e8": "e6201818f01b5f22f0b840cd3f717e9f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/c120417579469222d795a5aaa6dce36c4c5662": "b7d7966a6215ae7d3e71cb97d270c052",
".git/objects/e0/16440524171ac5b059a67b989516ed2e24527f": "f18d6b5d6bf42373807e1a26570d5a1c",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/81d5cdc80317b6138da209a99a21c69ab13138": "2774f93b10fc2daf49ddbf50a5e1bc97",
".git/objects/f9/0b71a931a2367b9a6990daab8f8d96150ab511": "34c2de5a06a8c3ee39f534ea4b0b63f9",
".git/objects/fa/da5fb7a56cb10292597d81de0547f9d6eb2a1b": "2c603bf710f96fe4b2f2849d5fb29414",
".git/objects/fc/c3dabea5bd35783a01aac29ef3d604d88f5c9b": "edba9f16e8c8325686c34d29b304633c",
".git/objects/fd/20595daee16e3c90d69d7c33706138e15bc297": "02f8b190b17dacb034fc0b6b0e3dc90f",
".git/refs/heads/master": "02aa0e060b7880a4f713067aa50bd5f3",
".git/refs/remotes/master/master": "02aa0e060b7880a4f713067aa50bd5f3",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/AssetManifest.bin.json": "4446c963dde6091a6b6de4cb1ae02947",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b8edccd45c68681a8dab82d7d000603a",
"assets/NOTICES": "758811ab4fca2eaac2777f9f66ca21fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "fd228a6843ff107005d82444bf8034ae",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "add486e61f2c37de924b9c025f42e1bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e37951df91a6b3178a6c7ab2813cef3d",
"/": "e37951df91a6b3178a6c7ab2813cef3d",
"main.dart.js": "c19c4ffb3d10b685d2793cff22d5da74",
"manifest.json": "f564ff123ba231cdd60ed4e002b1e9cf",
"version.json": "7820e0841343d89f1d1af33a5feb33ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
