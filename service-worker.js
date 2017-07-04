"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","624dafa851a4c595b9515c83cee0ec48"],["static/css/main.27799fe7.css","29b57505c02632cc0b833ebfaacf9506"],["static/js/main.f5700878.js","02a30f528e10ba27e07c3ee389569bcd"],["static/media/1.7bc991f7.png","7bc991f78e0d10e6f50ad95e113915b3"],["static/media/3-thumb.cc41dfd3.png","cc41dfd30ef326a02708be53b369bfac"],["static/media/3.e9686df5.png","e9686df535a7f11577aa6d545a93f122"],["static/media/4.484dbf27.png","484dbf277fd147a83b0bf882880dbe37"],["static/media/5-thumb.92f0406d.png","92f0406d1b5a0d5fb43147b17799efdb"],["static/media/5.07933925.png","07933925e249ce1a33aacc921d1bcda3"],["static/media/6-thumb.ed1fda9f.png","ed1fda9fa9859cd5c664d5461c28239a"],["static/media/6.5918e770.png","5918e7707eea2583f632c6d5d2b2e615"],["static/media/7-thumb.a8e2f055.png","a8e2f0559f29b68b68617cd5109f209e"],["static/media/7.d66211e5.png","d66211e5d8ec8742f3fd8245a2b5eaa1"],["static/media/8-thumb.4bfb84ef.png","4bfb84ef6bd2cd3858b24b17820b7b4f"],["static/media/8.ed153319.png","ed15331987de92d99cb650aef8c1c623"],["static/media/9-thumb.b870385e.png","b870385e2847a06aa8d10fc086e8c74e"],["static/media/9.2c4dea1a.png","2c4dea1a95a9f0d61d56cd5453ea65f4"],["static/media/banner.6c3bfce5.png","6c3bfce522f397ffda3167162fa1e06f"],["static/media/bug-black.855945ba.svg","855945ba5e4b2400b8483c3ed7475f8a"],["static/media/bug-white.0e283189.svg","0e283189f40b58fdfff9f7b9161b1d48"],["static/media/calendar.5728b77f.svg","5728b77f57b9b6f4679fa74d12eae955"],["static/media/clipboard-with-pencil-.4f754f20.svg","4f754f2050612d2b593e5fd658f6a3eb"],["static/media/close-envelope.1f33acf8.svg","1f33acf8665c04266f168bb954beafe3"],["static/media/cup-of-hot-chocolate.839f77b3.svg","839f77b3f0a9e34282e6c11830c3c276"],["static/media/link.1f369346.svg","1f3693469ea8c3f60d34b18fc09dc193"],["static/media/location.48cd543d.svg","48cd543d0b3e6ed62b9034c0cccb8f0b"],["static/media/logo-xt.1f57a6db.png","1f57a6dbed41477bc51411a095ca1e08"],["static/media/map-h.6d876c8f.jpg","6d876c8f89177cd67121bd7354b657d1"],["static/media/map.a59166eb.jpg","a59166eb0d2d6660bd753b85fb3df7aa"],["static/media/noun_1000573_cc.9e832f3f.svg","9e832f3f7770ca4883b1c4dfc79865b0"],["static/media/phone-receiver.d11f2b3c.svg","d11f2b3ccc73dca0c569ee2111903ea3"],["static/media/spoon-and-fork-crossed.16b572fd.svg","16b572fd46f48ded5767450fe9cf77be"],["static/media/time-white.d01075d2.svg","d01075d2d9bd88f567bc7f4ab079eaba"],["static/media/time.72e610b0.svg","72e610b0c6ae471f88cc046e2f66b5f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/xtremetesting/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});