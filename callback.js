function formvalidation(fVC)
{
    setTimeout(() =>
    {
        console.log("Form Validation called");
        fVC();
    },2000);
}
function formvalidationCompleted()
{
    console.log("Form Validation completed");
}
formvalidation(formvalidationCompleted);