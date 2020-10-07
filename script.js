function myFunction(){
var person = alert("Fyll i formuläret så återkommer jag så snart som möjligt");
}

var form = document.getElementById("form")
form.addEventListener("submit", validationForm)

function validationForm(){
    
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var message = document.getElementById("message").value;
    var email = document.getElementById("email").value;


    if(fname.length <1){
        alert("Please enter a Name");
        
        return false;
    }
    if(lname.length <1){
        alert("Please enter a Name");

        return false;
    }
    if((email.length <3) || (document.kontakt.email.value.indexOf('@') == -1) ||
    (document.kontakt.email.value.indexOf('.') == -1)) {
        alert("Please enter a valid Email");

        return false;
    }

    if(message.length <10){
        alert("Please enter a message before submitting.");

        return false;
    }
}