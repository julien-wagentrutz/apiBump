"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identityController = void 0;

var _ctx = _interopRequireDefault(require("../../utils/ctx.js"));

var _formateRequest = _interopRequireDefault(require("../../utils/formateRequest.js"));

var _openAI = _interopRequireDefault(require("../../utils/openAI.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var identityController = {
  generate: function generate(req, res) {
    var identity = [];
    var item = req.body;
    var ctx = (0, _ctx["default"])(item.id);
    var data = (0, _formateRequest["default"])(item);
    var question;

    if (item.id == "physique") {
      // question = `Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags, si c'est des couleurs hex donne juste les couleurs en hex sans d'autre text ni préciser à quoi elle correspond, sépraré par des points virgule qui représente la/le ${item.id} de cette marque en enlevant les synonymes, pour chacun des tags à la suite de celui ci, précise entre parenthèse pourquoi il est présent`
      question = "Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags, si c'est des couleurs hex donne juste les couleurs en hex sans d'autre text ni pr\xE9ciser \xE0 quoi elle correspond, s\xE9prar\xE9 par des points virgule qui repr\xE9sente la/le ".concat(item.id, " de cette marque en enlevant les synonymes");
    } else {
      // question = `Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags sépraré par des points virgule qui représente la/le ${item.id} de cette marque en enlevant les synonymes, pour chacun des tags à la suite de celui ci précise entre parenthèse pourquoi il est présent`
      question = "Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags s\xE9prar\xE9 par des points virgule qui repr\xE9sente la/le ".concat(item.id, " de cette marque en enlevant les synonymes");
    }

    (0, _openAI["default"])([{
      role: "user",
      content: ctx
    }, {
      role: "user",
      content: "Voici les questions et r\xE9ponses du clients \xE0 un formulaire qu'on lui \xE0 envoy\xE9 pour d\xE9f\xE9nir sa/son ".concat(item.id, " : \n ").concat(data)
    }, {
      role: "user",
      content: question
    }]).then(function (resultat) {
      res.status(200).json({
        id: item.id,
        message: resultat.data.choices[0].message.content
      });
    });
  }
};
exports.identityController = identityController;