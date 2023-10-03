<script>
import speechBubble from '../assets/svgs/speechBubble2.svg'
import quickShot from '../assets/products/Masine za zavrsne radove u gradjevinarstvu/Masine za farbanje-krecenje/Ultra QuickShot Airless Sprayer/cq5dam.web.1280.1280.jpeg'
import reactor3 from '../assets/products/hidroizolacija/reaktori/Reaktor3EXP2/cq5dam.web.1280.1280.jpeg'
import reactorE8p from '../assets/products/hidroizolacija/reaktori/Reaktor E-8P/cq5dam.web_.1280.1280.jpeg'
import fusionPreConnect from '../assets/products/hidroizolacija/reaktori/Dodatna oprema/fusionProConnect.jpeg'
import pftSwingL from '../assets/products/Masine za zavrsne radove u gradjevinarstvu/Masine za nanosenje glet mase/PFT SWING L 230V/pft_swing_l.jpg'
import mixerFlatmix from '../assets/products/Masine za zavrsne radove u gradjevinarstvu/Masine za malterisanje/Mixer/MIXER FLATMIX 100 atomizing set/3B03205000.jpg'

import test from '../assets/svgs/test.svg'

export default{
    data() {
        return {
            speechBubble: speechBubble,
            quickShot: quickShot,
            reactor3: reactor3,
            reactorE8p: reactorE8p,
            fusionPreConnect: fusionPreConnect,
			pftSwingL: pftSwingL,
			mixerFlatmix: mixerFlatmix,
            test: test
        }
    },
}

</script>

<template>
<div>
    <div class="bar">
        <img class="img" :src="test" alt="">
    </div>
    <div class="container">
    <div class="flex-class">
        <router-link :to="`/products/farbanje-krecenje/QuickShot Airless Sprayer`">
        <div class="left">
            <img class="showcase-img" :src="this.quickShot" alt="">
        </div>
        </router-link>
        <div class="right">
            <router-link :to="`/products/farbanje-krecenje/QuickShot Airless Sprayer`">
                <h3>ULTRA QuickShot Airless Sprayer</h3>
            </router-link>
            <div class="bar2"></div>
            <p>Ultra QuickShot je revolucionarna tehnologija, dizajnirana da pruži viši kvalitet i brže rezultate. Napravljen za savršenu završnu obradu bez vazduha, dok praktično eliminiše pljuvanje. Napravljen sa ekstremnom kontrolom prskanja za brzo podešavanje pritiska za svaku primenu.</p>
        </div>
    </div>
    <div class="flex-class flex-2">
        <div class="right">
            <router-link :to="`/products/reaktori/Reactor 3 E-XP2`">
            <h3>Reactor 3 E-XP2</h3>
            </router-link>
            <div class="bar2"></div>
            <p>Reactor 3 E-XP2 je sistem poliuree napravljen za kupce koji traže mašinu sa više izlaza i mogućnosti. Idealan je za upotrebu na srednjim i velikim poslovima i aplikacijama. E-XP2 je idealna mašina koja može biti radni konj vaše flote, sposobna da se nosi sa većinom vrsta poslova sa dobrom kombinacijom izlazne snage, toplote i karakteristika.</p>
        </div>
        <router-link :to="`/products/reaktori/Reactor 3 E-XP2`">
        <div class="left">
            <img class="showcase-img" :src="this.reactor3" alt="">
        </div>
        </router-link>
    </div>
    <div class="flex-class">
        <router-link :to="`/products/reaktori/Reactor E-8P, Fusion AP Gun, 240 V`">
        <div class="left">
            <img class="showcase-img" :src="this.reactorE8p" alt="">
        </div>
        </router-link>
        <div class="right">
        <router-link :to="`/products/reaktori/Reactor E-8P, Fusion AP Gun, 240 V`">
            <h3>Reactor E-8P</h3>
        </router-link>
            <div class="bar2"></div>
            <p>Prenosivi višekomponentni raspršivač Reactor E-8P nudi mobilnost i efikasnost koji su vam potrebni za obavljanje poslova punjenja spojeva malih i srednjih veličina sa lakoćom. Sa lakom kontrolom i mogućnošću pumpanja direktno iz kanta za materijal od pet galona, Reactor E-8P može vam pomoći da smanjite radno vreme i troškove rada.</p>
        </div>
    </div>
    <div class="flex-class flex-2">
        <div class="right">
            <router-link :to="`/products/dodatna-oprema/Fusion ProConnect`">
            <h3>Fusion ProConnect</h3>
            </router-link>
            <div class="bar2"></div>
            <p>Revolucionarni Fusion PC (ProConnect) pištolj, koji sadrži sve-u-jednom glavu kertridža koja zamenjuje više pojedinačnih delova dela tečnosti sa jednom komponentom. Jednostavna zamena kertridža u potpunosti eliminiše potrebu za dugotrajnom tradicionalnom rekonstrukcijom, zadržavajući vas da prskate i minimizirajući skupe zastoje.</p>
        </div>
        <router-link :to="`/products/dodatna-oprema/Fusion ProConnect`">
        <div class="left">
            <img class="showcase-img" :src="this.fusionPreConnect" alt="">
        </div>
        </router-link>
    </div>
    <div class="flex-class">
        <router-link :to="`/products/gletovanje/PFT SWING L 230V`">
        <div class="left">
            <img class="showcase-img" :src="this.pftSwingL" alt="">
        </div>
        </router-link>
        <div class="right">
        <router-link :to="`/products/gletovanje/PFT SWING L 230V`">
            <h3>PFT SWING L 230V</h3>
        </router-link>
            <div class="bar2"></div>
            <p>Dostavne pumpe vrše transport materijala do preradnog mesta na gradilištu. PFT pumpe za isporuku su pogodne za obradu svih gotovih suvih maltera na bazi kreča/cementa koji se mogu pumpati, kao i vlažnih proizvoda, materijala sličnih pastama i tečnih medija. Sa SVING porodicom, PFT zadovoljava širok spektar zahteva. Tekući materijali, pogodni za pumpanje i bez rastvarača, sa veličinom zrna do 8 mm mogu se pumpati, ubrizgavati i prskati.</p>
        </div>
    </div>
	<div class="flex-class flex-2">
        <div class="right">
            <router-link :to="`/products/gletovanje/Mixer Flatmix 100`">
            <h3>Mixer Flatmix 100</h3>
            </router-link>
            <div class="bar2"></div>
            <p>Mixer Flatmix 100 je sklop velike snage specijalizovana za prskanje praškastih površinskih premaza pored proizvoda spremnih za upotrebu.</p>
        </div>
        <router-link :to="`/products/gletovanje/Mixer Flatmix 100`">
        <div class="left">
            <img class="showcase-img" :src="this.mixerFlatmix" alt="">
        </div>
        </router-link>
    </div>
    </div>
