let login=document.getElementById("login")

login.addEventListener('click',(e)=>{
    e.preventDefault()
    login.style.backgroundColor="green";
    window.location.assign("profile.html")
    
})

let signup=document.getElementById("signup")
signup.addEventListener('click',()=>{
    window.location.assign("form.html")
})

