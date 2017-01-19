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

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","515eed48746c19b6585f40c0735dc2a0"],["/bower_components/app-layout/app-drawer/app-drawer.html","21c121a8a66b58dbad9c4588b6b52fe3"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","6b69b4295c2aa7ea1145c81444f60e38"],["/bower_components/app-layout/app-header/app-header.html","d5b64180dc14def962860376cd40b63f"],["/bower_components/app-layout/app-layout-behavior/app-layout-behavior.html","3626af95d9630a44549b425d08be6062"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","417244d6a3ce8a61adf75333f3c61601"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","fad90269cea2f83e1f4df1950bb2b053"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","53b76bbbe9355ae85a1f8ca7b0e451db"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","6cbd757de769cd5af213aaebb8780745"],["/bower_components/app-layout/app-scroll-position/app-scroll-position.html","891305cb3d5a64aed3e8f5094cb7f074"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","e200af19eae361cbfbdeea6dd7afe9cc"],["/bower_components/app-layout/helpers/helpers.html","622fdf24cb1be262a74da1da959c9085"],["/bower_components/app-route/app-location.html","812c2961002e76d8ce7e1fe4ba404946"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","c4962d6ce8a0f98b6a4b438c031f7785"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","c4c3d44402c9d456c38c14da04d206b9"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","f447b9f3ace32edea2bb709cb00d5231"],["/bower_components/iron-flex-layout/iron-flex-layout.html","7fbf7e81b6d27795b3d224da3fd5e768"],["/bower_components/iron-icon/iron-icon.html","8cdddde858fd65de781612bd2b1714cd"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","98daee17e1a5111dada5e78b71555179"],["/bower_components/iron-location/iron-location.html","f9cc517a1e3fad60207f91d1cf30b282"],["/bower_components/iron-location/iron-query-params.html","0fa51c76df2f675b425ddb8024d6908c"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-meta/iron-meta.html","b0dd584cc0fb40593f54a303cf6cea51"],["/bower_components/iron-pages/iron-pages.html","e393b5e86ade024dbee7404f20551771"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","80b965510d729f475edfbc0e5444a748"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","b880f68d8e3bb2dd15b80ecae41101d9"],["/bower_components/iron-selector/iron-multi-selectable.html","9bcfb042e542dbc1a7d4d2a2fec2c315"],["/bower_components/iron-selector/iron-selectable.html","3b1e76ffe8758f66ae9b7add9883aa9f"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","285991a9e3841cc2ead15f1ee3801026"],["/bower_components/paper-fab/paper-fab.html","848907cfe22a4cf9a1c93d76885fa35c"],["/bower_components/paper-icon-button/paper-icon-button.html","3f53290e541527db8a2f9bf02573bd17"],["/bower_components/paper-material/paper-material-shared-styles.html","0e2c1df27170acb5abfb77fb42d37281"],["/bower_components/paper-ripple/paper-ripple.html","4c4072cf418a784b05e47c4bbb5ce1f9"],["/bower_components/paper-styles/color.html","86b6943827714e18805d25f073218049"],["/bower_components/paper-styles/default-theme.html","9e4a8e30560a1047894ac1f06bb14ecf"],["/bower_components/paper-styles/shadow.html","ae81af02ba0c7411327cff3ee8d521ed"],["/bower_components/polymer/polymer-element.html","f2953dcb11fd8152bde176687c383de0"],["/bower_components/polymer/polymer-legacy.html","f3ef15ebc604259d837447847e0397f1"],["/bower_components/polymer/polymer.html","d3ffed13bd885f73c8479651c0d3f1f7"],["/bower_components/polymer/src/attributes/attributes.html","c9db4dd6d647215a925447c73a5a3e37"],["/bower_components/polymer/src/elements/element.html","ebddca5b24047f3d8d2718d5545091ca"],["/bower_components/polymer/src/elements/legacy-element.html","e32892d4520fafbce292837dff2c504d"],["/bower_components/polymer/src/events/event-listeners.html","3f6d2d01fa9fdaa0a2f9170aa22e1343"],["/bower_components/polymer/src/events/gesture-event-listeners.html","a8dfc6f3fc42003081bd1ad09c11bff4"],["/bower_components/polymer/src/legacy/class.html","110af9ab973a965f547575bc96fd44f9"],["/bower_components/polymer/src/legacy/dom-module.html","4617d6d690d3d68dd0258531159d7cd0"],["/bower_components/polymer/src/legacy/logging.html","87ddd38befed1176470cd50e1fd0d1a1"],["/bower_components/polymer/src/legacy/polymer-fn.html","8a02028074bd868594f01df2fb9ab1a0"],["/bower_components/polymer/src/properties/property-accessors.html","5a6ea1ba3d012a2a341afb42ed1816e4"],["/bower_components/polymer/src/properties/property-effects.html","d432b393c5444ba6d0d7caf9e4b478fa"],["/bower_components/polymer/src/styling/custom-style.html","ddb9ca0ea78ddedffcf022bd6b7a8e47"],["/bower_components/polymer/src/styling/style-gather.html","2e5fc86057858d770f75f5cf9642ba3e"],["/bower_components/polymer/src/styling/style-util.html","a6893af7742c5b1364aeee93b6f6a4db"],["/bower_components/polymer/src/template/annotations.html","c905b673c31fd0a5ec539ce199ebdf72"],["/bower_components/polymer/src/template/resolve-url.html","efe9a3fc5e8168a168dccd660d23e7b0"],["/bower_components/polymer/src/template/template-stamp.html","56bff46ae19f9c0ec1b2f91d2ad6ab61"],["/bower_components/polymer/src/templatizer/array-selector.html","1602418d6fa065294979797fea1a7ebd"],["/bower_components/polymer/src/templatizer/dom-bind.html","7ea1a8bb1e23d099eab68f8e1c96084a"],["/bower_components/polymer/src/templatizer/dom-if.html","7593c7832f1638e3998843ccfb644026"],["/bower_components/polymer/src/templatizer/dom-repeat.html","d96a1c577a6b77e6b4a5999507b0675e"],["/bower_components/polymer/src/templatizer/templatizer.html","1b1a0b854f270ef7793a190f5bdf7168"],["/bower_components/polymer/src/utils/array-splice.html","f41c84e515583941bf745bbf7235ca29"],["/bower_components/polymer/src/utils/async-render.html","6597c934e65d8c01006c9c40446a3876"],["/bower_components/polymer/src/utils/async.html","b362b265facb1573e25e5e7ac1df012d"],["/bower_components/polymer/src/utils/boot.html","6ab0e9895dd31e438f35df21f5587dce"],["/bower_components/polymer/src/utils/case-map.html","9ac02d6a9f04300fe9a381b90fa68166"],["/bower_components/polymer/src/utils/debounce.html","9937c8e0f14c25c7ed23497857dd3067"],["/bower_components/polymer/src/utils/path.html","1cad678d3a93ff70a52cc87a99684e83"],["/bower_components/polymer/src/utils/polymer.dom.html","962a9de5d8aac781f285706fef9af1c1"],["/bower_components/polymer/src/utils/unresolved.html","5a9a23402f51109d24bcbe07d988a0d3"],["/bower_components/polymer/src/utils/utils.html","2aa21be43dc5eafdb5f473b536394bfc"],["/index.html","d5fa69e4446d19411b35bd4608f6d346"],["/src/app-icons.html","f30715a5153f71b2527a0d8916585ef5"],["/src/article-detail.html","10dcf38b57abff5d5752422dbb39667a"],["/src/article-headline.html","350e0587ea34be53fe0362d4193f403d"],["/src/lazy-resources.html","84108f360cb28a92ceb2cf7e2fd0f35a"],["/src/phanui-404-warning.html","3934de24647961c07654dc59a39f39bf"],["/src/phanui-app.html","2f2b01b06ebe6323d7aac12190825b13"],["/src/phanui-snackbar.html","06f7aed98bdd8b83502903cfcb0996eb"],["/src/two-columns-grid.html","6e6395d97ee86c90f5f776091e3bbd9e"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

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


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




