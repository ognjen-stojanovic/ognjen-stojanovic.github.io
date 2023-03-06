<script setup>
   import Distributer from './Distributer.vue' 
</script>

<template>
    <section id="distributors">
        <div class="container">
            <Distributer name="graco" image="../../distributors/graco.png"/>
            <Distributer name="pft" image="../../distributors/pft.png"/>
            <Distributer name="mixer" image="../../distributors/mixer.png"/>
            <Distributer name="mirka" image="../../distributors/mirka.png"/>
            <Distributer name="airblast" image="../../distributors/airblast.png"/>
            <Distributer name="borum" image="../../distributors/borum.png"/>
            <Distributer name="basler" image="../../distributors/basler_logo_rgb_pos.png"/>
            <Distributer name="monti" image="../../distributors/monti.png"/>
        </div>

    </section>    
</template>

<style scoped>
    #distributors{
        max-width: calc(var(--screen-max-width) - 120px);
        display: block;
        margin: 0 auto;
    }
    .container{
        max-width: 100%;
        gap: 10px 10px;
        column-gap: 4px;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(276px,1fr));
    }

</style>



