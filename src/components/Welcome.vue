<script setup>
    import { onMounted, onUnmounted } from 'vue';

      onMounted(() => {
      });

      onUnmounted(() => {
      });
</script>

<template>
        <!-- <div class="containter"> -->
            <!-- <img class="worker" src="../assets/worker.jpeg" alt="construction-worker"> -->
        <!-- </div> -->
            <div class="down">
                <div class="left">
                    <div class="text-wrap">
                        <h1>
                        GIVE, FORGE, PROVIDE!
                        </h1>
                        <h3>Svaki posao je težak, mi smo tu da vam olakšamo.</h3>
                    </div>
                    <a id="about-btn" href="/about">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12L4 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    Saznaj više
                    </a>
                    </div>

            </div>
</template>

<style scoped>
     .down{
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
     }
     .text-wrap{
        padding: 0.5rem;
        margin-bottom: 2rem;
        margin-top: 3rem;
        border-radius: 5px;
     }
     h1 {
        font-size: 70px;
        font-weight: 800;
        border-radius: 5px;
        padding: 0.3rem;
        margin-block-start: 0;
        margin-block-end: 0;
        color: var(--text-dark);
        background-clip: text;
    }
    .worker{
        position: relative;
        left: 0px;
        height: 200px;
        object-fit: cover;
        width: 100%;
    }
    .containter{
        position: relative;
        overflow: hidden;
    }

    .color-letter{
        font-size: 70px;
        font-weight: 800;
        background-image:  repeating-linear-gradient(to top left, rgb(39, 39, 255) 50%, #002DDF 100%);
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h3{
        font-weight: 500;
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 24px;
        color: rgba(60, 60, 60, .7); 
    }
    .icon{
        display: inline;
        position: absolute;
        right: 15px;
        top: 8px;
        margin-left: 2px;
        width: 1.5em;
    }
    #about-btn {
        font-size: 16px;
        display: inline-block;
        margin-bottom: 2rem;
        border-radius: 8px;
        transition: background-color .5s,color .5s;
        position: relative;
        font-weight: 600;
        background-color: var(--button);
        color: #fff;
        margin-right: 18px;
        padding: 8px 3em 8px 1em;
    }
    .left{
        max-width: 1000px;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .wrapper{
        max-width: var(--screen-max-width);
        height: 200px;
        position: relative;
        justify-content: center;
        display: flex;
        padding: 2rem;
        border: 0;
        margin: 0 auto;
        border-radius: 5px;
        text-align: center;
    }
    .containter{
        background: #fff;
    }
</style>
