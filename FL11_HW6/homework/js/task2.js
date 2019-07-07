const sideA = prompt('Enter length of side A','');
const sideB = prompt('Enter length of side B','');
const sideC = prompt('Enter length of side C','');
const validValue =/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/;
if(sideA.match(validValue)&&sideB.match(validValue)&&sideC.match(validValue)){   
  if(parseFloat(sideA) === parseFloat(sideB) && parseFloat(sideC)=== parseFloat(sideB)){
    console.log('Eequivalent triangle')    
  }else if(parseFloat(sideA) === parseFloat(sideB) || 
           parseFloat(sideC) === parseFloat(sideB) ||
           parseFloat(sideA) === parseFloat(sideC)) {
    console.log('Isosceles triangle') 
  }else {
    console.log('Normal triangle')
  }
}else {
  console.log('Triangle doesn’t exist')
}

