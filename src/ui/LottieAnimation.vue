<template>
    <div ref="animationContainer" class="animation-container">

    </div>
</template>

<script lang="ts">
import lottie from 'lottie-web';

export default {
    name: 'LottieAnimation',
    animationController: null,
    props: {
        animationData: {
            type: Object,
            required: true
        },
        loop: {
            type: Boolean,
            default: true
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        onComplete: {
            type: Function,
            default: () => {}
        },
        onLoopComplete: {
            type: Function,
            default: () => {}
        }
    },
    watch: {
        animationData: function () {
            this.resetAnimation();
        }
    },
    methods: {
        setupAnimation() {
            this.animationController = lottie.loadAnimation({
                container: this.$refs.animationContainer,
                renderer: 'svg',
                loop: this.loop,
                autoplay: this.autoplay,
                animationData: this.animationData,
            });

            this.animationController.addEventListener('complete', this.onComplete);
            this.animationController.addEventListener('loopComplete', this.onLoopComplete);
        },
        destroyAnimation() {
            if(this.animationController) {
                this.animationController.destroy();
                this.animationController = null;
            }
        },
        resetAnimation() {
            this.destroyAnimation();
            this.setupAnimation();
        }
    },
    mounted() {
        this.setupAnimation();
    },
    beforeUnmount() {
        this.destroyAnimation()
    }
};
</script>

<style scoped lang="scss">

</style>