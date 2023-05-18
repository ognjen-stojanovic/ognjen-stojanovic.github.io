<script>

export default{
    components: {

    },

}
</script>

<template>
    <section class="hero">
        <div class="cont">
            <div class="text-wrap">
                <h1>G F P</h1>
                <!-- <h3>Svaki posao je težak, mi smo tu da vam olakšamo.</h3> -->
            </div>
            <router-link id="about-btn" v-bind:to="'/about'">
            Saznaj više
            <svg class="icon-light" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12L4 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 18L19.9375 12.0625V12.0625C19.972 12.028 19.972 11.972 19.9375 11.9375V11.9375L14 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </router-link>
        </div>
            <swiper-container class="bg"
            slides-per-view="1"
            speed="300"
            loop="true"
            :autoplay="{
                delay: 5000
            }"
            :pagination="{
              hideOnClick: false,
              clickable: true
            }" 
            navigation="true"
            virtual="true">
                <swiper-slide><img class="img" src="../assets/welcome/welcone.jpg" alt=""></swiper-slide>
                <swiper-slide><img class="img" src="../assets/welcome/servis2.jpg" alt=""></swiper-slide>
                <swiper-slide><img class="img" src="../assets/welcome/spraypaint.jpeg" alt=""></swiper-slide>
                <swiper-slide><img class="move img" src="../assets/welcome/road.jpeg" alt=""></swiper-slide>
            </swiper-container>
    </section>
</template>

<style scoped>
     .mainLogo{
        padding: 1rem;
        border-radius: 50%;
        background: #fff;
     }
     .img{
        filter: brightness(.7);
     }
     .cont{
        padding-top: 3rem;
        padding-bottom: 1.5rem;
        position: absolute;
        width: 75%;
        left: 50%;
        margin-left: -37.5%;    
        z-index: 2;
     }
     .bg{
         height: 25rem;
     }
     .bg img{
         object-fit: cover;
         width: 100%;
         height: 100%;
         position: relative;

     }
     .text-wrap{
        padding: 0.5rem;
        margin-bottom: 2rem;
        margin-top: 3rem;
        border-radius: 0.4rem;
     }
     h1 {
        border-radius: 0.4rem;
        padding: 0.3rem;
        color: #fff;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        margin-block-start: 0;
        margin-block-end: 0;
    }

    h3{
        font-weight: 500;
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: var(--h3-size);
        margin: 0 auto;
        max-width: 20rem;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
        color: #eee; 
    }
    .icon-light{
        right: 1rem;
        top: 8px;
        margin-left: 2px;
        width: 1.5em;
    }
    #about-btn {
        font-size: 1.2rem;
        display: flex;
        width: fit-content;
        justify-items: center;
        align-items: center;
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        transition: background-color .5s,color .5s;
        font-weight: 600;
        margin: 0 auto;
        padding: 0.8rem 1.5em 0.8rem 1.5em;
    }
    .containter{
        background: var(--bg-lighter);
        position: relative;
        overflow: hidden;
    }
    @media screen and (max-width: 500px){
       #about-btn{
            font-size: 1rem;
            padding: 0.5rem 1em 0.5rem 1em;
       } 
    }
</style>
