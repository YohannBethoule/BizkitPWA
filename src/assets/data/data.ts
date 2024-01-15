import { Boss } from '@/types/Boss.ts'

export const allBosses: Boss[] = [
    {
        "name": "arbitre",
        "surname": "",
        "hp": 20,
        "ap": 1,
        "imageSource": '../assets/images/cards/arbitre.webp'
    },
    {
        "name": "modere",
        "surname": "",
        "hp": 30,
        "ap": 2,
        "imageSource": '../assets/images/cards/modere.webp'
    },
    {
        "name": "jumeaux",
        "surname": "",
        "hp": 25,
        "ap": 2,
        "imageSource": '../assets/images/cards/jumeaux.webp'
    },
    {
        "name": "main",
        "surname": "",
        "hp": 30,
        "ap": 1,
        "imageSource": '../assets/images/cards/main.webp'
    },
    {
        "name": "poulet",
        "surname": "",
        "hp": 21,
        "ap": 3,
        "imageSource": '../assets/images/cards/poulet.webp'
    },
    {
        "name": "catin",
        "surname": "",
        "hp": 41,
        "ap": 2,
        "passive": "La catin perd 1 PV chaque fois que le poulet boit",
        "imageSource": '../assets/images/cards/catin.webp'
    },
    {
        "name": "gambit",
        "surname": "",
        "hp": 25,
        "ap": 2,
        "imageSource": '../assets/images/cards/gambit.webp'
    },
    {
        "name": "Shenbizkit",
        "surname": "Le dragon aux 7 dés de cristal",
        "hp": 7,
        "ap": 1,
        "passive": "Shenkizkit gagne 7 PV par Bizkit.",
        "imageSource": '../assets/images/cards/shenbizkit.webp'
    }
]
