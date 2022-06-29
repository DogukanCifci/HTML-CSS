


function firstNameCheck()
{
    var fName = document.getElementById("firstName").value ;
    var re1 = /^\[a-z]{3,12}$/ ;

    if (re1.test(fName)) 
    {
        document.getElementById('firstNamePrompt').style.color ="green" ;
        document.getElementById('firstNamePrompt').innerHTML = 'Eingabe bestätigt!';
        return true ;
    }

    else 
    {
        document.getElementById('firstNamePrompt').style.color = "Red" ;
        document.getElementsById('firstNamePrompt').innerHTML = 'Ungültiger Name!' ;
        return false ;
    }
}



function phoneNumberCheck()
{
    var phoneNumber = document.getElementById("phone").value ;
    var re3 = /^\d{3}-\d{3}-\d{4}$/ ;
    
    if (re3.test(phoneNumber)) {
        document.getElementById("phonePrompt").style.color = "green" ;
        document.getElementById("phonePrompt").innerHTML = "Valid" ; 
    }

    else {
        document.getElementById("phonePrompt").style.color = "Red" ;
        document.getElementById("phonePrompt").innerHTML = "Geben Sie bitte ein wie dieses Format(xxx-xxx-xxxx)" ;
    }
}

function orderCalc() {
    var FirstName = document.getElementById("firstName").value ;
    var LastName = document.getElementById("lastName").value ;
    var userName = FirstName + " " + LastName
    var PhoneNumber = document.getElementById("phone").value ;
    var Quantity = document.getElementById("quantity").value ;
    var Price = document.getElementById("price").value ;
    var ToplamTutar = Quantity * 10 ; 

    document.getElementById("outputBaslik").innerHTML = "ORDER SUMMARY" ;
    document.getElementById("outputPrice").innerHTML = "Price : " + Price ;
    document.getElementById("outputQuantity").innerHTML = "Quantity : " + Quantity ;
    document.getElementById("output").innerHTML = "Total Price : " + Quantity * Price ;
}