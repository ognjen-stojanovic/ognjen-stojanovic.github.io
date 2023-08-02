<template>
    <div class="search">
        <div class="inp">
            <input @blur="changeFocus" v-on:keyup.enter="onEnter" id="searchInput" type="text" v-model="searchResult" placeholder="Pretraga..."/>
            <img @click="openSearch" id="searchIcon" src="../assets/svgs/search.svg" alt="">
        </div>
        <div v-if="searchResult && filteredProducts.length > 0" class="results">
            <div class="producs" v-for="product in filteredProducts" :key="product.id">
                <div class="search-container">

                    <a :href="$router.resolve({name: 'ProductView', params: {category: product.sub_category, name: product.title }}).href">
                        <div class="img">
                            <img :src="product.img" :alt="product.title">
                        </div>
                    </a>
                    <div>

                    <a :href="$router.resolve({name: 'ProductView', params: {category: product.sub_category, name: product.title }}).href">
                        <h3>{{product.title}}</h3>
                    </a>
                        <p>{{product.desc}}</p>
                    </div>

                </div>
                <div v-if="product.newItem" class="new-item2">
                    <img class="item" src="../assets/svgs/new-item.png" alt="">
                </div>
                <div class="divider">
                </div>
            </div>
        </div>
    </div>
        <div v-if="isShown" class="showSearchMode">
            <div class="flex-class">
                <input id="searchBaaaarMobile"  v-model="searchResult2" placeholder="Pretraga..." type="text">
                <span @click="closeSearch" id="cancel">Cancel</span>
            </div>
            <div v-if="searchResult2 && filteredProducts.length > 0" class="results2">
                <div class="producs" v-for="product in filteredProducts" :key="product.id">
                    <div class="search-container">
                        <a :href="$router.resolve({name: 'ProductView', params: {category: product.sub_category, name: product.title }}).href">
                            <div class="img">
                                <img :src="product.img" :alt="product.title">
                            </div>
                        </a>
                        <div>

                        <a :href="$router.resolve({name: 'ProductView', params: {category: product.sub_category, name: product.title }}).href">
                            <h3>{{product.title}}</h3>
                        </a>
                            <p>{{product.desc}}</p>
                        </div>

                    </div>
                    <div v-if="product.newItem" class="new-item2">
                        <img class="item" src="../assets/svgs/new-item.png" alt="">
                    </div>
                    <div class="divider">
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import { products } from '../products.js'
export default {
    data() {
        return {
            products: products,
            isShown: false,
            searchResult: '',
            searchResult2: '',
            limit: 0
        }
    },
    computed: {
        filteredProducts() {
          return this.products.filter((product, index, array) => {
                if(this.searchResult != ''){
                    return (product.title.toLowerCase().includes(this.searchResult.toLowerCase()));
                }
                if(this.searchResult2 != ''){
                    return (product.title.toLowerCase().includes(this.searchResult2.toLowerCase()));
                }
          });
        }
    },
    methods: {
       changeSearch(){
           this.searchResult = '';
       },
        onEnter(){
            let str = this.searchResult;
            this.searchResult = '';
            this.$router.push({ name: 'CategoryView', query: { qr: str } });

        },
        async changeFocus(){
            let src = document.getElementById('searchInput');
            if(src != document.activeElement){
                await new Promise(r => setTimeout(r, 500));
                this.searchResult = ''

            }
        },
        openSearch(){
            this.isShown = true
            document.body.style.overflowY = 'hidden'
        },
        closeSearch(){
            this.isShown = false
            document.body.removeAttribute('style')
        }


    },
}
</script>

<style scoped>
.products{
    display: inline-block;
}
.flex-class{
    display: flex;
    align-items: center;
    margin: .5rem;
}
span{
    font-size: 1.2rem;
    cursor: pointer;
    padding: .5rem;
}
.showSearchMode{
    display: block;
    background: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 4;
}
#searchIcon{
    width: 2.5rem;
    height: 2.5rem;
    margin: auto 1rem;
    cursor: pointer;
    display: none;
}
.producs{
    position: relative;
}
.item{
    width: 4rem;
}
.new-item2{
    position: absolute;
    left: 0;
    top: 0;
}
.divider{
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin: .5rem;
}
.results{
    position: absolute;
    text-align: left;
    max-height: 60rem;
    max-width: 40rem;
    overflow-y: auto;
    border-radius: .8rem;
    z-index: 3;
    background: #fff;
    padding: .5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}
.results2{
    position: absolute;
    text-align: left;
    max-height: 60rem;
    max-width: 40rem;
    overflow-y: auto;
    border-radius: .8rem;
    z-index: 5;
    background: #fff;
    padding: .5rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}
.search-container{
    display: flex;
    padding: 1rem;
}
.img{
    width: 8rem;
    margin-right: 1rem;
    height: 6rem;
}
img{
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}
input{
    display: block;
    width: 250px;
    margin: 20px auto;
    padding: 0.5rem 2rem 0.5rem 2.5rem;
    background: #fff;
    background-size: 1rem 1rem;
    font-size: 1rem;
    color: var(--text);
    font-family: 'Roboto', sans-serif;
    border: none;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: all .2s ease-in;
}
input:hover{
    width: 16rem;
    border: 5x auto var(--text-black);
}

@media screen and (max-width: 500px){
    #searchInput{
        display: none;
    }
    input, input:hover{
        margin: 0;
        width: 100%;
    }
    #searchIcon{
        display: block
    }
}
@media screen and (max-height: 1080px){
   .results{
        max-height: 80vh;
   } 
}

</style>
