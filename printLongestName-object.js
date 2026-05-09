let object={
    s1:{name:"Ali Raza khan Baloch", "roll no":108, marks:200},
    s2:{name:"imran abbas mandhar baloch", "roll no":104, marks:200},
    s3:{name:"Abdul Rasheed", "roll no":101, marks:180},
    s4:{name:"Tamoor", "roll no":123, marks:130},
    s5:{name:"Hammad", "roll no":102, marks:108},
    s6:{name:"Arslan Raza", "roll no":134, marks:148},
    s7:{name:"Yasir Ali", "roll no":112, marks:120},
    s8:{name:"Muhammad Ahsan", "roll no":123, marks:150},
    s9:{name:"Hassan Raza Khan", "roll no":105, marks:110}
}

function longName(obj)
{
let k='';
for(let key in obj)
{
    if(obj[key]['name'].length>k.length)
    {
        k=obj[key]["name"];
    }
}
console.log(k);
}


longName(object);
