<script>
    import { products,descriptions } from '../products.js'
    import ProductImgs from '../components/ProductImgs.vue'
    export default{
        name: "ProductView",
        components: {
            ProductImgs
        },
        data() {
            return {
                product : products.find(p => p.title === this.$route.params.name),
                description: descriptions[products.find(p => p.title === this.$route.params.name).id-1],
                currImage: "",
                details: true,
                video: false
            };
        },
        computed: {
            findProduct(){
                return products.find(p => p.title === this.$route.params.name)
            }
        },
        watch: {
            product(){
                this.product = findProduct()
            }
        },
        methods: {
            changeImage(image){
                    this.currImage = image; 
            },
            changeVisibility(id){
               if(id == 'det') {
                    this.details = true; 
                    this.video = false;
                    document.getElementById('vid').style.color = "rgba(0, 0, 0, .3)"
                    document.getElementById('det').style.color = "var(--text)"
               }else if(id == 'vid'){
                    this.details = false;
                    this.video = true;
                    document.getElementById('det').style.color = "rgba(0, 0, 0, .3)"
                    document.getElementById('vid').style.color = "var(--text)"
               }
            },
        },
        mounted() {
            this.currImage = this.product.img;

        },
    }

</script>

<template>
    <div id="product-main" class="container product-view-only">
       <div class="main-hero">
           <div class="little">
               <div class="list-images" v-for="image in description.images" :key="image.id">
                    <ProductImgs class="list-images-img" @click="changeImage(image)" :image="image" />
               </div>
           </div>
           <div class="main-product">
               <Transition>
                    <img class="current-image-shown" v-show="changeImage" :src="currImage" alt="" :key="currImage"/>
               </Transition>
           </div>
               <div class="title-text">
                   <h4>{{product.sub_category.toUpperCase()}}</h4>
                   <h2>{{this.$route.params.name}}</h2> 
                   <h5>{{product.desc}}</h5>
               </div>
       </div>
       <div class="snackbar">
           <h3 id="det" class="details" @click="changeVisibility('det')">
                Opis
           </h3> 
           <div class="vertical-line"></div>
           <h3 id="vid" class="video" @click="changeVisibility('vid')">
                Video
           </h3>
       </div>
        <div class="line"></div>
       <div v-show="video" class="video-container">
            <iframe class="content" width="960" height="540" :src="description.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div>
       <div v-show="details" class="txt" v-html="`${description.desc}`"></div>
       <div v-show="details" class="tbl" v-html="`${description.spec}`"></div>
    </div>
    
</template>

<style scoped>
.container{
    max-width: var(--screen-max-width);
    margin: 0 auto;
    padding: 2rem;
    text-align: left;
}
.v-enter-active,
.v-leave-active {
  transition: all .3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.current-image-shown{ 
    width: 420px;
    height: 320px;
    border-radius: 10px;
    box-shadow: 1px 5px 10px rgba(0, 0, 0, .2);
    transition: all .5 ease-in-out;
}
.line{
    border-top: 3px solid var(--orange);
}
.snackbar{
    display: flex;
    align-items: center;
}
.video-container{
    padding: 5rem;
    transition: all .3 ease-in-out;
}
.content{
    margin: 0 auto;
    display: flex;
}
.vertical-line{
    border-left: 3px solid rgba(0, 0, 0, .2);
    height: 3rem;
}
.video{
    font-size: 1.75rem;
    padding-left: 1rem;
    color: rgba(0, 0, 0, .3);
    cursor: pointer;
}
.details{
    font-size: 1.75rem;
    padding-right: 1rem;
    cursor: pointer;
}
.title-text{
    padding: 1rem;
    grid-area: title-text;
}
h5{
    color: var(--text);
    font-size: 1rem;
    opacity: .7;
    margin: 0;
}

.current-image-shown{
    transition: all .5 ease-in-out;
}
.current-image-shown img{ 
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all .5 ease-in-out;
}
h2{
    margin: 0;
    font-size: var(--h2-size);
    font-weight: 800;
}
h4{
    color: var(--orange);
    margin: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: fade 0.5s ease-in-out;
}

.list-images{
    padding-bottom: 1.25rem;
}
.list-images-img{
    cursor: pointer;
}
.list-images img{
    border-radius: 10px;
}
.main-hero{
    display: grid;
    gap: .5rem;
    grid-template-columns: 1fr 3fr 5fr;
    grid-template-areas: "little-images main-product title-text";

}
.little{
    grid-area: little-images;
}
.main-product{
    display: flex;
    grid-area: main-product;
    transition: all .5 ease-in-out;
}
.txt{
    transition: all .3 ease-in-out;
}
.tbl{
    transition: all .3 ease-in-out;
}


@media screen and (max-width: 1080px){
    .main-hero{
        grid-template-columns: 1fr 5fr;
        grid-template-areas: "title-text title-text" "little-images main-product";
    }
    .title-text{
        grid-column: 2;
    }
}

@media screen and (max-width: 600px){
    .current-image-shown{
        width: 250px;
        height: 180px;
    }
    .main-hero{
        grid-template-columns: 1fr;
        grid-template-areas: "title-text" "main-product" "little-images";
    }
    .title-text{
        grid-column: 1;
    }
    .little{
        display: flex;
        flex-wrap: wrap;
    }
    .list-images{
        padding-bottom: .5rem;
        padding-right: .5rem;
    }
}

</style>

