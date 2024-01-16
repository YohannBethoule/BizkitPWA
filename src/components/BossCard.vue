<script setup lang="ts">
import {ref, watch} from "vue";
import DiceStack from "@/components/DiceStack.vue";
import {Boss} from "@/types/Boss.ts";
const { boss, dies } = defineProps<{
    boss: Boss,
    dies: Function,
    image: string
}>()

const hp = ref(boss.hp)

watch(hp, (newHP) => {
    if (newHP <= 0) {
        dies();
    }
});
</script>

<template>
    <article class="card">
        <img :src="image" alt="boss.name">
        <p class="ap">{{boss.ap}}</p>
        <p class="hp">{{hp}}</p>
        <button class="hp-btn increment" @click="hp++"></button>
        <button class="hp-btn decrement" @click="hp--"></button>
        <DiceStack v-if="boss.name==='Shenbizkit'" :dice-pressed="(checked: boolean) => {checked ? hp += 7 : hp -= 7}" :refresh="false" />
    </article>
</template>

<style lang="scss" scoped>
.card {
    position: absolute;
    height: 70dvh;

    img {
        display: block;
        width: auto;
        height: 100%;
    }

}

.hp {
    position: absolute;
    top: calc(70dvh * 0.737);
    left: calc(100% * 0.105);
    font-size: 4dvh;
    font-weight: 700;
    color: white;
    width: 8dvh;
    height: 3rem;
    text-align: center;
}

.ap {
    position: absolute;
    top: calc(50dvh * 0.731);
    left: calc(100% * 0.498);
    font-size: 2.5dvh;
    font-weight: 400;
    color: white;
}

.hp-btn {
    position: absolute;
    width: 8dvh;
    height: 8dvh;
    border: 0;
    background: transparent;
    left: 10%;

    &.increment {
        top: 64%;
    }

    &.decrement {
        top: 83%;
    }
}
</style>