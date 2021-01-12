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

var precacheConfig = [["404.html","63ac4bd7f95563775b08aabe4a1d75bc"],["about/index.html","00f171d34974f917653f39747a8b71e2"],["archives/2020/12/index.html","00bb500eb35b6b6a1ec14a384be2d539"],["archives/2020/index.html","33e7d18fd877fc5cac4de72c3c015dd5"],["archives/2021/01/index.html","f3a573399d4fb3f820f74194a49f8657"],["archives/2021/index.html","084e6e2ae803ce435a9c1c9e80dbdfa9"],["archives/index.html","d9c46c71cfee8f3d028455714693b553"],["bb/index.html","8cd7d6962f29f43aa88be545d61424f2"],["books/index.html","ec62d4dafc830c830280e8c0ddd1a0c7"],["categories/index.html","5a8e18c967b7b138992eb3daef6b59f8"],["categories/数据库原理及应用/index.html","5eef812c22997b713dd861a7d343f8c7"],["categories/线性代数/index.html","127aa0758d8e14bd9287573ade30050d"],["categories/计算机网络/index.html","e9c1026457508ad7941887778aa6d1b2"],["css/index.css","cd9794ed6accbd4c7bf9ba171e66ea36"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/pwaicons/144.png","4123e815aecfeb61c65c2aecf04eaed7"],["images/pwaicons/192.png","6c7373111731582fad65d14acc8c22d3"],["images/pwaicons/36.png","1ebdf2531fff92dc1388dc4346faf9c8"],["images/pwaicons/48.png","dd187b29ef238d9a4f8773d170b40bcd"],["images/pwaicons/512.png","d2c8f79911a34e5294da9fd5ae14770d"],["images/pwaicons/72.png","d3f419c62f0e826d62ea61a9b8314cd6"],["images/pwaicons/96.png","359daed056156983a96ebd7ee3be1599"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/d_post.jpg","2380a265cb9fc5fd9290401b90887dc3"],["img/dog.gif","2b4fbef81c225fb988af07d291418501"],["img/dog的副本.gif","2b4fbef81c225fb988af07d291418501"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/girl.jpg","58719747b6576b08c76779299171e8eb"],["img/girl2.jpg","9dc6b1a1b64750e65f6ce94d6d8bb5e0"],["img/girl3.jpg","125b7b3d0453bcf9c92acd35be0a5172"],["img/girlback.jpg","f62c70c4a54ef1b6377131c9c1a773aa"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/top.jpg","c6d9dab63a6c6d1426c17f0faa32da5c"],["index.html","b9da1bb343094d2779655c821a8713f8"],["js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","5a35837d81bd6d162165c533bcf5b6cc"],["page/2/index.html","737d90fa52afffaeafd0ad6eab6d09c4"],["playlist/index.html","6b17fd82c8bb2a05c07cdc880fb7bf6a"],["posts/2d4e58b9/index.html","13989750d8f3fe917900d5f8ee2cfc33"],["posts/35e2da0b/index.html","f542b3b034e59152199b285019120e35"],["posts/4a17b156/index.html","7e7b59775a1de337b16d00446467bb95"],["posts/4efd1fa7/index.html","b1c8dcead6599d563acd2100283ffdac"],["posts/87cd1f77/index.html","da50b5f3b131113948bbb8e917e4e5d1"],["posts/91db5a28/index.html","965994b65ff487cdf085e3343347aa09"],["posts/95a84140/index.html","bb80f83d23f39d3d79f2ff11c089c2f0"],["posts/9648dc07/index.html","93fbe0c6f9851dfb3b51aa13ee750afa"],["posts/997666ff/index.html","17a3a4c9582a42d7b1e0fadcd07a85f8"],["posts/9c3a6023/index.html","fddb42200e6a5a7f5cde64dd1a08ff51"],["posts/a605aa1a/index.html","8a5a145fa2c3184df5331de6f84c24ad"],["posts/b4b005f4/index.html","fa86e8d7b941c383a45fcd8a80c5c730"],["posts/b60ddbe5/index.html","0a3c5c9a2d3d3d314876310613366f04"],["posts/bef5de24/index.html","c7275efeb781be525802de62e0885244"],["posts/c0c6291/index.html","77ce907233fd443173184caea030cebc"],["posts/ce382230/index.html","0dd17fbb70f025337ca4c4dea286d484"],["posts/d0584767/index.html","5df36f58ab28d7aa155a2d20e8fbd2c4"],["posts/d4c1f1bf/index.html","a43c06eaec85ef6712d4b1e5ba9fd6f3"],["shuoshuo/index.html","8e43f190207fcbaea7f792d94ffea324"],["tags/index.html","897a319a180850d60188dce4145e5889"],["tags/notes/index.html","d52389e243a141a52a19e2de68526db8"],["tags/notes/page/2/index.html","0092fc3e38a3073ce8bd3a39194de121"],["tags/share/index.html","69aecc4ab682f1896643ca558b29bbb9"],["tags/share/page/2/index.html","25b56020bf98d68ed4514a035c626a35"]];
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







