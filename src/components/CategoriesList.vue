<script>
export default {
  data() {
    return {
        
    }
  },  
  methods: {
    openDialog(){
        let d = document.getElementById('dialog');
        d.showModal();
    },
    closeDialog(){
        let d = document.getElementById('dialog');
        d.close();
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
                <!-- <router-link v-bind:to="'/products/zavrsni-radovi'"> -->
                    <img id="mainImg" @click="openDialog" src="../assets/kategorije/zavrsniradovi3.webp" alt="">
                    <dialog id="dialog">
                    <div class="wrep">
                        <div @click="closeDialog" id="closeDialog" class="x">x</div>
                    </div>
                        <router-link class="head-link" v-bind:to="'/products/zavrsni-radovi'">ZAVRŠNI RADOVI U GRADJEVINARSTVU</router-link>
                        <div class="menu-link">
                            <router-link v-bind:to="'/products/farbanje-krecenje'">Mašine za farbanje i krečenje</router-link>
                        </div>    
                        <div class="menu-link">
                            <router-link v-bind:to="'/products/gletovanje'">Mašine za gletovanje</router-link>
                        </div>    
                        <div class="menu-link">
                            <router-link v-bind:to="'/products/malterisanje'">Mašine za malterisanje</router-link>
                        </div>    
                        <div class="menu-link">
                            <router-link v-bind:to="'/products/izrada-kosuljica'">Mašine za izradu betonske košuljice</router-link>
                        </div>    
                        <div class="menu-link">
                            <router-link v-bind:to="'/products/perdasenje'">Mašine za perdašenje</router-link>
                        </div>    
                        <div class="menu-link">
                            <router-link v-bind:to="'/products/peskarenje'">Mašine za peskarenje</router-link>
                        </div>    
                        <div class="menu-link">
                            <router-link v-bind:to="'/products/smirglanje'">Mašine šmirglanje</router-link>
                        </div>    
                        <div class="menu-link">
                            <router-link v-bind:to="'/products/univerzalne-masine'">Univerzalne mašine</router-link>
                        </div>    
                    </dialog>
                <!-- </router-link> -->
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
                <router-link v-bind:to="'/products/hidroizolacija'">
                    <img src="../assets/kategorije/hidroizolacija.jpg" alt="">
                </router-link>
                <router-link class="h3" v-bind:to="'/products/hidroizolacija'">HIDROIZOLACIJA</router-link>
                <div class="dottedLine"></div>
                <p>Hidroizolacija je ključni deo završnih radova u građevinarstvu koji se odnosi na zaštitu objekta od prodora vode.</p>
            </div>
            <div class="item">
                <router-link v-bind:to="'/products/horizontalna-signalizacija'">
                    <img src="../assets/kategorije/horizontalnasignalizacija.jpeg" alt="">
                </router-link>
                <router-link class="h3" v-bind:to="'/products/horizontalna-signalizacija'">HORIZONTALNA SIGNALIZACIJA</router-link>
                <div class="dottedLine"></div>
                <p>Horizontalna signalizacija se odnosi na obeležavanje puteva, parkinga, traka i drugih površina saobraćajne infrastrukture.</p>
            </div>
            <div class="item">
                <router-link v-bind:to="'/products/zastita-drveta'">
                    <img src="../assets/kategorije/wood.jpg" alt="">
                </router-link>
                <router-link class="h3" v-bind:to="'/products/zastita-drveta'">ZAŠTITA I FARBANJE DRVETA</router-link>
                <div class="dottedLine"></div>
                <p>Zaštita i farbanje drveta su ključni aspekti održavanja i produženja trajnosti drvenih površina.</p>
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
#mainImg{
    cursor: pointer;
}
.wrep{
    display: flex;
    justify-content: flex-end;
}
.x{
    background: rgba(0, 0, 0, .1);
    margin-bottom: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    border-radius: 50%;
    padding: .3rem .8rem;
}
.menu-link a{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    justify-content: left;
    font-size: 1.2rem;
    display: flex;
    justify-content: left;
    pointer-events: auto;
    transition: all .2s ease-in-out;
}
.menu-link{
    border: 0;
    border-radius: 5px;
    margin-top: .25rem;
    padding-left: 1rem;
    font: 0.9rem;
    /*background-color: var(--card-bg); */
    transition: all .2s ease-in-out;
}
.menu-link:hover{
    background-color: var(--nav-bg-a); 
    color: var(--link-highlight);
}
.head-link{
    font-size: 1.2rem;
    padding: 0.5rem;
    font-weight: 600;
    border-radius: 5px;
    color: var(--htext);
    justify-content: left;
    transition: all .2s ease-in-out;
}
.head-link:hover{
    background-color: var(--nav-bg-a);
    color: var(--link-highlight);
}
dialog{
    border: none !important;
    color: inherit;
    border-radius: 10px;
    padding: 0 1.5rem 1.5rem 1.5rem;
    box-shadow: 0 2px 0 2px rgba(0, 0, 0, 0.1);
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
    /*box-shadow: 0 3px 2px 0 rgba(0, 0, 0, .8);*/
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
