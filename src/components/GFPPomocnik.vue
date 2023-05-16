<script>

export default{
    data() {
        return {
            isShown: false,
            close: false,
            selected: false,
            pitanje1: false,
            pitanje2: false,
            content: ''
        }
    },
    methods: {
        changeLook(){
            this.isShown = true;
        },
        closeCont(){
            this.close = true;
        },
        checkSelected(id){
            let element = document.getElementById(id);
            if(element.id == "pitanje1"){
                this.selected = true; 
                this.pitanje1 = true;
                this.pitanje2 = false;
            }
            if(element.id == "pitanje2"){
                this.selected = true;
                this.pitanje2 = true;
                this.pitanje1 = false;
            }
            
        },
        sendEmail(){
            if(this.content != ''){
                let form = {
                    message: this.content,
                }
                // console.log(form.message);
                // emailjs.send('service_4tjxmau', 'template_hhmiavv', form)
                // .then(res => {
                //         console.log(res);
                // })
                document.getElementById('chat').innerHTML += `<div class='myMsg'><p>${this.content}</p></div>`
            }
            this.content = '';
        }

    },
}

</script>

<template>
    <div v-if="!close" id="helpContainer">
        <div v-if="!isShown" class="cont">
            <div @click="closeCont" class="close">x</div>
            <div class="help">
                <p>Dobrodošli na GFP!</p>
            </div>
            <div class="help">
                <p>Kako vam možemo pomoći.</p>
            </div>
            <div @click="changeLook" id="asistent" class="pomocnik">
                <div class="svg">
                    <img src="../assets/svgs/speechBubble.svg" alt="">
                </div>
            </div>
        </div>
        <div v-if="isShown" class="messageArea">
            <div class="top">
                <div class="logoTop">
                    <div>
                        <div class="pomocnik-small">
                            <img src="../assets/svgs/speechBubble.svg" alt="">
                        </div>
                        <p>GFP Asistent</p>
                    </div>
                    <div>
                        <div @click="closeCont" class="close-small">x</div>
                    </div>
                </div> 
                <div class="name">
                    <h3>GFP Asistent</h3>
                </div>
                <div class="opis">
                    <p>Da li vam je potrebna pomoć?</p>
                    <p>Odaberite neku od ponudjenih stavki koja najbolje opisuje vaš problem.</p>
                </div>
            </div>
            <div class="bottom">
                <div v-if="!selected" class="pitanja">
                    <div @click="checkSelected('pitanje1')" id="pitanje1" class="question">
                        <p>Želim da stupim u kontak sa vama</p>
                    </div>
                    <div class="divider"></div>
                    <div @click="checkSelected('pitanje2')" id="pitanje2" class="question">
                        <p>Ne mogu da nadjem mašinu/opremu</p>
                    </div>
                    <div class="divider"></div>
                    <div @click="checkSelected('pitanje3')" id="pitanje3" class="question">
                        <p>Pitanje 3</p>
                    </div>
                    <div class="divider"></div>
                    <div @click="checkSelected('pitanje4')" id="pitanje4" class="question">
                        <p>Pitanje 4</p>
                    </div>
                    <div class="divider"></div>
                    <div @click="checkSelected('pitanje5')" id="pitanje5" class="question">
                        <p>Pitanje 5</p>
                    </div>
                </div>
                <div v-if="selected" class="chat">
                    <div class="overflow">
                        <div class="mesidz">
                            <div class="pomocnik-small">
                                <img src="../assets/svgs/speechBubble.svg" alt="">
                            </div>
                            <div id="chat" class="msgContainer">
                                <div class="msg">
                                    <p v-if="pitanje1">Ostavite vaše ime i odakle ste i ostavite vaš broj telefona ili email da bi mogli da vam odgovorimo.</p> 
                                    <p v-if="pitanje2">Sve naše mašine i opremu možete pronaći <a href="/products?qr=">ovde</a>!</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <input type="text" v-on:keyup.enter="sendEmail" name="sendEmailMessage" v-model="content" id="message">
                        <span @click="sendEmail" class="send">
                            <img src="../assets/svgs/arrowMsg.svg" alt="">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

@keyframes scrollDown {
    from{
        opacity: 1;
    }
    
    to{
       opacity: 0; 
    }

}

.overflow{
    max-height: 360px;
    overflow-y: auto;
}

.mesidz{
    display: flex;
}
input{
    width: 100%;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding-left: 1rem;
    height: 32px;
    /*margin-top: 1rem;*/
}
.flex{
    display: flex;
    /*margin-top: 1rem;*/
    align-items: center;
}
.send{
    width: 2rem;
    height: 2rem;
    cursor: pointer;
}
a{
    font-weight: 500;
    font-size: 1rem;
    color: rgb(15, 70, 150);
}
.send img{
    width: 2rem;
}
.msgContainer{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.msg{
    text-align: left;
    margin-left: .5rem;
    /*width: 80%;*/
    padding: 1rem;
    background-color: #F4F5F7;
    border-radius: 20px;
    overflow-wrap: break-word;
    margin-bottom: .8rem;
}
.msg p{
    font-size: 16px;
    margin: 0;
}
.pitanja{
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}
.question{
    cursor: pointer;
    padding: .25rem;
    margin: .25rem;
}
.question:hover{
    background-color: var(--bg);   
}
.question p{
    margin: 0;
}
.divider{
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: .5rem;
    margin-right: .5rem;
}
.pomocnik-small{
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    color: #fff;
    background-color: var(--orange);
}

.name h3{
    font-size: 32px;
    margin-bottom: .5rem;
}
.opis{
    text-align: center;
}
.opis p{
    font-size: 16px;
    opacity: .8;
    margin: 0 auto;
}
.pomocnik-small img{
    width: 1.5rem;
    height: 1.5rem;
}
.logoTop div > *{
    margin-right: .5rem;
    margin-left: .5rem;

}
.logoTop{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.logoTop div{
    display: flex;
    align-items: center;
    flex-direction: row;
}
.logoTop p{
    margin: 0;
    font-size: 16px;
}

.messageArea{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30rem;
    padding: .75rem;
    height: 39.375rem;
    background-color: #fff;
    border-radius: 20px;
}
.close-small{
    width: 16px;
    height: 16px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    padding: .8rem;
    color: rgba(0, 0, 0, .5);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
}
.close{
    width: 20px;
    height: 20px;
    display: flex;
    cursor: pointer;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: rgba(0, 0, 0, .5);
    background-color: #D9D9D9;
    border-radius: 50%;
}
.cont{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: right;
}
.pomocnik{
    display: flex;
    cursor: pointer;
    justify-content: right;
    max-width: 12.5rem;
    max-height: 12.5rem;
    border-radius: 50%;
    color: #fff;
    background-color: var(--orange);
}
.help{
    border-radius: 30px;        
    display: flex;
    margin: .5rem;
    justify-content: center;
    min-height: 50px;
    min-width: 250px;
    background-color: #fff;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
}
.help p{
    margin: auto 0;
}
.svg{
    padding: 1.5rem;
}

@media screen and (max-width: 500px){
   .messageArea{
        width: 50%;
   } 
   .pomocnik{
        max-width: 4rem;
        max-height: 4rem;
   }
   .svg{
        padding: 1rem;
   }
   .pomocnik img{
        width: 2rem;
   }
   .help{
       display: none;
   }
}

</style>


