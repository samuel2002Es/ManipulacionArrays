const orders=[
    {
        customerName:"Nicolas",
        total:60,
        delivered:true,
    },
    {
        customerName:"Zulema",
        total:120,delivered:false,
    },
    {
        customerName:"Santiago",
        total:180,
        delivered:true,
    },
    {
        customerName:"Valentina",
        total:240,
        delivered:true,
},];
console.log("original",orders);
const rta=orders.map((item)=>item.total);
/* selecciono que solo quiero trabajar con la parte del total y me genera un nuevo array con el valor de los totales */
console.log("rta",rta);
const rta3=orders.map((item)=>
/* para que sea inmutable debemos retornar no el item ya que si lo hacemo estaremos cambiando el array, cambiaremos el nuevo esto es retornando un nuevo objeto  */
/* los tres puntos nos dicen que copiamos el objeto con los atributos SIN la referencia el memoria */
{return{
    ...item,
    tax:0.19,
};
/* agrego el impuesto a cada uno de los objetos */
});
console.log("rta3",rta3);console.log("original",orders);