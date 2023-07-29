<script>
import Product from '../components/Product.vue'
import DodatnaOprema from '../components/DodatnaOprema.vue'
import { products, dodatna_oprema } from '../products.js'

export default{
    name: "CategoryView",
    components: {
        Product,
        DodatnaOprema
    },
    data() {
        return {
            input: "",
            products: products,
            dodatna_oprema: dodatna_oprema,
            category: ''
        }
    },  
    computed: {
    filteredProducts() {
      return this.products.filter(product => {
            if(this.$route.params.category != null && this.$route.query.qr == null){
                return ((product.category == this.$route.params.category) || (product.sub_category == this.$route.params.category)) && (product.title.toLowerCase().includes(this.input.toLowerCase()));
            }
            else if(this.$route.query.qr != null && this.$route.params.category == null){
                return (product.title.toLowerCase().includes(this.$route.query.qr) && (product.title.toLowerCase().includes(this.input.toLowerCase())));

            }
            else if(this.$route.query.qr == '' && this.$route.params.category == '' && this.$route.query.sponsor == null){
                    return (product && (product.title.toLowerCase().includes(this.input.toLowerCase())));

            }
            else if(this.$route.query.sponsor != null){
                return ((product.partnerName == this.$route.query.sponsor) && (product.title.toLowerCase().includes(this.input.toLowerCase())));
            }
          }
      );
    },
    filteredOprema(){
        return this.dodatna_oprema.filter(oprema => {
            if(this.$route.params.category != null || this.$route.params.category != ''){
                return (oprema.category == this.$route.params.category)
            }
        })
    },
    loaded(){
        if(this.$route.params.category != null){
            this.category = this.$route.params.category;
        }else{
            this.category = '';
        }
    }
  }
}

</script>

<template>
    <div class="container main">
        <div class="head">
            <span class="title">
                <h2 v-if="category">"{{this.category.toUpperCase()}}"</h2>
                <h2 v-else>SVE MAŠINE</h2>
            </span>
            <span class="search">
                <input type="text" v-model="input" placeholder="Pretraga">
            </span>
        </div>
        <div class="content-wrapper">
            <div class="content" v-for="product in filteredProducts" :key="product.id">
                <router-link v-bind:to="`/products/${product.sub_category}/${product.title}`">
                    <Product :product="product"/>            
                </router-link>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="content" v-for="dodatnaOprema in filteredOprema" :key="dodatnaOprema.id">
                <router-link v-bind:to="`/products/dodatna-oprema/${dodatnaOprema.name}`">
                    <DodatnaOprema :dodatnaOprema="dodatnaOprema"/>            
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .head{
        display: flex;
        max-width: calc(var(--screen-max-width) + 10rem);
        padding: 1rem;
        margin: 0 auto;
        align-items: center;
        justify-content: space-between;
    }
    input{
        display: block;
        width: 20rem;
        margin: 20px auto;
        padding: 0.5rem 2rem 0.5rem 1rem;
        background: var(--card-bg);
        background-size: 1rem 1rem;
        font-size: 0.8rem;
        color: var(--text);
        font-family: 'Roboto', sans-serif;
        border: 1px solid var(--text);
        border-radius: 0.5rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        transition: all .1s linear;
    }
    .content-wrapper{
        max-width: calc(var(--screen-max-width) + 10rem);
        display: grid;
        place-items: center;
        margin: 0 auto;
        gap: 3rem;
        grid-template-columns: repeat(auto-fill,minmax(20rem,1fr));
    }
    .prod:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 1445px){
        .head{
            display: block;
        }
    }
    @media screen and (max-width: 420px){
        .content-wrapper{
            grid-template-columns: repeat(auto-fill,minmax(17rem,1fr));
        }
        input{
            width: 150px;
        }
    }
</style>

