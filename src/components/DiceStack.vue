<script setup lang="ts">

import {ref, watch} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import GameModal from "@/components/GameModal.vue";

const lineHeight0 = "44%"; // hauteur des dés les plus bas (en % depuis le top)
const lineHeight1 = "30%";  // hauteur des deux dés du milieu (en % depuis le top)
const lineHeight2 = "14%";  // hauteur des deux dés les plus hauts (en % depuis le top)
const lineHeight3 = "7%"; // hauteur du dés seul au milieu en haut (en % depuis le top)

const left0 = "20%"; // position horizontale des 1 et 3 eme dés
const left1 = "7%"; // position horizontale du 2eme dé
const left2 = "45%"; // position horizontale du 4eme dé
const left3 = "73%"; // position horizontale des 5 et 7 eme dés
const left4 = "80%"; // position horizontale du 6eme dé

const dicesData = [
    {
        index: 0,
        top: lineHeight0,
        left: left0,
        value: 1,
        checked: false
    }, {
        index: 1,
        top: lineHeight1,
        left: left1,
        value: 5,
        checked: false
    }, {
        index: 2,
        top: lineHeight2,
        left: left0,
        value: 3,
        checked: false
    }, {
        index: 3,
        top: lineHeight3,
        left: left2,
        value: 2,
        checked: false
    }, {
        index: 4,
        top: lineHeight2,
        left: left3,
        value: 4,
        checked: false
    }, {
        index: 5,
        top: lineHeight1,
        left: left4,
        value: 4,
        checked: false
    }, {
        index: 6,
        top: lineHeight0,
        left: left3,
        value: 6,
        checked: false
    },
]

const getValueName = (value: number) => {
    let name = "dice-";
    switch (value) {
        case 1:
            name += "one";
            break;
        case 2:
            name += "two";
            break;
        case 3:
            name += "three";
            break;
        case 4:
            name += "four";
            break;
        case 5:
            name += "five";
            break;
        case 6:
            name += "six";
            break;
    }
    return name;
}

const rollDices = () => {
    dices.value = dices.value.map(dice => {
        return {...dice, value: Math.floor(Math.random() * 6) + 1}
    })
    dicesSum.value = dices.value.map((item) => item.value).reduce((previousState, currentState) => previousState + currentState);
}

let interval: number;

const {dicePressed} = defineProps<{
    dicePressed: Function
}>()

const dices = ref(dicesData.map(dice => {
    return {...dice}
}))
const dicesSum = ref(0)
const isModalVisible = ref(false)
const enraged = ref(false)
const rolling = ref(false)

const toggleCheck = (index: number) => {
    dices.value[index].checked = !dices.value[index].checked;
    if (!enraged.value) dicePressed(dices.value[index].checked);
}

const resetDices = () => {
    dices.value = dices.value.map(dice => {
        return {...dice, checked: false}
    })
}

watch(dices, (newDices) => {
        const isAllChecked = dices.value.every(dice => dice.checked)
        if (isAllChecked && !rolling.value) {
            rolling.value = true;
            setTimeout(() => {
                resetDices();
                rolling.value = false
            }, 1500);
        }
        dicesSum.value = newDices.map((item) => item.value).reduce((previousState, currentState) => previousState + currentState)
    },
    {deep: true})

watch(rolling, (newRolling) => {
    if (newRolling) {
        enraged.value = true;
        interval = setInterval(rollDices, 300);
    } else {
        clearInterval(interval);
        isModalVisible.value = true;
    }
})
</script>

<template>
    <div>
        <button v-for="(dice, index) in dices" :key="dice.index" class="dice" :style="{top: dice.top, left: dice.left}"
                @click="toggleCheck(index)" :class="{'checked': dice.checked, 'rolling': rolling}">
            <font-awesome-icon :icon="['fas', getValueName(dice.value)]"/>
        </button>
        <GameModal v-if="isModalVisible" btn-text="Continuer" :on-exit="() => isModalVisible = false">{{dicesSum}} gorgées</GameModal>
    </div>
</template>

<style lang="scss" scoped>
.dice {
    position: absolute;
}

.dice {
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin-top: 1rem;
    width: 3rem;
    height: 3rem;
    opacity: 0.2;
    color: white;
    svg {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
    }

    &.checked {
        opacity: 0.9;
        color: #a40606;
        box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.75);
    }
}
</style>