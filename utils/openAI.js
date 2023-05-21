import { Configuration, OpenAIApi } from "openai";
import * as dotenv from 'dotenv'

export default function chatCompletion(_messages, _options = {}) {

	dotenv.config()
	
	const configuration = new Configuration({
	  apiKey:"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"
	});
	
	const openai = new OpenAIApi(configuration);

	const config = {
		model: "gpt-3.5-turbo",
	}
	const data = new Promise((resolve) => {
		openai.createChatCompletion({...config,messages: [..._messages],..._options}).then((res) => {
			resolve(res)
		})
	})
	return data
}