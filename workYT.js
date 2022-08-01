const empty="";
const uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*=-_";

const pLength=document.getElementById("p-length");
const upperCase=document.getElementById("p-uppercase");
const lowerCase=document.getElementById("p-lowercase");
const pNumber=document.getElementById("p-number");
const pSymbol=document.getElementById("p-symbol");
const submit=document.getElementById("submit");
const password=document.getElementById("password");


submit.addEventListener('click' , () =>{
    let intialPassword=empty;
    (upperCase.checked)?intialPassword+=uCase:"";
    (lowerCase.checked)?intialPassword+=lCase:"";
    (pNumber.checked)?intialPassword+=number:"";
    (pSymbol.checked)?intialPassword+=symbol:"";
password.value = generatePassword(pLength.value , intialPassword);


} );

function generatePassword(l,intialPassword){
 let pass ="";
 for(let i=0;i<l;i++){
    pass+=intialPassword.charAt(Math.floor(Math.random()*intialPassword.length));
 }

return pass;

}

//copy password
const copy =document.getElementById("copy");
copy.addEventListener("click",()=>{
    if(password.value==""){
        alert("Please generate a password");

    }
    else{
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to calipboard");
    }
})