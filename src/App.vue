<template>
    <header>
        <span>{{ $t('app.name') }}</span>
        <nav>
            <router-link to="/">{{ $t('nav.home') }}</router-link>
            <router-link to="/resources">{{ $t('nav.resources') }}</router-link>
        </nav>
    </header>

    <router-view></router-view>

    <footer>
        {{ $t('app.copyright', [new Date().getFullYear()]) }}
    </footer>
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
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        nav {
            a {
                margin-left: 1em;
            }
        }
    }

    footer {
        font-family: $font-main;
        text-align: center;
    }
</style>