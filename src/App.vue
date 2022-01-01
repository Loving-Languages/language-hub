<template>
    <header>{{ $t('messages.appName') }}</header>
    <router-view></router-view>
    <footer></footer>
</template>

<script lang="ts">
import '@/styles/main.scss';

export default {
  name: 'App'
}
</script>

<style scoped lang="scss">
    header {
        font-family: $font-main;
        padding: 1em;
    }
</style>