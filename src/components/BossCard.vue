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
    font-family: 'EnchantedLand', serif;
    img {
        display: block;
        width: auto;
        height: 100%;
    }

}

.ap, .hp {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.hp {
    top: calc(70dvh * 0.725);
    left: calc(100% * 0.105);
    font-size: 4dvh;
    width: 8dvh;
    height: 8dvh;
}

.ap {
    top: calc(70dvh * 0.525);
    left: calc(100% * 0.47);
    font-size: 3dvh;
    width: 4dvh;
    height: 4dvh;
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