<script setup>
</script>

<template>
<section>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11335.500846274166!2d20.592592954404445!3d44.74256262212766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a765955555555%3A0xb02d26bae4e83a42!2sGFP+doo!5e0!3m2!1ssr!2srs!4v1492219108366" frameborder="0"></iframe>
    <div class="container">
        <div class="kontakt">
            <h3>Kancelarija</h3>
            <p>Telefon: +381 (0)11/787-22-60</p>
            <p>Telefon: +381 (0)11/787-22-62</p>
            <p>Email: office@gfp.rs</p>
        </div>
        <div class="kontakt">
            <h3>Prodaja</h3>
            <p>Beograd tel: +381 (0)60 63-43-002</p>
            <p>Centralna i Južna Srbija tel: +381 (0)60 70-08-787</p>
            <p>Vojvodina tel: +381 (0)64 84-92-615</p>
            <p>CG, HR i SLO tel: +381 (0)63 81-49-997</p>
            <p>Bosna i Hercegovina tel: +387 (0)62 67-49-45</p>
            <p>Makedonija tel: +389 (0) 72 85-98-59</p>
        </div>
        <div class="kontakt">
            <h3>Nabavka</h3>
            <p>Telefon: +381 (0)60/41-59-928</p>
       </div>
        <div class="kontakt">
            <h3>Servis</h3>
            <p>Telefon: +381 (0)64/849-26-12</p>
            <p>Email: servis.gfp@gmail.com</p>
       </div>
    </div>
</section>
</template>

<style scoped>
    h3{
        font-size: 24px;
    }
    p{
        /*color: rgba(60, 60, 60, .7); */
        overflow-wrap: break-word;
        margin: 0;
        font-size: 20px;
    }
    section{
        max-width: var(--screen-max-width);
        margin: 0 auto;
    }
    .map{
        width: 100%;
        height: 300px;
    }
    .container{
        max-width: var(--screen-max-width);
        display: grid;
        text-align: left;
        grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
        gap: 4rem;
    }
    .kontakt{
        width: 100%;
        overflow-wrap: break-word;
    }
    @media screen and (max-width: 600px){
       .kontakt{
            width: 70%;
       } 
    }
</style>


