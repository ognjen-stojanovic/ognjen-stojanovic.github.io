<script setup>
</script>

<template>
    <section class="container">
       <div class="text-item">
           <h3>
                Dostupnost i ekspeditivnost
           </h3> 
           <p>
               Često se dešava da nakon radnog vremena izlazimo u susret našim klijentima i vršimo isporuku delova, jer razumemo situaciju u kojoj posao ne može da čeka da prođe vikend. Dostupni smo uvek na telefon, a ponosni smo na ekspeditivnost naših zaposlenih.
           </p>
       </div>
       <div class="text-item">
           <h3>
                Tehničko znanje
           </h3> 
           <p>
               Posedujemo veliko tehničko znanje mašina i opreme i spremni smo da savetujemo naše klijente sa velikim strpljenjem. Za svaku prodatu mašinu besplatno vršimo obuku rada na mašini, čime otklanjamo mogucnost nepravilnog rukovanja na mašini.
           </p>
       </div>
       <div class="text-item">
           <h3>
               Mobilnost i pristupačnost
           </h3> 
           <p>
                Kompanija je pozicionirana u južnom delu Beograda, ali nedaleko od obilaznice što omogućava dolazak svih vrsta volzila iz bilo kojeg pravca u regionu.
           </p>
       </div>
       <div class="text-item">
           <h3>
               Regionalna pokrivenost
           </h3> 
           <p>
               Naša prodajna i servisna mreža seže do skoro svih delova regiona. Aktivno radimo u Srbiji, Crnoj Gori, Bosni i Hercegovini, Makedoniji i Albaniji.
           </p>
       </div>
    </section>
</template>

<style scoped>
    .container{
        display: grid;        
        max-width: calc(var(--screen-max-width) - 200px);
        align-self: center;
        margin: 0 auto;
        gap: 15px;
        text-align: left;
        grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    }
    p{
        font-size: 0.8rem;
    }
</style>


