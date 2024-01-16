<script setup lang="ts">
defineProps<{
    name: string
    label: string
    modelValue: string|number
}>()

const emit = defineEmits<{
    (event: 'update:modelValue', payload: string): void;
}>()
</script>

<template>
    <div class="custom-select">
        <label :for="name">{{label}}</label>
        <select :name="name" :id="name" @change="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
            <slot></slot>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.custom-select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;

}

label {
    font-size: 2.5rem;
    font-family: 'EnchantedLand', serif;
}

select {
    width: 250px;
    height: 50px;
    border: 0;
    border-radius: 8px;
    background-color: rgba(50,50,50,0.7);
    color: white;
    font-size: 1.6rem;
    padding: 0 1rem;
    cursor: pointer;
    font-family: 'EnchantedLand', serif;

}
</style>