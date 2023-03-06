<script setup>
import CardList from '../components/CardList.vue'
import Welcome from '../components/Welcome.vue'
import CardShowcase from '../components/CardShowcase.vue'
import Distributors from '../components/Distributors.vue'
import WhyUs from '../components//WhyUs.vue'
</script>

<template>
    <div class="containter">
        <div class="welcome">
            <Welcome />
        </div>
        <div class="whyus">
            <WhyUs />
        </div>
        <div class="showcase">
            <h2>NUDIMO VAM</h2>
            <CardShowcase />
        </div>
        <div class="divider">
        <h2>DISTRIBUTERI</h2>
            <Distributors />
        </div>
        <div class="products">
            <h2>POPULARNO</h2>
            <CardList /> 
        </div>
    </div>

</template>

<style scoped>
    .container{
        padding: 2rem;
    }
   .showcase{
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding-bottom: 4rem;
    }
    .divider{
        border-top: 1px solid rgba(0, 0, 0, 0.08);
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        padding-bottom: 2rem;
    }
    .whyus{
        padding: 5rem;
    }
    .products{
        padding-top: 2rem;
    }
</style>

