<template>
    <div id="app">
        v1.0.3
        <div id="nav">
            <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
            <router-link to="/micro1Page1">micro1 page1</router-link> |
            <router-link to="/micro1Page2">micro1 page2</router-link>
        </div>
        <router-view />
        <div id="micro-container"></div>
    </div>
</template>

<script lang="ts">
import { Button } from 'element-ui';
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { start } from 'qiankun';

export default defineComponent({
    name: 'PageApp',
    components: { 'el-button': Button },
    setup(props, { root }) {
        const msg = ref('hello');
        onMounted(() => {
            console.log('----', window.qiankunStarted);
            if (!window.qiankunStarted) {
                window.qiankunStarted = true;
                start();
            }
        });
        const toPage = (path: string) => {
            window.location.href = path;
        };
        return { msg, toPage };
    }
});
</script>

<style lang="scss"></style>
