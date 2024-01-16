<script setup lang="ts">

</script>

<template>
    <button class="medieval-btn"><slot></slot></button>
</template>

<style lang="scss" scoped>
.medieval-btn {
    font-family: 'MagicalSource', serif;
    font-size: 1rem;
    background-image: url("@/assets/images/button.webp");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 50px;
    width: 250px;
    border: 0;
    background-color: transparent;
}
</style>