username="vicky"
pwd="123"
cnfpwd=""
if(username)
{
    if(pwd)
    {
        if(cnfpwd)
        {
            if(pwd==cnfpwd)
            {
                console.log("Sign Up Successfully");
            }
            else
            {
                console.log("Password and conform password doesn't match");
            }
        }
        else{
            console.log("Type your cnfpwd");
        }
    }
    else
    {
        console.log("Type your pwd");
    }
}
else{
    console.log("Type your username");
}

