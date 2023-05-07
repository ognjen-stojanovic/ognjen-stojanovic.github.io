<script>
import Product from '../components/Product.vue'
import { products, popular } from '../products.js'

export default{
    name: "CardList",
    components: {
        Product
    },
    data() {
        return {
            input: "",
            products: popular
        }
    },  
    computed: {
    filteredProducts() {
      return this.products.filter(product =>
        (product.category == this.$route.params.category) && (product.title.toLowerCase().includes(this.input.toLowerCase()))
      );
    }
  }
}

</script>

<template>
    <div class="container">
        <div class="item" v-for="product in products" :key="product.id">
            <router-link v-bind:to="`/products/${product.product.category}/${product.product.title}`">
                <Product :product="product.product"/>            
            </router-link>
        </div>
    </div>
</template>

<style scoped>
    .container{
        max-width: var(--screen-max-width);
        margin: 0 auto;
        display: grid;
        place-items: center;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill,minmax(21rem,1fr));
    }
    .item{
        margin: 0 auto;
    }
    @media screen and (max-width: 360px){
        .container{
            padding: 0;
        }
    }
    @media screen and (max-width: 540px){
        .container{
            grid-template-columns: repeat(auto-fill,minmax(15rem,1fr));
        }
    }

</style>
