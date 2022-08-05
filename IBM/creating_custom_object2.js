function Car(make, model, year) {
    this.make = make ;
    this.model = model ;
    this.year = year ;
}

  
Car.prototype.getName = function() {             //Ilk metoddtan farkli olarak bu sefer Car functionin disinda yazdik  
    return this.make + " " + this.model + " " + this.year ; 
}

// Bu sebeple bu sefer Car.prototype.getName kullandik --->> this.getName = function()  yerine


var a = new Car ("BMW", "7.50", "2018") ;

alert(a.getName()) ;            //variable ismi. fonksiyonun ismi seklinde yaziyoruz