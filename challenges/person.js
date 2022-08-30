/*

    ? type Person = {
    ?   name:string,
    ?   email:string
    ? }

*/


function setEmail(person, newEmail)
{
    person.email = newEmail;
}

function setName(person,newName)
{
    person.name = newName;
}

module.exports = {
    setEmail,
    setName
}