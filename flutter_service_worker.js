'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/fonts/VT323-Regular.ttf": "692c37377cd1e0f4850f47c7c0148426",
"assets/assets/images/akanksha.jpeg": "6fbb2c2cb4faca3cf70391eb6e19d10a",
"assets/LICENSE": "fce0d0627f103411fa9e7a3d28fd9270",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/AssetManifest.json": "3c80969d54b7642735b9bdeb47fbbf81",
"assets/FontManifest.json": "e19ac7db3165f81bee3791a142f3a340",
"main.dart.js": "d6fbb9967e536a6b4b2e46799f9eb5e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "c7adbd168290034cba066b8a57a40ea5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/ee/2a76135378892f1094d104f757f20af6bcd818": "23f07e5996ccb575a78029d2a8e1591d",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/86/4271bd94b7cc2d616bdc44df8fdfe8e949be0f": "9237b1dae7aa099a3f5453c630f2d320",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/e3/2f7383fc88f9efcf9e89b381db125c0e89575b": "9190624cc69b01266a69e20548e6681c",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/80/4ce3675a3330b7e8b3179589626875d51ed671": "5c5a3c6356ecfb7e418bcd0c72b27628",
".git/objects/85/7082db71128a1b7ec7e4109cb08bcce166ec03": "0e3a19b7be9ca91f0258a87706605f99",
".git/objects/c2/5ea018d77592c107c89708897c2926156cdacc": "964be4fba2d6b3609bfebc65598f6baa",
".git/objects/fc/54890336003a4262928976f40e383a6f478e36": "d32179884eba8de98267f1edf6b7ad2d",
".git/objects/e4/1f5c409f7c8380f8d7afe7052e600aed33d294": "2205e22bf6938183d0447326b33de28a",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/a7/d9a83e3888879446e566634ce4f38601a0b160": "0ef3f1f9dff7f4ec9d54910cf14891dc",
".git/objects/ae/20201bd00ff5dc0aca1465e70a5a8f782638d1": "d130ab0fbe73598b8e3edc0d75088134",
".git/objects/ae/83a6ce2d5fcb93fc5bd78eba9086a4682d459b": "dabdb71d38f2c64199a73cc15b95d4a1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f5/695008222b0723b6bbcad165e2240f79d2f9f3": "081b9e04f8638c2beba1ef901081f0a6",
".git/objects/ff/2a500811c2edabecf96bff8fa163de0c6e5fa2": "4f4e8a6004b7d2d19be3533c399eb837",
".git/objects/ff/1c6a4d0d7ef3f6bf2a432d84eaf25397f3e25d": "1e2a376239010f7c71cec9bd3b1bf938",
".git/objects/8a/402828fc7ec57bc484c0561e3c2b6fbb1a6c2f": "dfcb7ab4cddf95830af38035cd2ecbb7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ca/5cfc2c76fa92dcd8d7510094d537241128b935": "eb4afe00cc7ee306673d5626f0965d56",
".git/objects/e5/9b30d1f99801a4355fc159bdc534c29f88c08a": "c0c7a4841815fa74777c3792ab4a76a8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/c6/b933c6d0f2e72714be9d794ac6312d29d7add7": "0330a1caa564fb9258cf6d7772fe01ff",
".git/objects/cc/718bbaf04fc95144abf11243c3c09fd3525a54": "1bc98b1eef4e4c5cc48eaf23e9660a93",
".git/objects/0e/e8852f0a562ed3771fe4512bc9e94969ec3f84": "1503fc95819602d7246edccfc43fb8a6",
".git/objects/e8/38581129b075e52a84c44cd733044e0c8f98da": "a9ce7569460fa2da0f0961e36e7b4b57",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e6/4ca25668953330fb1bf9e9d907766c59231c5d": "53cb22660e59bd8bcbebdd30014e87de",
".git/objects/ab/ad61c1dcb0f17ca9159d6653b08212bb67e751": "34e09d61559e9161ec4bb4219f8d1dfc",
".git/objects/78/71f2dbb3246d2166ec372a0bd18b76f3a1436c": "11fd4aaf8a411377aacdf2250a8e66ae",
".git/objects/35/ddf917d06762c08d71adda0cae81d43b5e3a08": "8e38648dfb0c8a8938d6746239029c42",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1f/d35e4595cfa7670ba71b45340553992af65943": "462704a859e0f3e3f98f7dc9b64f8266",
".git/objects/3e/abb2576a5331b0dc22f10651b4cd89329444f4": "e74f403d59f082d08ad17d41cf0034f0",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/config": "0fb40e922f8d132b25a3bae1f82f7bc7",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/refs/remotes/origin/master": "80a805174c6530ddea44b435562fbfce",
".git/refs/heads/master": "80a805174c6530ddea44b435562fbfce",
".git/logs/HEAD": "2e4320587ec71d055c90e33cd79d5f8d",
".git/logs/refs/remotes/origin/master": "8972608363bc514f085ec855fdfe3711",
".git/logs/refs/heads/master": "2e4320587ec71d055c90e33cd79d5f8d",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "0bc6f18e96a5b8b8089697c792c5423e",
"/": "0bc6f18e96a5b8b8089697c792c5423e",
"manifest.json": "f901735377b1ea71a9c347551b589a1f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
