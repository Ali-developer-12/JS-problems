let data=[
    {name:'Ali Raza', Age:17},
    {name:'imran', Age:20},
    {name:'adil', Age:18},
    {name:'rasheed', Age:21}
]

function greaterAge()
{
    for(let object of data)
    {
        if(object["Age"]>18)
        {
            console.log(`${object["name"]} is young man.`)
        }
    }
}

greaterAge()