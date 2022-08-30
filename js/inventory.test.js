const { addItem, removeItem } = require('./inventory')



test("Adding an item to the inventory", ()=>{
    const inventory = []

    const itemToAdd = {id:0, name :"Sword"}

    addItem(inventory,itemToAdd)
    expect(inventory.length).toBe(1)
})

test("Removing an item from the inventory", ()=>{
    const itemToRemove = {id:0,name:"Sword"}
    let inventory = [itemToRemove]

    inventory = removeItem(inventory,itemToRemove)
    expect(inventory.length).toBe(0)
})