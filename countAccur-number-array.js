let arr=[1,1,2,3,4,5,3,4,3,3,3];
let obj={
    number:"occure",
}
let count=0;
let key;
for(let k of arr)
{
    for(let i=0;i<arr.length; i++)
    {
        if(arr[i]==k)
        {
            count++;
        }
        key=k;
    }
    obj[key]=count;
    count=count-count;
}
console.log(obj)







//it is my hard problem