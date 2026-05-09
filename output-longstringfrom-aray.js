//An array of some string elements. find lengthy string using for..of loop and .length

let str=['Ali', 'arslan', 'imran', 'yasir', 'Hammad', 'Abdul rasheed', 'Ali raza khan baloch'];
let vlue=str[0];
for(let value of str)
{
    if(vlue.length>value.length)
    {
        vlue=vlue;
        
    }
    else{
        vlue=value;
    }

}
console.log(vlue);