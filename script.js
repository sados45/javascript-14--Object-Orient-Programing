//___________Object Orient Programming_____________
/*
const obj= {
    firstName: "John",
    CalcAge: function(){


    }
};


//alttaki taslagi hazirlayip sonra bu taslagin atindaki gibi istedigin kadar tanimlayarak doldurabiliyoruz. yukaridaki bos hazirlanan formule prototype, alttaki doldurulan haline de instance deniyor. Javascriptte protype aslinda class gibi oluyor. mesela; array.prototype.map() yani burada sen bu map i git bütün array'lerde kullan demek. 

    User {
    user_Name
    password
    email

    login(){


    }
}

{
    user_Name: "John",
    password:"1234",
    email:"john@example.com"

    login(){

    }
}
*/
// Burada 1. constructor methods
//2. ES6
//3. Object.creata() bunlari islyecegiz. 

//construction method:

const Person = function(firstName, birthYear){ //burada Person un P si büyük yazilmak zorundaymis. 
this.firstName = firstName; //this burada Person oluyor. ve böyle birseyi ancak this ile baglayabilyioruz. this kullanmak zorundayiz. 
this.firstName = birthYear; 
this.calcAge = function(birthYear){

    console.log(2021-this.birthYear)
} 

}//burada o(bject olustrduk 


//burada yukarida bir prototype olusturduk. ve alt tarafta istedigimiz kadar isim girerek ve özellik girerebiliyoruz. new person prototype i firstName ve birthYear a sahip. yukarida taslak olusturduk asagida da bunun icini doldurduk farkli özelliklerle.

const ebuzer = new Person ("Ebuzer", 1988) //new ile tanimladigimizda bize bir bos obje olusturur. 
const ahmet = new Person ("ahmet", 1970) 

// console.log(ebuzer)//sonuc Person, prototype:object
// console.log(ahmet)//sonuc Person, prototype:object

Person.prototype.calcAge= function(){ //burada Person her yere gerektiginde tasiyabilyorum. gerekli oldugunda kullaniyorum.

    console.log(2022-this.birthYear)
}

console.log(ebuzer)
console.log(ebuzer.calcAge())


const arr = [1,12,5,5,37,12,33,33,96]
   console.log(arr)//burada consola yazdirdigimizda sayilari aliyoruz. ama altinda protype adinda bir secenek olsuyor onu tikladigimizda icinde butun hersey filter vbircok kullandigimiz özeelik orada siralaniyor. aslinda bizim olsturdugumuz prototype in icinde bilgisayar bircok seyi kendisi javascript olusturuyor otomatik. 

Array.prototype.unique = function(){

    return [...new Set((this))]
}

console.log(arr.unique()) //javascript bizim yerimize bu özellikleri barindiran bir yazilim. yazanlar bunlari yazmislar. Ama bu unique özelligini kullanmamamiz iyi. cünkü herhangi birseyle cakisabilir. cod cakismasi nedeniyle hata verebilir. 

//consolda yazanlar;
/*
(6) [1, 12, 5, 37, 33, 96]0: 11: 122: 53: 374: 335: 96length: 6[[Prototype]]: Array(0)unique: ƒ ()at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Object
*/

//yukarida yaptiklgimiz calisma aslinda temelde Object.prototype tir. aslinda Person.prototype diye olusturdugumuz sey Object.prototype in icindedir. budur kisaca.oblect bunlari kapsiyor. tepede...

console.log(ahmet)
console.log(ahmet.__proto__) //bu aslinda Person.prototype a esit. ve ahmet icindeki protype lari console de görüyoruz.

//biz ilk önce, creates empty object{}
//ikinci olarak, function called, creates this
//{} linked to prototype
//automatically return{}