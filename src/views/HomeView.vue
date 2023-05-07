<script setup>
import CardList from '../components/CardList.vue'
import Welcome from '../components/Welcome.vue'
import CardShowcase from '../components/CardShowcase.vue'
import Distributors from '../components/Distributors.vue'
import WhyUs from '../components//WhyUs.vue'
//import KontaktForma from '../components/KontakForma.vue'

</script>

<template>
    <div class="containter">
        <div class="welcome">
            <Welcome />
        </div>
        <div class="whyus">
            <WhyUs />
        </div>
        <div class="divider"></div>
        <div class="showcase">
            <h2>NUDIMO VAM</h2>
            <CardShowcase />
        </div>
        <div class="divider"></div>
            <h2>NAŠI PARTNERI</h2>
                <p>Pogledajte naš izbor mašina.</p>
                <Distributors class="dist" />
        <div class="divider"></div>
        <div class="products">
            <h2>POPULARNO</h2>
            <p>Pogledajte izbor naših najpopularnijih mašina.</p>
            <CardList /> 
        <!-- <KontaktForma /> -->
        </div>
    </div>

</template>

<style scoped>
    .orange-container{
        background-color: #2E3192;
    }

    .container{
        padding: 2rem;
    }
    .dist{
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    h2{
        margin-bottom: 0;
    }
   .showcase{
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding-bottom: 4rem;
    }
    .divider{
        border: 1px solid rgba(0, 0, 0, 0.08);
        margin-bottom: 5rem;
        margin-top: 5rem;
    }
    .products{
        padding-top: 2rem;
    }
</style>

