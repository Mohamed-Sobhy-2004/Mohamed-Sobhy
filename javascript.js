let up = document.querySelector('.up')

onscroll = function(){
    if(scrollY >= 362){
        up.style.opacity = '1'
    }else{
        up.style.opacity = '0'
    }
}

up.onclick = function(){
    scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
}