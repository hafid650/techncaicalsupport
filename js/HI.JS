document.addEventListener('DOMContentLoaded',function()
{
    var contactform = document.querySelector('.contact-form');
    if (contactform){
        contactform.addEventListener('submit', function(e){
            e.preventDefault();
            var name = document .getElementById('name').value.trim();
             var email= document .getElementById('email').value.trim();
             var nameparts =name.split(/\s+/);
             var validname =nameparts.length === 4 && nameparts.every(part => part.length > 0);
             var validemail= email.endsWith('.om');
             if (!validemail){
                alert(' `يرجي ادخال اسم الرباعي(اربعة اجزاء مفصولة بمسافة).()`')
            return;

             }
if(!validemail){
    alert('`يجب ان ينتهي البريد الإلكتروني.om`');
    return;
}
alert('تم ارسال الرسالة بنجاح`');
this.submit();
        });
    }
}
);

    

