<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import GFPPomocnik from './components/GFPPomocnik.vue'

export default{
    components: {
            Navbar,
            Footer,
            GFPPomocnik
    },
    data() {
        return {
           mode: 'dark' 
        }

    }
}

</script>

<template>
  <div :class="mode">
  <div  >
  <section>
      <Navbar />
  </section>

  </div>
    <div id="main">
    <GFPPomocnik class="gfppomocnik" />
    <router-view>
    </router-view>
    </div>
    <section>
       <Footer /> 
    </section>

  </div>
</template>


<style>
    #main{
        min-height: 100vh;
    }
    *{
        box-sizing: border-box;
    }
    .gfppomocnik{
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 999;
    }
    .myMsg{
        text-align: right;
        margin-left: .5rem;
        width: 80%;
        padding: 1rem;
        background-color: #EBF2FF;
        border-radius: 20px;
        overflow-wrap: break-word;
        margin-bottom: .8rem;
    }
    .myMsg p{
        font-size: 16px;
        margin: 0;
    }
    
    :root{
        /*font-family: Overpass,Helvetica,sans-serif;*/
        font-family: 'Roboto',sans-serif;
        line-height: 1.5;
        font-weight: 400;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        --screen-max-width: 1376px;
        --bg: rgb(244,245,247);
        --bg-lighter: #fff;
        --htext: rgb(33,53,71);
        --text: rgb(33,53,71);
        --swiper-pagination-color: #fff;
        --swiper-pagination-bullet-size: .5rem;
        --swiper-pagination-progressbar-bg-color: rgba(0, 0, 0, .5);
        --swiper-pagination-bullet-inactive-opacity: 0.5;
        --swiper-navigation-color: #fff;
        --link-highlight: #fff;
        --btn-background: rgba(255, 130, 0, 1);
        --orange: #FF8200;
        --nav-bg-a: rgba(255, 130, 0, 1); 
        --btn-text: #fff;
        --card-bg: rgb(244,245,247);
        --card-hover: #fff;
        --divider: rgba(84, 84, 84, .48);
        --hidden: 0;
        --h1-size: 4.5rem;
        --h2-size: 3.25rem;
        --h3-size: 1.5rem;

    }
    .labelit{
        font-size: calc(var(--h3-size) - 4px);
        font-weight: 600;
        margin-bottom: 2rem;
    }
    .row{
            display: flex;
            border: 1px solid rgba(0, 0, 0, .1);
            padding: .5rem;
            font-weight: 500;
        }
    b{
        color: var(--text);
    }
    li{
        color: var(--text);
    }
    .techspecs_title{
        background-color: var(--orange);
        font-size: 1.2rem;
        text-align: center;
    }
    strong{
        color: var(--text)
    }
    th{
        color: var(--text)
    }
    .techspecs_subheader{
        font-weight: 700;
        line-height: 2.5rem;
        text-align: center;
        background-color: rgba(255, 255, 255, .7);
        color: var(--text);
    }
    .techspecs_desc{
        color: var(--text);
        background-color: rgba(255, 255, 255, .7);
        font-weight: 700;
    }
    h3{
        color: var(--text);
    }
    .techspecs_value{
        color: var(--text);
        opacity: .7;
        background-color: rgba(255, 255, 255, .7);

    }
    /*
    tbody{
        background-color: grey;
        border-radius: 10px;
    }
    */
    td{
        padding: .2rem;
        border-radius: 5px;
    }
    .icon-light{
        fill: none;
    }
    .icon{
      fill: var(--text);      
    }
    h1 {
        font-size: var(--h1-size);
        font-weight: 800;
        line-height: 1.5;
        color: var(--text);
    }
    h2{
        font-size: var(--h2-size);
        font-weight: 800;
        color: var(--text);
        line-height: 1.3;
    }
    a {
        font-weight: 400;
        font-size: 0.85rem;
        color: var(--text);
        text-decoration: inherit;
        
    }
    a:hover {
        color: var(--link-highlight);
        /*
        background-position: left;
        */
    }
    p{
        color: var(--text);
    }
    body {
        margin: 0;
        min-height: 100vh; 
        background-color: var(--bg);
    }
    #about-btn{
        color: var(--btn-text);
        background-color: var(--btn-background);
    }
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        color: var(--btn-text);
        background-color: var(--btn-background);
        cursor: pointer;
        transition: border-color 0.25s;
    }
    button:hover {
        border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
    #app {
        margin: 0 auto; 
        text-align: center;
    }
/*
    @media (prefers-color-scheme: light){

        :root{
            --bg: #1a1a1a;
            --text: rgba(235, 235, 235, .6);
            --htext: rgba(255, 255, 255, .87);
            --bg-lighter: rgb(26,26,26);
            --link-highlight: #535bf2;
            --nav-bg-a: #242424; 
            --btn-text: rgba(255, 255, 255, .87); 
            --btn-background: rgba(255, 130, 0, 1);
            --divider: rgba(84, 84, 84, .48);
            --card-bg: #242424;
            --card-hover: rgba(255, 255, 255, .87); 
        }
    }
    */
    @media screen and (max-width: 1455px){
        :root{
            --h2-size: 2rem;
        }
    }
    @media screen and (max-width: 1080px) {
        :root{
            --h1-size: 3.5rem; 
            --h3-size: 1rem;
        }
    }
    @media screen and (max-width: 900px) {
        :root{
            --h1-size: 3rem; 
            --swiper-navigation-size: 30px;
            --h3-size: 1rem;
        }
    }
    @media screen and (max-width: 420px) {
        :root{
            --h1-size: 2rem; 
            --h3-size: 1rem;
        }
    }

</style>
