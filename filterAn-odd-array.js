//create an array from array only odd element

let arr=[1,3,4,5,12,0,15,6,99,100];
let aray=[];
let count=0;
for(let k of arr)
{
    if(k%2==1)
    {
        aray[count]=k;
        count++;
    }
}
console.log(aray);