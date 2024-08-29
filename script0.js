const loginbtn =document.getElementById('loginbtn');
const loginpopup =document.getElementById('popup');
const closebtn =document.querySelector('.close');

loginbtn.addEventListener('click',()=>{
    loginpopup.style.display = 'flex';
})
closebtn.addEventListener('click',()=>{
    loginpopup.style.display = 'none';
})
window.addEventListener('click',(event)=>{
    if(event.target === loginpopup){
    loginpopup.style.display = 'none';
}
})

const signupbtn =document.getElementById('signupbtn');
const signuppopup =document.getElementById('popup1');
const closebtn1 =document.querySelector('.close1');

signupbtn.addEventListener('click',()=>{
    signuppopup.style.display = 'flex';
})
closebtn1.addEventListener('click',()=>{
signuppopup.style.display = 'none';
})
window.addEventListener('click',(event)=>{
    if(event.target === signuppopup){
    signuppopup.style.display = 'none';
}
})

const joinbtn =document.getElementById('btnhead');
const joinppopup =document.getElementById('popup2');
const closebtn2 =document.querySelector('.close2');
function showpopup(){
    
    joinpopup.style.display = 'flex';
}
function hidepopup(){
    
    joinpopup.style.display = 'none';
}
joinbtn.addEventListener('click', showpopup());
closebtn2.addEventListener('click' , hidepopup());
window.addEventListener('click',(event)=>{
    if(event.target === joinpopup){
        hidepopup();
}
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('subjectError').style.display = 'none';
    document.getElementById('messageError').style.display = 'none';
    let valid = true;
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long.';
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    }
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }
    const subject = document.getElementById('subject').value;
    if (subject.length < 3) {
        document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters long.';
        document.getElementById('subjectError').style.display = 'block';
        valid = false;
    }
    const message = document.getElementById('message').value;
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters long.';
        document.getElementById('messageError').style.display = 'block';
        valid = false;
    }
    if (!valid) {
        event.preventDefault();
    }
});
