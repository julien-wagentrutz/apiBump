"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identityController = void 0;

var _formateRequest = require("../../utils/formateRequest.js");

var _openAI = require("../../utils/openAI.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var identityController = {
  generate: function generate(req, res) {
    var identity, rep;
    return regeneratorRuntime.async(function generate$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            identity = [];

            if (!(index % 3 == 0)) {
              _context2.next = 5;
              break;
            }

            _context2.next = 4;
            return regeneratorRuntime.awrap(identityController.sleep(60005));

          case 4:
            rep = new Promise(function (resolve, reject) {
              return forms.items.forEach(function _callee(item, index) {
                var ctx, data, question, response;
                return regeneratorRuntime.async(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        ctx = (0, _formateRequest.getCtx)(item.id);
                        data = (0, _formateRequest.getRequestFromJSON)(item);
                        question = "Avec ces informations donner moi juste et uniquement une liste sans rien d'autre que des tags qui repr\xE9sente la/le ".concat(item.id, " de cette marque");
                        _context.next = 5;
                        return regeneratorRuntime.awrap((0, _openAI.chatCompletion)([{
                          role: "user",
                          content: ctx
                        }, {
                          role: "user",
                          content: "Voici les questions et r\xE9ponses du clients \xE0 un formulaire qu'on lui \xE0 envoy\xE9 pour d\xE9f\xE9nir sa/son ".concat(item.id, " : \n ").concat(data)
                        }, {
                          role: "user",
                          content: question
                        }]));

                      case 5:
                        response = _context.sent;
                        identity = [].concat(_toConsumableArray(identity), [{
                          id: item.id,
                          data: response
                        }]);

                        if (index == forms.items.length - 1) {
                          resolve("finish");
                        }

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                });
              });
            }).then(function () {
              res.status(200).json(identity);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  sleep: function sleep(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
};
exports.identityController = identityController;
var forms = {
  "id": "identity",
  "items": [{
    "id": "physique",
    "items": [{
      "type": "text",
      "question": "Quels sont les éléments visuels, formes, couleurs qui permettent d’identifier votre restaurant ?",
      "answer": " Notre logo emblématique comprend les célèbres arches dorées formant un 'M'. C'est l'un des symboles les plus reconnaissables dans le domaine de la restauration."
    }, {
      "type": "color",
      "question": "quels sont les couleur qui définisent votre marque",
      "answer": '["#FF0000", "#FFC72C"]'
    }]
  }, {
    "id": "personality",
    "items": [{
      "type": "text",
      "question": "Si votre restaurant était une personne quelle seraient ses principales qualités ?",
      "answer": "Accessible, Rapide, Consistant, Innovant, Familial, Responsable, Varié, Engagé"
    }, {
      "type": "range",
      "range_start": 0,
      "range_end": 10,
      "question": "Informel / Formel",
      "answer": 4.5
    }, {
      "type": "range",
      "range_start": 0,
      "range_end": 10,
      "question": "Rustique / Contemporain",
      "answer": 7
    }, {
      "type": "range",
      "range_start": 0,
      "range_end": 10,
      "question": "Amical / Professionnel",
      "answer": 6
    }, {
      "type": "range",
      "range_start": 0,
      "range_end": 10,
      "question": "décontracté / raffiné",
      "answer": 3
    }, {
      "type": "range",
      "range_start": 0,
      "range_end": 10,
      "question": "Convivial / Luxe",
      "answer": 2
    }, {
      "type": "checkbox",
      "question": "Quelle est l’ambiance générale qui correspond le mieux à votre établissement ? ",
      "answer": "Décontractée et conviviale"
    }, {
      "type": "checkbox",
      "question": "Quels type de plats votre restaurant mettra-t-il en avant ? ",
      "answer": "Cuisine internationale"
    }, {
      "type": "checkbox",
      "question": "Comment souhaitez-vous que vos clients se sentent lorsqu’ils quittent votre restaurant ?",
      "answer": "Satisfait et rassasiés "
    }, {
      "type": "checkbox",
      "question": "Quel niveau de personnalité souhaitez-vous offrir à vos clients ? ",
      "answer": "Proposer une expérience de dégustation unique pour chaque table "
    }, {
      "type": "checkbox",
      "question": "Comment voulez-vous que votre restaurant soit perçu par les clients potentiels ? ",
      "answer": "Comme un lieu convivial familiale"
    }]
  }, {
    "id": "culture",
    "items": [{
      "type": "text",
      "question": "Quelles sont les valeurs que vous souhaitez transmettre à travers votre restaurant ?",
      "answer": "Accessibilité, Qualité, Famille, Joie, Service, Responsabilité, Innovation"
    }, {
      "type": "checkbox",
      "question": "Si votre restaurant était une personne, quelles seraient ses valeurs principales ?",
      "answer": "Qualité, respect, responsabilité"
    }, {
      "type": "text",
      "question": "Si vous deviez choisir un slogan pour votre restaurant, que serait-il ? ",
      "answer": "I’m lovin’ it"
    }, {
      "type": "text",
      "question": "Si vous pouviez inviter une personnalité célèbre à dîner dans votre restaurant, qui choisiriez-vous et pourquoi ? ",
      "answer": "Nous souhaitons offrir une expérience agréable et accessible à tous nos clients, quelles que soient leurs affiliations ou leur statut."
    }, {
      "type": "checkbox",
      "question": "Quels sont les trois mots que vous souhaitez que les clients associent à votre restaurant ? ",
      "answer": "Qualité, convivialité, innovation"
    }]
  }]
};