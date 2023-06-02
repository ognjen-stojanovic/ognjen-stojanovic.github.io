<script setup>
</script>

<template>
       <section class="ourValues">

           <h2>NAŠE VREDNOSTI</h2>
            <div class="container">
               <div class="item">
                   <div class="text-item">
                       <img src="../assets/svgs/dostupnost.svg" alt="">
                       <div class="divider"></div>
                       <h3>
                            Dostupnost i ekspeditivnost
                       </h3> 
                       <p>
                           Često se dešava da nakon radnog vremena izlazimo u susret našim klijentima i vršimo isporuku delova, jer razumemo situaciju u kojoj posao ne može da čeka da prođe vikend. Dostupni smo uvek na telefon, a ponosni smo na ekspeditivnost naših zaposlenih.
                       </p>
                   </div>
                   <div class="circle"></div>
               </div>
               <div class="item">
                   <div class="text-item">
                       <img src="../assets/svgs/tehnicko.svg" alt="">
                       <div class="divider"></div>
                       <h3>
                            Tehničko znanje
                       </h3> 
                       <p>
                           Posedujemo veliko tehničko znanje mašina i opreme i spremni smo da savetujemo naše klijente sa velikim strpljenjem. Za svaku prodatu mašinu besplatno vršimo obuku rada na mašini, čime otklanjamo mogucnost nepravilnog rukovanja na mašini.
                       </p>
                   </div>
                   <div class="circle"></div>
               </div>
               <div class="item">
                   <div class="text-item">
                       <img src="../assets/svgs/mobilnost.svg" alt="">
                       <div class="divider"></div>
                       <h3>
                           Mobilnost i pristupačnost
                       </h3> 
                       <p>
                            Kompanija je pozicionirana u južnom delu Beograda, ali nedaleko od obilaznice što omogućava dolazak svih vrsta volzila iz bilo kojeg pravca u regionu.
                       </p>
                   </div>
                   <div class="circle"></div>
               </div>
               <div class="item">
                   <div class="text-item">
                       <img src="../assets/svgs/pokrivenost.svg" alt="">
                       <div class="divider"></div>
                       <h3>
                           Regionalna pokrivenost
                       </h3> 
                       <p>
                           Naša prodajna i servisna mreža seže do skoro svih delova regiona. Aktivno radimo u Srbiji, Crnoj Gori, Bosni i Hercegovini, Makedoniji i Albaniji.
                       </p>
                   </div>
                   <div class="circle"></div>
               </div>
            </div>
       </section>
</template>

<style scoped>
    .container{
        display: grid;        
        max-width: var(--screen-max-width);
        align-self: center;
        margin: 0 auto;
        gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(310px,1fr));
    }
    .divider{
        border: 1px solid rgba(0, 0, 0, .1);
        margin-top: .5rem;
        margin-bottom: .5rem;
    }
    .text-item{
        padding: 1.5rem;
        min-height: 17.5rem;
        background: #fff;
        border-radius: 30px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .1);
    }
    p{
        font-size: 0.8rem;
        line-height: 1rem;
        margin: .5rem 0 0 0;
        text-align: center;
    }
    h3{
        text-align: center;
        margin: 0;
    }
    .item{
        padding: 0 1rem;
    }
    img{
        display: flex;
        margin: 0 auto;
    }
    .circle{
        margin: 20px auto;
        width: 200px;
        height: 30px;
        background: rgba(0, 0, 0, .1);
        border-radius: 50%;
    }
    @media screen and (max-width: 400px){
        .container{
            grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
            gap: 10px;
        }
        .circle{
            display: none;
        }
    }
</style>


