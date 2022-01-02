<template>
    <div class="content-card">
        <img :src="img" :alt="title" />
        <h3 class="title">{{title}}</h3>
        <p class="content">{{content}}</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ContentCard',
    props: {
        img: String,
        title: String,
        content: String
    }
};
</script>

<style scoped lang="scss">
    .content-card {
        background: rgba(255,255,255,1);
        border-radius: 0.5em;
        padding: 1em;
        width: 25em;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 60%;
        }

        .title {
            text-align: center;
            margin-bottom: 1em;
        }

        .content {
            width: 100%;
        }
    }
</style>