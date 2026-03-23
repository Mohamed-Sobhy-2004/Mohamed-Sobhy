let up = document.querySelector('.up')

function sendEmail(){
    const data ={
        To_email:'mhmdssssn64@gmail.com',
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        sub: 'Service',
        message:`
        Name : ${document.getElementById('name').value}
        Email : ${document.getElementById('email').value}
        Phone Number : ${document.getElementById('Phone').value}
        Message : ${document.getElementById('message').value}
        `
    }
    emailjs.send('service_zmgwepn','template_gxabvb2',data).then((Response) =>{
        alert('Success')
    }).catch((Error) =>{
        alert(Error)
    })
}


document.getElementById('send').addEventListener('click',() =>{
    if(document.getElementById('email').value != '' && document.getElementById('message').value !=''){
        sendEmail()
    }else{
        alert('Pleas Enter your Email And your Message')
    }
})


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
