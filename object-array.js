//An object have three string values, convert all values in uppercase and store in an array.

let obj={
    Name:"Ali Raza",
    Fname:"Amjad Raza",
    Class:"CIT"
}
let arr=[];
let count=0;
for(let key in obj)
{
    arr[count]=obj[key].toUpperCase();
    count=count+1;
}
console.log(arr);