let inventory

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click',function(){
        item.remove()
        addToInventory(url)
    })
}

function addToInventory(url){
    let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)

}

function newInventory(){
    let inventoryDiv = document.createElement('div')
    inventoryDiv.style.position = 'fixed'
    inventoryDiv.style.bottom = '0px'
    inventoryDiv.style.left = '0px'
    inventoryDiv.style.width = '100%'
    inventoryDiv.style.height = '100px'
    inventoryDiv.style.display = 'flex'
    inventoryDiv.style.flexDirection = 'row'
    inventoryDiv.style.alignItems = 'center'
    inventoryDiv.style.justifyContent = 'space-evenly'
    inventoryDiv.style.border = '2px solid black'
    inventoryDiv.style.backgroundColor = 'brown'
    document.body.append(inventoryDiv)
    inventory = inventoryDiv
    return inventory 
}

newInventory()
newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)