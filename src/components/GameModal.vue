<script setup lang="ts">
import MedievalButton from "@/components/MedievalButton.vue";

const { btnText, onExit } = defineProps<{
    btnText: string,
    onExit: () => void
}>()
</script>

<template>
<div class="modal">
    <div class="modal-content">
        <p><slot></slot></p>
        <MedievalButton @click="onExit">{{btnText}}</MedievalButton>
    </div>
</div>
</template>

<style scoped>
.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
}

.modal-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: white;
    padding: 2rem;
    font-size: 2rem;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px; /* or any desired width */
    margin: 0 auto;
}
</style>