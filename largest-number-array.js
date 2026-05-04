//find largest element and its index

let arr=[1,2,3212,10000000,0,55,399,243,177,13];
let large=[0];
for(let key of arr)
{
    if(key>large)
    {
        large=key;
    }
    else{
        large=large;
    }
}
console.log(large);
// console.log(large, arr.indexOf(large)+1);
