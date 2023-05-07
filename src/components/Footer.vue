<script setup>
</script>

<template>
    <section class="footer">
        <footer class="cont">
            <div class="logo">
                <router-link :to="'/'">
                    <img src="../assets/logo-GFP-verysmall.png" alt="">
                </router-link>
            </div>
            <div class="pocetna">
                <div class="section">
                    <router-link :to="'/'">
                    <div>
                        <h4>Pocetna</h4>
                    </div>
                    </router-link>
                    <div>
                        <p>Vratite se na početnu stranicu.</p>
                    </div>
                </div>
            </div>
            <div class="proizvodi">
                <div class="section">
                    <router-link :to="'/products'">
                    <div>
                        <h4>Proizvodi</h4>
                    </div>
                    </router-link>
                    <div>
                        <p>Pogledajte proizvode koje nudimo.</p>
                    </div>
                </div>
            </div>
            <div class="about">
                <div class="section">
                    <router-link :to="'/about'">
                    <div>
                        <h4>O nama</h4>
                    </div>
                    </router-link>
                    <div>
                        <p>Saznajte više o nama i našoj firmi.</p>
                    </div>
                </div>
            </div>
            <div class="kontakt">
                <div class="section">
                    <router-link :to="'/contact'">
                    <div>
                        <h4>Kontakt</h4>
                    </div>
                    </router-link>
                    <div>
                        <p>Kontaktirajte nas putem emaila/telefona.</p>
                    </div>
                </div>
            </div>

        </footer>
    </section>
</template>

<style scoped>
    h4,p{
        margin: 0;
        color: #fff;
        font-size: 12px;
    }
    h4{
        font-size: 16px;
    }
    .section{
        max-width: 150px;
    }
    .footer{
        margin-top: 3rem;
        background-color: var(--orange);
    }
    .cont{
        padding-top: 1.5rem;
        padding-bottom: 1rem;
        max-width: var(--screen-max-width);
        display: grid;
        place-items: center;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
        text-align: left;
        margin: 0 auto;
    }
</style>

