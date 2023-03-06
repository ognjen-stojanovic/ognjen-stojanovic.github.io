<script setup>

</script>

<template>
    <div class="navbar">
        <header class="container">
        <span>
            <a href="/">
            <img src="../assets/logo-GFP-verysmall.png" alt="GFP logo">
            </a>
            <form action="">
                <input type="text" v-model="input" placeholder="Search">
            </form>
        </span>
        <span>
            <a href="/">Pocetna</a>
            <div class="products">
              <span class="menidown">
                  <a href="/products" class="menu">Oprema</a> 
                  <i class="fa fa-angle-down"></i>
              </span>
              <div class="dropdown-menu">
                <div class="dropdown-items">
                        <a class="head-link" href="/products/zavrsni-radovi">OPERMA ZA ZAVRSNE RADOVE U GRADJEVINARSTVU</a>
                        <div class="text-link">
                            <div class="menu-link">
                                <a href="/products/farbanje">Farbanje</a>
                            </div>    
                            <div class="menu-link">
                                <a href="/products/gletovanje">Gletovanje</a>
                            </div>    
                            <div class="menu-link">
                                <a href="/products/malterisanje">Malterisanje</a>
                            </div>    
                            <div class="menu-link">
                                <a href="/products/">Izrada kosuljica</a>
                            </div>    
                        </div>
                    <div class="divider"></div>
                        <a class="head-link" href="/products/izolacija">OPERMA ZA HIDRO I TERMO IZOLACIJU</a>
                        <div class="text-link">
                            <div class="menu-link">
                                <a href="/products/graco">Graco</a>
                            </div>    
                            <div class="menu-link">
                                <a href="/products/mixer">Mixer</a>
                            </div>    
                            <div class="menu-link">
                                <a href="/products/pft">PFT</a>
                            </div>    
                        </div>
                    <div class="divider"></div>
                    <div class="menu-link">
                        <a href="/products/metal">Oprema za zastitu metala</a>
                    </div>
                    <div class="divider"></div>
                    <div class="menu-link">
                        <a href="/products/drvo">Oprema za zastitu i farbanje drveta</a>
                    </div>
                    <div class="divider"></div>
                    <div class="menu-link">
                        <a href="/products/horizontalna-signalizacija">Oprema za horizontalnu signalizaciju</a>
                    </div>
                </div>
              </div>
            </div>
            <a href="products/akcije">Akcije</a>
            <a href="products/promocije">Promocije</a>
            <a href="/servis">Servis</a>
            <a href="/contact">Kontakt</a>
            <a href="/about">O nama</a>
            <div class="vertical-line"></div>
            <span class="icons">
                <a href="https://www.facebook.com/gfpdoo" target="_blank">
                    <i class="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/gfp_bg/" target="_blank">
                    <i class="fa fa-instagram"></i>
                </a>
            </span>
            </span>
        </header>
    </div>
</template>

<style scoped>
    /*
    .navbar{
        background-color: #fff;
    }
    */
    .container .icons a{
        margin: auto 0.5rem;
    }
    .navbar{
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        }
    .container{
        display: flex;
        margin: 0 auto;
        max-width: var(--screen-max-width);
        justify-content: space-between;
    }
    .container span a{
        display: flex;
        margin: auto 16px;
    }
    .container span{
        display: flex;
        margin: auto 16px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
    }
    input{
        display: block;
        width: 150px;
        margin: 20px auto;
        padding: 8px 30px 8px 10px;
        background: white;
        background-size: 15px 15px;
        font-size: 0.8rem;
        color: black;
        font-family: 'Roboto', sans-serif;
        border: none;
        border-radius: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        transition: all .1s linear;
    }
    input:hover{
        width: 250px;
        border: 5x auto var(--text-black);
    }
    .dropdown-menu{
        position: absolute;
        visibility: hidden;
        opacity: 0;
        justify-content: right;
        background: #fff;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 0.5rem;
        transition: all 0.2s ease-in-out;
    }
    .products:hover .dropdown-menu{
        visibility: visible;
        opacity: 1;
        position: absolute;
        display: block;
    }
    .menu-link a{
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        justify-content: left;
        font-size: 14px;
        display: flex;
        justify-content: left;
        pointer-events: auto;
    }
    .menu-link{
        border: 0;
        border-radius: 5px;
        background-color: #fff; 
    }
    .menu-link:hover{
        background-color: var(--bg-light); 
    }
    .divider{
        border-top: 1px solid rgba(0, 0, 0, 0.15);
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
    }
    .head-link{
        font-size: 12px;
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
        color: rgb(127,137,156);
        justify-content: left;
    }
    .head-link:hover{
        color: #535bf2;
    }
    .vertical-line{
        height: 18px;
        border-left: 1px solid rgba(0, 0, 0, 0.3);

    }


</style>

