//FullName
const FullName = document.getElementById('FullName')
console.log(FullName.value)

FullName.addEventListener('input', (event)=> {
    console.log(event.target.value)
})
// email
const email = document.getElementById('email')
console.log(email.value)

email.addEventListener('input', (event)=> {
    console.log(event.target.value)
})
// username

const username = document.getElementById('username')
console.log(username.value)

username.addEventListener('input', (event)=> {
    console.log(event.target.value)
})
// password
const password = document.getElementById('password')
console.log(password.value)

password.addEventListener('input', (event)=> {
    console.log(event.target.value)
})
// confirm password
const confirmpassword = document.getElementById('confirmpassword')
console.log(confirmpassword.value)

confirmpassword.addEventListener('input', (event)=> {
    console.log(event.target.value)
})

// form
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', (event) => {
   event.preventDefault();
   console.log("Form submitted!");
});
