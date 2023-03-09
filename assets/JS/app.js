
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

document.getElementById('length').addEventListener('change', charLength)


/* password generator code */


 let btn = document.getElementById("btn");
 btn.addEventListener("click", myFunction);

 function myFunction() {
    document.getElementById("password__result").value = generatePassword(8);
 }

 function generatePassword() {
    let length = 8,
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

