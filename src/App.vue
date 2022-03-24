<template>
    <header>
        <router-link class="app-title" to="/">{{ $t('app.name') }}</router-link>
        <div class="links-and-locale">
            <nav>
                <router-link to="/">{{ $t('nav.home') }}</router-link>
                <router-link to="/resources">{{ $t('nav.resources') }}</router-link>
                <router-link to="/contributing">{{ $t('nav.contributing') }}</router-link>
            </nav>
            <select @change="changeLocale">
                <option value="es-ES">Spanish (Spain)</option>
                <option value="en-US">English (US)</option>
                <option value="de-DE">German (Germany)</option>
                <option value="fr-FR">French (France)</option>
            </select>
        </div>
    </header>

    <router-view></router-view>

    <footer>
        {{ $t('app.copyright', [new Date().getFullYear()]) }}
    </footer>
</template>

<script lang="ts">
import i18n from '@/i18n';
import '@/styles/main.scss';

export default {
    name: 'App',
    methods: {
        changeLocale(e) {
            i18n.global.locale = e.target.value;
            window.localStorage.setItem('preferredLocale', e.target.value);
        }
    }
}
</script>

<style scoped lang="scss">
    header {
        font-family: $font-main;
        padding: 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .app-title {
            text-decoration: none;
            color: black;
            font-size: 18px;
        }

        .links-and-locale {
            display: flex;
            flex-direction: row;

            nav {
                a {
                    margin-left: 1em;
                }
            }

            select {
                margin-left: 1em;
            }
        }
    }

    footer {
        font-family: $font-main;
        text-align: center;
    }
</style>