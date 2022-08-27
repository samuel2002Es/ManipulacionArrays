/* El método everyes inmutable y consiste retornar un valor lógico verdadero si todos los elementos cumplen con la condición establecida en la función (callback). */
const numbers = [1, 30, 9, 29, 10, 13]

let respuesta = true
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = false
        break
    }
}

console.log(respuesta) // false
const result = numbers.every(valor => valor<40,false)
console.log('result:', result);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

const verificacion = team.map(items => items.age).every(item => item  <=30);
console.log(verificacion);