"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCtx = exports.getRequestFromJSON = void 0;

var getRequestFromJSON = function getRequestFromJSON(jsonFile) {
  var answer = "";
  jsonFile.items.forEach(function (item) {
    switch (item.type) {
      case "text":
      case "checkbox":
        answer += "\xC0 la question : \"".concat(item.question, "\"; le client \xE0 r\xE9pondu : \"").concat(item.answer, "\"\n");
        break;

      case "range":
        var choice = item.question.split('/');
        answer += "\xC0 la question sur une l'\xE9chelle allant de ".concat(item.range_start, " \xE0 ").concat(item.range_end, ", o\xF9 ").concat(item.range_start, " repr\xE9sente le plus ").concat(choice[0], "  et ").concat(item.range_start, " le plus ").concat(choice[1], "\n");
        break;

      case "radio":
      case "color":
        answer += "\xC0 la question : \"".concat(item.question, "\"; le client \xE0 r\xE9pondu : \"").concat(JSON.parse(item.answer).join(", "), "\"\n");
        break;
    }
  });
  return answer;
};

exports.getRequestFromJSON = getRequestFromJSON;

var getCtx = function getCtx(ctx) {
  switch (ctx) {
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
};

exports.getCtx = getCtx;