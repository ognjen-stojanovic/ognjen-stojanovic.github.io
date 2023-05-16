
<script setup>
    
defineProps({
  image: String,
  site: String,
  name: String
})
</script>

<template>
    <a :href="site" target="_blank">
        <div class="distributor">
            <div class="selected">
                <img :src="`${image}`" alt="Image unavailable">
            </div>
        </div>    
    </a>
</template>

<style scoped>
    .distributor{
        border: 7px solid #fff;
        margin: 2px 0;
        align-items: center;
        display: flex;
        justify-content: space-around;
        border-radius: 5px;
        width: 276px;
        height: calc(276px / 2 + 10px);
        background-color: #fff;    
        padding: 0.5rem;
        transition: background-color 0.2s ease-in-out;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, .2);
    }
    .distributor:hover img{
        filter: none;
        max-width: 250px;
        max-height: calc(230px/2);
    }
    .distributor:hover{
        background-color: var(--bg);
    }
    img{
        max-width: calc(240px - 30px);
        max-height: calc(240px / 2 - 20px);
        filter: grayscale();
        transition: all 0.2s ease-in-out;
    }

</style>


