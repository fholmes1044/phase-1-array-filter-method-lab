function findMatching(array, string){
   return array.filter(name => name.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch (array, string){
    return array.filter(name => name.toLowerCase().indexOf(string.toLowerCase())=== 0)
}

function matchName(array, string){
return array.filter(driver => driver.name === string )
}