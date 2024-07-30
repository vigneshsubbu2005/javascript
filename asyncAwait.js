async function a()
{
    await b();
    setTimeout(()=>
    {    
        console.log("ABC");
    },1000);
}
async function b()
{
    console.log("BCD");
}
async function c()
{
    console.log("CDE");
}
a()
b()
c()