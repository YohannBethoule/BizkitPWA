<script setup lang="ts">
import {GameModes} from "@/types/GameMode.ts";
import {allBosses} from "@/assets/data/data.js";
import {onMounted, ref, watch} from "vue";
import BossCard from "@/components/BossCard.vue";
import MedievalButton from "@/components/MedievalButton.vue";
import GameModal from "@/components/GameModal.vue";

const props = defineProps<{
    gameMode: string
    nbPlayers: number,
    goBack: Function
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
function getRandomBosses(allBosses, n) {
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
const shuffle = a => {
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
        <BossCard v-for="(boss, index) in bosses" :boss="boss" :key="boss.name" :dies="nextBoss"
                  :style="{marginTop: `${index*20}px`, marginLeft: `${index*20}px`, zIndex: 20-index}"/>
    </section>
    <MedievalButton class="btn-exit" @click="props.goBack">Quitter</MedievalButton>
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

.btn-exit {
    //position: absolute;
    //bottom: 1rem;
}

</style>