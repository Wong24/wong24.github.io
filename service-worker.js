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

var precacheConfig = [["E:/Program Files (x86)/blog/public/2019/09/29/hello-world/index.html","bb09974c80bda8a1e0d7ac3a6fa71179"],["E:/Program Files (x86)/blog/public/2019/09/30/matchweek6/index.html","152158f5c35d3300ab6f8619d97b8238"],["E:/Program Files (x86)/blog/public/about/index.html","e235f9f80c79daaa00c6a7575f147740"],["E:/Program Files (x86)/blog/public/archives/2019/09/index.html","17c43f8b763b349b08d2302a73081351"],["E:/Program Files (x86)/blog/public/archives/2019/index.html","39be2e54f741b31a0a227db2bbcf9eda"],["E:/Program Files (x86)/blog/public/archives/index.html","bc08bdd41f7465c1b2615a61526aa487"],["E:/Program Files (x86)/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/Program Files (x86)/blog/public/books/index.html","88d7cae23d24342a5401ec4a4bbc8e1a"],["E:/Program Files (x86)/blog/public/categories/This-week/index.html","ab331ec47cab4842f8c132eddd1e4ed6"],["E:/Program Files (x86)/blog/public/categories/index.html","d3d7bd93a8e26f27e58d6a825298daf7"],["E:/Program Files (x86)/blog/public/css/main.css","8884b1dfa823a7cb8ed5a63e39ee3b4a"],["E:/Program Files (x86)/blog/public/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/Program Files (x86)/blog/public/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["E:/Program Files (x86)/blog/public/images/avatar.jpg","2fd7b09493cb2dc048725bca941f6991"],["E:/Program Files (x86)/blog/public/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["E:/Program Files (x86)/blog/public/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["E:/Program Files (x86)/blog/public/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["E:/Program Files (x86)/blog/public/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["E:/Program Files (x86)/blog/public/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["E:/Program Files (x86)/blog/public/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["E:/Program Files (x86)/blog/public/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["E:/Program Files (x86)/blog/public/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["E:/Program Files (x86)/blog/public/images/favicon-16x16.png","6ff0562c3c2c27b30623b5c0f35b0fce"],["E:/Program Files (x86)/blog/public/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["E:/Program Files (x86)/blog/public/images/favicon-32x32.png","5ddd4ff22722af548da79316619a48f7"],["E:/Program Files (x86)/blog/public/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["E:/Program Files (x86)/blog/public/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["E:/Program Files (x86)/blog/public/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["E:/Program Files (x86)/blog/public/index.html","623205bcb92e5fa89763dce27a79daec"],["E:/Program Files (x86)/blog/public/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["E:/Program Files (x86)/blog/public/js/bookmark.js","d39d58a179b2487d2bdef17ca191236e"],["E:/Program Files (x86)/blog/public/js/local-search.js","ecbb76731658b6d2b6de62521b2489fb"],["E:/Program Files (x86)/blog/public/js/motion.js","c9f6f59d8024d6b39a9dfda6e8c5d34e"],["E:/Program Files (x86)/blog/public/js/next-boot.js","e96bcaa1866f1b6b5cf4840335c66f1a"],["E:/Program Files (x86)/blog/public/js/schemes/muse.js","524ae3f81c710d85f8ab1d4796ec7aab"],["E:/Program Files (x86)/blog/public/js/schemes/pisces.js","f3e1d55fcae2492aacec90c3f405f185"],["E:/Program Files (x86)/blog/public/js/src/clicklove.js","bb2bfc5efc23cf2a97feffe1b0fb588a"],["E:/Program Files (x86)/blog/public/js/src/instantclick.js","308e45a942d3478d936bbafd181b8447"],["E:/Program Files (x86)/blog/public/js/utils.js","93cc3e8599c3cbcc2c26fe82538d7587"],["E:/Program Files (x86)/blog/public/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["E:/Program Files (x86)/blog/public/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["E:/Program Files (x86)/blog/public/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["E:/Program Files (x86)/blog/public/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["E:/Program Files (x86)/blog/public/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["E:/Program Files (x86)/blog/public/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["E:/Program Files (x86)/blog/public/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["E:/Program Files (x86)/blog/public/movies/index.html","0c2454d0274e57d2403c95c8b0cba981"],["E:/Program Files (x86)/blog/public/sw-register.js","203ce17e7204f5ba71d6aeb135bcab5d"],["E:/Program Files (x86)/blog/public/sw.js","992c806afe70e2235b70950f9015d3c2"],["E:/Program Files (x86)/blog/public/tags/This-week/index.html","99656d6939cee53336dc12a72b00d111"],["E:/Program Files (x86)/blog/public/tags/index.html","a42f5de3540920a1a7a43f6328135b95"]];
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







