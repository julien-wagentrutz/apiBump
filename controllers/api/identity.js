import getCtx from "../../utils/ctx.js";
import getRequestFromJSON from "../../utils/formateRequest.js";
import chatCompletion from "../../utils/openAI.js";

export const identityController = {
	generate: (req, res) => {
		let identity = []
		const item = req.body
		const ctx = getCtx(item.id);
		const data = getRequestFromJSON(item)

		let question;
		if(item.id == "physique") {
			// question = `Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags, si c'est des couleurs hex donne juste les couleurs en hex sans d'autre text ni préciser à quoi elle correspond, sépraré par des points virgule qui représente la/le ${item.id} de cette marque en enlevant les synonymes, pour chacun des tags à la suite de celui ci, précise entre parenthèse pourquoi il est présent`
			question = `Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags, si c'est des couleurs hex donne juste les couleurs en hex sans d'autre text ni préciser à quoi elle correspond, sépraré par des points virgule qui représente la/le ${item.id} de cette marque en enlevant les synonymes`

		} else {
			// question = `Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags sépraré par des points virgule qui représente la/le ${item.id} de cette marque en enlevant les synonymes, pour chacun des tags à la suite de celui ci précise entre parenthèse pourquoi il est présent`
			question = `Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags sépraré par des points virgule qui représente la/le ${item.id} de cette marque en enlevant les synonymes`
		}
		
		chatCompletion([
			{role: "user", content: ctx},
			{role: "user", content: `Voici les questions et réponses du clients à un formulaire qu'on lui à envoyé pour défénir sa/son ${item.id} : \n ${data}`},
			{role: "user", content: question}
		]).then((resultat) => {
			res.status(200).json({id: item.id ,message: resultat.data.choices[0].message.content});
		})
	},
}


