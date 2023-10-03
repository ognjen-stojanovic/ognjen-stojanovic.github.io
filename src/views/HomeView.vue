<script>
// import CardList from '../components/CardList.vue'
import Welcome from '../components/Welcome.vue'
import CardShowcase from '../components/CardShowcase.vue'
import Distributors from '../components/Distributors.vue'
import WhyUs from '../components//WhyUs.vue'
import CategoriesList from '../components/CategoriesList.vue'
import img from '../../public/img1.jpg'
import img2 from '../../public/img2.jpg'

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
        imageBg: img,
        imageNis: img2
    }
  },  
    mounted() {
        let d = document.getElementById('dialog');
        d.showModal();
    },
  methods: {
    closeDialog(){
        let d = document.getElementById('dialog');
        d.close();
    }
  },
}

</script>

<template>
    <div class="containter">
        
        <dialog id="dialog">
            <div class="wrep">
                <div @click="closeDialog" id="closeDialog" class="x">x</div>
            </div>
            <div class="sl">
                <img class="pozivnica" :src="this.imageNis" alt="">
                <img class="pozivnica" :src='this.imageBg' alt="">
            </div>
        </dialog>
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
    dialog{
        border: none !important;
        padding: 0 !important;
        border-radius: 10px;
        box-shadow: 0 2px 0 2px rgba(0, 0, 0, 0.1);
    }

dialog:-internal-dialog-in-top-layer::backdrop {
    position: fixed;
    inset: 0px;
    background: rgba(0, 0, 0, 0.3);
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

