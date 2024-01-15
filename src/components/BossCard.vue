<script setup lang="ts">
import {onBeforeMount, ref, watch} from "vue";
import DiceStack from "@/components/DiceStack.vue";
const { boss, dies } = defineProps<{
    boss: Boss,
    dies: Function
}>()

const hp = ref(boss.hp)
const bossImage = ref('')

watch(hp, (newHP) => {
    if (newHP <= 0) {
        dies();
    }
});

onBeforeMount(async () => {
    if (boss.imageSource) {
        const imageModule = await import(boss.imageSource);
        bossImage.value = imageModule.default;
    }
});
</script>

<template>
    <article class="card">
        <img :src="bossImage" :alt="boss.name" />
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
    top: 74%;
    left: 11%;
    font-size: 2rem;
    font-weight: 700;
    color: white;
    width: 4rem;
    height: 3rem;
    text-align: center;
}

.ap {
    position: absolute;
    top: 52.8%;
    left: 50.2%;
    font-size: 1.2rem;
    font-weight: 400;
    color: white;
}

.hp-btn {
    position: absolute;
    width: 4rem;
    height: 4rem;
    border: 0;
    background: transparent;
    left: 12%;

    &.increment {
        top: 64%;
    }

    &.decrement {
        top: 83%;
    }
}
</style>