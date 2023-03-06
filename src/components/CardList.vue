<script setup>
import Card from './Card.vue';

</script>

<template>
    <div class="container">
        <div class="item">
            <Card title='T-Max 657' image='../../657.jpg' info='Airless uređaj za nanošenje fasadnih, dekorativnih materijala i glet mase'/>
        </div>
        <div class="item">
        <Card title='T-Max 506' image='../../506.jpg' info='Info 2'/>
        </div>
        <div class="item">
        <Card title='GX-21' image='../../GX21.jpg' info='Najmanja profesionalna mašina za krečenje'/>
        </div>
    </div>
</template>

<style scoped>
    .container{
        max-width: 900px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
        column-gap: 30px;
    }
    .item{
        margin: 0 auto;
    }

</style>
