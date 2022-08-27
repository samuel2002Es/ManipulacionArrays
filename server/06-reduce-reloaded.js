const items = [1,3,2,3];

const result=items.reduce((objeto,item)=>{
    if(!objeto[item]){
        objeto[item] = 1;
    }else{
        objeto[item] += 1;
    }
    return objeto;
},{})

console.log(result)