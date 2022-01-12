function findMatching(drivers,name)
{
    const newDrivers = drivers.filter(driver => driver.toLowerCase() == name.toLowerCase());
    return newDrivers;
}
function fuzzyMatch(drivers,letters)
{
    const newDrivers = drivers.filter(driver => driver[0].toLowerCase() == letters[0].toLowerCase())
    return newDrivers;
}
function matchName(drivers,names)
{
    const newDrivers = drivers.filter(driver => driver.name === names);
    return newDrivers;
}
// const drivers = ["Sammy","Bob", "Sarah", "Sally","Kelvin"];
// console.log(fuzzyMatch(drivers,'s'));