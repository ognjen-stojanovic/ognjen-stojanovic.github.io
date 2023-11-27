<script>
// import CardList from '../components/CardList.vue'
import Welcome from '../components/Welcome.vue'
import CardShowcase from '../components/CardShowcase.vue'
import Distributors from '../components/Distributors.vue'
import WhyUs from '../components//WhyUs.vue'
import CategoriesList from '../components/CategoriesList.vue'

export default {
    components: {
        Welcome, 
        CardShowcase, 
        Distributors, 
        WhyUs, 
        CategoriesList
    },
  data() {
    return {
    }
  },  
  methods: {
  },
}

</script>

<template>
    <div class="containter">
        
        <div class="welcome">
            <Welcome />
        </div>
        <div>
            <CategoriesList /> 
        </div>
        <div class="divider"></div>
        <div class="whyus">
            <WhyUs />
        </div>
        <div class="divider"></div>
        <div class="showcase">
            <CardShowcase />
        </div>
        <div class="divider"></div>
            <h2>NAŠI PARTNERI</h2>
            <p>Pogledajte naš izbor mašina.</p>
            <Distributors class="dist" />
    </div>

</template>

<style scoped>
    .pozivnica{
        max-width: 100%;
    }
    .sl{
        display: flex;
    }
    .x{
        background: rgba(0, 0, 0, .1);
        cursor: pointer;
        margin-bottom: .4rem;
        margin-top: .4rem;
        border-radius: 50%;
        padding: .3rem .8rem;
    }
    .container{
        padding: 2rem;
    }
    .welcome{
        margin-bottom: 5rem;
    }
    .dist{
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    h2{
        margin-bottom: 0;
    }
    .wrep{
        display: flex;
        justify-content: flex-end;
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
    @media screen and (max-width: 1900px){
        .pozivnica{
            max-width: 50%;
        }
        
    }
    @media screen and (max-width: 600px){
        .sl{
            flex-direction: column;
        }
        .pozivnica{
            max-width: 100%;
        }
    }
</style>

