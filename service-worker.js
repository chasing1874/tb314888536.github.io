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

var precacheConfig = [["404.html","1a7ab0ec99ec514da3855e9bceb931d6"],["about/index.html","39356e341b56559ea59071d0309ddda7"],["archives/2020/12/index.html","5c93d225b81adcd51ae045bdb2e7b15d"],["archives/2020/index.html","1f848b7d75b1683349b29787a9d2668b"],["archives/2021/01/index.html","5b50b496ba8be7da0e8be2818f094a43"],["archives/2021/02/index.html","449696a80fdbe11673acd010cfe010e1"],["archives/2021/03/index.html","fd7ef3b17125b862fc42f386f05946bf"],["archives/2021/04/index.html","1c2912931df5acafa27e1d174dcdcdcc"],["archives/2021/index.html","93a7063744f4f6dc219619b8302c6259"],["archives/2021/page/2/index.html","636f0f5b5b6fd468445e0135289cbf65"],["archives/index.html","bb0655c862dfd53d3b4737d669ffc34e"],["archives/page/2/index.html","03c261959e32e3d1f0486332f4639fb7"],["bb/index.html","d41d8cd98f00b204e9800998ecf8427e"],["books/index.html","8cbf38fc84068db780f0013ded6e56a1"],["categories/Algorithm/index.html","5790e3871b902cb430f49aa48b713a63"],["categories/JAVA/index.html","1e8b9edd9d4f8010c22b2f8f660c1932"],["categories/MySQL/index.html","d2d5d6d915d95c3db112e06becfaf980"],["categories/index.html","2fd51be183ea075431ebf6082a0a844d"],["categories/数据库原理及应用/index.html","03431eef4738851216bffb9e6e946fcc"],["categories/线性代数/index.html","c80cfecd0018e191e1710e4bf091dfc9"],["categories/计算机网络/index.html","efb23491a9a3b9f170e6182d60d8f486"],["css/index.css","cd9794ed6accbd4c7bf9ba171e66ea36"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["images/pwaicons/144.png","4123e815aecfeb61c65c2aecf04eaed7"],["images/pwaicons/192.png","6c7373111731582fad65d14acc8c22d3"],["images/pwaicons/36.png","1ebdf2531fff92dc1388dc4346faf9c8"],["images/pwaicons/48.png","dd187b29ef238d9a4f8773d170b40bcd"],["images/pwaicons/512.png","d2c8f79911a34e5294da9fd5ae14770d"],["images/pwaicons/72.png","d3f419c62f0e826d62ea61a9b8314cd6"],["images/pwaicons/96.png","359daed056156983a96ebd7ee3be1599"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/beian.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/d_post.jpg","2380a265cb9fc5fd9290401b90887dc3"],["img/dog.gif","2b4fbef81c225fb988af07d291418501"],["img/dog的副本.gif","2b4fbef81c225fb988af07d291418501"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/girl.jpg","58719747b6576b08c76779299171e8eb"],["img/girl2.jpg","9dc6b1a1b64750e65f6ce94d6d8bb5e0"],["img/girl3.jpg","125b7b3d0453bcf9c92acd35be0a5172"],["img/girlback.jpg","f62c70c4a54ef1b6377131c9c1a773aa"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["img/top.jpg","c6d9dab63a6c6d1426c17f0faa32da5c"],["index.html","b7e7e750c1bf49abffcc877907904e87"],["js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["js/main.js","f7efbacdf5c8e57ad57deace1198b010"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["link/index.html","cf9fc272aa15cf21f0a93e272dde983b"],["live2dw/assets/moc/Epsilon2.1.2048/texture_00.png","abee4cdeb8018032163ffdc0a16020b0"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","a88d6ef0f6bf01c2c7e3febec0885618"],["page/3/index.html","525ca26884229590c22ff3d37a1ee454"],["playlist/index.html","0b3e4d633588c28fbdbf4acae0ac071d"],["posts/16f38452/index.html","9af6ebf63da5bdd5608df73de0bd895f"],["posts/1c1e9ba/index.html","96414570f385f923ef54749c71ee790b"],["posts/29673d4d/index.html","b173ad3fa0e2fee38e397b1c70a1a9d8"],["posts/2b247dfd/index.html","0dab6052ff4429b56432d3b042e97048"],["posts/2d4e58b9/index.html","ce38a85079535501440f2233c0bcf56a"],["posts/35e2da0b/index.html","4ba13aba36cce57b98d2ee03ad4b7619"],["posts/43a7a3f5/index.html","96c6626c799631b394486a4b3dc59429"],["posts/4a17b156/index.html","faac097930d300c6b381db365f834a87"],["posts/4b0d9081/index.html","a832feca5c51fe562a8f06e860236e18"],["posts/4efd1fa7/index.html","62230b621a67b9feb504ab45b56f153c"],["posts/514df455/index.html","731cafa776136da8c64b4ec1ab33bec9"],["posts/87cd1f77/index.html","43adc7fef86f2f72f5611724308f4f82"],["posts/91db5a28/index.html","6aa451765a68d60d648839c42309df6a"],["posts/942c10a8/index.html","106c35fde4d43963d3448dd35f9445f0"],["posts/95a84140/index.html","d12ba4cb3c9bfd74999189fb43696876"],["posts/9648dc07/index.html","de22daf0c479051eea147340707bc1ea"],["posts/997666ff/index.html","0b7c2cf67d9e5563c4c477327f764afd"],["posts/9c3a6023/index.html","7e77eb1c5fb9ce36513f2515bb515497"],["posts/a605aa1a/index.html","bb57a86906224f85f86b34c0b388a955"],["posts/b4b005f4/index.html","65e64b417278209b7c96ea70b1bc91aa"],["posts/b60ddbe5/index.html","83f20110b15d770ee29f3dc5d7f8b729"],["posts/bef5de24/index.html","32f09f917d7dea68112489f83bdbed55"],["posts/c0c6291/index.html","dea72efb8486480cca8072688526d8ee"],["posts/ce382230/index.html","aedd45197b9976926d437ba0fa4a7334"],["posts/d0584767/index.html","c0ae81788d450876ce3d4933cd9fbbb2"],["posts/d4c1f1bf/index.html","64f5b2ccd262515ecc5bbd1f293d3e6a"],["posts/ee13b5e7/index.html","45509fd29b934b77f3994a203536ae84"],["shuoshuo/index.html","b8f4af643db82ef6bd4ae351d37905dd"],["tags/index.html","8e54c5256d3ff1c79ed0eef285692d23"],["tags/notes/index.html","4c84faf142c1fc5d766a2265436850a0"],["tags/notes/page/2/index.html","485e9e3898c6c505fd8b7b7b5f5f74ce"],["tags/notes/page/3/index.html","d00ba209a5c35ce89660c266355a0c48"],["tags/share/index.html","558e62677710c2e64a366279b034a2c8"],["tags/share/page/2/index.html","0e671880841dae6ce6bd0733f5b625cc"],["tags/share/page/3/index.html","ff659808c22e9feaa64691e74b3c191e"]];
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







