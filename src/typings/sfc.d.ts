declare module '*.vue' {
    import {defineComponent} from 'vue';
    export default defineComponent;
}

declare module '*.md' {
    const markdownData : string;
    export default markdownData;
}

declare module '*.site' {
    export default string;
}