<template>
    <div class="home">
        <div class="home-card main-card">
            <lottie-animation
                ref="animation"
                :animation-data="animations[currentAnimationIndex].animationData"
                :on-complete="onAnimationCompleteCallback"
                :loop="false"
            />

            <h1>{{ $t('app.tagline') }}</h1>
        </div>
        <div class="home-card content-cards">
            <ContentCard
                class="content-card"
                v-for="card of contentCards"
                :content="$t(card.content)"
                :title="$t(card.title)"
                :img="card.img"
            />
        </div>
    </div>
</template>

<script lang="ts">
import ContentCard from '@/ui/ContentCard.vue';
import LottieAnimation from '@/ui/LottieAnimation.vue';

import TeacherSVG from 'public/icon/icons8-female-teacher.svg';
import LanguageSVG from 'public/icon/icons8-language.svg';
import AirportSVG from 'public/icon/icons8-airport.svg';

import HeartAnimationSimple from 'public/animated/icons8-heart.json';
import PrettyHeartAnimation from 'public/animated/icons8-heart-pretty.json';
import SmallHeartsAnimation from 'public/animated/icons8-small-hearts.json';

export default {
    name: 'Home',
    components: {
        ContentCard,
        LottieAnimation
    },
    data() {
        return {
            currentAnimationIndex: 0,
            animations: [
                {
                    animationData: HeartAnimationSimple,
                    delayAfter: 1000
                },
                {
                    animationData: PrettyHeartAnimation,
                    delayAfter: 0
                },
                {
                    animationData: SmallHeartsAnimation,
                    delayAfter: 3000
                }
            ],
            contentCards: [
                {
                    title: 'mkt.title.contentByProfessionalTeachers',
                    content: 'mkt.content.contentByProfessionalTeachers',
                    img: TeacherSVG
                },
                {
                    title: 'mkt.title.communicateEasily',
                    content: 'mkt.content.communicateEasily',
                    img: LanguageSVG
                },
                {
                    title: 'mkt.title.travelTheWorld',
                    content: 'mkt.content.travelTheWorld',
                    img: AirportSVG
                }
            ]
        };
    },
    methods: {
        nextAnimation() {
            if(this.currentAnimationIndex + 1 < this.animations.length) {
                this.currentAnimationIndex++;
            } else {
                this.currentAnimationIndex = 0;
            }
        },
        onAnimationCompleteCallback() {
            setTimeout(this.nextAnimation, this.animations[this.currentAnimationIndex].delayAfter);
        }
    }
};
</script>

<style scoped lang="scss">
    .home-card {
        font-family: $font-main;
        width: 100vw;
        height: 70vh;
        padding: 4em;

        &:nth-child(even) {
            background: rgba(0,0,0,0.1);
        }

        &.main-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .animation-container {
                height: 70%;
            }

            h1 {
                text-align: center;
            }
        }

        &.content-cards {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>