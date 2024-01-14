<script setup lang="ts">

</script>

<template>
    <h1>Bizkit Dungeon</h1>
    <h2>Affrontez les Seigneurs Ethyliques du Bizkit !</h2>
    <div class="links">
        <router-link to="/game" class="play-btn">Jouer</router-link>
        <router-link to="/rules" class="rules-link">Voir les règles</router-link>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
}
h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 2rem;
}
.links {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 1rem;
}
.play-btn {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        opacity: 0.8;
    }
}
</style>