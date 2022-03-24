<template>
    <div class="resources">
        <nav>
            <div class="nav-item category" v-for="resource in resources">
                <navigation-folder :navigation-item="resource" uri="/resources" />
            </div>
        </nav>

        <div class="content-container">
            <div class="content" v-if="currentPage" v-html="currentPage.body[$i18n.locale.split('-')[0]] || currentPage.body[$i18n.fallbackLocale.split('-')[0]]" />
        </div>

        <div class="content content-error" v-if="!currentPage">

        </div>
    </div>
</template>

<script lang="ts">
import WebpageStaticContent from 'public/content';
import NavigationFolder from '@/components/NavigationFolder.vue';

export default {
    name: 'Resources',
    components: {NavigationFolder},
    data() {
        const resources = WebpageStaticContent;

        return {
            resources,
            currentPage: null
        };
    },
    watch: {
        $route(to, from) {
            this.refreshPage();
        }
    },
    methods: {
        refreshPage() {
            if(!this.$route.params.resource) return;

            const path = this.$route.params.resource.split('/');

            let page = this.resources['/'];

            for(let i = 0; i < path.length; i++) {
                if(page.children[path[i]] !== undefined) {
                    page = page.children[path[i]];
                } else if(page.pages[path[i]] !== undefined) {
                    this.currentPage = page.pages[path[i]];
                }
            }
        }
    },
    mounted() {
        this.refreshPage();
    }
};
</script>

<style scoped lang="scss">
    .resources {
        display: flex;
        flex-direction: row;
        font-family: $font-main;

        nav {
            background: rgba(black, 0.1);
            height: 100%;
            min-width: 20em;
            padding: 0.75em;
        }

        .content-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            .content::v-deep {
                padding: 1em;
                display: flex;
                flex-direction: column;
                width: 75%;
                align-items: center;

                p, h1, h2, h3, ul {
                    width: 100%;
                }

                p, h2, h3, blockquote, ul, table {
                    margin-top: 0.5em;
                }

                blockquote {
                    width: 80%;
                    font-style: italic;
                    color: $text-light;
                }

                table {
                    width: 80%;
                    border: 1px solid black;
                    table-layout: fixed;
                    border-spacing: 0;

                    tr {
                        width: 50%;
                        margin: 0;
                    }

                    th {
                        font-weight: bold;
                    }

                    th, td {
                        padding: 0.5em;
                    }

                    tr:nth-child(even) {
                        background: rgba(black, 0.1);
                    }

                    thead {
                        tr {
                            th {
                                text-align: left;
                            }
                        }
                    }
                }
            }
        }
    }
</style>