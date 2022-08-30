
/*

 ? type Item = {
 ?   id:number,
 ?   name:string
 ? }

 ? type Inventory = Item[]

 ! Better Comments => Extension VS Code
*/


function addItem(inventory,item)
{
    inventory.push(item)
    console.log(JSON.stringify(inventory,null,2))
}


function removeItem(inventory,item)
{
    inventory = inventory.filter(O => O.id !== item.id)
    return inventory
}

module.exports = {
    addItem,
    removeItem
}