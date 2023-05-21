
export default function getRequestFromJSON(jsonFile) {
	let answer = ""

	jsonFile.items.forEach((item) => {
		switch(item.type) {
			case "text":
			case "radio":
				answer+= `À la question : "${item.question}"; le client à répondu : "${item.answer}"\n`;
			break;
			case "range": 
				const choice = item.question.split('/')
				answer+= `À la question sur une l'échelle allant de ${item.range_start} à ${item.range_end}, où ${item.range_start} représente le plus ${choice[0]}  et ${item.range_start} le plus ${choice[1]}\n`;
			break;
			case "checkbox":
			case "color":
				answer+= `À la question : "${item.question}"; le client à répondu : "${JSON.parse(item.answer).join(", ")}"\n`;
			break;
		}
	})
	return answer
}
