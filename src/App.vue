<script setup lang="ts">
import {onMounted} from "vue";

onMounted(() => {
    function configureScript() {
        if (typeof window.configureTracker === 'function') {
            window.configureTracker(import.meta.env.VITE_TRACKER_API_KEY, import.meta.env.VITE_TRACKER_WEBSITE_ID, import.meta.env.VITE_TRACKER_URL)
        }
    }

    const trackerScript = document.createElement('script');
    trackerScript.src = "https://cdn.jsdelivr.net/gh/YohannBethoule/glimpseguru-script@master/glimpseguru.min.js";
    trackerScript.defer = true;
    trackerScript.onload = configureScript;
    document.head.appendChild(trackerScript);
})
</script>

<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    height: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
