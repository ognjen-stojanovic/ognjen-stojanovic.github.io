<script>
export default{
    data() {
        return {
            input: '',
            isShown: false,
        }
    },
    methods: {
       showNavigation() {
            if(!this.isShown){
                this.isShown = true;
                const body = document.body;
                body.classList.add('body-hide');
                document.getElementById('main').style.display = "none";
            }else{
                this.isShown = false;
                const body = document.body;
                body.classList.remove('body-hide');
                document.getElementById('main').removeAttribute("style");
            }
       },
       showMore(event){
           let curr = event.currentTarget;
           let child = curr.parentNode.nextElementSibling;
           if(child.hasAttribute('hidden')){
               child.removeAttribute('hidden');
        
           }else{
               child.setAttribute('hidden', '');
           }
       },
       onEnter(){
            let str = this.input;
            this.input = '';
            this.$router.push({ name: 'CategoryView', query: { qr: str } });

       }
    },
}


</script>

<template>
    <div class="navbar">
        <header class="container">
        <span>
            <router-link v-bind:to="'/'">
                <img class="logo" src="../assets/logo-GFP-verysmall.png" alt="GFP logo">
            </router-link>
            <label for="search">
            <input type="text" v-on:keyup.enter="onEnter" name="search" v-model="input" placeholder="Pretraga">
            </label>
        </span>
        <span id="menu-icon" @click="showNavigation">
            <svg fill="#000000" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>menu</title> <path d="M1.375 9.156h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 14.625h18.063c0.781 0 1.375-0.594 1.375-1.375 0-0.75-0.594-1.344-1.375-1.344h-18.063c-0.781 0-1.375 0.594-1.375 1.344 0 0.781 0.594 1.375 1.375 1.375zM1.375 20.094h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344zM1.375 25.563h18.063c0.781 0 1.375-0.594 1.375-1.344 0-0.781-0.594-1.375-1.375-1.375h-18.063c-0.781 0-1.375 0.594-1.375 1.375 0 0.75 0.594 1.344 1.375 1.344z"></path> </g></svg>
        </span>

        <span id="nav">
            <router-link class="link" v-bind:to="'/'">POČETNA</router-link>
            <div class="products">
              <span class="menidown">
                  <router-link class="link" v-bind:to="'#'">MAŠINE I OPREMA</router-link>
                  <i class="fa fa-angle-down"></i>
              </span>
              <div class="dropdown-menu">
                <div class="dropdown-items">
                        <router-link class="head-link" v-bind:to="'/products/zavrsni-radovi'">ZAVRŠNI RADOVI U GRADJEVINARSTVU</router-link>
                        <div class="text-link">
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
                                <router-link v-bind:to="'/products/perdasenje'">Mašine termo izolaciju</router-link>
                            </div>    
                        </div>
                    <div class="divider"></div>
                        <router-link class="head-link" v-bind:to="'/products/hidroizolacija'">HIDRO IZOLACIJA</router-link>
                        <!-- <div class="text-link"> -->
                        <!--     <div class="menu-link"> -->
                        <!--         <router-link v-bind:to="'/products/graco'">Graco</router-link> -->
                        <!--     </div>     -->
                        <!--     <div class="menu-link"> -->
                        <!--         <router-link v-bind:to="'/products/mixer'">Mixer</router-link> -->
                        <!--     </div>     -->
                        <!--     <div class="menu-link"> -->
                        <!--         <router-link v-bind:to="'/products/pft'">PFT</router-link> -->
                        <!--     </div>     -->
                        <!-- </div> -->
                    <div class="divider"></div>
                    <router-link class="head-link" v-bind:to="'/products/zastita-metala'">ZAŠTITA METALA</router-link>
                    <div class="divider"></div>
                    <router-link class="head-link" v-bind:to="'/products/zastita-drveta'">ZAŠTITA I FARBANJE DRVETA</router-link>
                    <div class="divider"></div>
                    <router-link class="head-link" v-bind:to="'/products/horizontalna-signalizacija'">HORIZONTALNA SIGNALIZACIJA</router-link>
                </div>
              </div>
            </div>
            <router-link class="link" v-bind:to="'/promocije'">PROMOCIJE</router-link>
            <router-link class="link" v-bind:to="'/servis'">SERVIS</router-link>
            <router-link class="link" v-bind:to="'/contact'">KONTAKT</router-link>
            <router-link class="link" v-bind:to="'/about'">O NAMA</router-link>
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
        <div v-if="isShown" id="navigation">
            <div class="phone-nav">
                <router-link class="phone-link" v-bind:to="'/'">Početna</router-link>
                <div class="phone-divider"></div>
                <router-link class="phone-link" v-bind:to="'#'">Mašine i Oprema</router-link>
                <div class="phone-divider"></div>
                <div class="show-more phone-flex-link">
                    <router-link class="phone-link" v-bind:to="'/products/zavrsni-radovi'">ZAVRŠNI RADOVI U GRADJEVINARSTVU</router-link>
                    <svg @click="showMore($event)" class="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#000000"></path> </g></svg>
                </div>
                <div class="show-more" hidden>
                    <div class="show-more">
                        <router-link class="indent" v-bind:to="'/products/farbanje-krecenje'">Mašine za farbanje i krečenje</router-link>
                    </div>
                    <div class="show-more">
                        <router-link class="indent" v-bind:to="'/products/gletovanje'">Mašine za gletovanje</router-link>
                    </div>
                    <div class="show-more">
                        <router-link class="indent" v-bind:to="'/products/malterisanje'">Mašine za malterisanje</router-link>
                    </div>
                    <div class="show-more">
                        <router-link class="indent" v-bind:to="'/products/izrada-betonskih-kosuljica'">Mašine za izradu betonske košuljice</router-link>
                    </div>
                    <div class="show-more">
                        <router-link class="indent" v-bind:to="'/products/perdasenje'">Mašine za perdašenje</router-link>
                    </div>    

                </div>
                <div class="phone-divider"></div>
                <div class="phone-flex-link">
                    <router-link class="show-more phone-link" v-bind:to="'/products/izolacija'">HIDRO IZOLACIJA</router-link>
                    <!-- <svg @click="showMore($event)" class="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z" fill="#000000"></path> </g></svg> -->
                </div>
                <!-- <div class="show-more" hidden> -->
                <!--     <div class="show-more"> -->
                <!--         <router-link class="indent" v-bind:to="'/products/graco'">Graco</router-link> -->
                <!--     </div> -->
                <!--     <div class="show-more"> -->
                <!--         <router-link class="indent" v-bind:to="'/products/mixer'">Mixer</router-link> -->
                <!--     </div> -->
                <!--     <div class="show-more"> -->
                <!--         <router-link class="indent" v-bind:to="'/products/pft'">PFT</router-link> -->
                <!--     </div> -->
                <!-- </div> -->
                <div class="phone-divider"></div>
                <router-link class="phone-link" v-bind:to="'/products/metal'">ZAŠTITA METALA</router-link>
                <div class="phone-divider"></div>
                <router-link class="phone-link" v-bind:to="'/products/drvo'">ZAŠTITA I FARBANJE DRVETA</router-link>
                <div class="phone-divider"></div>
                <router-link class="phone-link" v-bind:to="'/products/horizontalna-signalizacija'">HORIZONTALNA SIGNALIZACIJA</router-link>
                <!-- <div class="phone-divider"></div> -->
                <!-- <router-link class="phone-link" v-bind:to="'products/akcije'">Akcije</router-link> -->
                <div class="phone-divider"></div>
                <router-link class="phone-link" v-bind:to="'products/promocije'">Promocije</router-link>
                <div class="phone-divider"></div>
                <router-link class="phone-link" v-bind:to="'/servis'">Servis</router-link>
                <div class="phone-divider"></div>
                <router-link class="phone-link" v-bind:to="'/contact'">Kontakt</router-link>
                <div class="phone-divider"></div>
                <router-link class="phone-link" v-bind:to="'/about'">O nama</router-link>
                <div class="phone-divider"></div>
            <div class="navigations">
                <span class="phone-icons">
                    <a href="https://www.facebook.com/gfpdoo" target="_blank">
                        <svg class="phone-icon2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z" fill="#000000"></path> </g></svg>
                    </a>
                    <a href="https://www.instagram.com/gfp_bg/" target="_blank">
                        <svg class="phone-icon2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z" fill="#000000"></path> </g></svg>
                    </a>
                </span>
            </div>
            </div> 
        </div>
    </div>
