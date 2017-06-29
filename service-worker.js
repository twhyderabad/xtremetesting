"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","b0f1f9f236d963a7df9ceaccafe7f0bf"],["static/css/main.4228cecd.css","9b38738326f4bbdd0c3907818ea84993"],["static/js/main.61ca6ef9.js","c22b82bac130daa586f34f98595fd483"],["static/media/abhilash.450668b7.jpg","450668b7c665bcb6f669b5546d2845a4"],["static/media/banner.6c3bfce5.png","6c3bfce522f397ffda3167162fa1e06f"],["static/media/clipboard-with-pencil-.4f754f20.svg","4f754f2050612d2b593e5fd658f6a3eb"],["static/media/cup-of-hot-chocolate.839f77b3.svg","839f77b3f0a9e34282e6c11830c3c276"],["static/media/location.f52838ef.svg","f52838ef2f5b669cd6a00653570bfac0"],["static/media/logo-xt.1f57a6db.png","1f57a6dbed41477bc51411a095ca1e08"],["static/media/nalini.e73e170a.jpg","e73e170a7a116bd197884a9c013a141d"],["static/media/noun_1000573_cc.9e832f3f.svg","9e832f3f7770ca4883b1c4dfc79865b0"],["static/media/ram.ac6fdd08.jpg","ac6fdd08b78450585bbda78ce6f52eb2"],["static/media/shiv.af53d738.jpg","af53d73876afb9e9ff68bd773d841672"],["static/media/spoon-and-fork-crossed.16b572fd.svg","16b572fd46f48ded5767450fe9cf77be"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(n);t||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/xtremetesting/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});