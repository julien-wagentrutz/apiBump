import getCtx from "../../utils/ctx.js";
import getRequestFromJSON from "../../utils/formateRequest.js";
import chatCompletion from "../../utils/openAI.js";

export const identityController = {
	generate: async (req, res) => {
		let identity = []
		const item = req.body
		const ctx = getCtx(item.id);
		const data = getRequestFromJSON(item)

		let question;
		if(item.id == "physique") {
			question = `Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags, si c'est des couleurs hex donne juste les couleurs en hex sans d'autre text ni préciser à quoi elle correspond, sépraré par des points virgule qui représente la/le ${item.id} de cette marque`

		} else {
			question = `Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags sépraré par des points virgule qui représente la/le ${item.id} de cette marque`
		}
		setTimeout(async() => {
			await chatCompletion([
				{role: "user", content: ctx},
				{role: "user", content: `Voici les questions et réponses du clients à un formulaire qu'on lui à envoyé pour défénir sa/son ${item.id} : \n ${data}`},
				{role: "user", content: question}
			]).then(resulat => {
				identity = [...identity,{id: item.id, data: resulat.data.choices[0].message}]
				console.log(identity);
				res.status(200).json(identity);
			})
		}, 30000)
	},
}