</template>

<style scoped>
    #navigation{
        background-color: rgba(0, 0, 0, .1);
        display: block;
        min-height: 100vh;
        text-align: left;
    }
    .phone-icon2{
        opacity: .7;
        margin-left: .5rem;
        margin-right: .5rem;
    }
    .navigations{
        display: flex;
        justify-content: center;
        padding: .5rem;
        align-items: center;
    }
    label{
        position: relative;
    }
    label:before{
        content: "";
        position: absolute;
        color: var(--text);
        left: 10px;
        top: 0;
        bottom: 0;
        width: 24px;
        background: url('../assets/svgs/search.svg') center / contain no-repeat;
    }
    .indent{
        margin-left: 1rem;
    }
    .phone-flex-link{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .phone-icon{
        color: var(--text);
        width: 16px;
    }
    .phone-divider{
        border: 1px solid rgba(0, 0, 0, .1);
        margin-top: .5rem;
        margin-bottom: .5rem;
    }
    .phone-nav{
        max-width: 420px;
        margin: 0 auto;
        border: 1px solid rgba(0, 0, 0, .2);
        background-color: var(--bg);
        border-radius: 5px;
        padding: .5rem;
    }
    .phone-link{
        font-size: 14px;
        font-weight: 500;
        color: var(--text);
    }
    .body-hide{
        overflow: hidden;
    }
    #menu-icon{
        cursor: pointer;
        display: none;
    }
    .fa{
        color: var(--text);
    }
    svg{
        width: 2rem;
        fill: var(--text);
    }
    .container .icons a{
        margin: auto 0.5rem;
    }
    .divider{
        border-bottom: 1px solid var(--divider);
    }
    .navbar{
        border-bottom: 1px solid var(--divider);
    }
    .container{
        display: flex;
        margin: 0 auto;
        max-width: var(--screen-max-width);
        justify-content: space-between;
    }
    .container span a{
        display: flex;
        margin: auto 0;
    }
    .container span{
        display: flex;
        margin: auto 1rem;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }
    input{
        display: block;
        width: 250px;
        margin: 20px auto;
        padding: 0.5rem 2rem 0.5rem 2.5rem;
        background: #fff;
        background-size: 1rem 1rem;
        font-size: 1rem;
        color: var(--text);
        font-family: 'Roboto', sans-serif;
        border: none;
        border-radius: 20px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        transition: all .2s ease-in;
    }
    input:hover{
        width: 15rem;
        border: 5x auto var(--text-black);
    }
    .dropdown-menu{
        position: absolute;
        z-index: 3;
        visibility: hidden;
        opacity: 0;
        justify-content: right;
        background: var(--card-bg);
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        padding: 0.5rem;
        transition: all .2s ease-in;
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
        padding-left: 0.5rem;
        justify-content: left;
        font-size: 1rem;
        display: flex;
        justify-content: left;
        pointer-events: auto;
        transition: all .2s ease-in-out;
    }
    .menu-link{
        border: 0;
        border-radius: 3px;
        font: 0.9rem;
        background-color: var(--card-bg); 
        transition: all .2s ease-in-out;
    }
    .link{
        padding: 0.5rem  1rem 0.5rem 1rem;
        font-size: 1rem;
        color: rgba(33,53,71, .7);
        font-weight: 500;
        border-radius: 5px;
        transition: background-color .2s ease-in;
    }
    .link:hover{
        background-color: var(--nav-bg-a);
        color: #fff;
    }
    .menu-link:hover{
        background-color: var(--nav-bg-a); 
        color: var(--link-highlight);
    }
    .head-link{
        font-size: 1rem;
        padding: 0.5rem;
        font-weight: 600;
        border-radius: 3px;
        color: var(--htext);
        justify-content: left;
        transition: all .2s ease-in-out;
    }
    .head-link:hover{
        background-color: var(--nav-bg-a);
        color: var(--link-highlight);
    }
    .vertical-line{
        height: 2rem;
        border-left: 1px solid var(--divider);

    }
    @media screen and (max-width: 1080px){
        #menu-icon{
            display: block;
        }
        #nav{
            display: none;
        }
    }
    @media screen and (max-width: 420px){
        .logo{
            max-width: 100%;
            max-height: 100%;
        }
        #menu-icon{
            margin: auto 0;
        }
        input{
            width: 100px;
        }
        input:hover{
            width: 100px;
        }
    }


</style>

