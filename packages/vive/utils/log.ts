class Log {
	black(text: string) {
		console.log("\033[30m" + text + "\033[0m")
		return this
	}
	red(text: string) {
		console.log("\033[31m" + text + "\033[0m")
		return this
	}
	green(text: string) {
		console.log("\033[32m" + text + "\033[0m")
		return this
	}
	yellow(text: string) {
		console.log("\033[33m" + text + "\033[0m")
		return this
	}
	blue(text: string) {
		console.log("\033[34m" + text + "\033[0m")
		return this
	}
	popurse(text: string) {
		console.log("\033[35m" + text + "\033[0m")
		return this
	}
	indigo(text: string) {
		console.log("\033[36m" + text + "\033[0m")
		return this
	}
	white(text: string) {
		console.log("\033[37m" + text + "\033[0m")
		return this
	}
}

export default Log
