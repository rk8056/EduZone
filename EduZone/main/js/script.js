const header=document.querySelector(".header");
window.addEventListener("scroll",()=>{
    if(window.scrollY>1){
        header.style.backgroundColor="#6500d8";
    }else{
        header.style.backgroundColor="transparent";
    }
});

const logoSmall=document.querySelector(".logo-small");
const logoLight=document.querySelector(".logo-light");
const logoDark=document.querySelector(".logo-dark");
window.addEventListener("scroll",()=>{
    if(window.scrollY>1){
        logoLight.style.opacity="0";
        logoDark.style.display="inline";
    }else{
        logoLight.style.opacity="1";
        logoDark.style.display="none";
    }
});