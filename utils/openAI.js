import { openai } from "../config/openAI.js"

export const chatCompletion = async (_messages, _options = {}) => {

	const config = {
		model: "gpt-3.5-turbo",
	}
	return new Promise((resolve) => {
		setTimeout(async() => {
			const response = await openai.createChatCompletion({...config,messages: [..._messages],..._options});
			resolve(response.data.choices[0]);
		}, 30000)
	});
}