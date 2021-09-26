<template>
    <div id="app">
        {{ msg }}
        <div id="nav">
            <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
            <router-link to="/micro1/page1">micro1 page1</router-link> |
            <router-link to="/micro1/page2">micro1 page2</router-link>
        </div>
        <router-view />
        <div id="micro-container"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { start } from 'qiankun';

export default defineComponent({
    name: 'PageApp',
    setup(props) {
        const msg = ref('hello');
        onMounted(() => {
            console.log('----', window.qiankunStarted);
            if (!window.qiankunStarted) {
                window.qiankunStarted = true;
                console.log(111);
                start();
            }
        });
        return { msg };
    }
});
</script>

<style lang="scss"></style>
