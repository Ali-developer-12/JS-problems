let sentence="My name is Ali Raza";
let obj={};

for(let i=0; i<sentence.length; i++)
{
    let n=0;
   if(sentence[i]!=' ')
   {
    for(let j=0; j<sentence.length; j++)
        {
            if(sentence[i]===sentence[j]||sentence[i]===sentence[j].toUpperCase()||sentence[i]===sentence[j].toLowerCase())
            {
                n++;
            }
        }
        let word=sentence[i].toUpperCase();
        // console.log(`${word} = ${n}`);
        obj[word]=n;
   } 
}
console.log(obj);