// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push(name);
  return drivers;
}
function destructivelyPrependDriver(name){
   drivers.unshift(name);
  return drivers;
}
function destructivelyRemoveLastDriver(name){
   drivers.pop(name);
  return drivers;
}
function destructivelyRemoveFirstDriver(name){
   drivers.shift(name);
  return drivers;
}
function appendDriver(name){
  femaledriver = drivers.slice();
  femaledriver.push(name);
  return femaledriver;
}
function preppendDriver(name){
  femaledriver = drivers.slice();
  femaledriver.unshift(name);
  return femaledriver;