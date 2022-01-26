
function validateForm()
{
    let name = document.forms["myForm"] ["name"].value;
    if(name == "")
    {
        alert("Není vyplněné jméno")
        return false
    }

    let email = document.forms["myForm"] ["email"].value;
    if(email == "")
    {
        alert("Není vyplněný e-mail")
        return false
    }

    let text = document.forms["myForm"] ["message"].value;
    if(text == "")
    {
        alert("Není vypněný text")
        return false
    }
}