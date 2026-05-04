let name='ali raza';
let arr= name.split('');
// console.log(arr);
for(let k of arr){
    let count=0;
    for(let n of arr){
        if(n===k){
            count++;
        }
    }
    if(count===1){
        console.log(k + " is first no repeated letter")
        break
    }
}
