
const cl = console.log;

const loginform1 = document.getElementById('loginform');
cl(loginform1)
const email = document.getElementById('email')
// cl(email)
const password = document.getElementById('password');
// cl(password)
const db = {
    email: "nehakanke95@gmail.com",
    password: "9325793540",
}
// cl(db)

const login = (e) => {
    cl('subbmited !!!!');
    e.preventDefault();
    const emailval = email.value;
    cl(emailval)
   const passwordval = password.value;
    // cl(passwordval);
    if(emailval==db.email && passwordval==db.password){
        alert('login successfully');
        cl(emailval, passwordval)
     }
     else {
       alert('invalid username or password ')
   }    e.target.reset()
 }

loginform1.addEventListener('submit',login)