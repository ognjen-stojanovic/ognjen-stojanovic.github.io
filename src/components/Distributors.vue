<script setup>
   import Distributer from './Distributer.vue' 
</script>

<template>
    <section id="distributors">
        <div class="container">
            <Distributer name="graco" image="../../distributors/graco.png" site="https://www.graco.com/gb/en.html"/>
            <Distributer name="pft" image="../../distributors/pft.png" site="https://www.pft.net/en/"/>
            <Distributer name="mixer" image="../../distributors/mixer.png" site="https://www.mixersrl.com/en/"/>
            <Distributer name="mirka" image="../../distributors/mirka.png" site="https://www.mirka.com/en"/>
            <Distributer name="airblast" image="../../distributors/airblast.png" site="https://www.airblast.com/home/"/>
            <Distributer name="borum" image="../../distributors/borum.png" site="https://www.borum.as/"/>
            <Distributer name="stim" image="../../distributors/stim.png" site="https://www.stim.by/"/>
            <Distributer name="monti" image="../../distributors/monti.png" site="https://www.montipowerme.com/"/>
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



