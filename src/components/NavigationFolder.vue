<template>
    <div class="nav-item">
        <div class="nav-title">
            <a>{{ $t(navigationItem.title) }}</a>
        </div>

        <div class="nav-children">
            <div class="pages">
                <div class="nav-item nav-page" v-for="[curi, page] in Object.entries(navigationItem.pages)">
                    <router-link :to="`${uri}/${curi}`">{{ $t(page.attributes.title) }}</router-link>
                </div>
            </div>

            <navigation-folder v-for="[curi, subfolder] in Object.entries(navigationItem.children)" :navigation-item="subfolder" :uri="`${uri}/${curi}`" />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'NavigationFolder',
    props: {
        navigationItem: {
            type: Object,
            default: {}
        },
        uri: {
            type: String,
            default: ''
        },
        subfolder: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
    }
};
</script>

<style scoped lang="scss">
    .nav-children {
        margin-left: 1em;
    }
</style>