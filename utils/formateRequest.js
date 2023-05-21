
export const getRequestFromJSON = (jsonFile) => {
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

export const getCtx = (ctx) => {
	switch(ctx) {
		case 'physique':
			return "Tu es un expert en identité de marque, nous fesons appel à toi pour nous aider à définir la notre. Nous cherchons à définir le physique d'un restaurant en plus de tes connaissances voici ce qu'est le physique d'une marque 'Physique : Caractéristique de la marque, ses attributs ;Il s’agit des éléments visuels et des aspects physiques représentatifs de la marque. Ce sont tous les éléments tangibles qui permettent à un consommateur d’identifier une entreprise : le logo, le packaging, les couleurs, l’univers graphique, etc. Tous ces aspects doivent bien évidemment être cohérents entre eux'";
		case 'personality':
			return "Tu es un expert en identité de marque, nous fesons appel à toi pour nous aider à définir la notre. Nous cherchons à définir la personnalité d'un restaurant en plus de tes connaissances voici ce qu'est la personnalité d'une marque 'Personnalité : Son caractère, les valeurs qu’elle met en avant;Cet élément est important à prendre en compte, car les consommateurs ne peuvent pas se reconnaître dans une entité corporative. Ils ont besoin d’éléments plus humains qui favoriseront l’identification à l’entreprise. Une marque avec une personnalité forte permettra de créer du lien avec ses potentiels clients.'";
		case 'culture':
			return "Tu es un expert en identité de marque, nous fesons appel à toi pour nous aider à définir la notre. Nous cherchons à définir la culture d'un restaurant en plus de tes connaissances voici ce qu'est la culture d'une marque 'Culture : Valeurs de la marque, ses inspirations ;La branche culture fait référence aux valeurs transmises par la marque, auxquelles le client adhère. Cet élément permet de te différencier de tes concurrents et de créer des liens forts avec tes clients.";
		case 'relation':
			return "Tu es un expert en identité de marque, nous fesons appel à toi pour nous aider à définir la notre. Nous cherchons à définir la relation d'un restaurant en plus de tes connaissances voici ce qu'est la relation d'une marque 'Relation : La façon dont les consommateurs s’identifient à la marque;Il s’agit de la nature de la relation que la marque entretient avec ses clients. Veux-tu qu’elle soit proche et conviviale comme celle de Coca-Cola ? Ou plutôt flatteuse et respectueuse comme Channel ?";
		case 'reflet':
			return "Tu es un expert en identité de marque, nous fesons appel à toi pour nous aider à définir la notre. Nous cherchons à définir le reflet d'un restaurant en plus de tes connaissances voici ce qu'est le reflet d'une marque 'Reflet : L’image de la marque dans l’esprit du consommateur ;Il s’agit de la manière dont on perçoit les clients de la marque. C’est le miroir externe de la clientèle. Il rassemble donc diverses croyances stéréotypées autour du marché cible d’une marque.";
		case 'mentalisation':
			return "Tu es un expert en identité de marque, nous fesons appel à toi pour nous aider à définir la notre. Nous cherchons à définir la mentalisation d'un restaurant en plus de tes connaissances voici ce qu'est la mentalisation d'une marque 'Mentalisation : La manière dont les consommateurs s’identifient à la marque ;Il s’agit du sentiment qu’éprouve le consommateur en venant manger chez vous. C’est le miroir interne de la marque.";
	}
}