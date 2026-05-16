let up = document.querySelector('.up');
let indecator = document.querySelector('.indecator');
let local = localStorage.getItem('ind');


async function dr(){
    emailjs.init({
      publicKey: "jzdLWBtcu3oAGavJo",
    });
 };
dr()
// دالة إرسال الإيميل
function sendEmail(){
    const data ={
        To_email:'mhmdssssn64@gmail.com',
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        sub: 'طلب خدمة من الموقع العربي', // تعديل العنوان لتعرف المصدر
        message:`
        الاسم : ${document.getElementById('name').value}
        الإيميل : ${document.getElementById('email').value}
        رقم الهاتف : ${document.getElementById('Phone').value}
        الرسالة : ${document.getElementById('message').value}
        `
    }
    
    emailjs.send('service_zmgwepn','template_gxabvb2',data).then((Response) =>{
        h2.innerText = 'شكراً لتواصلك معي، سأقوم بالرد عليك في أقرب وقت.'; // نص عربي
        oppen();
    }).catch((Error) =>{
        h2.innerText = 'حدث خطأ، حاول مرة أخرى لاحقاً.';
        oppen();
    });
}

// التفاعل مع زر الإرسال
document.getElementById('send').addEventListener('click',() =>{
    if(document.getElementById('email').value != '' && document.getElementById('message').value !=''){
        sendEmail();
    }else{
        h2.innerText = 'يرجى إدخال البريد الإلكتروني وتفاصيل الرسالة.'; // نص عربي
        oppen();
    }
});

// إظهار سهم الصعود
onscroll = function(){
    if(scrollY >= 362){
        up.style.opacity = '1';
    }else{
        up.style.opacity = '0';
    }
}

// الصعود للأعلى
up.onclick = function(){
    scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
}

// إنشاء عناصر رسالة التأكيد (Modal)
let bac = document.createElement('div');
let divs = document.createElement('div');
let h2 = document.createElement('h2');
let btn = document.createElement('button');

btn.classList.add('closse');
divs.classList.add('thank');
bac.classList.add('background-blur');

btn.innerText = 'إغلاق'; // زر الإغلاق بالعربي
document.body.prepend(bac);
divs.appendChild(h2);
divs.appendChild(btn);
document.querySelector('.background-blur').appendChild(divs);

// وظائف الفتح والإغلاق
function closebtn(){
    bac.style.display = 'none';
    bac.style.opacity = '0';
}

function oppen(){
    bac.style.display = 'block';
    bac.style.opacity = '1';
}

btn.addEventListener('click',() =>{
    closebtn();
});
