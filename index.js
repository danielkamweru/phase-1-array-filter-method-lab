// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
}
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.startsWith(query));
}
function matchName(drivers, nameToMatch){
return drivers.filter(drivers => drivers.name === nameToMatch)
}




