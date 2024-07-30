//promise base example
function proBaseEg(a)
{
    let prom=new Promise((resolve, reject)=>
    {
        setTimeout(()=>
        {
            if(a==="resolve")
            {

                reject("This is a base Eg for reject");
            }
            else if(a==="reject")
            {

                resolve("This is a base Eg for resolve");
            }
        },1000);
    });
    console.log
    (
        prom
            .then((val)=>
            {
                console.log(val);
            })
                .catch((val) =>
            {
            console.log(val);
            })
    );
}
proBaseEg("reject");


// Real-time base examlple
isLocationFound=(loc,time)=>
{
    isLoc="SKCET";
    t=2000;
    if(loc ===isLoc && t<=time)
    {
        return true;
    }
    else
    {
        return false;
    }
};
function locationFinder()
{
    time=2000;
    loc="SKCET";
    return new Promise((locFound,locNotFound)=>
    {
        setTimeout(()=>
        {
            if(isLocationFound(loc,time))
            {
                return locFound("Location Found");
            }
            else
            {
                return locNotFound("Location Not Found");
            }
        },time);
    })
}
locationFinder()
    .then((val)=>
    {
        console.log(val);
    }).catch((val)=>
    {
        console.log(val);
    });