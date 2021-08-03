const { people, ages } = require("./people");

console.log(people, ages);

const os = require("os");

console.log(`os`, os);
console.log(os.platform(), os.homedir());