</div>
</template>

<style scoped>
.bar2{
    height: .5rem;
    background: var(--orange);
}
.container{
    max-width: var(--screen-max-width);
    margin: 0 auto;
}
.showcase-img{
    max-width: 25rem;
    max-height: 25rem;
    border-radius: .5rem;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .25);
}
.flex-class, .flex-2{
    display: flex;
    margin: 0 auto 10rem auto;
    justify-content: center;
    text-align: left;
}
.left{
    margin-right: 1rem;
    margin-left: 1rem;
    transition: all 300ms ease-in-out;
}
.left:hover{
   transform: translateY(-1rem); 
}
.right{
    width: 40%;
    margin-right: 1rem;
    margin-left: 1rem;
}
h3{
    font-family: 'Poppins', sans-serif;
    color: var(--text);
    font-weight: 800;
    letter-spacing: .2rem;
    font-size: 2rem;
    transition: all 200ms ease-in-out;
}
h3:hover{
    color: var(--orange);
}
p{
    font-family: 'Poppins', sans-serif;
    color: var(--text);
    font-weight: 500;
    font-size: 1rem;
}
.img{
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: -4vw;
}
.bar{
    position: relative;
    margin-top: 6rem;
    margin-bottom: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    background: var(--orange);
}
@media screen and (max-width: 900px){
    .left{
        width: 80%;
    }
    .right{
        width: 80%;
    }
    .left img{
        width: 100%;
    }
    .flex-class{
        flex-direction: column;
        align-items: center;
    } 
    .flex-2{
       flex-direction: column-reverse; 
        align-items: center;
    }
    .img{
        width: 60%;
    }
    .flex-class{
        margin: 0 auto 5rem auto;
    }
    .bar{
        margin-bottom: 8rem;
    }


}
@media screen and (max-width: 900px){
    h3{
        font-size: 5vw;
    }
    p{
        font-size: .8rem;
    }
}
</style>

