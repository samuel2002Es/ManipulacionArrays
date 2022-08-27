const totals = [1,2,3,4,5];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const num = totals[index];
    sum= sum + num;
}
console.log(sum);

const result = totals.reduce((sum, num) => sum + num, 0)
console.log(result);