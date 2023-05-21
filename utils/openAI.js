import { openai } from "../config/openAI.js"

export default async function chatCompletion(_messages, _options = {}) {

	const config = {
		model: "gpt-3.5-turbo",
	}
	setTimeout(async() => {
		const response = await openai.createChatCompletion({...config,messages: [..._messages],..._options});
		return response
	}, 30000)
}