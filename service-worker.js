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

var precacheConfig = [["404.html","33ee9171aaf48dec90ddfb9a73821a34"],["about/index.html","3f52a2487c06eaf8cc7dc69ab861c44f"],["archives/2020/12/index.html","adefc1759355408253313d854506657c"],["archives/2020/index.html","bf7bce55a5810708240648910d8853d2"],["archives/2021/01/index.html","bc9055ee87f5cac6daf0c353ee1dd484"],["archives/2021/index.html","5302e95b3af161a4a2af7427ffee8f4d"],["archives/index.html","7e0cf10aa6f113b492b5fec2d45fb270"],["bb/index.html","d41d8cd98f00b204e9800998ecf8427e"],["books/index.html","7138e11d1b595efac19975eeda753ad9"],["categories/index.html","d1f10be3be1391983ab444578ea00994"],["categories/数据库原理及应用/index.html","6458b15da7bc2b00e393c6778e4b58ec"],["categories/线性代数/index.html","b6bbe56a21a17756dc8231641aa082a9"],["categories/计算机网络/index.html","8425c57773a641cd53be1f3e99bcb89a"],["css/index.css","cd9794ed6accbd4c7bf9ba171e66ea36"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/pwaicons/144.png","4123e815aecfeb61c65c2aecf04eaed7"],["images/pwaicons/192.png","6c7373111731582fad65d14acc8c22d3"],["images/pwaicons/36.png","1ebdf2531fff92dc1388dc4346faf9c8"],["images/pwaicons/48.png","dd187b29ef238d9a4f8773d170b40bcd"],["images/pwaicons/512.png","d2c8f79911a34e5294da9fd5ae14770d"],["images/pwaicons/72.png","d3f419c62f0e826d62ea61a9b8314cd6"],["images/pwaicons/96.png","359daed056156983a96ebd7ee3be1599"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/d_post.jpg","2380a265cb9fc5fd9290401b90887dc3"],["img/dog.gif","2b4fbef81c225fb988af07d291418501"],["img/dog的副本.gif","2b4fbef81c225fb988af07d291418501"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/girl.jpg","58719747b6576b08c76779299171e8eb"],["img/girl2.jpg","9dc6b1a1b64750e65f6ce94d6d8bb5e0"],["img/girl3.jpg","125b7b3d0453bcf9c92acd35be0a5172"],["img/girlback.jpg","f62c70c4a54ef1b6377131c9c1a773aa"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/top.jpg","c6d9dab63a6c6d1426c17f0faa32da5c"],["index.html","ce376eeb6daa82a659c34654e6aafc03"],["js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","dd78ebb484821043481301d078e7dc20"],["page/2/index.html","d27b2f1641a84dbb552d6bb9e9e22250"],["playlist/index.html","7db34550088d45b79dcca04be29571d2"],["posts/29673d4d/index.html","548e14a1146c223f83cfb915c532b48f"],["posts/2d4e58b9/index.html","4cb95e74685479b506141f8ca6c47cea"],["posts/35e2da0b/index.html","906d03910e2bee36b4abbd073c89c0db"],["posts/4a17b156/index.html","7b0de4815384b33aed5fee53f2edba64"],["posts/4efd1fa7/index.html","e5f93415a7e97a0f20a92d7091cc007c"],["posts/87cd1f77/index.html","fad8f6f309dd39f71092f62a2fd04901"],["posts/91db5a28/index.html","c0080e94bacc132f45f512b6c09d4e80"],["posts/95a84140/index.html","a8a698ad4611336ba3a060681aea58d3"],["posts/9648dc07/index.html","1b368edc24e8029bb09aae1bceee6713"],["posts/997666ff/index.html","e0826fb54a5cd94d7cdf6f5076a03a3c"],["posts/9c3a6023/index.html","cbeab45d3e0f6136db22423d5df1f71e"],["posts/a605aa1a/index.html","ea36e66cf3209642406e96eabd6de1a5"],["posts/b4b005f4/index.html","64e9724e1f6f96c04daf1fa2a20b10bb"],["posts/b60ddbe5/index.html","e1effb13b18d1b1b3d83bff07be4accb"],["posts/bef5de24/index.html","99a259dc64d7ff6c33d0f3aa71811949"],["posts/c0c6291/index.html","9c950fda349f43ff5f286b8096f01b5d"],["posts/ce382230/index.html","71cf8d17ebd5ef8f7067fc645e3ff8b2"],["posts/d0584767/index.html","843854f5c51a6062217780ffe18b33c5"],["posts/d4c1f1bf/index.html","1a3ab5c73d6ffc35d14394bca1239691"],["shuoshuo/index.html","06ba7c65826f882ce22361cf175d87b3"],["tags/index.html","cdfa31848a7327295fa69d962243c46c"],["tags/notes/index.html","04a0cd8bfd10ec6d497b08ac11ec1ea1"],["tags/notes/page/2/index.html","f990d293ed2b8808fa5738ee8b6e61b7"],["tags/share/index.html","57eaa3576a2ba45e2a0517bb5d15c6e4"],["tags/share/page/2/index.html","7e98d3889549fe228cab5c80c84a2c1a"]];
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







