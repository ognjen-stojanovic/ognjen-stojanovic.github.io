<script>
export default {
  data() {
    return {
        
    }
  },  
}
</script>
<template>
    <section class="categories_list">
        <h2>GFP MAŠINE I OPREMA</h2>
        <p>Pogledajte naš izbor mašina i opremu koje dolaze sa njima</p>
        <div class="grid">
            <div class="item">
                <router-link v-bind:to="'/products/zavrsni-radovi'">
                    <img src="../assets/kategorije/zavrsni radovi3.webp" alt="">
                </router-link>
                <router-link class="h3" v-bind:to="'/products/zavrsni-radovi'">ZAVRŠNI RADOVI</router-link>
                <div class="dottedLine"></div>
                <p>Završni radovi u građevinarstvu obuhvataju različite aktivnosti kao što su malterisanje, farbanje, krečenje i slično.</p>
            </div>
            <div class="item">
                <router-link v-bind:to="'/products/zastita-metala'">
                    <img src="../assets/kategorije/metal.jpeg" alt="">
                </router-link>
                <router-link class="h3" v-bind:to="'/products/zastita-metala'">ZAŠTITA METALA</router-link>
                <div class="dottedLine"></div>
                <p>Zaštita metala je proces primene odgovarajućih metoda i materijala kako bi se sprečila korozija i oštećenja metala.</p>
            </div>
            <div class="item">
                <router-link v-bind:to="'/products/horizontalna-signalizacija'">
                    <img src="../assets/kategorije/horizontalna signalizacija.jpeg" alt="">
                </router-link>
                <router-link class="h3" v-bind:to="'/products/horizontalna-signalizacija'">HORIZONTALNA IZOLACIJA</router-link>
                <div class="dottedLine"></div>
                <p>Hidroizolacija je ključni deo završnih radova u građevinarstvu koji se odnosi na zaštitu objekta od prodora vode.</p>
            </div>
            <div class="item">
                <router-link v-bind:to="'/products/hidroizolacija'">
                    <img src="../assets/kategorije/hidroizolacija.jpg" alt="">
                </router-link>
                <router-link class="h3" v-bind:to="'/products/hidroizolacija'">HORIZONTALNA SIGNALIZACIJA</router-link>
                <div class="dottedLine"></div>
                <p>Horizontalna signalizacija predstavlja se odnosi na obeležavanje puteva, parkinga, traka i drugih površina saobraćajne infrastrukture.</p>
            </div>
            <div class="item">
                <router-link v-bind:to="'/products/zastita-drveta'">
                    <img src="../assets/kategorije/wood.jpg" alt="">
                </router-link>
                <router-link class="h3" v-bind:to="'/products/zastita-drveta'">ZAŠTITA I FARBANJE DRVETA</router-link>
                <div class="dottedLine"></div>
                <p>Zaštita metala je proces primene odgovarajućih metoda i materijala kako bi se sprečila korozija i oštećenja metala.</p>
            </div>
        </div>
    </section>    
</template>

<style scoped>
.categories_list{
    max-width: var(--screen-max-width);
    text-align: left;
    margin: 0 auto;
}
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(380px,1fr));
    place-items: center;
    gap: 2rem;
    margin-top: 2rem;
}
.dottedLine{
    /*background: -o-repeating-linear-gradient(45deg,#213547,#213547 2px,transparent 2px,transparent 6px);*/
    background: repeating-linear-gradient(45deg,#213547,#213547 2px,transparent 2px,transparent 6px);
    background-position: 4px 0;
    border: 0;
    margin: 0;
    height: 4px;
    padding: 0;
    width: 60px;
    transition: width .1s;
}
.item img{
    object-fit: cover;
    width: 100%;
    height: 14.5rem;
    border-radius: 10px;
}
.item{
    max-width: 100%;
    height: 22rem;
    padding: 1rem;
}
h2, p{
    display: flex;
    justify-content: center;
}
h2{
    margin: 0;
}

.h3{
    margin: .2rem 0;
    color: var(--orange);
    font-size: 1.17em;
    font-weight: bold;
}
.h3:hover + .dottedLine{
    width: 128px;
}
@media screen and (max-width: 768px){
    .categories_list{
        text-align: center;
    }
    .dottedLine{
        display: flex;
        margin: 0 auto;
    }
    
}
@media screen and (max-width: 375px){
    .grid{
        grid-template-columns: repeat(auto-fill,minmax(100%,1fr));
    }
}

</style>
