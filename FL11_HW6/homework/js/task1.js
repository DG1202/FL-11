const a1 = +prompt('Enter coordinate a1','');
const a2 = +prompt('Enter coordinate a2','');
const b1 = +prompt('Enter coordinate b1','');
const b2 = +prompt('Enter coordinate b2','');
const c1 = +prompt('Enter coordinate c1','');
const c2 = +prompt('Enter coordinate c2','');
const half = 2;

if((a1+b1)/half === c1 && (a2+b2)/half === c2){
  console.log('true')
}else{
  console.log('false')
}
