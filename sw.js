if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const r=e=>s(e,t),o={module:{uri:t},exports:c,require:r};i[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CV_Sebastien_Blain-Nadeau_en_fr_2021.pdf",revision:"b67e2e3beeead79b3d49a652f7a45153"},{url:"/_next//static/media/2048.d79f214c.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/accedian.689e9c82.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/conova.0de8d26e.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/erp.3a2502f8.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/genetec.4b6ff388.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/leadership.6496d81c.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/mypanda.da5715a1.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/qr.b6c43931.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/simulator.2fec664d.png",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next//static/media/vault.52c80187.jpg",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/OD2idkCcpwIQLlXbMCWiR/_buildManifest.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/OD2idkCcpwIQLlXbMCWiR/_middlewareManifest.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/OD2idkCcpwIQLlXbMCWiR/_ssgManifest.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/chunks/557-d6d45815457a17d7.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/chunks/framework-6e4ba497ae0c8a3f.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/chunks/main-3a656f8a5c66426a.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/chunks/pages/_app-70e983804a7cfe79.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/chunks/pages/index-79260d3fcd5501e9.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/chunks/webpack-49b6f2937c9ce9f4.js",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/_next/static/css/4e950dc12e966879.css",revision:"OD2idkCcpwIQLlXbMCWiR"},{url:"/icon-192x192.png",revision:"37a4aac3ae50349d5daed04a5236b9ea"},{url:"/icon-256x256.png",revision:"b7d468a1ea9dc7cb0642b09867c40179"},{url:"/icon-384x384.png",revision:"1c2cc0a76fafde19e75978b75a066323"},{url:"/icon-512x512.png",revision:"81e002e1f09397c78b2a44706550fe53"},{url:"/manifest.json",revision:"bf4b86fa272d11f342aa082ea3a6d1cb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:n})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
