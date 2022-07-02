const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}
console.log('newArray', newArray);
console.log('original', words );
const rta = words.filter(item => item.length >= 6)
console.log('rta', rta);
console.log('original', words );


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
      },
  ];
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
console.log('rta3', rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

// console.log(search('Nico'));
console.log(search('hsdjkfhdsj'));
/* filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.
.
Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

cero coincidencias
todas coincidencias
algunas coincidencias
Pero nunca más coincidencias que el tamaño del array original. */