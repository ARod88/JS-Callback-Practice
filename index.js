const inventory = newInventory()
 move(inventory).to(0, 0)


 
 move(newImage('assets/tree.png')).withArrowKeys(200, 450)
 move(newImage('assets/pillar.png')).withArrowKeys(350, 250)
 move(newImage('assets/pine-tree.png')).withArrowKeys(450, 350)
 move(newImage('assets/crate.png')).withArrowKeys(150, 350)
 move(newImage('assets/well.png')).withArrowKeys(500, 575)
 move(newItem('assets/sword.png')).withArrowKeys(500, 555)
 move(newItem('assets/shield.png')).withArrowKeys(165, 335)
 move(newItem('assets/staff.png')).withArrowKeys(600, 250)

 const character= newImage('assets/green-character/static.gif')

 function handleDirectionChange(direction){
  if(direction === null){
      character.src = 'assets/green-character/static.gif'
  }
  if(direction === 'west'){
      character.src = 'assets/green-character/west.gif'
  }
  if(direction === 'north'){
      character.src = 'assets/green-character/north.gif'
  }
  if(direction === 'east'){
      character.src = 'assets/green-character/east.gif'
  }
  if(direction === 'south'){
      character.src = 'assets/green-character/south.gif'
  }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

