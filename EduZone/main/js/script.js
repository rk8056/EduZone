const header=document.querySelector(".header");
window.addEventListener("scroll",()=>{
    if(window.scrollY>1){
        header.style.backgroundColor="#3c63e2";
        header.classList.add("active");
    }else{
        header.style.backgroundColor="transparent";
        header.classList.remove("active");
    }
});







