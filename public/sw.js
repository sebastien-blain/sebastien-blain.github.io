if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CV_Sebastien_Blain-Nadeau_en_fr_2021.pdf",revision:"b67e2e3beeead79b3d49a652f7a45153"},{url:"/_next//static/media/2048.d79f214c.png",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next//static/media/accedian.689e9c82.png",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next//static/media/conova.0de8d26e.png",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next//static/media/erp.3a2502f8.png",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next//static/media/genetec.4b6ff388.png",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next//static/media/leadership.6496d81c.png",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next//static/media/mypanda.da5715a1.png",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next//static/media/simulator.2fec664d.png",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next//static/media/vault.52c80187.jpg",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/chunks/557-d6d45815457a17d7.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/chunks/framework-6e4ba497ae0c8a3f.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/chunks/main-3a656f8a5c66426a.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/chunks/pages/_app-70e983804a7cfe79.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/chunks/pages/index-39e1e02510ccec56.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/chunks/webpack-49b6f2937c9ce9f4.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/css/4e950dc12e966879.css",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/oVA-yf0gkb4bvB2I2z8pP/_buildManifest.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/oVA-yf0gkb4bvB2I2z8pP/_middlewareManifest.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/_next/static/oVA-yf0gkb4bvB2I2z8pP/_ssgManifest.js",revision:"oVA-yf0gkb4bvB2I2z8pP"},{url:"/icon-192x192.png",revision:"37a4aac3ae50349d5daed04a5236b9ea"},{url:"/icon-256x256.png",revision:"b7d468a1ea9dc7cb0642b09867c40179"},{url:"/icon-384x384.png",revision:"1c2cc0a76fafde19e75978b75a066323"},{url:"/icon-512x512.png",revision:"81e002e1f09397c78b2a44706550fe53"},{url:"/manifest.json",revision:"5108b894c21cea4fedbdf4f1fca094cf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
