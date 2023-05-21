import { openai } from "../config/openAI.js"

export default function chatCompletion(_messages, _options = {}) {

	const config = {
		model: "gpt-3.5-turbo",
	}
	const pro = new Promise((resolve) => {
		setTimeout(() => {resolve({'f':"fff"}), 3000});
	})
	return pro
}