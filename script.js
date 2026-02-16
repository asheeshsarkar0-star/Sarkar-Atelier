/* GOLD CURSOR */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.pageX + "px";
cursor.style.top = e.pageY + "px";
});

/* IMAGE POPUP */
const images = document.querySelectorAll(".grid img");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup-img");
const closeBtn = document.querySelector(".popup span");

images.forEach(img=>{
img.addEventListener("click",()=>{
popup.style.display="flex";
popupImg.src = img.src;
});
});

closeBtn.onclick=()=>{
popup.style.display="none";
};
