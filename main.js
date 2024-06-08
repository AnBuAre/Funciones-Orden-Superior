// 3. Utiliza forEach para mostrar con console.log cada país del array de países.
const countries = ["US", "Sweden", "Denmark", "Norway", "Iceland"]
countries.forEach((countrie) => console.log (countrie));

// 4. Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
const names = ["Joseph", "Mathias", "Elias", "Brook"]
names.forEach((nam) => console.log(nam));

// 5.Utiliza forEach para mostrar con console.log cada número del array de números.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((num)=> console.log(num));

// 6.Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
const countriesToUpeerCase = countries.map((countries) => countries.toUpperCase());
console.log(countriesToUpeerCase);

// 7.Utilice map para crear un array de longitudes de países a partir del array de países.
 const constLength = countries.map((countries) => countries.length);
 console.log(countries.length);

// 8.Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
const numberdopple = numbers.map((num) => num * num );
console.log(numberdopple);

// 9.Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
const namestoUpperCase = names.map((nam) => nam.toUpperCase());
console.log(namestoUpperCase);

// 10.Utilice map para asignar el array de productos a sus correspondientes precios.
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
  ];



const productsPrice = products.map((object) => {
    let allProducts = {};
    allProducts [object.product] = object.price;
}

)
console.log(productsPrice)//sale undefined????PORQUEE




