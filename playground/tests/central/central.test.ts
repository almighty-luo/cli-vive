// 测试中心数据模块
import Central from "../../../packages/vive/central/"
import type { IOption } from "../../../packages/vive/types"
const option: IOption = {
	cmdPath: "",
	project: "",
	logType: "log",
	templatePath: ""
}
function centralTest() {
	test("adds 1 + 2 to equal 3", () => {
		expect(new Central(option)).toBe({})
	})
}

export default centralTest
