export const bosses = [
    {
        "name": "L'arbitre",
        "surname": "",
        "hp": 20,
        "ap": 1,
        "powerTrigger": "event",
        "powerHandler": "callback",
        "powerLabel": "Les fautes de jeu font boire 6 gorgées au lieu de 3.",
        "enrageTrigger": "event",
        "enrageHandler": "callback",
        "enrageLabel": "Si un joueur n'a pas fini de boire toutes ses gorgées avant le début de son tour, l'arbitre n'accorde plus de remise de peine. Toutes les gorgées doivent désormais être bues d'une traite.",
        "isEnraged": "false",
        "imageSource": require('../images/cards/arbitre.webp')
    },
    {
        "name": "Le modéré",
        "surname": "",
        "hp": 30,
        "ap": 2,
        "powerTrigger": "event",
        "powerHandler": "callback",
        "powerLabel": "Quand un joueur finit son verre, il distribue une gorgée.",
        "enrageTrigger": "event",
        "enrageHandler": "callback",
        "enrageLabel": "Libère tous les rôles si le poulet boit sur 10 lancées d'affilée.",
        "isEnraged": "false",
        "imageSource": require('../images/cards/modere.webp')
    },
    {
        "name": "Les jumeaux",
        "surname": "",
        "hp": 25,
        "ap": 2,
        "powerTrigger": "event",
        "powerHandler": "callback",
        "powerLabel": "Quand deux jets identiques s'enchainent, 1 gorgée pour tout le monde.",
        "enrageTrigger": "event",
        "enrageHandler": "callback",
        "enrageLabel": "Si 3 lancers identiques s'enchainent, le nombre de gorgées du pouvoir est doublé.",
        "isEnraged": "false",
        "imageSource": require('../images/cards/jumeaux.webp')
    },
    {
        "name": "Les 5 doigts de la main",
        "surname": "",
        "hp": 30,
        "ap": 1,
        "powerTrigger": "event",
        "powerHandler": "callback",
        "powerLabel": "Quand le boss perd des PV, si ses PV restants sont un multipe de 5, tous les joueurs boivent 5 gorgées.",
        "enrageTrigger": "event",
        "enrageHandler": "callback",
        "enrageLabel": "Quand un lancé fait un double 5, tous les joueurs boivent 5 gorgées.",
        "isEnraged": "false",
        "imageSource": require('../images/cards/main.webp')
    },
    {
        "name": "Le poulet",
        "surname": "",
        "hp": 21,
        "ap": 3,
        "powerTrigger": "event",
        "powerHandler": "callback",
        "powerLabel": "Le poulet distribue aussi une gorgée.",
        "enrageTrigger": "event",
        "enrageHandler": "callback",
        "enrageLabel": "Si il y a un double poulet et qu'un lancé fait double 3, c'est le double poulet qui peut distribuer 3 gorgées à la place du joueur qui a lancé.",
        "isEnraged": "false",
        "imageSource": require('../images/cards/poulet.webp')
    },
    {
        "name": "La catin",
        "surname": "",
        "hp": 41,
        "ap": 2,
        "powerTrigger": "event",
        "powerHandler": "callback",
        "powerLabel": "Les deux derniers à dire Bizkit boivent.",
        "enrageTrigger": "event",
        "enrageHandler": "callback",
        "enrageLabel": "Quand un lancé fait 4 + 1, le tour du joueur suivant est sauté.",
        "isEnraged": "false",
        "passive": "La catin perd 1 PV chaque fois que le poulet boit",
        "imageSource": require('../images/cards/catin.webp')
    },
    {
        "name": "Le gambit",
        "surname": "",
        "hp": 25,
        "ap": 2,
        "powerTrigger": "event",
        "powerHandler": "callback",
        "powerLabel": "Quand un lancé fait un double, le lanceur boit 1 gorgée.",
        "enrageTrigger": "event",
        "enrageHandler": "callback",
        "enrageLabel": "Si le Gambit meurt avec un nombre de PV exactement égal à 0, tous les joueurs boivent un cul sec.",
        "isEnraged": "false",
        "imageSource": require('../images/cards/gambit.webp')
    },
    {
        "name": "Shenbizkit",
        "surname": "Le dragon aux 7 dés de cristal",
        "hp": 7,
        "ap": 1,
        "powerTrigger": "event",
        "powerHandler": "callback",
        "powerLabel": "Quand un lancé fait un total inférieur à 7, le lanceur boit 1 gorgée.",
        "enrageTrigger": "event",
        "enrageHandler": "callback",
        "enrageLabel": "Tous les 7 Bizkits, Shenbizkit lance 7 dés et répartie le total en gorgées à boire entre tous les joueurs.",
        "isEnraged": "false",
        "passive": "Shenkizkit gagne 7 PV par Bizkit.",
        "imageSource": require('../images/cards/shenbizkit.webp')
    }
]
