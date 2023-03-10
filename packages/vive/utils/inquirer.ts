import inquirer from "inquirer"
import type { QuestionCollection, Answers } from "inquirer"
class Inquirer {
	public inquirer = inquirer
	public questions: QuestionCollection<Answers>
	constructor(questions: QuestionCollection<Answers>) {
		this.questions = questions
	}

	public prompt() {
		return new Promise((resolve, reject) => {
			this.inquirer
				.prompt(this.questions)
				.then(answers => {
					resolve(answers)
				})
				.catch(err => {
					reject(err)
				})
		})
	}
}

export default Inquirer
