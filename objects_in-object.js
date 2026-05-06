const college={
    name:"GCT Bhakkar",
    principle:"Sir Javad",
    classes:{
        class1:{
            teacher:"Sir Ijaz",
            Students:{
                s1:{name:"Tamoor", marks:80},
                s2:{name:"imran", marks:66}
            }
        },
        class2:{
            teacher:"Sir Haziq",
            Students:{
                s2:{name:"Ali", marks:100},
                s4:{name:"Hassan", marks:66},
                s5:{name:"rasheed", marks:90},
                s6:{name:"khan", marks:46},
                s7:{name:"yasir", marks:130},
                s8:{name:"arslan", marks:46}
            }
        }
    }
};


let sum=0;
for(let key in college["classes"]['class2']['Students'])
{
    for(let keys in college["classes"]['class2']['Students'][key])
    {
        if(keys==='marks')
        {
            sum=sum+college["classes"]['class2']['Students'][key][keys];
        }
    }
}
console.log(sum);