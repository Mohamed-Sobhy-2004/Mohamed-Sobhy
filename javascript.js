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
        h2.innerText = 'Thank you For Contact'
        oppen()
    }).catch((Error) =>{
        h2.innerText = Error
        oppen()
    })
}


document.getElementById('send').addEventListener('click',() =>{
    if(document.getElementById('email').value != '' && document.getElementById('message').value !=''){
        sendEmail()
    }else{
        h2.innerText = 'Pleas Enter your Email And your Message'
        oppen()
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

let bac = document.createElement('div');
let divs = document.createElement('div');
let h2 = document.createElement('h2');
let btn = document.createElement('button');
 btn.classList.add('closse');
 divs.classList.add('thank');
 bac.classList.add('background-blur');
 btn.innerText = 'Close';
 document.body.prepend(bac);
 divs.appendChild(h2);
 divs.appendChild(btn);
 document.querySelector('.background-blur').appendChild(divs);



function closebtn(){
    bac.style.display = 'none';
    bac.style.opacity = '0';
}
function oppen(){
    bac.style.display = 'block';
    bac.style.opacity = '1';
}
btn.addEventListener('click',() =>{
    closebtn()
})
