var string1 = "st1"; //globol
string2 = "st2"; // same var

string1 = "hello";
console.log(string1);

{
    let string1 = "my name";
    console.log(string1);
}
console.log(string1);

{
    const string1 = "Tan";
    // string1 = "vong";
}

//tradition fn
function add(a, b){
    let c = a + b;
    return c;
}
let res = add(5, 3);
console.log(res);

let addFn = (a, b) => a + b;
res = addFn(8, 5);
console.log(res);



//array
const cars = ["toyota", "mazda", "honda"];
const fruits = [];
fruits[0] = "apple";
fruits[3] = "mango";
const people = new Array("wim", "james", "john");
console.log(people)
console.log(fruits);

let popCars = cars.pop();
console.log(popCars);
console.log(cars);

cars.push("Kubota");
cars.shift(); //remove "Toyota"
cars.unshift("froza");
console.log(cars);

const carSlide = cars.slice(1, 3);
console.log(carSlide);

carSlide.splice(1, 0, "Honda");
console.log(carSlide);

console.log(carSlide.toString());
console.log(carSlide.concat(people));
console.log([...cars, ...people]); //spread oprerator
