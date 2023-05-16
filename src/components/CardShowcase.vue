<script setup>
    
defineProps({

})
</script>

<template>
    <section class="offer">
        <h2>NUDIMO VAM</h2>
        <div class="item">
            <div class="left">
                <div class="c">
                    <div class="bg-orange"></div>
                    <img class="img" src="../assets/brza-isporuka.jpg" alt="">            
                </div>
            </div>
            <div class="right">
                <h3>BRZA ISPORUKA</h3>
                <div class="dottedLine"></div>
                <p>Kompanija GFP doo vrši isporuku robe svaki dan do <strong>12h</strong> ukoliko je roba poručena prethodni dan do <strong>14h.</strong></p>
                <p>Za narudžbe koje prelaze iznos od <strong>20.000,00 dinara</strong> obezbeđujemo besplatnu isporuku.</p>
            </div>
        </div>
        <div class="item">
            <div class="right">
                <h3>LAGER REZERVNIH DELOVA</h3>
                <div class="dottedLine"></div>
                <p>Naša komparativna prednost je u tome što imamo jedinstveni lager rezervnih i potrošnih delova za sve naše mašine.</p>
            </div>
            <div class="left">
                <div class="c">
                    <div class="bg-orange"></div>
                    <img class="img2" src="../assets/lager2.jpeg" alt="">            
                </div>
            </div>
        </div>
        <div class="item">
            <div class="left">
                <div class="c">
                    <div  class="bg-orange"></div>
                    <img class="img" src="../assets/servis.jpg" alt="">            
                </div>
            </div>
            <div class="right">
                <h3>USLUGA SERVISA</h3>
                <div class="dottedLine"></div>
                <p>Vršimo usluga servisa za sve vrste airless, membranskih i pužnih pumpi. Servisiramo mašine za malterisanje, cementnu košuljicu, obeležeavanje kolovoza, farbanje i mnoge druge.</p>
            </div>

        </div>
    </section>
</template>

<style scoped>
.offer{
    max-width: calc(var(--screen-max-width) - 10rem);
    margin: 0 auto;
    text-align: left;
}
.dottedLine{
    /*background: -o-repeating-linear-gradient(45deg,#213547,#213547 2px,transparent 2px,transparent 6px);*/
    background: repeating-linear-gradient(45deg,#213547,#213547 2px,transparent 2px,transparent 6px);
    background-position: 4px 0;
    border: 0;
    margin: 0;
    height: 4px;
    padding: .1rem;
    width: 128px;
    transition: width .1s;
}
.item{
    margin: 4rem auto;
}
h2{
    display: flex;
    justify-content: center;
}
.bg-orange{
    position: relative;
    width: 100%;
}
.bg-orange:before{
    content: "";
    width: 100%;
    position: absolute;
    height: 300px;
    border-radius: 10px;
    background: var(--orange);
    z-index: -1;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
}
.c{
    width: 100%;
}
img{
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    height: 300px;
    border: 5px solid rgba(0, 0, 0, .1);
    transition: all .2s;
}
.img{
    transform: translate(-30px, -20px);
}
.img2{

    transform: translate(30px, -20px);
}
.item{
    display: flex;
    padding: 1rem;
}
.right, .left{
    width: 40%;
    margin: 0 1rem;

}
.left{
    display: flex;
}
h3{
    margin: 0;
    color: var(--orange);
    font-size: 1.5rem;
}

@media screen and (max-width: 920px){
   .item{
       flex-direction: column;
        margin-left: 1rem;
        margin-right: 1rem;
   }
   .left, .right{
        width: 100%;
        margin: 0;
   }
}
@media screen and (max-width: 768px){
    .offer{
    }
}


</style>

