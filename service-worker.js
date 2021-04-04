/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","72d43d790b00a29510e4ca226fbf1c36"],["about/index.html","0360c99fbefe616ff0298532a6707a11"],["archives/2020/12/index.html","3bebe58060fa7716d7a86e211943bde3"],["archives/2020/index.html","aab84eb25ceec31f09e3c054155759bc"],["archives/2021/01/index.html","51a97472b50242c93a0771a68d18dde1"],["archives/2021/02/index.html","40a9eb965d7bba4cda4aacb098a1beae"],["archives/2021/03/index.html","23b5febde1546e5915a682fb66497dc0"],["archives/2021/04/index.html","94be64af4ab9a4faae6cc06ced2abfa7"],["archives/2021/index.html","33cb98e84a112ea3676ad85b8d48c03f"],["archives/2021/page/2/index.html","8e352b7872820e8c8f174b4d57d4c270"],["archives/index.html","f038bc7654e0367ca38c4919ef361166"],["archives/page/2/index.html","b86962db141c0247bbcd957dfb72b6fb"],["bb/index.html","d41d8cd98f00b204e9800998ecf8427e"],["books/index.html","fcb7bcc18fb403434020e5d3fa13d68e"],["categories/Algorithm/index.html","e05edea6af4def64cb2043946e9d20f3"],["categories/JAVA/index.html","74bd623de9d00c3d4c70aa38c07405dd"],["categories/MySQL/index.html","b82927eeabfcd7c27d05fd64c7e48b03"],["categories/index.html","40268b034eaa9a27b04f8e067f246c97"],["categories/数据库原理及应用/index.html","0f1891331bed7be044a09ff8e7c7ea22"],["categories/线性代数/index.html","18950ce3e8e75dd11ebef87c81959779"],["categories/计算机网络/index.html","305768c16204d204edd540a6dd4f7553"],["css/index.css","cd9794ed6accbd4c7bf9ba171e66ea36"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/pwaicons/144.png","4123e815aecfeb61c65c2aecf04eaed7"],["images/pwaicons/192.png","6c7373111731582fad65d14acc8c22d3"],["images/pwaicons/36.png","1ebdf2531fff92dc1388dc4346faf9c8"],["images/pwaicons/48.png","dd187b29ef238d9a4f8773d170b40bcd"],["images/pwaicons/512.png","d2c8f79911a34e5294da9fd5ae14770d"],["images/pwaicons/72.png","d3f419c62f0e826d62ea61a9b8314cd6"],["images/pwaicons/96.png","359daed056156983a96ebd7ee3be1599"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/d_post.jpg","2380a265cb9fc5fd9290401b90887dc3"],["img/dog.gif","2b4fbef81c225fb988af07d291418501"],["img/dog的副本.gif","2b4fbef81c225fb988af07d291418501"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/girl.jpg","58719747b6576b08c76779299171e8eb"],["img/girl2.jpg","9dc6b1a1b64750e65f6ce94d6d8bb5e0"],["img/girl3.jpg","125b7b3d0453bcf9c92acd35be0a5172"],["img/girlback.jpg","f62c70c4a54ef1b6377131c9c1a773aa"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/top.jpg","c6d9dab63a6c6d1426c17f0faa32da5c"],["index.html","c8a847c1c5b0bae041427dea683222fb"],["js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","568225b86481a3d5d2123223d2bb5a34"],["live2dw/assets/moc/Epsilon2.1.2048/texture_00.png","abee4cdeb8018032163ffdc0a16020b0"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","d4cd7d8414c5fc86d667f1ed8d752b01"],["page/3/index.html","0d8437917b3a79a7c83586c08b1f8d55"],["playlist/index.html","69039cf3863c3fd641811c88e360653c"],["posts/16f38452/index.html","80db6e307536c9b5d1353932d0e1e892"],["posts/1c1e9ba/index.html","f6749ab96d25c5535dbc66959c0c4768"],["posts/29673d4d/index.html","2468e3a3661ee969ce9ac39bd32fa262"],["posts/2b247dfd/index.html","c2deaf2958d12af7e68429263b8bbbbf"],["posts/2d4e58b9/index.html","8d15a82a4f47a044b81d372b60f1c010"],["posts/35e2da0b/index.html","970339581d72218673f548dbcb62f283"],["posts/43a7a3f5/index.html","4d5b49704be4d7ecf6155229e8bc915d"],["posts/4a17b156/index.html","9db40e90b886ebd7f1a921045e4ed6db"],["posts/4b0d9081/index.html","24a6f42403f33c285301165e2aee40f9"],["posts/4efd1fa7/index.html","28929c843ac2b1fb8baec835f2283359"],["posts/514df455/index.html","25c301d114e33519af4c0b8b28e455a0"],["posts/87cd1f77/index.html","b5f0f9977168c8f060893b413401ec6e"],["posts/91db5a28/index.html","87e01f481968c36321260459d71f3af1"],["posts/942c10a8/index.html","563b64ec12e092cea8195056d23e16d3"],["posts/95a84140/index.html","dab8da19105c8ebaac262cb6e901bcf4"],["posts/9648dc07/index.html","5acecb6e2899f061dfa0870f2e04fb8c"],["posts/997666ff/index.html","13e3ddfea00f6e77463dda5032d5542e"],["posts/9c3a6023/index.html","765a483bea375bfeca2443c93ccd5e3e"],["posts/a605aa1a/index.html","9c17233d31845db62c7911d927ebc1c9"],["posts/b4b005f4/index.html","ff535fb21bab909e848990d42b72bd94"],["posts/b60ddbe5/index.html","a470089b3eac09e8a823d03ed05ab3a2"],["posts/bef5de24/index.html","f67d71ea3220514a7568499ff8be8e06"],["posts/c0c6291/index.html","e8b3c6304e3fb3dc0312559e925c8576"],["posts/ce382230/index.html","e519aef54f40eb5579f847b7e20bdf4f"],["posts/d0584767/index.html","d48c8efb10bc0e7398c6687fd73fa4b4"],["posts/d4c1f1bf/index.html","305ec8b904e94892263839ba3c1746ba"],["posts/ee13b5e7/index.html","1a877fd011563ff2c05cfba47f7c381c"],["shuoshuo/index.html","a4aa3de7e5767ab9349bd141ae8547ee"],["tags/index.html","604a9130ebc723c79ce4b914b2eea9dd"],["tags/notes/index.html","98bd921dd9a21bb659360c5801c3bf51"],["tags/notes/page/2/index.html","15b2a1f39a12e357d15df62cbfb2dd8b"],["tags/notes/page/3/index.html","13a6357e8ca109e87605bba3ea7d02fb"],["tags/share/index.html","7182ce037684bc487fe656e165f39d48"],["tags/share/page/2/index.html","2c1fd5f01a3ff76d8f86db39496d4173"],["tags/share/page/3/index.html","8362f7730fd069daa4867b6d174c21fd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







