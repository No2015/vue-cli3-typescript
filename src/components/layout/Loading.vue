<template>
  <div class="loading landing-bubbles" v-show="loading">
    <img src="@/assets/img/fruits-lemon.svg" alt="" class="ld ld-bounce">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
    @Prop() public loading!: boolean;
}
</script>

<style lang="less" scoped>
.landing-bubbles{
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    img{
        width: 64px;
        height: 64px;
        vertical-align: middle;
        margin: -32px 0 0 -32px;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
    }
}
@keyframes ld-bounce {
    0%,90% {
        animation-timing-function: linear
    }

    10% {
        animation-timing-function: cubic-bezier(0,.4,.6,1);
        -webkit-transform: translate(0%,5%) scaleY(1.1);
        transform: translate(0%,5%) scaleY(1.1)
    }

    50% {
        animation-timing-function: cubic-bezier(.4,0,1,.6);
        -webkit-transform: translate(0%,-37%) scaleY(1.1);
        transform: translate(0%,-37%) scaleY(1.1)
    }

    0%,to {
        -webkit-transform: translate(0%,30%) scaleY(.5);
        transform: translate(0%,30%) scaleY(.5)
    }

    90% {
        -webkit-transform: translate(0%,5%) scaleY(1.1);
        transform: translate(0%,5%) scaleY(1.1)
    }
}

@-webkit-keyframes ld-bounce {
    0%,90% {
        animation-timing-function: linear
    }

    10% {
        animation-timing-function: cubic-bezier(0,.4,.6,1);
        -webkit-transform: translate(0%,5%) scaleY(1.1);
        transform: translate(0%,5%) scaleY(1.1)
    }

    50% {
        animation-timing-function: cubic-bezier(.4,0,1,.6);
        -webkit-transform: translate(0%,-37%) scaleY(1.1);
        transform: translate(0%,-37%) scaleY(1.1)
    }

    0%,to {
        -webkit-transform: translate(0%,30%) scaleY(.5);
        transform: translate(0%,30%) scaleY(.5)
    }

    90% {
        -webkit-transform: translate(0%,5%) scaleY(1.1);
        transform: translate(0%,5%) scaleY(1.1)
    }
}

.ld.ld-bounce {
    -webkit-animation: ld-bounce 1s infinite;
    animation: ld-bounce 1s infinite;
}
</style>
