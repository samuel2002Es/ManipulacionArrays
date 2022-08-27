/* El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback). */
const numbers = [3,7,9,2];

let result = false;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 === 0){
        result = true;
        break;
    }
}
console.log(result);

const result1 = numbers.some(a=> a % 2 === 0,false)
console.log(result1);

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
  
  const rta3 = orders.some((item) => item.delivered);
  console.log("rta3", rta3);
  
  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
  
  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };
  
  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')
  
  const isOverlap = (newDate) => {
      return dates.some(date => {
          return areIntervalsOverlapping(
              {start: date.startDate, end: date.endDate},
              {start: newDate.startDate, end: newDate.endDate},
          )
      })
  }
  
  console.log('isOverlap', isOverlap(newAppointment));