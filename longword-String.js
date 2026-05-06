const sentence = 'Iaaaaaaaaaaa amaaaaaaaaaaaaaa a webaaafacraa;kclakrlkaarara developer';
let lenth = sentence.length;
let arr=[];
let world='';

for(let i=0; i<=sentence.length; i++){

    if(sentence.length==i){
        arr.push(world);
        world=''
    }
    else if(sentence[i]!=' ')
    {
        let k=sentence[i];
        world=world.concat(k);
        
    }
    else {
        arr.push(world);
        world=''
    }
    
    

};
console.log(arr);
let big='';
for(let k of arr){
    if(k.length>big.length){
        big=k;
    }
    else{
        big=big
    }
}
console.log(big);

