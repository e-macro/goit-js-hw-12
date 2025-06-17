import{a as L,S as b,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function w(t,a=1){const r="50767734-ec8f632e6fcf50a626b02f32f",o=new URLSearchParams({key:r,q:t,page:a,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await L.get("https://pixabay.com/api/",{params:o})).data}const p=document.querySelector(".loader"),f=document.querySelector(".gallery"),m=document.querySelector(".load-more-btn"),S=new b(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"});function q(t){const a=t.map(({webformatURL:r,largeImageURL:o,tags:e,likes:s,views:i,comments:y,downloads:v})=>`
    <li class="image-box">
        <a href="${o}">
        <img src="${r}" alt="${e}" width="300">
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
                <span class="value">${y}</span>
            </div>
            <div class="image-stat">
                <span class="label">Downloads</span>
                <span class="value">${v}</span>
            </div>
        </div>
    </li>`).join("");f.insertAdjacentHTML("beforeend",a),S.refresh()}function O(){f.innerHTML=""}function h(){p.classList.remove("hidden")}function P(){p.classList.add("hidden")}function $(){m.classList.remove("hidden")}function M(){m.classList.add("hidden")}const x=document.querySelector(".form"),B=document.querySelector(".load-more-btn");let d="",l=1,u=0,c=0;x.addEventListener("submit",async t=>{if(t.preventDefault(),d=t.target.elements["search-text"].value.trim(),d===""){n.error({message:"Please, fill in the field!",closeOnClick:!0,position:"topRight"});return}l=1,O(),h(),await g()});B.addEventListener("click",async()=>{h(),await g(),window.scrollBy({top:524.75*2,behavior:"smooth"})});const g=async()=>{try{const t=await w(d,l);if(l===1&&(u=t.totalHits,c=0,!t.hits.length)){n.error({message:"Sorry, there are no images matching your search query. Please try again!",closeOnClick:!0,position:"topRight"});return}q(t.hits),l++,c+=t.hits.length,c>=u?(M(),n.error({message:"We're sorry, but you've reached the end of search results.",closeOnClick:!0,position:"topRight"})):$()}catch(t){n.error({message:`${t}`})}finally{P()}};
//# sourceMappingURL=index.js.map
