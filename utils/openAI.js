import { openai } from "../config/openAI.js"

export default function chatCompletion(_messages, _options = {}) {

	const config = {
		model: "gpt-3.5-turbo",
	}
	console.log("tijidfnzif");
	return new Promise((resolve) => {
		openai.createChatCompletion({...config,messages: [..._messages],..._options}).then((res) => {
			resolve(res)
		})
	})
}