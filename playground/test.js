var black = "\033[30m black \033[0m"
var red = "\033[31m red \033[0m"
var green = "\033[32m green \033[0m"
var yellow = "\033[33m yellow \033[0m"
var blue = "\033[34m blue \033[0m"
var popurse = "\033[35m popurse \033[0m"
var indigo = "\033[36m indigo \033[0m"
var white = "\033[37m white \033[0m"
var a = "\033[21m \033[36m indigo \033[0m \033[21m"
console.log(black, red, green, yellow, blue, popurse, indigo, white, a)
console.log("\33[c 1")
var mix = "\033[37;42m white \033[0m"
console.log(mix)

// process.stdout.write("123456")
