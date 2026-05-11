//store an reverse array from an array.

let arr=[1,2,3,4,5,6,7];
let array=[];
let count=0;
for(let i=arr.length-1; i>=0; i--)
{
    array[count]=arr[i];
    count++;
}
console.log(array);