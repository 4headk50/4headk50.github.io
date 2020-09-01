function validateform(){
    var fname = document.getElementById("first_name");
    var lname = document.getElementById("last_name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");

    if(fname.value == "" || fname.value == null){
        console.log("error - first name");
        alert("Please enter your first name")
        return false;
    }
    else if(lname.value == "" || lname.value == null){
        console.log("error - last name");
        alert("Please enter your last name")
        return false;
    }
    else if(email.value == "" || email.value == null){
        console.log("error - email");
        alert("Please enter your email address")
        return false;
    }
    else if(phone.value == "" || phone.value == null){
        console.log("error - phone");
        alert("Please enter your phone number")
        return false;
    }
    else if(isNaN(phone.value)){
        console.log("error - phone not a number");
        alert("Phone number needs to be numeric")
        return false;
    }
    else{
        console.log(fname.value);
        alert("Your Booking has been submitted")
    }
}

