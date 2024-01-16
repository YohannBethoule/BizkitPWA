<script setup lang="ts">
import MedievalButton from "@/components/MedievalButton.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import {GameModes} from "@/types/GameMode.ts";
import {ref, watch} from "vue";
import GameTable from "@/components/GameTable.vue";

const startGame = () => {
    gameStarted.value = true;
}

const endGame = () => {
    gameStarted.value = false;
}

const selectedGameMode = ref("dungeon");
const selectedPlayerCount = ref(4);
const gameStarted = ref(false);

watch(selectedPlayerCount, (newValue) => {
    selectedPlayerCount.value = Number(newValue);
});
</script>

<template>
    <div class="game">
        <div class="options-screen" v-if="!gameStarted">
            <h1>Affrontez les Seigneurs Ethyliques du Bizkit !</h1>
            <CustomSelect name="game-mode" v-model="selectedGameMode" label="Mode de jeu">
                <option v-for="gameMode of Object.values(GameModes)" :value="gameMode.value"
                        :selected="gameMode.value === selectedGameMode">{{ gameMode.label }}
                </option>
            </CustomSelect>
            <CustomSelect name="nb-players" v-model="selectedPlayerCount" label="Nombre de joueurs">
                <option v-for="nbPlayers in 10" :value="nbPlayers" :selected="nbPlayers === selectedPlayerCount">
                    {{ nbPlayers }}
                </option>
            </CustomSelect>
            <MedievalButton class="start-btn" @click="startGame">Commencer</MedievalButton>
        </div>
        <div class="game-screen" v-else>
            <GameTable :nb-players="selectedPlayerCount" :game-mode="selectedGameMode" :go-back="endGame"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.game {
    background-image: url("@/assets/images/parchment_background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100dvh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    line-height: 3rem;
}

.options-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.start-btn {
    margin-top: 50px;
}

h1 {
    text-align: center;
    font-family: 'EnchantedLand', serif;
    font-size: 3rem;
}

.game-screen {
    height: 100dvh;
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>