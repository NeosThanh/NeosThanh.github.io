'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "826784e0a87c69d847d710d138bd4dea",
"index.html": "753d181dac96639c7c70edf544bbca5f",
"/": "753d181dac96639c7c70edf544bbca5f",
"main.dart.js": "9504b58d0fdedb481358597bc4d976d0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3e73c9aa8fc94a7c6e77417e006d0fda",
"assets/plugins/base_core/assets_base/bases/bg_bottom_sheet.png": "68e2bcab9d6feb941a9810e98f43532f",
"assets/plugins/base_core/assets_base/bases/loading.gif": "3e8039242e517ee7edc05a4e226e0b80",
"assets/plugins/base_core/assets_base/bases/icon_return.png": "82a7afeff01590655f9bcce52140ff9b",
"assets/plugins/base_core/assets_base/bases/ic_empty.png": "a1370be395b2706f151872dde8222b6a",
"assets/plugins/base_core/assets_base/bases/error.png": "162602bc0df8c8d4a3da0c9ddf062736",
"assets/plugins/base_core/assets_base/bases/pause.png": "d484456f78a58e474d390b76c265ba65",
"assets/plugins/base_core/assets_base/bases/bt_try.png": "aa185ed28358af7b206e5156bda3802c",
"assets/plugins/base_core/assets_base/bases/player.png": "c1e80dcee23fae3fe9247798b0977b37",
"assets/AssetManifest.json": "25e3ec58826e2a929905f1214f070494",
"assets/NOTICES": "d8167ddba941938e81acb10d11834351",
"assets/FontManifest.json": "4cb7e48ebfeedcdf22c7cdad47c0a3b3",
"assets/packages/base_core/assets_base/bases/bg_bottom_sheet.png": "68e2bcab9d6feb941a9810e98f43532f",
"assets/packages/base_core/assets_base/bases/loading.gif": "3e8039242e517ee7edc05a4e226e0b80",
"assets/packages/base_core/assets_base/bases/icon_return.png": "82a7afeff01590655f9bcce52140ff9b",
"assets/packages/base_core/assets_base/bases/ic_empty.png": "a1370be395b2706f151872dde8222b6a",
"assets/packages/base_core/assets_base/bases/error.png": "162602bc0df8c8d4a3da0c9ddf062736",
"assets/packages/base_core/assets_base/bases/pause.png": "d484456f78a58e474d390b76c265ba65",
"assets/packages/base_core/assets_base/bases/bt_try.png": "aa185ed28358af7b206e5156bda3802c",
"assets/packages/base_core/assets_base/bases/player.png": "c1e80dcee23fae3fe9247798b0977b37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/ic_love0.webp": "63273ebeb4302c31dce8b1adac3674b4",
"assets/assets/images/ic_add_parrams.png": "f3e4a5dd22164651562c7909e412049d",
"assets/assets/images/ic_logo_x1.png": "81cddde16d339ed26a8c254d8e8b816c",
"assets/assets/images/ic_author1.webp": "dc26a888896328a87638d98d601647d1",
"assets/assets/images/bt_try.webp": "9e476fa74dffba764f8591bf12afac81",
"assets/assets/images/ic_empty.webp": "b4b489456809649fe5e5ecd63482d517",
"assets/assets/images/ic_share.webp": "27f0a8c6671e8a6ac523882b46c302ca",
"assets/assets/images/ic_smile.png": "d913c581825d37892019e081045c2725",
"assets/assets/images/ic_loading.png": "b758b8cdc2e0477feefdcee5c238ca2c",
"assets/assets/images/ic_love1.webp": "56fa1db5aed5411fe8e4549eee7c89ff",
"assets/assets/images/ic_add.png": "fa55f4eb00fb34c48314719f6d054978",
"assets/assets/images/ic_new_topic.png": "13bd991d33d00e2152c6c334402ada42",
"assets/assets/images/tip.webp": "537bede06a87fa72ea022d5bd42c2f2f",
"assets/assets/images/ic_lock.png": "011726e3103cb5dbc1d6d905914840e6",
"assets/assets/images/ic_zalo.png": "73c575bb3fc4cab55c2fc7bff4b35580",
"assets/assets/images/ic_success.png": "138c56904ef40028e733f6b0d0da093d",
"assets/assets/images/bg_app.webp": "4f89d4c33d6247a24a306b8c8a40a9db",
"assets/assets/images/ic_app.png": "4e24efedcdcc53da311bbdd24c60523f",
"assets/assets/images/ic_robot.png": "dbb1de3c15d660d06e3ad06c7960e836",
"assets/assets/images/loading.gif": "3e8039242e517ee7edc05a4e226e0b80",
"assets/assets/images/icon_return.png": "82a7afeff01590655f9bcce52140ff9b",
"assets/assets/images/ic_errror.png": "07cf477b623bff3e5ad459dca7fddbfd",
"assets/assets/images/ic_amount.png": "56c15133727e0c51f2dfd6e10a23b7a5",
"assets/assets/images/ic_clock.png": "1d979e53fa6a670cde3c4fcd40b6bea0",
"assets/assets/images/ic_line.png": "bf0c94191f7ee526b648925b31013717",
"assets/assets/images/ic_books.png": "70571892bd22fec596124bf02b5988dd",
"assets/assets/images/bg_no_color.webp": "dd2fa083583d666399d11ec3051aeb92",
"assets/assets/images/ic_lock_topic.png": "011726e3103cb5dbc1d6d905914840e6",
"assets/assets/images/row_color.png": "ee3e81c65120cf0362ddb389f383d6a0",
"assets/assets/images/ic_search.png": "6f2db9868daf310467c9ee88ff76ce4a",
"assets/assets/images/ic_arrow.png": "a13ceb6aa80363e42d81b73d55d208ae",
"assets/assets/images/ic_toast_success_mark.png": "b9eb8bfd2801003c76d50fe51fcfe81e",
"assets/assets/images/ic_splash.webp": "d6da2b4e6f6e8055c604c7c3108c63a5",
"assets/assets/images/ic_support.svg": "6cb49f3453106be004b8cfcffe9905fa",
"assets/assets/images/ic_arrow_x1.png": "ce4840ad2905890d9270603edef3424a",
"assets/assets/images/ic_commit.png": "618c3e072e2f0de45831b9959bd69236",
"assets/assets/images/ic_logo.png": "fa2a1a7c461610b086547832f0f0f92a",
"assets/assets/images/ic_item1.png": "6582b16346835faf44a9577210940854",
"assets/assets/images/ic_block_start.png": "fc064e7063127e76cee56c8cc4d3d277",
"assets/assets/images/ic_item2.png": "cb28fbbbdb30d80afcbb94979dd257e6",
"assets/assets/images/ic_block_end.png": "0bd3c1177544fceaf70757158bcbb505",
"assets/assets/images/ic_del.png": "d3de066b217b93de8bdde6ed0925d631",
"assets/assets/images/ic_block_and_2.png": "ece576669c04d196516cd9e8a66278f2",
"assets/assets/images/ic_promise.png": "56106b7a2afa10b9cd456604c4415ca5",
"assets/assets/images/ic_author2.webp": "c6931696933cbd8cb7cd87105e950cb1",
"assets/assets/images/ic_leaves.webp": "191ebf78cf61b3b873b2311fdabd1416",
"assets/assets/images/ic_block_and_3.png": "235b8f15bd2b1116ebb2adac19055d6d",
"assets/assets/images/ic_block_and_1.png": "21ded08781e92e3b450cf8c1c511f286",
"assets/assets/images/ic_toast_failed_mark.png": "0107486f2908fb022f3c7dc37de9ec09",
"assets/assets/images/error.webp": "031d491fc14151e47f37a7e30ba815f6",
"assets/assets/fonts/InterMedium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/InterLight.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/InterRegular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/InterExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/InterBold.ttf": "275bfea5dc74c33f51916fee80feae67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
