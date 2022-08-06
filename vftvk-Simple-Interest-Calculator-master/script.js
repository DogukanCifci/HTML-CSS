function compute () {
    var principal = document.getElementById("principal").value ;
   
    var rate = document.getElementById("rate").value ;
    var years = document.getElementById("year").value ;
    var amount = 1000;

    var interest = principal * years * rate / 100 ;
    var year = new Date().getFullYear() + parseInt(years); // Yeni bir year adinda degisken olusturduk. Mevcut yili cagirdik ve üstüne kullanicinin girdigi yil sayisini ekledik. Mvcut tarih 2022. Eger kullanici 3 secerse ciktida 2025 olarak gözükecek.

    if (principal <= 0) {
        alert("Please enter a positive number!!") ;
        principal.focus() ;
        return false ;
    }

    document.getElementById("result").innerHTML = "\<br>If you deposit " + principal + ",\<br> at an interest rate of " + rate + "%.\<br> You will receive an amount of " + amount + ", \<br> in the year " + year ; //Hesapladigimiz degeri bu sekilde id si result olan kutunun icine yazdiriyoruz.
}

function updateRate() {
    var rateval = document.getElementById("rate").value ; //onchange ile deger her degistiginde degeri bu sekilde alip ;
    document.getElementById("rate_val").innerText = rateval + "%" ; //Bu kod ile de rate_val id sine sahip olan span icinde yazdiricaz.
}