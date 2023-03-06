<script>
import Navbar from './components/Navbar.vue'

export default{
    components: {
            Navbar
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
    <router-view>
    </router-view>

  </div>
</template>


<style>
    *{
        box-sizing: border-box;
        }
    :root{
        font-family: 'Roboto', sans-serif;
        line-height: 1.5;
        font-weight: 400;
/*
        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
 */       
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        --screen-max-width: 1376px;
        --bg-dark: rgb(26,26,26);
        --bg-light: rgb(244,245,247);
        --text-light: rgb(33,53,71);
        --text-dark: rgb(33,53,71);
        --button: rgba(255, 130, 0, 1);
        --hidden: 0;
    }
    h2{
        font-size: 50px;
        font-weight: 800;
        line-height: 1.3;
    }
    a {
        font-weight: 400;
        font-size: 14px;
        color: var(--text-dark);
        text-decoration: inherit;
    }
    a:hover {
        color: #535bf2;
    }

    body {
        margin: 0;
        /* display: flex; */
        min-width: 320px;
        min-height: 100vh; 
        color: var(--text-dark);
        background-color: var(--bg-light);
    }
    
    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        color: #fff;
        background-color: var(--button);
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
</style>
