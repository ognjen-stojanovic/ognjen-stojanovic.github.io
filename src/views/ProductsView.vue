<script setup>
</script>

<template>
    <section class="products pad">
        <h2>MAŠINE ZA ZAVRSNE RADOVE U GRADJEVINARSTVU</h2>
        <div class="wrapper-products">
            <div class="product">
                <div class="product-name">
                    <h3>Mašine za farbanje i krečenje</h3>
                </div>
                <router-link class="link" v-bind:to="'/products/farbanje-krecenje'">
                    <div class="product-img">
                        <img src="../assets/productsview/farbanje.webp" alt="farbanje-krecenje">
                    </div>
                </router-link>

            </div>
            <div class="product">
                <div class="product-name">
                    <h3>Mašine za gletovanje</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/gletovanje.webp" alt="gletovanje">
                </div>
            </div>
            <div class="product">
                <div class="product-name">
                    <h3>Mašine za malterisanje</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/malterisanje.avif" alt="malterisanje">
                </div>
            </div>
            <div class="product">
                <div class="product-name">
                    <h3>Mašine za izradu betonske košuljice</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/estrich.webp" alt="estrich">
                </div>
            </div>
        </div>
        <div class="divider"></div>
    </section>
    <section class="products pad">
        <h2>MAŠINE ZA HIDRO I TERMO IZOLACIJU</h2>
        <div class="wrapper-products">
            <div class="product">
                <div class="product-name">
                    <h3>Graco</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/graco.jpg" alt="graco">
                </div>
            </div>
            <div class="product">
                <div class="product-name">
                    <h3>Mixer</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/mixer.jpg" alt="mixer">
                </div>
            </div>
            <div class="product">
                <div class="product-name">
                    <h3>PFT</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/pft.jpg" alt="pft">
                </div>
            </div>
        </div>
        <div class="divider"></div>
    </section>
    <section class="products pad">
        <div class="wrapper-products">
            <div class="product">
                <div class="product-name">
                    <h3>Mašine za zastitu metala</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/metal.jpeg" alt="graco">
                </div>
            </div>
            <div class="product">
                <div class="product-name">
                    <h3>Mašine za zastitu i farbanje drveta</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/wood.jpeg" alt="mixer">
                </div>
            </div>
            <div class="product">
                <div class="product-name">
                    <h3>Mašine za horizontalnu signalizaciju</h3>
                </div>
                <div class="product-img">
                    <img src="../assets/productsview/road.webp" alt="pft">
                </div>
            </div>
        </div>
        <div class="divider"></div>
    </section>
</template>

<style scoped>

.divider{
    border-bottom: 1px solid var(--divider);
}
h2{
    font-size: 2rem;
}
h3{
    color: var(--text);
}

.pad{
   padding-left: 2rem; 
   padding-right: 2rem;
}
.products{
    text-align: center;
    max-width: 1024px;
    margin: 0 auto;
}

.wrapper-products{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
    place-items: center;
    gap: .5rem;
    padding-bottom: 2rem; 
}

.product-img{
    width: 276px;
    height: calc(276px /2 + 20px);
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 2px 3px 2px rgba(0, 0, 0, .3);
}

.product-img img{
    object-fit: cover; 
    height: 100%;
    width: 100%;
    border-radius: 5px;
    transition: all .2s ease-in-out;
}
.product-img img:hover{
    width: 296px;
    height: calc(276px /2 + 30px);
    transform: translate(-5px, -5px);
    filter: contrast(1.5);
}

</style>

