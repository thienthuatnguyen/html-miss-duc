parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BOZ6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SESSION_STORAGE_KEY=exports.overlay=exports.search=void 0;const e=document.querySelector(".nav-toggle"),t=document.querySelector(".nav"),s=document.querySelectorAll(".open-accordian"),d=document.querySelector(".search input");exports.search=d;const a=document.querySelector(".overlay");exports.overlay=a;const c=document.querySelector("[data-genre]"),n="ANIME-SHOW-info";exports.SESSION_STORAGE_KEY="ANIME-SHOW-info";const r="GENRE-ID";e.addEventListener("click",()=>{"hidden"!=d.className&&(a.classList.add("hidden"),d.classList.add("hidden")),a.classList.toggle("hidden"),t.classList.toggle("hidden")}),a.addEventListener("click",e=>{a.classList.add("hidden"),t.classList.add("hidden"),d.classList.add("hidden")}),s.forEach(e=>{e.addEventListener("click",e=>{const t=e.currentTarget.querySelector(".dropdown-menu"),s=e.currentTarget.querySelector("span");t.classList.toggle("hidden"),s.classList.toggle("rotate")})}),d.addEventListener("click",e=>{"nav hidden"!=t.className&&(a.classList.add("hidden"),t.classList.add("hidden")),e.preventDefault(),d.classList.toggle("hidden"),a.classList.toggle("hidden")}),c.addEventListener("click",e=>{if(e.target.dataset.genreId){const t=e.target.dataset.genreId;localStorage.setItem("GENRE-ID",JSON.stringify(t))}});
},{}],"K8rx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getAnimeShows=exports.SESSION_STORAGE_KEY=void 0;var e=require("./nav.js");const t=document.querySelector("[data-popular-anime]"),s=document.querySelector(".search"),a="ANIME-SHOW-info";exports.SESSION_STORAGE_KEY="ANIME-SHOW-info";const n=document.querySelector(".h3"),o=e=>e.toFixed(1),i=e=>{const{image_url:s,mal_id:a,title:n,score:i}=e,r=`\n      <div class="anime-card flow-content">\n          <div class="image">  \n              <a href="#">\n                  <svg  class="heart" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n                  <path d="M16.3531 10.5C13.8063 10.5 11.7063 12.5553 11.7063 15.1468C11.7063 17.6936 13.7616 19.7936 16.3531 19.7936C18.9446 19.7936 20.9999 17.7383 20.9999 15.1468C20.9999 12.5553 18.9446 10.5 16.3531 10.5ZM18.8106 15.817H17.2467C17.1127 15.817 17.0233 15.9064 17.0233 16.0404V17.6043C17.0233 17.9617 16.7106 18.2745 16.3531 18.2745C15.9957 18.2745 15.6829 17.9617 15.6829 17.6043V16.0404C15.6829 15.9064 15.5935 15.817 15.4595 15.817H13.8957C13.5382 15.817 13.2254 15.5043 13.2254 15.1468C13.2254 14.7894 13.5382 14.4766 13.8957 14.4766H15.4595C15.5935 14.4766 15.6829 14.3872 15.6829 14.2532V12.6894C15.6829 12.3319 15.9957 12.0191 16.3531 12.0191C16.7106 12.0191 17.0233 12.3319 17.0233 12.6894V14.2532C17.0233 14.3872 17.1127 14.4766 17.2467 14.4766H18.8106C19.168 14.4766 19.4808 14.7894 19.4808 15.1468C19.4808 15.5043 19.2127 15.817 18.8106 15.817Z" fill="#FFD9D9"/>\n                  <path d="M10.4106 14.566C10.6787 11.8851 12.734 9.69575 15.3702 9.24894C16.9787 8.98085 18.4979 9.38298 19.7043 10.1872C19.7489 10.2319 19.8383 10.1872 19.8383 10.1426C20.5532 8.53404 20.9553 7.10426 20.9553 6.0766C20.9553 2.72553 18.4979 0 15.5043 0C13.5383 0 11.7064 1.20638 10.7681 3.0383C10.6787 3.17234 10.4553 3.17234 10.4106 3.0383C9.42766 1.20638 7.64043 0 5.58511 0C2.50213 0 0 2.77021 0 6.21064C0 9.74043 3.84255 16.2191 10.2766 20.9106C10.366 20.9553 10.4106 21 10.5 21C10.5894 21 10.634 21 10.7234 20.9553C11.3043 20.5979 11.8404 20.1957 12.3766 19.7489C12.4213 19.7043 12.4213 19.6149 12.3766 19.5702C10.9915 18.3638 10.2319 16.5319 10.4106 14.566Z" fill="#FFD9D9"/>\n                  </svg>\n                  <img class="poster" src="${s}" height="318" width="200" alt="${n} anime image" loading="lazy">\n              </a>\n          </div>\n          <div class="info">\n              <h3 class="title">\n                  <a class="name" href="info-page.html" data-id="${a}">${n}</a>\n              </h3>\n              <div class="rating">\n                  <p>${o(i)}</p>\n                  <svg class="star" width="21" height="21" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#ffdbdb">\n                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />\n                  </svg>\n              </div>\n          </div>\n      </div>\n      `;t.innerHTML+=r},r=async()=>{const e=await fetch("https://api.jikan.moe/v3/top/anime/1/tv");try{if(e.ok){(await e.json()).top.slice(0,25).forEach(i)}else console.log("shows error")}catch(t){console.error(t)}};exports.getAnimeShows=r,sessionStorage.getItem("ANIME-SHOW-search")||r();const c=async e=>{const s=`https://api.jikan.moe/v3/search/anime?q=${e}`,a=await fetch(s);try{if(!a.ok)return console.log("Anime search error");const s=(await a.json()).results.slice(0,20);n.innerHTML=`Explore titles related to: ${e}`,t.innerHTML="",s.forEach(i)}catch(o){console.error(o)}};if(s.addEventListener("submit",t=>{t.preventDefault();const a=e.search.value;a.length&&(c(a),s.reset(),e.search.classList.toggle("hidden"),e.overlay.classList.toggle("hidden"))}),document.body.addEventListener("click",e=>{if(e.target.classList.contains("name")){const t=e.target.dataset.id;sessionStorage.setItem("ANIME-SHOW-info",JSON.stringify(t))}}),sessionStorage.getItem("ANIME-SHOW-search")){const e=sessionStorage.getItem("ANIME-SHOW-search");c(e),sessionStorage.removeItem("ANIME-SHOW-search")}
},{"./nav.js":"BOZ6"}],"mpVp":[function(require,module,exports) {
"use strict";var r=require("./grid.js");require("./nav.js");
},{"./grid.js":"K8rx","./nav.js":"BOZ6"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.6193be33.js.map