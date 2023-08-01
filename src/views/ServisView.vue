<script>
import workInProgress from '../assets/work-in-progress.png'

export default{
    data() {
        return {
            image : workInProgress
        }
    },
}

</script>

<template>
<div class="servis">
    <h2>CENOVNIK USLUGA SERVISA ZA 2023-U GODINU</h2>
<div class="flex-class">

<div class="tg-wrap">
    <div class="kontakt">
        <div>
            <h3>Kontaktirajte nas putem:</h3>
            <p>servis.gfp@gmail.com</p>
            <p>servce@gfp.rs</p>
        </div>
    </div>
    <table class="tg">
        <thead>
          <tr>
            <th class="tg-pb0m" colspan="2">Cenovnik servisnih usluga</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-7zrl">Defektaža</td>
            <td class="tg-7zrl">25e</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Čišćenje mašine</td>
            <td class="tg-7zrl">30e/sat</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Servisiranje građevinskih mašina</td>
            <td class="tg-7zrl">35e/sat</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Servisiranje industrijskih mašina</td>
            <td class="tg-7zrl">40e/sat</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Servisiranje reaktora</td>
            <td class="tg-7zrl">45e/sat</td>
          </tr>
        </tbody>
    </table>
    <table>
        <tbody>
          <tr>
            <th class="tg-7zrl" colspan="2">Sat vremena servisne uslute, na našoj lokaciji</th>
          </tr>
          <tr>
            <td class="tg-7zrl">Za građevinske mašine</td>
            <td class="tg-7zrl">35e</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Za industrijske mašine</td>
            <td class="tg-7zrl">40e</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Za servis reaktora</td>
            <td class="tg-7zrl">40e</td>
          </tr>
        </tbody>
    </table>
    <table>
        <tbody>
          <tr>
            <th class="tg-7zrl" colspan="2">Sat vremena servisne usluge nakon 17 časova i vikendom</th>
          </tr>
          <tr>
            <td class="tg-7zrl">Za građevinske mašine</td>
            <td class="tg-7zrl">50e</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Za industrijske mašine</td>
            <td class="tg-7zrl">55e</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Za servis reaktora</td>
            <td class="tg-7zrl">60e</td>
          </tr>
        </tbody>
    </table>
    <table>
        <tbody>
          <tr>
            <th class="tg-7zrl" colspan="2">Sat vremena servisne usluge na terenu, posle 17 časova</th>
          </tr>
          <tr>
            <td class="tg-7zrl">Za građevinske mašine</td>
            <td class="tg-7zrl">55e</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Za industrijske mašine</td>
            <td class="tg-7zrl">60e</td>
          </tr>
          <tr>
            <td class="tg-7zrl">Za servis reaktora</td>
            <td class="tg-7zrl">65e</td>
          </tr>
        </tbody>
    </table>
</div>
</div>
</div>
</template>

<style scoped>

.servis{
    max-width: var(--max-screen-size);
}
.kontakt{
    display: flex;
    justify-content: left;
    text-align: left;
    margin-bottom: 3rem;
}
.kontakt h3,p{
    margin-top: 0;
    margin-bottom: 0;
}
.flex-class{
    display: flex;
    justify-content: center;
}
.tg-wrap{
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
}

div{
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
}
td{
    text-align: left;
    width: 50%;
}
th{
    background: var(--orange);
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    color: #fff;
}

@media screen and (max-width: 767px) {
    .tg {
        width: auto !important;
    }
    .tg col {
        width: auto !important;
    }
    .tg-wrap {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }
}
@media screen and (max-width: 700px){
    .tg-wrap{
        width: 80%;
    }
}

</style>

