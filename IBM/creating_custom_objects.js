function Car(make,model, year) {        //Python class olusturmaya benzer bir yapi
    this.make = make ;                  //Asagida girilen degerleri bu sekilde make, model ve year degiskenine atadik
    this.model = model ;
    this.year = year ;

    this.getName = function() {        //Yukarda nasil bir degisken olusturduysak burda da this.getName = function() ile getName functionunu olusturduk
        return this.make + ' ' + this.model + ' ' + this.year ;     //Bu fonksiyon asagida cagirildiginda burasi calisacak
    }
}

var c = new Car ("Meridian", "Saber GT", "2012") ;  //Car fonksiyonunun degiskenlerini bu sekilde atiyoruz.

alert(c.getName()) ; //Bu komutla getName fonksiyonunu cagirdim. O fonksiyon icinde yazilanlar uygulanacak!!