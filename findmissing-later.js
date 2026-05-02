
function findMisingLatter(arra){
    let arr = arra.join('')

    for(let i=0; i<arr.length; i++){
        if(arr.charCodeAt(i)+1=== arr.charCodeAt(i+1)-1){
            console.log(String.fromCharCode(arr.charCodeAt(i)+1))
        }
        
    }

}


findMisingLatter(['a','b','c','d','f']) // e
findMisingLatter(['a','b','d','e']) // e
findMisingLatter(['a','b','c','e','f']) // e
findMisingLatter(['a','b','c','d','f']) // e

