<template>
    <div class="resources">
        <nav>
            <div v-for="page in navigation[navigation.length - 1].pages">
                <a @click="currentPage = page">{{ $t(page.attributes.title) }}</a>
            </div>
            <div v-for="child in navigation[navigation.length - 1].children">
                <a @click="navigation.push(child)">{{ $t(child.title) }}</a>
            </div>
        </nav>
        <div class="content" v-if="currentPage" v-html="currentPage.body" />
    </div>
</template>

<script lang="ts">
import Resources from 'public/content';

export default {
    name: 'Resources',
    data() {
        return {
            Resources,
            navigation: [Resources],
            currentPage: null
        };
    },
    methods: {

    },
    mounted() {
        console.log(Resources);
    }
};
</script>

<style scoped lang="scss">
    .resources {
        display: flex;
        flex-direction: row;
    }
</style>