//An array have some repeated numbers. repeated delete kro or ak ak baar rakho sab ko using splice and indexOf.

let arr=['a',12,55,33,209,55,6,3,209,99,3,'3','a'];
for(let i=0;i<arr.length; i++)
{
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[i]===arr[j])
        {
            arr.splice(j,1);
        }
    }
}
console.log(arr);


//this is my best problem