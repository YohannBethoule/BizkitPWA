<script setup lang="ts">
import {GameModes} from "@/types/GameMode.ts";
import {allBosses} from "@/assets/data/data.js";
import {onMounted, ref, watch} from "vue";
import BossCard from "@/components/BossCard.vue";
import MedievalButton from "@/components/MedievalButton.vue";
import GameModal from "@/components/GameModal.vue";
import {Boss} from "@/types/Boss.ts";
import cardArbitre from "@/assets/images/cards/arbitre.webp";
import cardCatin from "@/assets/images/cards/catin.webp";
import cardGambit from "@/assets/images/cards/gambit.webp";
import cardJumeaux from "@/assets/images/cards/jumeaux.webp";
import cardMain from "@/assets/images/cards/main.webp";
import cardModere from "@/assets/images/cards/modere.webp";
import cardPoulet from "@/assets/images/cards/poulet.webp";
import cardShenbizkit from "@/assets/images/cards/shenbizkit.webp";
import cardEnvouteuse from "@/assets/images/cards/envouteuse.webp";
import cardAquarius from "@/assets/images/cards/aquarius.webp";
import cardRunomancien from "@/assets/images/cards/runomancien.webp";

const bossImages = {
    "arbitre": cardArbitre,
    "catin": cardCatin,
    "gambit": cardGambit,
    "jumeaux": cardJumeaux,
    "main": cardMain,
    "modere": cardModere,
    "poulet": cardPoulet,
    "aquarius": cardAquarius,
    "runomancien": cardRunomancien,
    "envouteuse": cardEnvouteuse,
    "Shenbizkit": cardShenbizkit
}

const bossesWithConstantHP = ["Shenbizkit", "catin", "aquarius"];

const props = defineProps<{
    gameMode: string
    nbPlayers: number,
    goBack: () => void
}>()

const bosses = ref<Boss[]>([]);
const isVictory = ref(false);

const initGame = () => {
    const clonedBosses = allBosses.map((boss: Boss) => {
        return {...boss}
    });
    //Create stack of bosses depending on game mode
    switch (props.gameMode) {
        case GameModes.Adventure.value: {
            initAdventure(clonedBosses);
            break;
        }
        case GameModes.Dungeon.value: {
            initDungeon(clonedBosses);
            break;
        }
        case GameModes.Pantheon.value: {
            initPantheon(clonedBosses);
            break;
        }
    }
}

const adaptBossHp = (stack: Boss[]) => {
    for (let index in stack) {
        if (props.nbPlayers === 1) {
            stack[index].hp = 1;
            continue;
        }
        if (bossesWithConstantHP.includes(stack[index].name)) {
            continue;
        }
        //Adapt bosses' HP depending on player count
        if (props.nbPlayers === 2) {
            stack[index].hp = 10;
        } else {
            stack[index].hp += (props.nbPlayers - 3) * 5;
        }
    }
    return stack;
}

const initAdventure = (clonedBosses: Boss[]) => {
    let shuffledArray = shuffle(clonedBosses);
    bosses.value = adaptBossHp(shuffledArray);
}

const initDungeon = (clonedBosses: Boss[]) => {
    let random3Bosses = getRandomBosses(clonedBosses, 3);
    bosses.value = adaptBossHp(random3Bosses)
}

const initPantheon = (clonedBosses: Boss[]) => {
    bosses.value = adaptBossHp(clonedBosses);
}

/***
 * Retrieve n random bosses data from all bosses datas
 * @param allBosses array of all bosses data
 * @param n Number of random bosses wanted
 */
function getRandomBosses(allBosses: Boss[], n: number) {
    let result = new Array(n),
        len = allBosses.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = allBosses[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
const shuffle = (a: any[]) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const nextBoss = () => {
    bosses.value = bosses.value.slice(1);
}

const endGame = () => {
    if (props.gameMode === GameModes.Adventure.value) {
        initGame();
    } else {
        isVictory.value = true;
    }
}

const exit = () => {
    if (confirm("Voulez-vous vraiment quitter la partie ?")) {
        props.goBack();
    }
}

watch(bosses, (newBosses) => {
    if (newBosses.length === 0) {
        endGame();
    }
})

onMounted(() => {
    initGame();
})
</script>

<template>
    <section class="boss-stack">
        <BossCard v-for="(boss, index) in bosses.slice(0,3)" :boss="boss" :key="boss.name" :dies="nextBoss"
                  :image="bossImages[boss.name as keyof typeof bossImages]"
                  :style="{marginTop: `${index*20}px`, marginLeft: `${index*20}px`, zIndex: 20-index}"/>
    </section>
    <MedievalButton class="btn-exit" @click="exit">Quitter</MedievalButton>
    <GameModal v-if="isVictory" btn-text="Retour" :on-exit="props.goBack">Félicitations, vous avez gagné !</GameModal>
</template>

<style scoped>
.boss-stack {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>