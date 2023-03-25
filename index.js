// const inventory = newInventory()
//  move(inventory).to(0, 0)

const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')

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

 
//  move(newImage('assets/tree.png')).withArrowKeys(200, 450)
//  move(newImage('assets/pillar.png')).withArrowKeys(350, 250)
//  move(newImage('assets/pine-tree.png')).withArrowKeys(450, 350)
//  move(newImage('assets/crate.png')).withArrowKeys(150, 350)
//  move(newImage('assets/well.png')).withArrowKeys(500, 575)
//  move(newItem('assets/sword.png')).withArrowKeys(500, 555)
//  move(newItem('assets/shield.png')).withArrowKeys(165, 335)
//  move(newItem('assets/staff.png')).withArrowKeys(600, 250)

//  const character= newImage('assets/green-character/static.gif')

//  function handleDirectionChange(direction){
//   if(direction === null){
//       character.src = 'assets/green-character/static.gif'
//   }
//   if(direction === 'west'){
//       character.src = 'assets/green-character/west.gif'
//   }
//   if(direction === 'north'){
//       character.src = 'assets/green-character/north.gif'
//   }
//   if(direction === 'east'){
//       character.src = 'assets/green-character/east.gif'
//   }
//   if(direction === 'south'){
//       character.src = 'assets/green-character/south.gif'
//   }
// }

move(character).withArrowKeys(100, 250, handleDirectionChange)



// const character = newImage('assets/green-character/static.gif')
// let direction = null;
// let x = 100;
// let y = 250;

// if(direction === 'west'){
//     x = x - 1
// }
// if(direction === 'north'){
//     y = y + 1
// }
// if(direction === 'east'){
//     x = x + 1
// }
// if(direction === 'south'){
//     y = y - 1
// }
// character.style.left = x + 'px'
// character.style.bottom = y + 'px'

// move(character).to(100, 250)



// move(newImage('assets/tree.png')).to(200, 450)
// move(newImage('assets/pillar.png')).to(350, 250)
// move(newImage('assets/pine-tree.png')).to(450, 350)
// move(newImage('assets/crate.png')).to(150, 350)
// move(newImage('assets/well.png')).to(500, 575)
// move(newItem('assets/sword.png')).to(500, 555)
// move(newItem('assets/shield.png')).to(165, 335)
// move(newItem('assets/staff.png')).to(600, 250)
// move(newItem('assets/staff.png')).to(600, 250)



