//==========================
// PROJECT MODAL
//==========================

const modal=document.getElementById("projectModal");

const modalImg=document.getElementById("modalImage");

const modalTitle=document.getElementById("modalTitle");

const modalDescription=document.getElementById("modalDescription");

document.querySelectorAll(".open-project").forEach(btn=>{

btn.onclick=()=>{

modal.classList.add("active");

modalImg.src=btn.dataset.image;

modalTitle.innerHTML=btn.dataset.title;

modalDescription.innerHTML=btn.dataset.description;

}

});


const closeBtn =
    document.querySelector(".close-project") ||
    document.querySelector(".close-modal");

if (closeBtn) {
    closeBtn.onclick = () => {
        modal.classList.remove("active");
    };
}
document.querySelector(".close-projact").onclick=()=>{

modal.classList.remove("active");
}
modal.onclick=(e)=>{

if(e.target==modal){

modal.classList.remove("active");

}

}
//==============================
// BURGER MENU
//==============================

const burger=document.querySelector(".burger");
const menu=document.querySelector(".menu");

if(burger){

burger.onclick=()=>{

burger.classList.toggle("active");

menu.classList.toggle("active");

}

}

//==============================
// HEADER
//==============================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scroll");

}else{

header.classList.remove("scroll");

}

});

//==============================
// FADE ANIMATION
//==============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section,.service-card,.project-item,.contact-card,.stat-card").forEach(el=>{

el.classList.add("fade");

observer.observe(el);

});

//==============================
// PROJECT MODAL
//==============================
const projectModal=document.getElementById("projectModal");

if(projectModal){

const modalImage=document.getElementById("modalImage");
const modalTitle=document.getElementById("modalTitle");
const modalDescription=document.getElementById("modalDescription");

document.querySelectorAll(".open-project").forEach(btn=>{

btn.onclick=()=>{

modalImage.src=btn.dataset.image;

modalTitle.innerHTML=btn.dataset.title;

modalDescription.innerHTML=btn.dataset.description;

projectModal.classList.add("active");

}

});

document.querySelector(".close-modal").onclick=()=>{

projectModal.classList.remove("active");

}

projectModal.onclick=(e)=>{

if(e.target===projectModal){

projectModal.classList.remove("active");

}

}

}


// ===========================
// IMAGE LIGHTBOX
// ===========================

const images=document.querySelectorAll(".project-image img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`

<span class="lightbox-close">&times;</span>

<img src="" alt="">

`;

document.body.appendChild(lightbox);

const lightboxImg=lightbox.querySelector("img");

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=image.src;

});

});

lightbox.querySelector(".lightbox-close").onclick=()=>{

lightbox.classList.remove("active");

}

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

}