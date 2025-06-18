import{a as L,S as w,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function S(t,o=1){const a="50767734-ec8f632e6fcf50a626b02f32f",r=new URLSearchParams({key:a,q:t,page:o,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await L.get("https://pixabay.com/api/",{params:r})).data}const f=document.querySelector(".loader"),m=document.querySelector(".gallery"),h=document.querySelector(".load-more-btn"),q=new w(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function x(t){const o=t.map(({webformatURL:a,largeImageURL:r,tags:e,likes:s,views:i,comments:v,downloads:b})=>`
    <li class="image-box">
        <a href="${r}">
        <img src="${a}" alt="${e}" width="300">
        </a>
        <div class="image-stats">
            <div class="image-stat">
                <span class="label">Likes</span>
                <span class="value">${s}</span>
            </div>
            <div class="image-stat">
                <span class="label">Views</span>
                <span class="value">${i}</span>
            </div>
            <div class="image-stat">
                <span class="label">Comments</span>
                <span class="value">${v}</span>
            </div>
            <div class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${b}</span>
            </div>
        </div>
    </li>`).join("");m.insertAdjacentHTML("beforeend",o),q.refresh()}function B(){m.innerHTML=""}function g(){f.classList.remove("hidden")}function O(){f.classList.add("hidden")}function P(){h.classList.remove("hidden")}function u(){h.classList.add("hidden")}const $=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let d="",l=1,p=0,c=0;$.addEventListener("submit",async t=>{if(t.preventDefault(),d=t.target.elements["search-text"].value.trim(),d===""){n.error({message:"Please, fill in the field!",closeOnClick:!0,position:"topRight"});return}l=1,B(),g(),await y()});M.addEventListener("click",async()=>{g(),await y();const t=document.querySelectorAll(".image-box");if(t.length){const a=t[0].getBoundingClientRect().height;console.log(a),window.scrollBy({top:a*2,behavior:"smooth"})}});const y=async()=>{try{u();const t=await S(d,l);if(l===1&&(p=t.totalHits,c=0,!t.hits.length)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,position:"topRight"});return}x(t.hits),l++,c+=t.hits.length,c>=p?(u(),n.error({message:"We're sorry, but you've reached the end of search results.",closeOnClick:!0,position:"topRight"})):P()}catch(t){n.error({message:`${t}`})}finally{O()}};
//# sourceMappingURL=index.js.map
