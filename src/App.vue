<template>
    <div id="app">
        v1.0.1
        <div id="nav">
            <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
            <el-button type="text" @click="toPage('/micro1/page1')">micro1 page1</el-button> |
            <el-button type="text" @click="toPage('/micro1/page2')">micro1 page2</el-button>
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
