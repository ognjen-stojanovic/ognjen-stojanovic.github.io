<script setup>
   import Distributer from './Distributer.vue' 
</script>

<template>
    <section id="distributors">
        <div class="container">
            <Distributer name="graco" image="../../distributors/graco.png" site="https://www.graco.com/gb/en.html"/>
            <Distributer name="pft" image="../../distributors/pft.png" site="https://www.pft.net/en/"/>
            <Distributer name="mixer" image="../../distributors/mixer.png" site=""/>
            <Distributer name="mirka" image="../../distributors/mirka.png" site=""/>
            <Distributer name="airblast" image="../../distributors/airblast.png" site=""/>
            <Distributer name="borum" image="../../distributors/borum.png" site=""/>
            <Distributer name="basler" image="../../distributors/basler_logo_rgb_pos.png" site=""/>
            <Distributer name="monti" image="../../distributors/monti.png" site=""/>
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
        place-items: center;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(276px,1fr));
    }

</style>



